const request = require('supertest')

const DOGS_API_URL = 'https://dog.ceo'

describe('DOGS GET', function () {

    describe('/api/breeds/list/all', function () {
        it('/breeds/list/all responds with json', async function () {
            request(DOGS_API_URL)
                .get('/api/breeds/list/all')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(response => {
                    expect(response.body.status).toEqual('success');
                })
        });
    })

    describe('/api/breeds/image/random', function () {
        it('/api/breeds/image/random responds with single image', async function () {
            request(DOGS_API_URL)
                .get('/api/breeds/list/all')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(response => {
                    expect(response.body.message).toMatch(/jpg$/)
                    expect(response.body.status).toEqual('success');
                })
        });

        it('/api/breeds/image/random/3 responds with 3 images', async function () {
            request(DOGS_API_URL)
                .get('/api/breeds/list/all')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(response => {
                    expect(response.body.message.length).toEqual(3)
                    expect(response.body.status).toEqual('success');
                })
        });

        it('/api/breeds/image/random/51 responds with 50 images', async function () {
            request(DOGS_API_URL)
                .get('/api/breeds/list/all')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(response => {
                    expect(response.body.message.length).toEqual(50)
                    expect(response.body.status).toEqual('success');
                })
        });

        it('/api/breeds/image/random/-1 responds with single image', async function () {
            request(DOGS_API_URL)
                .get('/api/breeds/list/all')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(response => {
                    expect(response.body.message.length).toEqual(1)
                    expect(response.body.status).toEqual('success');
                })
        });

        it('/api/breeds/image/random/text responds with single image', async function () {
            request(DOGS_API_URL)
                .get('/api/breeds/list/all')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(response => {
                    expect(response.body.message.length).toEqual(1)
                    expect(response.body.status).toEqual('success');
                })
        });
    })

    describe('/api/breeds/hound/images', function () {
        it('/api/breeds/hound/images responds with list of images', async function () {
            request(DOGS_API_URL)
                .get('/api/breeds/list/all')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(response => {
                    expect(response.body.status).toEqual('success');
                })
        });
    })

});
