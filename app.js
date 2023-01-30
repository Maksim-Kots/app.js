const express = require("express")
const bodyParser = require("body-parser")
const app = express();

const pageContacts = require("./view/contacts")

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

app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000.")
})