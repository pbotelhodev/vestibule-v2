/*
  Warnings:

  - You are about to drop the column `authProvider` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `avatarUrl` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerifiedAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `googleId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `institutionCode` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastLoginAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `passwordHash` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `studentType` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[google_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `update_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_googleId_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "authProvider",
DROP COLUMN "avatarUrl",
DROP COLUMN "createdAt",
DROP COLUMN "emailVerifiedAt",
DROP COLUMN "googleId",
DROP COLUMN "institutionCode",
DROP COLUMN "lastLoginAt",
DROP COLUMN "passwordHash",
DROP COLUMN "studentType",
DROP COLUMN "updatedAt",
ADD COLUMN     "auth_provider" "AuthProvider" NOT NULL DEFAULT 'LOCAL',
ADD COLUMN     "avatar_url" TEXT,
ADD COLUMN     "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email_verified_at" TIMESTAMP(3),
ADD COLUMN     "google_id" TEXT,
ADD COLUMN     "institution_code" TEXT,
ADD COLUMN     "last_login_at" TIMESTAMP(3),
ADD COLUMN     "passoword_hash" TEXT,
ADD COLUMN     "student_type" "StudentType" NOT NULL DEFAULT 'INDIVIDUAL',
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_google_id_key" ON "users"("google_id");
