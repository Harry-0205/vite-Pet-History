USE `dbpet`;
DROP procedure IF EXISTS `pro_mascota`;

USE `dbpet`;
DROP procedure IF EXISTS `dbpet`.`pro_mascota`;
;

DELIMITER $$
USE `dbpet`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `pro_mascota`(
    IN nomm VARCHAR(30),
    IN raz VARCHAR(20),
    IN fecna timestamp,
    IN Razaidraz INT(10),
    IN coloridcolor INT(10),
    IN EsquemaVacunasIdEsqu INT(10),
    IN Dueñodo BIGINT(19),
    IN fot VARCHAR(255)
)
BEGIN
    -- Inserción en la tabla mascota
    INSERT INTO mascota(nom, raza, fecnam, espc, Razaidraza, coloridcolor, EsquemaVacunasIdEsque, Dueñodoc, foto)
    VALUES (nomm, raz, fecna, esp, Razaidraz, coloridcolo, EsquemaVacunasIdEsqu, Dueñodo, fot);
END$$

DELIMITER ;
;







USE `dbpet`;
DROP procedure IF EXISTS `pro_his_cli`;

USE `dbpet`;
DROP procedure IF EXISTS `dbpet`.`pro_his_cli`;
;

DELIMITER $$
USE `dbpet`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `pro_his_cli`(
    IN mascotadueñodo BIGINT(19),
    IN Anotacione varchar(200)
)
BEGIN
    -- Inserción en la tabla Procedimiento
    INSERT INTO Procedimiento(mascotadueñodoc, Anotaciones)
    VALUES (mascotadueñodo, Anotacione);
END$$

DELIMITER ;
;


USE `dbpet`;
DROP procedure IF EXISTS `pro_agenda`;

USE `dbpet`;
DROP procedure IF EXISTS `dbpet`.`pro_agenda`;
;

DELIMITER $$
USE `dbpet`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `pro_agenda`(
    IN feca TIMESTAMP,
    IN FecAsi datetime,
    IN veterinariado BIGINT(19),
    IN mascotadueñodo BIGINT(19),
    IN EstadoIdE BOOLEAN,
    IN Procedimientoidcit BIGINT(19)
)
BEGIN
    -- Comprobar si el veterinariadoc existe en la tabla de veterinarios
    IF NOT EXISTS (SELECT 1 FROM veterinarios WHERE id = veterinariadoc) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Veterinario no encontrado';
    END IF;

    -- Comprobar si el mascotadueñodoc existe en la tabla de mascotas
    IF NOT EXISTS (SELECT 1 FROM mascotas WHERE id = mascotadueñodoc) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Mascota no encontrada';
    END IF;

    -- Inserción en la tabla agendamiento
    INSERT INTO agendamiento(fecag, FecAsig, veterinariadoc, mascotadueñodoc, EstadoIdEs, Procedimientoidcita)
    VALUES (feca, FecAsi, veterinariado, mascotadueñodo, EstadoIdE, Procedimientoidcit);
    
    -- Opcionalmente, devolver el ID del registro insertado
    -- SELECT LAST_INSERT_ID() AS 'ID Insertado';

END$$

DELIMITER ;
;


USE `dbpet`;
DROP procedure IF EXISTS `Pro_usuar`;

USE `dbpet`;
DROP procedure IF EXISTS `dbpet`.`Pro_usuar`;
;

DELIMITER $$
USE `dbpet`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Pro_usuar`(
    IN docc BIGINT(19),
    IN tipodo INT(10),
    IN nomm VARCHAR(20),
    IN ape VARCHAR(20),
    IN tel VARCHAR(20),
    IN cont VARCHAR(20),
    IN clav VARCHAR(20),
    IN dir VARCHAR(50),
    IN corre VARCHAR(100),
    IN fecna DATE
)
BEGIN
    -- Inserción en la tabla Usuario
    INSERT INTO Usuario(doc, tipodoc, nom, ape, telf, conta, clave, dir, correo, fecnam)
    VALUES (docc, tipodo, nomm, ape, tel, cont, clav, dir, corre, fecna);
END$$

DELIMITER ;
;

USE `dbpet`;
DROP procedure IF EXISTS `pro_veteri`;

USE `dbpet`;
DROP procedure IF EXISTS `dbpet`.`pro_veteri`;
;

DELIMITER $$
USE `dbpet`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `pro_veteri`(
    IN idve BIGINT(19),
    IN nomm CHAR(20),
    IN corre VARCHAR(100),
    IN fot VARCHAR(500),
    IN dire VARCHAR(100)
)
BEGIN
    -- Inserción en la tabla Veterinarias
    INSERT INTO Veterinarias(idvet, nom, correo, foto, direc)
    VALUES (idve, nomm, corre, fot, dire);
END$$

DELIMITER ;
;



USE `dbpet`;
DROP procedure IF EXISTS `pro_pro_his_cli`;

DELIMITER $$
USE `dbpet`$$
CREATE PROCEDURE `pro_pro_his_cli` (
in ano varchar(200)
)
BEGIN
insert into procedimiento_historia_clinica(anot)
values(ano);
END$$

DELIMITER ;










