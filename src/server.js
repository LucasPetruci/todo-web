const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.post("/auth/login", (req, res) => {
  // Lógica de autenticação
  res.json({ message: "Login bem-sucedido" });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
