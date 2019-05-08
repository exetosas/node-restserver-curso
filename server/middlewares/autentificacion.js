const jwt = require('jsonwebtoken');
//====================================
//Verificar token
//====================================


let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decode) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        req.usuario = decode.usuario;

        next();

    });




};


//====================================
//Verificar AdminRole
//====================================

let verificaAdmin_Role = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'No tienes permiso'
            }
        });
    }



};
module.exports = { verificaToken, verificaAdmin_Role };