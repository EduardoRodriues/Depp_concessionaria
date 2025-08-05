import * as veiculoService from "../services/veiculosService";
import { Request, Response } from "express";

export async function listarVeiculos(req: Request, res: Response) {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const lista = await veiculoService.buscarVeiculosPaginado(page, limit);

  res.status(200).json({ lista });
}

export async function cadastrarVeiculos(req: Request, res: Response) {
  const data = req.body;

  const veiculoCadastrado = await veiculoService.cadastroVeiculos(data);

  res
    .status(201)
    .json({ message: "Veículo cadastrado com sucesso!", veiculoCadastrado });
}

export async function buscarVeiculo(req: Request, res: Response) {
  const id = req.params.id;

  const veiculo = await veiculoService.buscarPorId(id);

  res.status(200).json({ message: "Veículo encontrado com sucesso!", veiculo });
}

export async function editarVeiculos(req: Request, res: Response) {
  const id = req.params.id;
  const data = req.body;

  const veiculoEditado = await veiculoService.updateVeiculos(id, data);

  res
    .status(200)
    .json({ message: "Veículo editado com sucesso!", veiculoEditado });
}

export async function deletarVeiculo(req: Request, res: Response) {
  const id = req.params.id;

  await veiculoService.removerVeiculo(id);

  res.status(200).json({ message: "Veículo removido com sucesso!" });
}
