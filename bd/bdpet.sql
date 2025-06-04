 DROP DATABASE IF EXISTS DbPet;
CREATE database DbPet;
USE DbPet;


CREATE TABLE TipoDeDocumento (
    IdTipo INT(10) PRIMARY KEY AUTO_INCREMENT,
    TipoDoc VARCHAR(10)
);

CREATE TABLE Usuario (
    doc BIGINT(19) PRIMARY KEY,
    tipodoc INT(10),
    nom VARCHAR(20),
    ape VARCHAR(20),
    telf VARCHAR(20),
    conta VARCHAR(20),
    clave VARCHAR(20),
    dir VARCHAR(50),
    correo VARCHAR(100),
    fecnam DATE,
    CONSTRAINT fk_usuario_tipodoc FOREIGN KEY (tipodoc) REFERENCES TipoDeDocumento(IdTipo)
);

CREATE TABLE Roles (
    idRol INT(10) PRIMARY KEY AUTO_INCREMENT,
    NomRol VARCHAR(50)
);

CREATE TABLE Veterinarias (
    idvet BIGINT(19) PRIMARY KEY,
    nom VARCHAR(20),
    correo VARCHAR(100),
    foto VARCHAR(500),
    direc VARCHAR(100)
);

CREATE TABLE Especie (
    idespecie INT(10) PRIMARY KEY,
    especies VARCHAR(30)
);

CREATE TABLE color (
    idcolor INT(10) PRIMARY KEY AUTO_INCREMENT,
    colores VARCHAR(30)
);

CREATE TABLE EsquemaVacunas (
    IdEsque INT(10) PRIMARY KEY AUTO_INCREMENT,
    idvacuna INT (10)
);

CREATE TABLE Estado (
    IdEs  boolean PRIMARY KEY,
    Reali boolean,
    Can boolean
);

CREATE TABLE Procedimiento (
    idcita BIGINT(19) PRIMARY KEY AUTO_INCREMENT,
    fecha TIMESTAMP,
    FecAsig datetime,
    proced VARCHAR(25),
    Cost INT(10),
    Durac time,
    Anot varchar(200)
);

CREATE TABLE historia_clinica (
    IdHs INT(10) PRIMARY KEY AUTO_INCREMENT,
     mascotadueñodoc BIGINT(19),
    Anotaciones varchar(200)
);
	
CREATE TABLE Usuario_Roles (
    Usuario_doc BIGINT(19),
    Roles_idRol INT(10),
    PRIMARY KEY (Usuario_doc, Roles_idRol),
    CONSTRAINT fk_userroles_usuario FOREIGN KEY (Usuario_doc) REFERENCES Usuario(doc),
    CONSTRAINT fk_userroles_roles FOREIGN KEY (Roles_idRol) REFERENCES Roles(idRol)
);

CREATE TABLE Raza (
    idraza INT(10) PRIMARY KEY AUTO_INCREMENT,
    Razas VARCHAR(30),
    Especiedeespecie INT(10),
    CONSTRAINT fk_raza_especie FOREIGN KEY (Especiedeespecie) REFERENCES Especie(idespecie)
);

CREATE TABLE mascota (
    idmasc BIGINT(19) PRIMARY KEY AUTO_INCREMENT,
    nom CHAR(50),
    raza VARCHAR(20),
    fecnam timestamp,
    Razaidraza INT(10),
    coloridcolor INT(10),
    EsquemaVacunasIdEsque INT(10),
    Dueñodoc BIGINT(19),
    foto VARCHAR(255),
    CONSTRAINT fk_masc_raza FOREIGN KEY (Razaidraza) REFERENCES Raza(idraza),
    CONSTRAINT fk_masc_color FOREIGN KEY (coloridcolor) REFERENCES color(idcolor),
    CONSTRAINT fk_masc_esquema FOREIGN KEY (EsquemaVacunasIdEsque) REFERENCES EsquemaVacunas(IdEsque),
    CONSTRAINT fk_masc_dueno FOREIGN KEY (Dueñodoc) REFERENCES Usuario(doc)
);


ALTER TABLE historia_clinica
ADD CONSTRAINT fk_historia_masc FOREIGN KEY (mascotadueñodoc) REFERENCES mascota(idmasc);

CREATE TABLE agendamiento (
    idcita BIGINT(19) PRIMARY KEY AUTO_INCREMENT,
    fecag TIMESTAMP,
    FecAsig datetime,
    veterinariadoc BIGINT(19),
    mascotadueñodoc BIGINT(19),
    EstadoIdEs boolean,
    Procedimientoidcita BIGINT(19),
    CONSTRAINT fk_agenda_vet FOREIGN KEY (veterinariadoc) REFERENCES Veterinarias(idvet),
    CONSTRAINT fk_agenda_masc FOREIGN KEY (mascotadueñodoc) REFERENCES mascota(idmasc),
    CONSTRAINT fk_agenda_estado FOREIGN KEY (EstadoIdEs) REFERENCES Estado(IdEs),
    CONSTRAINT fk_agenda_proc FOREIGN KEY (Procedimientoidcita) REFERENCES Procedimiento(idcita)
);

CREATE TABLE Procedimiento_historia_clinica (
    Procedimientoidcita BIGINT(19),
    historia_clinicaIdHs INT(10),
    Anot varchar(200),
    PRIMARY KEY (Procedimientoidcita, historia_clinicaIdHs),
    CONSTRAINT fk_proc_hist_proc FOREIGN KEY (Procedimientoidcita) REFERENCES Procedimiento(idcita),
    CONSTRAINT fk_proc_hist_hc FOREIGN KEY (historia_clinicaIdHs) REFERENCES historia_clinica(IdHs)
);

CREATE TABLE Vacunas (
    idvacunas INT(10) PRIMARY KEY AUTO_INCREMENT,
    vacunas VARCHAR(50),
    Especiedeespecie INT(10),
    Costo INT(10),
    Dosis INT(10),
    Durac varchar(30),
    CONSTRAINT fk_vacunas_especie FOREIGN KEY (Especiedeespecie) REFERENCES Especie(idespecie)
);

CREATE TABLE Vacunas_EsquemaVacunas (
    Vacunasidvacunas INT(10),
    EsquemaVacunasIdEsque INT(10),
    fecha timestamp,
    PRIMARY KEY (Vacunasidvacunas, EsquemaVacunasIdEsque),
    CONSTRAINT fk_vacunas_esqvac_vac FOREIGN KEY (Vacunasidvacunas) REFERENCES Vacunas(idvacunas),
    CONSTRAINT fk_vacunas_esqvac_esq FOREIGN KEY (EsquemaVacunasIdEsque) REFERENCES EsquemaVacunas(IdEsque)
);

alter table EsquemaVacunas
ADD CONSTRAINT fk_EsquemaVacunas_Vacunas  FOREIGN KEY (idvacuna) REFERENCES Vacunas(idvacunas);