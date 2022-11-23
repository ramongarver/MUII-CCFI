/*
  Warnings:

  - You are about to drop the column `punctuation` on the `Content` table. All the data in the column will be lost.
  - Added the required column `rating` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Content" DROP COLUMN "punctuation",
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL;
