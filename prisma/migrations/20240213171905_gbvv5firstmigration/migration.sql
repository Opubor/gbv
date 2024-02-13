-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `branch` VARCHAR(191) NOT NULL,
    `resetPasswordToken` VARCHAR(191) NULL,
    `resetPasswordTokenExpiry` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_resetPasswordToken_key`(`resetPasswordToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Agency` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone1` VARCHAR(191) NOT NULL,
    `phone2` VARCHAR(191) NULL,
    `founded` VARCHAR(191) NULL,
    `city` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `about` VARCHAR(191) NULL,
    `branch` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Case` (
    `id` VARCHAR(191) NOT NULL,
    `caseId` VARCHAR(191) NOT NULL,
    `registeredBy` VARCHAR(191) NOT NULL,
    `registrationDate` VARCHAR(191) NOT NULL,
    `registrationTime` VARCHAR(191) NOT NULL,
    `incidentDate` VARCHAR(191) NOT NULL,
    `region` VARCHAR(191) NOT NULL,
    `tbid` VARCHAR(191) NULL,
    `serviceProviderId` VARCHAR(191) NULL,
    `serviceProviderReferralId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Victim` (
    `id` VARCHAR(191) NOT NULL,
    `caseId` VARCHAR(191) NOT NULL,
    `newClient` VARCHAR(191) NOT NULL,
    `residentialVillage` VARCHAR(191) NOT NULL,
    `secondVillage` VARCHAR(191) NOT NULL,
    `dob` VARCHAR(191) NOT NULL,
    `age` VARCHAR(191) NOT NULL,
    `sex` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `maritalStatus` VARCHAR(191) NOT NULL,
    `mainActivity` VARCHAR(191) NOT NULL,
    `religion` VARCHAR(191) NOT NULL,
    `disabled` VARCHAR(191) NOT NULL,
    `typeOfDisability` VARCHAR(191) NULL,
    `incidentVillage` VARCHAR(191) NOT NULL,
    `incidentLocation` VARCHAR(191) NOT NULL,
    `incidentTime` VARCHAR(191) NOT NULL,
    `violenceType` VARCHAR(191) NOT NULL,
    `causeOfViolence` VARCHAR(191) NOT NULL,
    `perpetratorSex` VARCHAR(191) NOT NULL,
    `perpetratorSurvivorRelationship` VARCHAR(191) NOT NULL,
    `immediateProtection` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL DEFAULT '---',
    `lastName` VARCHAR(191) NOT NULL DEFAULT '---',
    `attendingSchool` VARCHAR(191) NOT NULL DEFAULT '---',
    `nameOfSchool` VARCHAR(191) NULL DEFAULT '---',
    `gradeInSchool` VARCHAR(191) NULL DEFAULT '---',
    `typeOfCase` VARCHAR(191) NULL DEFAULT '---',
    `homeVisitDates` VARCHAR(191) NULL DEFAULT '---',
    `nameOfFather` VARCHAR(191) NULL DEFAULT '---',
    `nameOfMother` VARCHAR(191) NULL DEFAULT '---',
    `statusCase` VARCHAR(191) NOT NULL DEFAULT '---',
    `contactNumber` VARCHAR(191) NOT NULL DEFAULT '---',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Victim_caseId_idx`(`caseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Perpetrator` (
    `id` VARCHAR(191) NOT NULL,
    `caseId` VARCHAR(191) NOT NULL,
    `noOfPerpetrators` VARCHAR(191) NOT NULL,
    `contactWithPerpetrator` VARCHAR(191) NOT NULL,
    `residentialVillage` VARCHAR(191) NOT NULL,
    `secondVillage` VARCHAR(191) NOT NULL,
    `dob` VARCHAR(191) NOT NULL,
    `age` VARCHAR(191) NOT NULL,
    `sex` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `maritalStatus` VARCHAR(191) NOT NULL,
    `mainActivity` VARCHAR(191) NOT NULL,
    `religion` VARCHAR(191) NOT NULL,
    `disabled` VARCHAR(191) NOT NULL,
    `typeOfDisability` VARCHAR(191) NULL,
    `protectionOrder` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL DEFAULT '---',
    `aka` VARCHAR(191) NULL DEFAULT '---',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Perpetrator_caseId_idx`(`caseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GbvInformation` (
    `id` VARCHAR(191) NOT NULL,
    `caseId` VARCHAR(191) NOT NULL,
    `referredBy` VARCHAR(191) NOT NULL,
    `anyService` VARCHAR(191) NOT NULL,
    `medicalSupport` BOOLEAN NULL,
    `shelter` BOOLEAN NULL,
    `psychological` BOOLEAN NULL,
    `legalAssistance` BOOLEAN NULL,
    `securityProtection` BOOLEAN NULL,
    `vocTraining` BOOLEAN NULL,
    `infoLocal` BOOLEAN NULL,
    `emotionalSupport` BOOLEAN NULL,
    `otherSupport` VARCHAR(191) NULL,
    `redirected` VARCHAR(191) NOT NULL,
    `rsMedicalSupport` BOOLEAN NULL,
    `rsShelter` BOOLEAN NULL,
    `rsPsychological` BOOLEAN NULL,
    `rsLegalAssistance` BOOLEAN NULL,
    `rsSecurityProtection` BOOLEAN NULL,
    `rsVocTraining` BOOLEAN NULL,
    `rsInfoLocal` BOOLEAN NULL,
    `rsEmotionalSupport` BOOLEAN NULL,
    `rsOtherSupport` VARCHAR(191) NULL,
    `droppedOutVictim` VARCHAR(191) NOT NULL,
    `policeReport` VARCHAR(191) NOT NULL,
    `protectionOrder` VARCHAR(191) NOT NULL,
    `suicideAttempt` VARCHAR(191) NOT NULL,
    `suicideTime` VARCHAR(191) NULL,
    `suicideMethod` VARCHAR(191) NULL,
    `noOfAttempts` VARCHAR(191) NULL,
    `satisfiedService` VARCHAR(191) NOT NULL,
    `reasonNotSatisfied` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `GbvInformation_caseId_idx`(`caseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GetHelp` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `natureOfIncident` VARCHAR(191) NULL,
    `safetyConcerns` VARCHAR(191) NULL,
    `additionalDetails` VARCHAR(191) NULL,
    `emotionalSupport` BOOLEAN NULL,
    `infoLocal` BOOLEAN NULL,
    `legalAdvice` BOOLEAN NULL,
    `shelter` BOOLEAN NULL,
    `medicalSupport` BOOLEAN NULL,
    `otherSupport` VARCHAR(191) NULL,
    `immediateDanger` BOOLEAN NULL,
    `contactAgreement` BOOLEAN NULL,
    `contacted` VARCHAR(191) NULL,
    `date` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ActivityLog` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `activityHeader` VARCHAR(191) NOT NULL,
    `activityName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_branch_fkey` FOREIGN KEY (`branch`) REFERENCES `Agency`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Case` ADD CONSTRAINT `Case_serviceProviderId_fkey` FOREIGN KEY (`serviceProviderId`) REFERENCES `Agency`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Case` ADD CONSTRAINT `Case_serviceProviderReferralId_fkey` FOREIGN KEY (`serviceProviderReferralId`) REFERENCES `Agency`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Victim` ADD CONSTRAINT `Victim_caseId_fkey` FOREIGN KEY (`caseId`) REFERENCES `Case`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Perpetrator` ADD CONSTRAINT `Perpetrator_caseId_fkey` FOREIGN KEY (`caseId`) REFERENCES `Case`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GbvInformation` ADD CONSTRAINT `GbvInformation_caseId_fkey` FOREIGN KEY (`caseId`) REFERENCES `Case`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ActivityLog` ADD CONSTRAINT `ActivityLog_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
