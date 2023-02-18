const card = require('../components/card')
const products = require ('../../mocks/products')


let productsHTML = "";

for( let i=0; i < product.lenght; i++) {
    productsHTML = productsHTML + card(products[i].photoSrc,  products[i].title, products[i].desc, products[i].price)
}

const shop = `
    ${head('Это магазин')}
    <body>
        ${header}
        <div class='products'>
        ${productsHTML}
        </div>
        ${footer}
    </body>
</html>
`
module.exports = shop;
