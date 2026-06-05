const db = require("./prisma");

async function testConnection() {
  try {
    const totalUsers = await db.user.count();
    console.log(`Conexão feita: total de usuários ${totalUsers}`);
  } catch {
    console.log(`Conexão mal-sucedida`);
  } finally {
    db.$disconnect();
  }
}

testConnection();
