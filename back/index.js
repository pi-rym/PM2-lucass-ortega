require("dotenv").config();
const {PORT} = process.env
const app = require('./src/server')
const dbConnection = require('./src/config/dbConnection')

// dbConnection()
// .then(()=> app.listen(PORT, localhost,  () =>
// console.log(`Server is listening on ${PORT}`) )
// ).catch((err) => console.log('Fallo en la conexion', err.message))


app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}`))