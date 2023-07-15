/*const {Router} = require('express');
const getCharById = require('../controllers/getCharById')
const getFav  = require('../controllers/getFav')
const login = require('../controllers/login')
const deleteFav = require('../controllers/deleteFav')
const postFav = require('../controllers/postFav')
const postUser = require('../controllers/posUser')

const router = Router()

router.get('/character/:id', getCharById)
router.get('/login', login)
router.get('/fav', getFav)
router.post('/login', postUser)
router.post('/fav', postFav)
router.delete('/fav/:id',deleteFav)

module.exports = router;*/
// routes.js
const { Router } = require('express');
const getCharById = require('../controllers/getCharById');
const getFav = require('../controllers/getFav');
const login = require('../controllers/login');
const deleteFav = require('../controllers/deleteFav');
const postFav = require('../controllers/postFav');
const postUser = require('../controllers/posUser');

const router = Router();

router.get('/character/:id', getCharById);
router.get('/login', login);
router.get('/fav', getFav);
router.post('/login', postUser);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;
