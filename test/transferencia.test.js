const request = require('supertest');
const {expect} = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json')

describe ('Transferências', () => {
    let token
        
        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456')
        })  
            
        describe('POST /transferencias', () => {
        
        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$ 10,00', async () => {
            const bodyTransferencia = { ...postTransferencias }

            const resposta = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencia)
                
                expect(resposta.status).to.equal(201);
        });
                      
        it('Deve retornar falha com 422 quando o valor da transferencia for abaixo de R$ 10,00', async () => {
            const bodyTransferencia = { ...postTransferencias }
            bodyTransferencia.valor = 7    
            
            const resposta = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencia)
                
                expect(resposta.status).to.equal(422);
                console.log(resposta.body);
        });

    })

        describe('GET /transferencias/{id}', () => {
            it('Deve retornar sucesso com 200 e os dados iguais ao registro de transferência contigos no banco de dados, quando o ID for válido', async () => {
                const resposta = await request(process.env.BASE_URL)
                    .get('/transferencias/2')
                    .set('Authorization', `Bearer ${token}`)

                expect(resposta.status).to.equal(200);
                expect(resposta.body.id).to.equal(2);
                expect(resposta.body.id).to.be.a('number');
                expect(resposta.body.conta_Origem_id).to.equal(1);
                expect(resposta.body.conta_Destino_id).to.equal(2);
                expect(resposta.body.valor).to.equal(5000.01);
            })
        })

        describe('GET /transferencias', () => {
            it('Deve retornar 10 elementos na paginação quando informar limite de 10 registros', async () => { 
                const resposta = await request(process.env.BASE_URL)
                    .get('/transferencias?page=1&limite=10')
                    .set('Authorization', `Bearer ${token}`)
               
                expect(resposta.status).to.equal(200)
                expect(resposta.body.limit).to.equal(10)
                expect(resposta.body.transferencias).to.have.lengthOf(10)
            })

    })
})

