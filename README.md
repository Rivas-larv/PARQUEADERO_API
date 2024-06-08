# API para Parqueadero

Esta es una API REST creada con Express.js y Sequelize como ORM para administrar un parqueadero que acepta carros y motos. La API permite realizar operaciones CRUD (CREATE, READ, UPDATE, DELETE) para los registros de vehículos. Además, posee una función extra para registrar la salida del parqueadero de los vehiculos.

## Configuración

1. **Clonar el repositorio:**

   GITHUB:
   git clone https://github.com/Rivas-larv/Parqueadero_API.git

2. **Abrir repositorio en VS Code e instalar dependencias**

   CMD o powershell:
   npm install express sequelize mysql2 dotenv body-parser

3. **CREAR DB - SQL WORKBENCH**

   Dentro del programa:
   File > Run SQL Script > (Seleccionar archivo del backup) > Run

   Nombre del archivo; 20240607-backupparqueaderoAPI

4. **Compilar**

   CMD o powershell:
   node index.js

   **NOTA**
   Antes de compilar se podría verificar el puerto de conexión con la db. Se puede modificar en el index.js

5. **Pruebas**

   Script para enviar solicitudes en POSTMAN.

   **CREATE - POST**
   URL: http://localhost:5000/api/vehicles/
   {
   "plate": "ABC123",
   "type": "car"
   }

   **READ - GET**
   URL: http://localhost:5000/api/vehicles/

   **READ ID - GET**
   URL: http://localhost:5000/api/vehicles/(id)

   **UPDATE - PATCH**
   URL: http://localhost:5000/api/vehicles/(id)
   {
   "plate": "ABC123",
   "type": "car",
   "entryTime": "2023-06-01T10:00:00Z"
   }
   **DELETE**
   URL: http://localhost:5000/api/vehicles/(id)

   **EXIT VEHICLE - POST**
   URL: http://localhost:5000/api/vehicles/(id)/exit
   {
   "exitTime": "2023-06-01T10:00:00Z"
   }

**Response status code**
400 (No procesar petición)
404 (No encontrado - not found)
201 (Create - successful)
500 (Error server)
