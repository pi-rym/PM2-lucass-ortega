require('dotenv').config()
const { connect } = require('mongoose')


const { URI } = process.env

module.exports = async () => {
    await connect(`${URI}`)
}