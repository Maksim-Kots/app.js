const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const contacts = require('./view/pages/aboutMe')
const contacts = require('./view/pages/contacts')
const contacts = require('./view/pages/mainPage')
const contacts = require('./view/pages/shop');
const { response } = require("express");
const mainPage = require("./view/pages/mainPage");
const aboutMe = require("./view/pages/aboutMe");


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'))

app.get('/contacts', (req, res) => {
    console.log(req.headers)// req.body, req.headers, req.query
    const student = {
        name: "Максим",
        group: "ИС-22-11"
    }
    res.send(pageContacts)
})

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