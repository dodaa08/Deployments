/*
  Warnings:

  - The `id` column on the `Urls` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Urls" DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "shortUrl" DROP NOT NULL,
ADD CONSTRAINT "Urls_pkey" PRIMARY KEY ("id");
