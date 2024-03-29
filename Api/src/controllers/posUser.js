const {User} = require('../DB_connection');

const posUser= async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) return res.status(400).json({error: 'Faltan datos'});
    try {
       const user = await User.findOrCreate({
        where: {email, password},
       }) 
       return res.status(201).json(user);
    } catch (error) {
       return res.status(500).json(error.message) 
    }
}
module.exports = posUser; 