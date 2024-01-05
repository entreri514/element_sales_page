CREATE TABLE `Products`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `productId` BIGINT NOT NULL,
    `itemPic` VARCHAR(255) NOT NULL,
    `price` DOUBLE NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `productInfo` VARCHAR(255) NOT NULL,
    `productCare` VARCHAR(255) NOT NULL,
    `itemType` VARCHAR(255) NOT NULL,
    `userId` BIGINT NOT NULL
);
CREATE TABLE `User`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `userName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL
);
CREATE TABLE `Cart`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `items` VARCHAR(255) NOT NULL,
    `purchaseHistory` VARCHAR(255) NOT NULL,
    `ownerInfo` VARCHAR(255) NOT NULL,
    `userId` BIGINT NOT NULL
);
ALTER TABLE
    `Products` ADD CONSTRAINT `products_userid_foreign` FOREIGN KEY(`userId`) REFERENCES `User`(`id`);
ALTER TABLE
    `Cart` ADD CONSTRAINT `cart_userid_foreign` FOREIGN KEY(`userId`) REFERENCES `User`(`id`);