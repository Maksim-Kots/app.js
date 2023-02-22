const express = require("express");
const {request,response} = require("express");

const contacts = require('./view/pages/contacts');
const shop = require('./view/pages/shop');
const mainPage = require("./view/pages/mainPage");
const aboutMe = require("./view/pages/aboutMe");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + './public'));

const db = require('./mocks/products');
const products = require ('./mocks/products')

app.get('/', (request, pesponse)=> {
    response.send(mainPage)
})

app.get('/shop', (request, pesponse)=> {
    response.send(shop)
})

app.get('/shop/:id', (request, response) => {
    const id = request.params.id
    let finded = false
    let index = 0
    let product
    while(db.length > index) {
        console.log(db[index].id, id)
        if(db[index].id === id) {
            finded = true;

            product = db[index]
        }
        index+1

    }
    
    response.send(`<h1> $ {request.params.id}</h1>`)
    response.json(product)
})

app.get('/aboutMe', (request, pesponse)=> {
    response.send(aboutMe)
})

app.get('/contacts', (request, pesponse)=> {
    response.send(contacts)
})

app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000.")
})