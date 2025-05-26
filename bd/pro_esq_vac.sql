CREATE DEFINER=`root`@`localhost` PROCEDURE `pro_esq_vac`(
in idvacuna INT (10)
)
BEGIN
insert into EsquemaVacunas(idvacuna)
values (idvacuna);
END