-- CreateTable
CREATE TABLE "questions" (
    "id" TEXT NOT NULL,
    "simulation_id" TEXT NOT NULL,
    "statement" TEXT NOT NULL,
    "image_url" TEXT,
    "image_alt" TEXT,
    "image_caption" TEXT,
    "subject" "SimulationSubject" NOT NULL,
    "topic" TEXT,
    "order" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_simulation_id_fkey" FOREIGN KEY ("simulation_id") REFERENCES "simulations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
