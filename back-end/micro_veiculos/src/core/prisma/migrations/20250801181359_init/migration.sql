-- CreateTable
CREATE TABLE "public"."Veiculo" (
    "id" TEXT NOT NULL,
    "fabricante" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "chassi" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "quilometragem" INTEGER NOT NULL,
    "tipoCombustivel" TEXT NOT NULL,
    "cambio" TEXT NOT NULL,
    "motor" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Veiculo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Veiculo_chassi_key" ON "public"."Veiculo"("chassi");
