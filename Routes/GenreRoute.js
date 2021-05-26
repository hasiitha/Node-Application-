const express =require('express');
const router = express.Router();
const GenreModel = require('../Models/genreModels');

router.get('/',async(req,res)=>{
    let MovieList = await GenreModel.getMovies();
    res.send(MovieList);
});


router.post('/addGenre',async(req,res)=>{
    let genre = req.body;
    let result = await GenreModel.createGenre(genre);
    res.send(result);})

router.put('/updateGenre/:id',async (req,res)=>{
    let obj = req.body;
    const result = await  GenreModel.updateMovies(obj);
    res.send(result);
})

router.delete('/deleteGenre/:id',async(req,res)=>{
    let id = req.params.id;
    console.log(id);
    const result = await GenreModel.deleteMovie(id);
    res.send(result);
})

module.exports = router;