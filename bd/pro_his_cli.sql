CREATE DEFINER=`root`@`localhost` PROCEDURE `pro_his_cli`(
in  mascotadueñodoc BIGINT(19),
in Anotaciones INT(10)
)
BEGIN
insert into Procedimiento(mascotadueñodoc,Anotaciones)
values (mascotadueñodoc,Anotaciones);
END