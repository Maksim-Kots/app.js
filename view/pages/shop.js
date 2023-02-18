const card = require('../components/card')
const products = require ('../../mocks/products')


let productsHTML;

for( let i=0; i<product.lenght; i++) {
    productsHTML = productsHTML + card(products[0].photoSrc,  products[0].title, products[0].desc, products[0].price)
}

const shop = `
<!DOCTYPE html>
<html lang="en">
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

