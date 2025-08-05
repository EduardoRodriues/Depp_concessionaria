import { Veiculo } from "../../core/generated/prisma";
import { VeiculosDTO } from "../dtos/veiculosDTO";
import { VeiculosResponseDTO } from "../dtos/veiculosResponseDTO";

export function toForm(veiculos: Veiculo): VeiculosResponseDTO {
  return {
    id: veiculos.id,
    fabricante: veiculos.fabricante,
    modelo: veiculos.modelo,
    ano: veiculos.ano,
    chassi: veiculos.chassi,
    placa: veiculos.placa,
    cor: veiculos.cor,
    quilometragem: veiculos.quilometragem,
    tipoCombustivel: veiculos.tipoCombustivel,
    cambio: veiculos.cambio,
    motor: veiculos.motor,
  };
}

export function toModel(veiculosDTO: VeiculosDTO): Partial<Veiculo> {
  return {
    fabricante: veiculosDTO.fabricante,
    modelo: veiculosDTO.modelo,
    ano: veiculosDTO.ano,
    chassi: veiculosDTO.chassi,
    placa: veiculosDTO.placa,
    cor: veiculosDTO.cor,
    quilometragem: veiculosDTO.quilometragem,
    tipoCombustivel: veiculosDTO.tipoCombustivel,
    cambio: veiculosDTO.cambio,
    motor: veiculosDTO.motor,
  };
}
