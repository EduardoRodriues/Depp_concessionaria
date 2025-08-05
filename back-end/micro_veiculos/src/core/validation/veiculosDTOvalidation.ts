import z from "zod";

const veiculosDTOvalidation = z.object({
  ano: z
    .string()
    .regex(
      /^\d{8}$/,
      "O campo deve ser preenchid com exatamente 8 caracteres!"
    ),
  chassi: z
    .string()
    .regex(
      /^\d{17}$/,
      "O campo deve ser preenchid com exatamente 17 caracteres!"
    ),
  placa: z
    .string()
    .regex(
      /^\d{7}$/,
      "O campo deve ser preenchid com exatamente 7 caracteres!"
    ),
});

export type VeiculosValidatedDTO = z.infer<typeof veiculosDTOvalidation>;
