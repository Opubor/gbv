-- AlterTable
ALTER TABLE `perpetrator` ADD COLUMN `aka` VARCHAR(191) NULL DEFAULT '---',
    ADD COLUMN `fullName` VARCHAR(191) NOT NULL DEFAULT '---';
