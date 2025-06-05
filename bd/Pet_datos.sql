-- Tipo documento
INSERT INTO TipoDeDocumento (TipoDoc) VALUES 
('CC'),
('TI'),
('CE');

-- Agendamiento :)
-- Veterinaria
call pro_vetei(1001, 'VetSalud', 'vetsalud@correo.com', 'foto.jpg', 'Calle 123 #45-67');

-- Usuario dueño de mascota
INSERT INTO Usuario (doc, tipodoc, nom, ape, telf, conta, clave, dir, correo, fecnam) VALUES
(1234567890, 1, 'Luis', 'Gomez', '3001234567', 'lgomez', 'clave123', 'Carrera 45 #67-89', 'luis@correo.com', '1990-04-15');

-- Especie
INSERT INTO Especie (especies) VALUES 
("canino"),("felino"),("leporido"),("cricetido"),("Cavidos"),("ave"),("suidae");

-- Raza de esa especie
INSERT INTO Raza (Razas, Especiedeespecie) VALUES 
('Labrador Retriever',1),('Golden Retriever',1),('Bulldog Francés',1),('Pastor Alemán',1),('Chihuahua',1),('Beagle',1),('Bulldog Inglés',1),('Poodle',1),('Rottweiler',1),('Dachshund',1)
,('Schnauzer',1),('Boxer',1),('Shih Tzu',1),('Cocker Spaniel',1),('Husky Siberiano',1),('Persa',2),('Maine Coon',2),('Siamés',2),('Bengalí',2),('Ragdoll',2),
('Sphynx',2),('British Shorthair',2),('Abisinio',2),('Burmés',2),('Oriental Shorthair',2),('Savannah',2),('Scottish Fold',2),('Abyssinian',2),('Norwegian Forest',2),
('Turco Van',2),('Holland Lop',3),('Mini Rex',3),('Lionhead',3),('Mini Lop',3),('Netherland Dwarf',3),('Rex',3),('Conejo Californiano',3),('Chinchilla',3),('Flemish Giant',3),
('Hámster Sirio',4),('Hámster Roborovski',4),('Hámster enano ruso',4),('Hámster chino',4),('Hámster europeo',4),('Hámster de orejas cortas',4),('Hámster de la península arábiga',4)
,('American Shorthair',5),('Peruana',5),('Abyssinia',5),('Teddy',5),('Coronet',5),('Himalaya',5),('Silkie',5),('Texel',5),('Crestada',5),('Lunkarya',5),
('Periquito Australiano',6),('Canario',6),('Cotorra Argentina',6),('Loro Gris Africano',6),('Cockatiel',6),('Lovebird',6),('Agapornis',6),('Conuro de Sol',6),('Cacatúa',6),
('Periquito de collar',6),('Mini pig',7),('Puerquito de pot-belly',7),('Puerquito de orejas caídas',7),('Puerquito de pico',7);

-- Color
INSERT INTO color (colores) VALUES 
('Negro'),('Blanco'),('Marrón'),('Gris'),('Dorado'),('Beige'),('Café'),('Crema'),('Azul'),('Tigrado'),('Rojizo');

-- Vacuna
INSERT INTO Vacunas (vacunas, Especiedeespecie, Costo, Dosis, Durac) VALUES 
("Vacuna contra el moquillo felino",2, 70000, 2, "1 año"),
("Vacuna contra la rinotraqueítis viral felina",2, 70000, 2, "1 año"),
("Vacuna contra el calicivirus felino",2, 70000, 2, "1 año"),
("Vacuna contra la leucemia felina",2, 80000, 2, "1 año"),
("Vacuna contra la rabia",2, 50000, 1, "1-3 años"),
("Vacuna contra la clamidiosis felina",2, 60000, 2, "1 año"),
("Vacuna contra la peritonitis infecciosa felina",2, 90000, 2, "Anual"),
("Vacuna contra el moquillo canino",1, 80000, 2, "1 año"),
("Vacuna contra el parvovirus canino",1, 70000, 2, "1 año"),
("Vacuna contra la hepatitis infecciosa canina ",1, 75000, 2, "1 año"),
("Vacuna contra la leptospirosis",1, 60000, 2, "1 año"),
("Vacuna contra la rabia",1, 50000, 1, "1-3 años"),
("Vacuna contra la tos de las perreras",1, 40000, 2, "1 año"),
("Vacuna contra el parainfluenza canina",1, 35000, 2, "1 año"),
("Vacuna contra la mixomatosis",3, 80000, 2, "1 año"),
("Vacuna contra la enfermedad hemorrágica viral (VHD) tipo 1",3, 90000, 2, "1 año"),
("Vacuna contra la enfermedad hemorrágica viral (VHD) tipo 2",3, 90000, 2, "1 año");

-- Esquema de vacunación
INSERT INTO EsquemaVacunas (idvacuna) VALUES 
(1);

-- Mascota del usuario
INSERT INTO mascota (nom, raza, fecnam, espc, Razaidraza, coloridcolor, EsquemaVacunasIdEsque, Dueñodoc, foto) VALUES
('Rocky', 'Labrador', '2020-03-15', 'Canino', 1, 1, 1, 1234567890, 'rocky.jpg');

-- Estado de la cita
INSERT INTO Estado (IdEs, Reali, Can) VALUES
(TRUE, TRUE, FALSE),   
(FALSE, FALSE, TRUE);  

-- Procedimiento
INSERT INTO Procedimiento (fecha, FecAsig, proced, Cost, Durac, Anot) VALUES
(NOW(), 2025-05-26, 'Vacunación', 50000, 30, 'Aplicación de vacuna antirrábica');

-- Cita en agendamiento
INSERT INTO agendamiento (fecag, FecAsig, veterinariadoc, mascotadueñodoc, EstadoIdEs, Procedimientoidcita) VALUES
(NOW(), 2025-05-26, 1001, 1, TRUE, 1);
