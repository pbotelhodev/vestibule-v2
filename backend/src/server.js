require("dotenv").config();
const app = require("./app"); //Export o arquivo app


const PORT = process.env.PORT || 3333; //Define a porta a ser utilizada

app.listen(PORT, () => {
  //Printa caso o server estaja rodando e sua porta
  console.log(`[backend] running on http://localhost:${PORT}`);
});
