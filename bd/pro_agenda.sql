CREATE DEFINER=`root`@`localhost` PROCEDURE `pro_agenda`(
in fecag TIMESTAMP,
in FecAsig INT(10),
in veterinariadoc BIGINT(19),
in mascotadueñodoc BIGINT(19),
in EstadoIdEs boolean,
in Procedimientoidcita BIGINT(19)
)
BEGIN
insert into agendamiento(fecag,FecAsig,veterinariadoc,mascotadueñodoc,EstadoIdEs,Procedimientoidcita)
values (fecag,FecAsig,veterinariadoc,mascotadueñodoc,EstadoIdEs,Procedimientoidcita);
END