const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  /* Pega o header Authorization enviado na requisição */
  const authHeader = req.headers.authorization;

  /* Se não tiver Authorization, significa que nenhum token foi enviado */
  if (!authHeader) {
    return res.status(401).json({
      message: "Token não informado",
    });
  }

  /* Divide o conteúdo do Authorization em partes.
    Exemplo: "Bearer abc123" vira ["Bearer", "abc123"]*/
  const parts = authHeader.split(" ");

  /* Se não tiver exatamente 2 partes, o formato do token está errado. O esperado é sempre: Bearer token*/
  if (parts.length !== 2) {
    return res.status(401).json({
      message: "Token inválido",
    });
  }

  /* Separa as duas partes: scheme = "Bearer" e token = "abc123" */
  const [scheme, token] = parts;

  /* Confere se a primeira parte é Bearer. Isso garante que o token veio no padrão correto.*/
  if (scheme !== "Bearer") {
    return res.status(401).json({
      message: "Token inválido",
    });
  }

  try {
    /* Valida o token usando a mesma chave secreta que assinou ele no login. */
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    /* Salva os dados do usuário logado dentro da requisição. */
    req.user = decoded;

    /* Libera a requisição para seguir para o próximo passo, normalmente o controller. */
    return next();
  } catch (error) { /* Error */
    return res.status(401).json({
      message: "Token inválido ou expirado",
    });
  }
};

module.exports = authMiddleware;
