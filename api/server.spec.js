const request = require('supertest');
const server = require('./server');

describe('App Server', () => {
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