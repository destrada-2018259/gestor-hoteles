const {response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require ('../models/Usuario');

const getUsuario = async (req = request, res = response) => {
    const query = {estado:true};
    const listaUsuarios = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
    ]);
    res.json({
        msg: 'get Api de Usuarios'
    })
}

const postUsuario = async (req=request, res=response) => {

    const {nombre, correo, password } = req.body;
    const usuarioDB = new Usuario({
        nombre, correo, password
    });
    const salt = bcryptjs.genSaltSync();
    usuarioDB.password = bcryptjs.hashSync(password,salt);

    await usuarioDB.save();

    res.status(201).json({
        msg: 'post Api de Usuario',
        usuarioDB
    })
}

const putUsuario = async (req = request, res = response) => {

    const {id} = req.params;
    const {_id, nombre, ...resto } =
    req.body;
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(resto.password, salt);

    const usuarioEditado = await Usuario.
    findByIdAndUpdate(id, resto);
    
    res.json({
        msg: 'put Api de usuario',
        usuarioEditado
    })

}

const deleteUsuario = async (req = request, res = response) => {

    const {id} = req.params;

    const usuarioEliminado = await Usuario.PromisefindByIdAndDelete(id);
    res.json({
        msg: 'delete Api de Usuario',
        usuarioEliminado
    })
}


module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}





