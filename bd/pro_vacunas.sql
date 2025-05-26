CREATE DEFINER=`root`@`localhost` PROCEDURE `pro_vacunas`(
in vacunas VARCHAR(50),
in Especiedeespecie INT(10),
in Costo INT(10),
in Dosis INT(10),
in Durac date
)
BEGIN
insert into Vacunas(vacunas,Especiedeespecie,Costo,Dosis,Durac)
values (vacunas,Especiedeespecie,Costo,Dosis,Durac);
END