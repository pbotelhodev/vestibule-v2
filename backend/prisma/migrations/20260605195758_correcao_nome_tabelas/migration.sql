/*
  Warnings:

  - You are about to drop the column `create_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `passoword_hash` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `users` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "create_at",
DROP COLUMN "passoword_hash",
DROP COLUMN "update_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "password_hash" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
