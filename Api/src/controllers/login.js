/*const users = require('../utils/users')

const getLogin = (req, res) => {
    const { email, password } = req.query;

    let access = false;

    const autorizado = users.find(user => user.email === email && user.password === password) 

    if(autorizado){
        access = true;
        return res.status(200).json({access});
    }else{
        access = false;
        res.status(401).json({access, message:'Usuario o contraseña invalido'})
    }
}


module.exports = getLogin;*/


const {User} = require('../DB_connection')

async function login (req, res)  {
    const { email, password } = req.body;
    try {
       if(!email || !password) return res.status(400).send('Faltan datos');
       const logUser = await User.findOne({where:{email: email}}) 
       if(!logUser) return res.status(404).send('Usuario no encontrado')
       return logUser.password === password
       ? res.status(200).json({access: true})
       : res.status(403).send('Contrasena incorrecta') 
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
    
   
   
}


module.exports = login;