-- AlterTable
ALTER TABLE `Category` MODIFY `image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `stock` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `images` VARCHAR(191) NULL,
    MODIFY `thumbnail` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Setting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Setting_key_key`(`key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
