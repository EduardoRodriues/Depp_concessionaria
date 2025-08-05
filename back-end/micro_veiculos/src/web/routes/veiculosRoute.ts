import { Router } from "express";
import * as veiculosController from "../controllers/veiculosController";

const veiculosRoute = Router();

veiculosRoute.get("/", veiculosController.listarVeiculos);
veiculosRoute.get("/:id", veiculosController.buscarVeiculo);
veiculosRoute.post("/", veiculosController.cadastrarVeiculos);
veiculosRoute.put("/:id", veiculosController.editarVeiculos);
veiculosRoute.delete("/:id", veiculosController.deletarVeiculo);

export default veiculosRoute;
