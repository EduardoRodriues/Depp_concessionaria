import express from "express";
import cors from "cors";
import VeiculosRoute from "./web/routes/veiculosRoute";

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());
app.use("/veiculos", VeiculosRoute);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
