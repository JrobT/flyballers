/*
  Warnings:

  - Added the required column `addressId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entryFee` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openDate` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surfaceId` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Contact_email_key";

-- DropIndex
DROP INDEX "User_clubId_key";

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "addressId" INTEGER NOT NULL,
ADD COLUMN     "closeDate" TIMESTAMP(3),
ADD COLUMN     "entryFee" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "notes" VARCHAR(255) NOT NULL,
ADD COLUMN     "openDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "surfaceId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "postalCode" VARCHAR(255) NOT NULL,
    "street" VARCHAR(255) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coordinate" (
    "id" SERIAL NOT NULL,
    "addressId" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Coordinate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Surface" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Surface_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Address_postalCode_idx" ON "Address"("postalCode");

-- CreateIndex
CREATE UNIQUE INDEX "Coordinate_addressId_key" ON "Coordinate"("addressId");

-- CreateIndex
CREATE INDEX "Coordinate_addressId_idx" ON "Coordinate"("addressId");

-- CreateIndex
CREATE INDEX "Contact_email_idx" ON "Contact"("email");

-- CreateIndex
CREATE INDEX "Event_addressId_idx" ON "Event"("addressId");

-- CreateIndex
CREATE INDEX "User_clubId_idx" ON "User"("clubId");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_surfaceId_fkey" FOREIGN KEY ("surfaceId") REFERENCES "Surface"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coordinate" ADD CONSTRAINT "Coordinate_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
