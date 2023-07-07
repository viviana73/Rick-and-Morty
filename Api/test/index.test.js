const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {
    describe( 'GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async() => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async() => {
           const response = (await agent.get('/rickandmorty/character/1')).body;
           expect(response).toHaveProperty('id', "name", "species", "gender", "status", "origin", "image");
         })
        it('Si hay un error responde con status: 500', async() => {
           await agent.get('/rickandmorty/character/1590').expect(404);
        }) 
    })
 describe("GET /rickandmorty/login", () => {
        it("Credenciales Correctas", async () => {
        const response = (await agent.get('/rickandmorty/login?email=viviana@henry.com&password=pass1234')).body;
        expect(response.access).toBeTruthy();
        });
          
        it("Credenciales Incorrectas", async () => {
        const response = (await agent.get('/rickandmorty/login?email=pancho@henry.com&password=seco1234')).body;
        expect(response.access).toBeFalsy();
        });
        });
          

    })
describe("POST /rickandmorty/fav", () =>{
        const elemento1 = {id:1, name: 'Mia'}
        const elemento2 = {id:2, name: 'Ignacio'}
        it('Debe devolver un elemento enviado por "body"', async() => {
        const response = (await agent.post('/rickandmorty/fav').send(elemento1)).body;
        expect(response).toContainEqual(elemento1);
        })
        it('Debe devolver elementos anterior y actual', async() =>{
        const response = (await agent.post('/rickandmorty/fav').send(elemento2)).body;
        expect(response).toContainEqual(elemento1);
        expect(response).toContainEqual(elemento2);   
        })
    })
describe("DELETE /rickandmorty/fav/:id", () =>{
        const elemento1 = {id:1, name: 'Mia'}
        const elemento2 = {id:2, name: 'Ignacio'}
        it('Debe devolver el arreglo cuando no hay personajes con ese ID', async() => {
        const response = (await agent.delete('/rickandmorty/fav/32')).body;    
        expect(response).toContainEqual(elemento1);
        expect(response).toContainEqual(elemento2);
        })
        it('Debe devolver todo el arreglo sin el personaje eliminado', async() => {
        const response = (await agent.delete('/rickandmorty/fav/1')).body;
        expect(response).not.toContainEqual(elemento1)
        })
})