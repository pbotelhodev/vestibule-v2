-- CreateTable
CREATE TABLE "student_simulation_results" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "simulation_id" TEXT NOT NULL,
    "public_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subject" "SimulationSubject" NOT NULL,
    "total_questions" INTEGER NOT NULL,
    "correct_answers" INTEGER NOT NULL,
    "wrong_answers" INTEGER NOT NULL,
    "percentage" DOUBLE PRECISION NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "time_per_question" INTEGER,
    "time_spent_seconds" INTEGER NOT NULL,
    "total_simulation_seconds" INTEGER NOT NULL,
    "finished_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "student_simulation_results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_simulation_answers" (
    "id" TEXT NOT NULL,
    "result_id" TEXT NOT NULL,
    "question_id" TEXT,
    "selected_alternative_id" TEXT,
    "correct_alternative_id" TEXT,
    "question_order" INTEGER NOT NULL,
    "subject" "SimulationSubject" NOT NULL,
    "topic" TEXT,
    "statement" TEXT NOT NULL,
    "student_answer_text" TEXT,
    "correct_answer_text" TEXT,
    "student_answer_order" INTEGER,
    "correct_answer_order" INTEGER,
    "is_correct" BOOLEAN NOT NULL DEFAULT false,
    "marked_for_review" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "student_simulation_answers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "student_simulation_results_student_id_idx" ON "student_simulation_results"("student_id");

-- CreateIndex
CREATE INDEX "student_simulation_results_simulation_id_idx" ON "student_simulation_results"("simulation_id");

-- CreateIndex
CREATE INDEX "student_simulation_results_public_id_idx" ON "student_simulation_results"("public_id");

-- CreateIndex
CREATE UNIQUE INDEX "student_simulation_result_unique" ON "student_simulation_results"("student_id", "simulation_id");

-- CreateIndex
CREATE INDEX "student_simulation_answers_result_id_idx" ON "student_simulation_answers"("result_id");

-- CreateIndex
CREATE INDEX "student_simulation_answers_question_id_idx" ON "student_simulation_answers"("question_id");

-- CreateIndex
CREATE INDEX "student_simulation_answers_selected_alternative_id_idx" ON "student_simulation_answers"("selected_alternative_id");

-- CreateIndex
CREATE INDEX "student_simulation_answers_correct_alternative_id_idx" ON "student_simulation_answers"("correct_alternative_id");

-- AddForeignKey
ALTER TABLE "student_simulation_results" ADD CONSTRAINT "student_simulation_results_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_simulation_results" ADD CONSTRAINT "student_simulation_results_simulation_id_fkey" FOREIGN KEY ("simulation_id") REFERENCES "simulations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_simulation_answers" ADD CONSTRAINT "student_simulation_answers_result_id_fkey" FOREIGN KEY ("result_id") REFERENCES "student_simulation_results"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_simulation_answers" ADD CONSTRAINT "student_simulation_answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_simulation_answers" ADD CONSTRAINT "student_simulation_answers_selected_alternative_id_fkey" FOREIGN KEY ("selected_alternative_id") REFERENCES "alternatives"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_simulation_answers" ADD CONSTRAINT "student_simulation_answers_correct_alternative_id_fkey" FOREIGN KEY ("correct_alternative_id") REFERENCES "alternatives"("id") ON DELETE SET NULL ON UPDATE CASCADE;
