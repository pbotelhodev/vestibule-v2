const bcrypt = require("bcrypt");
const db = require("../db/prisma");
const jwt = require("jsonwebtoken");

/* Valida formato de e-mail */
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/* Valida força da senha: mínimo 8 chars, pelo menos 1 letra e 1 número */
const isValidPassword = (password) => {
  return (
    password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password)
  );
};

const registerStudent = async (data) => {
  const { name, email, password } = data;

  if (!name || name.trim().length < 2) {
    throw new Error(
      "Nome do aluno é obrigatório e deve ter ao menos 2 caracteres",
    );
  }

  if (!email) {
    throw new Error("E-mail do aluno é obrigatório");
  }

  if (!isValidEmail(email)) {
    throw new Error("E-mail inválido");
  }

  if (!password) {
    throw new Error("Senha do aluno é obrigatória");
  }

  if (!isValidPassword(password)) {
    throw new Error(
      "A senha deve ter ao menos 8 caracteres, incluindo letras e números",
    );
  }

  const studentExist = await db.user.findUnique({ where: { email } });

  if (studentExist) {
    throw new Error("Este e-mail já está cadastrado");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const student = await db.user.create({
    data: {
      name: name.trim(),
      email: email.toLowerCase().trim(),
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

  if (!email) {
    throw new Error("E-mail é obrigatório");
  }

  if (!password) {
    throw new Error("Senha é obrigatória");
  }

  const student = await db.user.findUnique({
    where: { email: email.toLowerCase().trim() },
  });

  if (!student) {
    throw new Error("Credenciais inválidas");
  }

  if (!student.passwordHash) {
    throw new Error("Credenciais inválidas");
  }

  const passwordIsValid = await bcrypt.compare(password, student.passwordHash);

  if (!passwordIsValid) {
    throw new Error("Credenciais inválidas");
  }

  if (student.status !== "ACTIVE") {
    throw new Error("Conta inativa");
  }

  const token = jwt.sign(
    { id: student.id, role: student.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN },
  );

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
  const user = await db.user.findUnique({ where: { id: userId } });

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  if (user.status !== "ACTIVE") {
    throw new Error("Conta inativa");
  }

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

module.exports = { registerStudent, loginStudent, getMe };
