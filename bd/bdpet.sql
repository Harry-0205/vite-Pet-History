 DROP DATABASE IF EXISTS DbPet;
CREATE database DbPet;
USE DbPet;


CREATE TABLE  TipoDocumento (
	IdTipo INT(10) PRIMARY KEY not null auto_increment,
	TipoDoc VARCHAR(10)
);


CREATE TABLE usuario (
	Doc BIGINT(19) PRIMARy KEY,
    TipoDoc INT(10),
    Nom1 CHAR(25),
    Nom2 CHAR(25),
    Ape1 CHAR(25),
    Ape2 CHAR (25),
    Tel INT(20),
    Contra VARCHAR(20),
    Dir VARCHAR (50),
    Correo VARCHAR(100),
    FecNam timestamp,
    CONSTRAINT fk_usuario_TipoDoc foreign key (TipoDoc) REFERENCES TipoDocumento(IdTipo)    
);

CREATE TABLE Roles(
	IdRol INT(10) PRIMARY KEY  auto_increment,
    NomRol VARCHAR (25)
);

CREATE TABLE Veterinarias(
	IdVet BIGINT (19) PRIMARY KEY  auto_increment,
    Nom char(25),
	Correo VARCHAR (100),
    Foto VARCHAR(500),
    Direc VARCHAR (100)
);

CREATE TABLE Especies(
	IdEspecie INT(10) PRIMARY KEY auto_increment,
    Especies VARCHAR(30)
);

CREATE TABLE color(
	IdColor INT(10) PRIMARY KEY auto_increment,
    Colores Varchar (30)
);

CREATE TABLE Esquema_Vacunas(
	IdEsque INT(10) PRIMARY KEY auto_increment
);

CREATE TABLE Estado(
	IdEs INT(10) PRIMARY KEY, 
    Rea INT(10),
	EnEsp INT(10),
    Can INT(10)
    
);

CREATE TABLE Procedimiento(
	IdCita BIGINT(19) PRIMARY KEY auto_increment,
    Fecha timestamp,
    FecAsig datetime,
    Proced VARCHAR (25),
    Cost INT (10),
    Durac INT (10),
	Anot INT (10)
);

CREATE TABLE Historia_Clinica(
	IdHs INT(10) PRIMARY KEY auto_increment,
    Anotaciones INT(10)
);

CREATE TABLE Usuario_Roles (
 Usuario_Doc BIGINT(19),
 Roles_IdRol INT(10),
 PRIMARY KEY (Usuario_Doc, Roles_IdRol), CONSTRAINT fk_UserRoles_Usuario foreign key (Usuario_Doc) REFERENCES Usuario(Doc),  CONSTRAINT fk_UserRoles_Usuario foreign key (Roles_IdRol) REFERENCES Roles(IdRol)
);

CREATE TABLE Raza(
	IdRaza INT (10) Primary key auto_increment,
    Razas VARCHAR (30),
    CONSTRAINT fk_Raza_Especie foreign key (EspecieIdEspecie) REFERENCES Especie(IdEspecie)
);

CREATE TABLE Mascota(
	IdMascota BIGINT (19) PRIMARY KEY auto_increment,
	Nom VARCHAR(50) ,
    Raza VARCHAR(20),
    FecNam timestamp,
    Espc VARCHAR (30),
    DueñoDoc BIGINT(19),
    Foto VARCHAR (500),
	CONSTRAINT fk_Masc_Raza FOREIGN KEY (RazaIdRaza) REFERENCES Raza(IdRaza),
    CONSTRAINT fk_Masc_Color FOREIGN KEY (ColorIdColor) REFERENCES Color(IdColor),
    CONSTRAINT fk_Masc_Esquema FOREIGN KEY (EsquemaVacunasIdEsque) REFERENCES EsquemaVacunas(IdEsque),
    CONSTRAINT fk_Masc_Dueño FOREIGN KEY (DueñoDoc) REFERENCES Usuario(Doc)

);
	


