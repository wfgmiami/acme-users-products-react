const conn = require('./conn');

const User = conn.define('user',
  { name: conn.Sequelize.STRING }
)

module.exports = User;
