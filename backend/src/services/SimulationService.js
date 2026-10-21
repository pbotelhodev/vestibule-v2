const db = require(`../db/prisma`);

const findSimulations = async () => {
  const foundSimulations = await db.simulation.findMany({
    where: {
      published: true,
    },
  });

  return foundSimulations;
};

module.exports = { findSimulations };
