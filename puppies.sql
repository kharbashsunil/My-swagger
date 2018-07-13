DROP DATABASE IF EXISTS puppies;
CREATE DATABASE puppies;

use puppies;

CREATE TABLE pups (
  `ID` INT AUTO_INCREMENT ,
  `name` VARCHAR(15),
  `breed` VARCHAR(15),
  `age` INTEGER,
  `sex` VARCHAR(15),
  PRIMARY KEY (`ID`)
);

INSERT INTO pups (`name`, `breed`, `age`, `sex`)
  VALUES ('Tyler', 'Shih-tzu', 3, 'M');