/*
  Warnings:

  - You are about to drop the column `value` on the `Historic` table. All the data in the column will be lost.
  - Added the required column `total` to the `Historic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Historic" DROP COLUMN "value",
ADD COLUMN     "total" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT true;
