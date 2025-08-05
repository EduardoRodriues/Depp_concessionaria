import { Veiculo } from "../../core/generated/prisma";
import { VeiculosResponseDTO } from "../dtos/veiculosResponseDTO";
import { prisma } from "../libs/prisma";
import { toForm } from "../mapping/IveiculosMapper";
import { VeiculosDTO } from "../dtos/veiculosDTO";

export async function buscarVeiculosPaginado(page: number, limit: number) {
  const skip = (page - 1) * limit;

  const [total, veiculos] = await Promise.all([
    prisma.veiculo.count(),
    prisma.veiculo.findMany({
      skip,
      take: limit,
      orderBy: [{ criadoEm: "asc" }, { id: "asc" }],
    }),
  ]);

  const data = await Promise.all(veiculos.map(toForm));

  return {
    data,
    paginaAtual: page,
    totalPaginas: Math.ceil(total / limit),
    totalItens: total,
  };
}

export async function cadastroVeiculos(
  data: Veiculo
): Promise<VeiculosResponseDTO> {
  const veiculoCadastrado = await prisma.veiculo.create({
    data: data,
  });

  return toForm(veiculoCadastrado);
}

export async function buscarPorId(id: string) {
  const veiculo = await prisma.veiculo.findUnique({
    where: { id: id },
  });

  if (!veiculo) {
    throw new Error("O veículo não foi encontrado!");
  }

  return veiculo;
}

export async function updateVeiculos(
  id: string,
  data: VeiculosDTO
): Promise<VeiculosDTO> {
  await buscarPorId(id);

  const veiculoEditado = await prisma.veiculo.update({
    where: { id: id },
    data: {
      fabricante: data.fabricante,
      modelo: data.modelo,
      ano: data.ano,
      chassi: data.chassi,
      placa: data.placa,
      cor: data.cor,
      quilometragem: data.quilometragem,
      tipoCombustivel: data.tipoCombustivel,
      cambio: data.cambio,
      motor: data.motor,
    },
  });

  return toForm(veiculoEditado);
}

export async function removerVeiculo(id: string) {
  await buscarPorId(id);

  return await prisma.veiculo.delete({
    where: { id: id },
  });
}
