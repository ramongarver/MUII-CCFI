/*
  Warnings:

  - A unique constraint covering the columns `[userId,listType,contentId]` on the table `ListElement` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ListElement_userId_listType_contentId_key" ON "ListElement"("userId", "listType", "contentId");
