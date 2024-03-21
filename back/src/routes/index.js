const { Router } = require('express')
const moviesRoute = require('./moviesRoute')
const moviesController = require ('../controllers/moviesController') 


const router = Router()

router.use('/movies', moviesRoute)
//router.get('/movies, moviesController)

module.exports = router
