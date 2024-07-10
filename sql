CREATE TABLE Equipos (
    ID_equipo INT PRIMARY KEY,
    Tipo VARCHAR(50),
    Estado VARCHAR(50),
    Ubicacion VARCHAR(100),
    Responsable VARCHAR(100)
    -- otros atributos
);

CREATE TABLE Proveedores (
    ID_proveedor INT PRIMARY KEY,
    Nombre VARCHAR(100),
    Contacto VARCHAR(100),
    Direccion VARCHAR(200),
    Telefono VARCHAR(20),
    Email VARCHAR(100)
    -- otros atributos
);

-- Crear las demás tablas (Compras, Mantenimiento, Tickets, Insumos, Solicitudes) de manera similar