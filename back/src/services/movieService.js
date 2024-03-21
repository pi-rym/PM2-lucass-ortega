//require("dotenv").config();
//const { BASE_URL } = process.env;
const axios = require ('axios')
const { Movies } = require('../types/class')
const moviesValidation = require('../utils/validations/moviesValidation');


module.exports = {
    getAllMovies: async ()=> {
        try{
            const { data } = await axios.get('https://students-api.up.railway.app/movies');
            const movies = data.map((movie) => {
                if (moviesValidation(movie)){
                    return new Movies(movie);
                }
            });
            return movies;
        } catch(error){
            throw new Error (error);
        }
    }
    
}