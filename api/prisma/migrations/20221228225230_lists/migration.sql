/*
  Warnings:

  - Changed the type of `type` on the `Content` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ContentTypes" AS ENUM ('MOVIE', 'SERIES');

-- CreateEnum
CREATE TYPE "ListTypes" AS ENUM ('WATCHLIST', 'IN_PROGRESS', 'COMPLETED', 'FAVORITES');

-- AlterTable
ALTER TABLE "Content" DROP COLUMN "type",
ADD COLUMN     "type" "ContentTypes" NOT NULL;

-- DropEnum
DROP TYPE "Type";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListElement" (
    "id" SERIAL NOT NULL,
    "listType" "ListTypes" NOT NULL,
    "userId" INTEGER NOT NULL,
    "contentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ListElement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "ListElement" ADD CONSTRAINT "ListElement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListElement" ADD CONSTRAINT "ListElement_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
