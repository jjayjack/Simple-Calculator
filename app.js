// init variables
let x;
let y;

// getSum btn function
document.getElementById('add').addEventListener('click', getSum)
// getDifference btn
document.getElementById('subtract').addEventListener('click', getDifference)
// getProduct btn
document.getElementById('product').addEventListener('click', getProduct)
// getQuotient btn
document.getElementById('quotient').addEventListener('click', getQuotient)

// add switch case?
function getSum() {
    x = parseInt(document.getElementById('num1').value);
    y = parseInt(document.getElementById('num2').value);
    const sum = x + y;
    return document.querySelector('.answer').innerHTML = `
    <h2> ${sum}</h2>`
}

function getDifference() {
    x = parseInt(document.getElementById('num1').value);
    y = parseInt(document.getElementById('num2').value);
    const difference = x - y;
    return document.querySelector('.answer').innerHTML = `
    <h2> ${difference}</h2>` 
}

function getProduct(x,y) {
    x = parseInt(document.getElementById('num1').value);
    y = parseInt(document.getElementById('num2').value);
    const product = x * y;
    return document.querySelector('.answer').innerHTML = `
    <h2> ${product}</h2>`    
}

function getQuotient(x,y) {
    x = parseInt(document.getElementById('num1').value);
    y = parseInt(document.getElementById('num2').value);
    const quotient = x / y;
    return document.querySelector('.answer').innerHTML = `
    <h2> ${quotient}</h2>`    
}

