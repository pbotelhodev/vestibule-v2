const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    /* Se não existir req.user, significa que o usuário não foi autenticado antes */
    if (!req.user) {
      return res.status(401).json({
        message: "Usuário não autenticado",
      });
    }

    /* Verifica se a role do usuário está dentro da lista de roles permitidas */
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Acesso negado",
      });
    }

    /* Se a role for permitida, deixa a requisição seguir para o controller */
    return next();
  };
};

module.exports = roleMiddleware;
