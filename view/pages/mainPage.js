const footer = require('../components/footer')
const head = require ('../components/head')
const header = require('../components/header');

const mainPage =`
${head('Главная страница')}
<body>
    ${header}
    <main>
    <div>
    <h1></h1>
    <p></p>
    </main>
    ${footer}
</body>
</html>
`
module.exports = mainPage;