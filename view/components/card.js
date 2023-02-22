module.exports = (photo, title, desc, price) => {
    
    return `
    <div class = "card">
    <img href = ${photohref}>
    <h3>${title}</h3>
    <p>${desc}</p>
    <strong>${price}</strong>
    <button>В корзину</button>
    </div>
    `
}