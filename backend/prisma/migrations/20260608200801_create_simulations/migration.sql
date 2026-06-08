-- CreateEnum
CREATE TYPE "SimulationSubject" AS ENUM ('MATEMATICA', 'LINGUAS', 'PORTUGUES', 'LITERATURA', 'INGLES', 'ESPANHOL', 'ARTES', 'HISTORIA', 'GEOGRAFIA', 'BIOLOGIA', 'FISICA', 'QUIMICA', 'CIENCIAS_HUMANAS', 'CIENCIAS_NATUREZA', 'GERAL');

-- CreateEnum
CREATE TYPE "RequiredPlan" AS ENUM ('FREE', 'PRO', 'PREMIUM');

-- CreateTable
CREATE TABLE "Simulations" (
    "id" TEXT NOT NULL,
    "publicId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "subject" "SimulationSubject" NOT NULL,
    "originCode" TEXT NOT NULL DEFAULT 'vest',
    "requiredPlan" "RequiredPlan" NOT NULL DEFAULT 'FREE',
    "timePerQuestion" INTEGER NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Simulations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Simulations_publicId_key" ON "Simulations"("publicId");
