CREATE DEFINER=`root`@`localhost` PROCEDURE `pro_veteri`(
in idvet BIGINT(19),
in nom CHAR(25),
in correo VARCHAR(100),
in foto VARCHAR(500),
in direc VARCHAR(100)
)
BEGIN
insert into Veterinarias(idvet,nom,correo,foto,direc)
values (idvet,nom,correo,foto,direc);
END