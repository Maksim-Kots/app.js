const footer = require('../components/footer')
const head = require ('../components/head')

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