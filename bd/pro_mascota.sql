CREATE DEFINER=`root`@`localhost` PROCEDURE `pro_mascota`(
in  nom CHAR(50),
in raza VARCHAR(20),
in fecnam DATE,
in espc VARCHAR(30),
in Razaidraza INT(10),
in coloridcolor INT(10),
in EsquemaVacunasIdEsque INT(10),
in Dueñodoc BIGINT(19),
in foto VARCHAR(255)
)
BEGIN
insert into mascota(nom,raza,fecnam,espc,Razaidraza,coloridcolor,EsquemaVacunasIdEsque,Dueñodoc,foto)
values (nom,raza,fecnam,espc,Razaidraza,coloridcolor,EsquemaVacunasIdEsque,Dueñodoc,foto);
END