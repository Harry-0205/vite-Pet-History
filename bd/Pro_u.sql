CREATE DEFINER=`root`@`localhost` PROCEDURE `Pro_usuar`(
in doc BIGINT(19),
in tipodoc INT(10),
in nom CHAR(25),
in ape CHAR(20),
in telf CHAR(20),
in conta VARCHAR(20),
in clave VARCHAR(20),
in dir VARCHAR(50),
in correo VARCHAR(100),
in fecnam DATE
)
BEGIN
insert into Usuario(doc,tipodoc,nom,ape,telf,conta,clave,dir,correo,fecnam)
values (doc,tipodoc,nom,ape,telf,conta,clave,dir,correo,fecnam);
END