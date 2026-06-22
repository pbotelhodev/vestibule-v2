-- CreateEnum
CREATE TYPE "UserPlan" AS ENUM ('FREE', 'PRO', 'PREMIUM');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'MODERATE', 'DIFFICULT', 'EXPERT');

-- AlterTable
ALTER TABLE "simulations" ADD COLUMN     "difficulty" "Difficulty" NOT NULL DEFAULT 'EASY';

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "activePlan" "UserPlan" NOT NULL DEFAULT 'FREE';
