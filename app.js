// SELECT ELEMENTS
const add = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const cartNum = document.querySelector('#cart-num');
const cartBtn = document.querySelector('.cart-btn');
const rightNav = document.querySelector('.rightnav');
const topNum = document.querySelector('.top-num');
const spanNum = document.querySelector('.my-span');
const multiply = document.querySelector('.multiply');
const items = document.querySelector('.items');
const cart = document.querySelector('.cart');
const navbar = document.querySelector('.navbar');

let number = 0;

// ADD BUTTON
add.addEventListener('click', () => {
    number++;
    cartNum.innerText = number;
    console.log(number);
});

// MINUS BUTTON
minus.addEventListener('click', () => {
    if (number > 0) {
        number--;
    } else {
        number = 0;
    }
    cartNum.innerText = number;
});

// CART
cart.addEventListener('click', () => {
    navbar.classList.toggle('show');
    if (number === 0) {
        items.classList.add('hidden')
    } else {
        items.classList.remove('hidden')
    }
});



// ADD TO CART BUTTON
cartBtn.addEventListener('click', () => {
    if (number > 0) {
        topNum.innerText = number;
        spanNum.innerText = number;
        multiply.innerText = `$${125 * number}.00`;
        rightNav.classList.add('open');
    } else {
        topNum.innerText = 0;
        spanNum.innerText = number;
        rightNav.classList.remove('open');
    }
    if (number === 0) {
        items.classList.add('hidden')
    } else {
        items.classList.remove('hidden')
    }

})


//IMAGES SECTION
const topImg = document.querySelector('.top-img');
const thumbnails = document.querySelectorAll('#change');
const active = document.querySelector('.active');

//HAMBURGER
const burger = document.querySelector('.burger');
// const navbar = document.querySelector('.navbar');
burger.addEventListener('click', () => {
    navbar.classList.toggle("toggle")
})

function countdown(number) {
    //base case
    if (number === 0) {
        return;
    }
    console.log(number);
    return countdown(number - 1);
}
console.log(countdown(7)) // 7, 6, 5, 4, 3, 2, 1

let oddOrEven = (number) => {
    if (number === 0) {
        return 'Even';
    } else if (number === 1) {
        return 'Odd';
    } else {
        return oddOrEven(number % 2);
    }
};
console.log(oddOrEven(20)) // Even
console.log(oddOrEven(75)) // Odd
console.log(oddOrEven(98)) // Even
console.log(oddOrEven(113)) // Odd