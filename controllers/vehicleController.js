//Importar Vehicle
const { Vehicle } = require('../models');
//CREAR VEHICULOS
exports.createVehicle = async (req, res) => {
  try {
    //Extraer parametros
    const { plate, type } = req.body;
    //Cantidad de vehiculos
    const carCount = await Vehicle.count({ where: { type: 'car', exitTime: null } });
    //Cantidad de motos
    const motorcycleCount = await Vehicle.count({ where: { type: 'motorcycle', exitTime: null } });

    //Condicionales para validar solo 5 carros y 10 motos
    if (type === 'car' && carCount >= 5) {
      return res.status(400).json({ msg: 'No hay cupos disponibles para carros' });
    }
    if (type === 'motorcycle' && motorcycleCount >= 10) {
      return res.status(400).json({ msg: 'No hay cupos disponibles para motos' });
    }

    //Crear vehiculo con los atributos recibidos
    const newVehicle = await Vehicle.create({ plate, type });
    //Respuesta OK
    res.status(201).json(newVehicle);
  } 
  //Respuesta Error
  catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};

//CONSULTAR VEHICULOS
exports.getVehicles = async (req, res) => {
  try {
    //Traer todos los vehiculos
    const vehicles = await Vehicle.findAll();
    //Mostrar vehiculos
    res.json(vehicles);
  //Respuesta Error  
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};
//CONSULTAR VEHICULO POR ID
exports.getVehicleById = async (req, res) => {
  try {
    //Buscar por id
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ msg: 'Vehículo no encontrado' });
    }
    //Si lo encuentra
    res.json(vehicle);
  //Respuesta Error
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};
//SALIDA VEHICULOS
exports.exitVehicle = async (req, res) => {
  try {
    //Buscar por id
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ msg: 'Vehículo no encontrado' });
    }
    //Asignar hora de salida
    vehicle.exitTime = req.body.exitTime || new Date();
    await vehicle.save();
    res.json(vehicle);
  //Respuesta Error
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};
//ACTUALIZAR DATOS
exports.updateVehicle = async (req, res) => {
  try {
    //Buscar por id
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ msg: 'Vehículo no encontrado' });
    }
    //Extraer datos
    vehicle.type = req.body.type || vehicle.type;
    vehicle.plate = req.body.plate || vehicle.plate;
    vehicle.entryTime = req.body.entryTime || vehicle.entryTime;
    //Actualizar datos
    await vehicle.save();
    res.json(vehicle);
  //Respuesta Error
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};
//ELIMINAR VEHICULOS
exports.deleteVehicle = async (req, res) => {
  try {
    //Buscar por id
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ msg: 'Vehículo no encontrado' });
    }
    //Eliminar
    await vehicle.destroy();
    res.json({ msg: 'Vehículo eliminado' });
  //Respuesta Error
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};