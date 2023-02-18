const express = require("express");
const {request,response} = require("express");

const contacts = require('./view/pages/contacts');
const shop = require('./view/pages/shop');
const mainPage = require("./view/pages/mainPage");
const aboutMe = require("./view/pages/aboutMe");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'))

app.get('/', (request, pesponse)=> {
    response.send(mainPage)
})

app.get('/shop', (request, pesponse)=> {
    response.send(shop)
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