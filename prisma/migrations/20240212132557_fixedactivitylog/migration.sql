/*
  Warnings:

  - Added the required column `activityHeader` to the `ActivityLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `activitylog` ADD COLUMN `activityHeader` VARCHAR(191) NOT NULL;
