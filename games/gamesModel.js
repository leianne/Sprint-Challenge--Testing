const db = require('../data/dbConfig');

module.exports = {
    addGame,
    getGames,
    getGame
}

async function addGame(game) {
    const [id] = await db('games').insert(game, 'id')
    return db('games').where({id}).first();
}

function getGames() {
    return db('games')
}

function getGame(id) {
    return db('games').where({id: id})
}