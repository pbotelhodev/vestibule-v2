/*
  Warnings:

  - You are about to drop the column `activePlan` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "activePlan",
ADD COLUMN     "active_plan" "UserPlan" NOT NULL DEFAULT 'FREE';
