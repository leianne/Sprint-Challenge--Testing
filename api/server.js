const express = require('express');
const db = require('../games/gamesModel');
const server = express();

// MIDDLEWARE

// Verify that user is entering a title and genre for the game 
const checkGameInfo = (req, res, next) => {
    if(req.body.title && req.body.genre) {
        next();
    } else {
        res.status(422).json({message: 'Please enter a valid title and genre'})
    }
}

// ROUTES
server.use(express.json())

server.get('/', async (req, res) => {
    try {
        const games = await db.getGames()
        res.status(200).json(games)
    }
    catch(error) {
        res.status(500).json(error)
    }
})

server.post('/', checkGameInfo,async (req, res) => {
    try {
        const newGame = await db.addGame(req.body)
        if(newGame) {
            res.status(201).json(newGame)
        } else {
            res.status(400).json({message: 'Error please try again'})
        }
    }
    catch(error){
        res.status(500).json(error)
    }
})

module.exports = server