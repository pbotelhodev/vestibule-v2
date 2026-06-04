const { nanoid } = require("nanoid");

function generateId(size = 21) {
  return nanoid(size);
}

module.exports = {
  generateId,
};
