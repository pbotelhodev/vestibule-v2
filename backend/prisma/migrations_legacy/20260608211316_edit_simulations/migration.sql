/*
  Warnings:

  - You are about to drop the `Simulations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Simulations";

-- CreateTable
CREATE TABLE "simulations" (
    "id" TEXT NOT NULL,
    "public_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "subject" "SimulationSubject" NOT NULL,
    "origin_code" TEXT NOT NULL DEFAULT 'vest',
    "required_plan" "RequiredPlan" NOT NULL DEFAULT 'FREE',
    "time_per_question" INTEGER NOT NULL,
    "is_published" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "simulations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "simulations_public_id_key" ON "simulations"("public_id");
