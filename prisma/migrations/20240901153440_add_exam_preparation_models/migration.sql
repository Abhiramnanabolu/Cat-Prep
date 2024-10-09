/*
  Warnings:

  - You are about to drop the `MockTestQuestion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MockTestQuestion" DROP CONSTRAINT "MockTestQuestion_mockTestId_fkey";

-- DropForeignKey
ALTER TABLE "MockTestQuestion" DROP CONSTRAINT "MockTestQuestion_questionId_fkey";

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "mockTestId" TEXT;

-- DropTable
DROP TABLE "MockTestQuestion";

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_mockTestId_fkey" FOREIGN KEY ("mockTestId") REFERENCES "MockTest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
