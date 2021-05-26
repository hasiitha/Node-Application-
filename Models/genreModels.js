const mongoose = require('mongoose')
//defining an API

const GenreSchema = new mongoose.Schema({
    name:{
        type:String,
        min:10
    },
    genre:{
      type:String,
      enum:['Horror','Action','Thriller']
    }


})
//defining and model
const Genre =  mongoose.model('Genre',GenreSchema);

async function createGenre({name,movie}){

    let genre = new Genre({
        name:name,
        genre:movie
    })
    return await genre.save();
}

async function getMovies(){

    const Movies = await Genre
        .find();
    return Movies;
}

async function updateMovies({_id,name}){
console.log(_id);
console.log(name)
    try {
        const result = await Genre.findByIdAndUpdate({_id}, {
            $set: {name: name}
        }, {new: true})
        return result;
    }catch (err){
    console.log(err.message)
    }


}

async function deleteMovie(id){
    const result = await Genre.deleteOne({_id:id});
    return result;
}

module.exports ={createGenre,getMovies,updateMovies,deleteMovie};
