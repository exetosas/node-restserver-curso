//=============================================
//Puerto
//=============================================

process.env.PORT = process.env.PORT || 3001;

//=============================================
//Entorno
//=============================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


//=============================================
//Base de datos
//=============================================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {

    urlDB = 'mongodb+srv://exe:7dLecagvESvaz6z@cluster0-e9rdm.mongodb.net/cafe'
}
//urlDB = 'mongodb+srv://exe:7dLecagvESvaz6z@cluster0-e9rdm.mongodb.net/cafe'
process.env.URLDB = urlDB;