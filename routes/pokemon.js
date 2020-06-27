var express = require('express');
const db = require('../models');
var router = express.Router();

// GET /pokemon - return a page with favorited Pokemon
router.get('/', function(req, res) {
  // TODO: Get all records from the DB and render to view
  db.pokemon.findAll().then(function (data){
    console.log("💩💩💩", data)
    res.render("pokemon/index", {pokemon:data})
  })
});

// // GET / - main index of site
// app.get('/', function(req, res) {
//   var pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/';
//   // Use request to call the API
//   axios.get(pokemonUrl).then( function(apiResponse) {
//     var pokemon = apiResponse.data.results;
//     res.render('index', { pokemon: pokemon.slice(0, 151) });
//   })
// });

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', function(req, res) {
  // TODO: Get form data and add a new record to DB
  console.log(req.body.name);
  db.pokemon.findOrCreate({where:{name:req.body.name}}).then(function(data){
    res.redirect("/pokemon")
  })
});

//router.get(/:name)

//router.delete

module.exports = router;