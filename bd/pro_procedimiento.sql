CREATE DEFINER=`root`@`localhost` PROCEDURE `pro_procedimiento`(
in fecha TIMESTAMP,
in FecAsig INT(10),
in proced VARCHAR(25),
in Cost INT(10),
in Durac INT(10),
in Anot INT(10)
)
BEGIN
insert into Procedimiento(fecha,FecAsig,proced,Cost,Durac,Anot)
values (fecha,FecAsig,proced,Cost,Durac,Anot);
END