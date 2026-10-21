-- CreateEnum
CREATE TYPE "Plan" AS ENUM ('FREE', 'PRO', 'PREMIUM');

-- CreateEnum
CREATE TYPE "Subject" AS ENUM ('GERAL', 'MATEMATICA', 'PORTUGUES', 'FISICA', 'QUIMICA', 'BIOLOGIA', 'FILOSOFIA', 'SOCIOLOGIA', 'TECNOLOGIA', 'INGLES', 'ESPANHOL', 'HISTORIA', 'GEOGRAFIA');

-- CreateTable
CREATE TABLE "Simulation" (
    "id" TEXT NOT NULL,
    "publicId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "durationMinutes" INTEGER NOT NULL,
    "requiredPlan" "Plan" NOT NULL DEFAULT 'FREE',
    "subject" "Subject" NOT NULL DEFAULT 'GERAL',

    CONSTRAINT "Simulation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Simulation_publicId_key" ON "Simulation"("publicId");
