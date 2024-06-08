////Importar express, router y el controlador
const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

//Rutas para los metodos
router.post('/', vehicleController.createVehicle);
router.get('/', vehicleController.getVehicles);
router.get('/:id', vehicleController.getVehicleById);
router.put('/:id/exit', vehicleController.exitVehicle);
router.put('/:id', vehicleController.updateVehicle);
router.delete('/:id', vehicleController.deleteVehicle);
//Exportar rutas
module.exports = router;