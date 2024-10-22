const request = require('supertest')

const API_URL = 'https://gorest.co.in'

describe('Go REST GET', function () {

    it('/public/v2/users responds with json', async function () {
        request(API_URL)
            .get('/api/breeds/list/all')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    });

    it('/public/v2/users?page=1&per_page=20 responds 20 entries', async function () {
        request(API_URL)
            .get('/public/v2/users?page=1&per_page=20')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.length).toEqual(20)
            })
    });

    it('/public/v2/users?page=1&per_page=101 responds 10 entries', async function () {
        request(API_URL)
            .get('/public/v2/users?page=1&per_page=101')
            .set('Accept', 'application/json')
            .then(response => {
                expect(response.body.length).toEqual(10)
            })
    });

    it('/public/v2/users/6942222 responds with active user details', async function () {
        request(API_URL)
            .get('/public/v2/users/6942222')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.status).toEqual('active');
            })
    });

    it('/public/v2/users/6942222/posts responds with posts from user with id=6942222', async function () {
        request(API_URL)
            .get('/public/v2/users/6942222/posts')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.user_id).toEqual('6942222');
            })
    });


    it('/public/v2/users/6942222/todos responds with todos from user with id=6942222', async function () {
        request(API_URL)
            .get('/public/v2/users/6942222/todos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.user_id).toEqual('6942222');
            })
    });


});
