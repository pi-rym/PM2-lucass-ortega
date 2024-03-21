module.exports = {
    mode:"development",
    entry:{
        index:"./scripts/index.js",
        films:"./pages/script/createFilms.js"
},
    output: {
        path:__dirname + "/browser",
        filename: "[name].js"
    }
}