const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');

describe('App Server', () => {

   

    describe('GET Method to /', () => {
        it('should return status code 200', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        })
        it('should return an array', async() => {
            const res = await request(server).get('/');
            expect(res.body).toEqual([])
        })
        it('should be of type JSON', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json')
        })
    })

    describe('GET Method to /:id', () => {
        it('should get the game with status 200', async () => {
            const res = await request(server).get('/:id').query({id: 1})
            expect(res.status).toBe(200)
        })
    })

    describe('POSTS Method to /', () => {
        
        it('should return status 201 if correct data is entered', async () => {
            const res = await request(server).post('/').send({genre: "Kid Adventure", title:"Hey Arnold Adventure"})
            expect(res.status).toBe(201);
        })
        it('should return with a status 422 if a genre or title is not entered', async () => {
            const res = await request(server).post('/').send({genre: "Kid Adventure"})
            expect(res.status).toBe(422)
        })
        it('should return JSON', async () => {
            const res = await request(server).post('/').send({genre: "Kid Adventure", title:"Hey Arnold Adventure"})
            expect(res.type).toBe('application/json')
        })
    })
})