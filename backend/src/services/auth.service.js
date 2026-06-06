/* importa bcrypt */
const bcrypt = require("bcrypt");
/* Importa o banco de dados */
const db = require("../db/prisma");
/* Importa o JWT */
const jwt = require("jsonwebtoken");

/* Função que cadastra o aluno */

const registerStudent = async (data) => {
  /* Desestrutura os dados recebidos */
  const { name, email, password } = data;

  /* regras de negócio */
  if (!name) {
    throw new Error("Nome do aluno é obrigatório");
  }

  if (!email) {
    throw new Error("E-mail do aluno é obrigatório");
  }

  if (!password) {
    throw new Error("Senha do aluno é obrigatória");
  }

  /* verifica se o aluno ja existe */
  const studentExist = await db.user.findUnique({
    where: {
      email,
    },
  });
  /* Se existente, retorna erro */

  if (studentExist) {
    throw new Error("Este e-mail já está cadastrado");
  }
  /* Coloca criptografia na senha */
  const passwordHash = await bcrypt.hash(password, 10);

  /* Cadastra o aluno no banco de dados */

  const student = await db.user.create({
    data: {
      name,
      email,
      passwordHash,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      studentType: true,
      createdAt: true,
    },
  });
  return student;
};

const loginStudent = async (data) => {
  const { email, password } = data;

  /* Regras de negócio */
  if (!email) {
    throw new Error("E-mail é obrigatório");
  }

  if (!password) {
    throw new Error("Senha é obrigatória");
  }

  /* Busca o estudante pelo e-mail */
  const student = await db.user.findUnique({
    where: {
      email,
    },
  });

  /* Não informa se o e-mail existe ou não por segurança */
  if (!student) {
    throw new Error("Credenciais inválidas");
  }

  /* Garante que esse usuário tem senha local cadastrada */
  if (!student.passwordHash) {
    throw new Error("Credenciais inválidas");
  }

  /* Compara a senha digitada com o hash salvo no banco */
  const passwordIsValid = await bcrypt.compare(password, student.passwordHash);

  if (!passwordIsValid) {
    throw new Error("Credenciais inválidas");
  }

  /* Verifica se a conta está ativa */
  if (student.status !== "ACTIVE") {
    throw new Error("Conta inativa");
  }
  /* gera o token */
  const token = jwt.sign(
    {
      id: student.id,
      role: student.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
  );

  /* Retorna apenas os dados seguros */
  return {
    student: {
      id: student.id,
      name: student.name,
      email: student.email,
      role: student.role,
      status: student.status,
      studentType: student.studentType,
    },
    token,
  };
};

const getMe = async (userId) => {
  /* Busca o usuário logado pelo id que veio do token */
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  /* Se o token for válido, mas o usuário não existir mais no banco */
  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  /* Mesmo com token válido, só deixa seguir se a conta estiver ativa */
  if (user.status !== "ACTIVE") {
    throw new Error("Conta inativa");
  }

  /* Retorna apenas dados seguros para o frontend */
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
    studentType: user.studentType,
    avatarUrl: user.avatarUrl,
  };
};

module.exports = {
  registerStudent,
  loginStudent,
  getMe,
};
