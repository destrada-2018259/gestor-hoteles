const { respone, request } = require('express');
const Servicio = require('../models/Servicios');


const getServicio = async (req = request, res = respone) => {

    const listaServicios = await Promise.all([
        Servicio.countDocuments(),
        Categoria.find()
    ])
    res.json({
        msg: 'GET'

    })
}

const postServicio = async (req = request, res = respone) => {

    const { nombre, disponibilidad } = req.body;
    const servicioDB = new Categoria({ nombre, disponibilidad });

    await servicioDB.save();

    res.json({
        msg: 'post API de Servicios',
        servicioDB
    })
}

const putServicio = async (req = request, res = respone) => {
    const { id } = req.params;
    const { _id, ...resto } = req.body;
    const servicioEdit = await Categoria.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'put API de servicios'

    })
}

const deleteServicio = async (req = request, res = respone) => {

    const { id } = req.params;

    const servicioEliminado = await Servicio.findByIdAndDelete(id);

    res.json({
        msg: 'delete Api de servicios',
        servicioEliminado
    })

}

module.exports = {
    getServicio,
    postServicio,
    putServicio,
    deleteServicio
}