const {Favorite}= require('../DB_connection');

module.exports = async(req, res) => {
    const {id} = req.params;

    try {
        const userDelete = await Favorite.findByPk(id)
        await userDelete.destroy();
        const favorites = await Favorite.findAll();
        return res.status(200).json(favorites)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}