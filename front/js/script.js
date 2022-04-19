/*---------------------------------nav---------------------------------*/
let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
}


/*---------------------------------cart---------------------------------*/
let slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

/*---------------------------------user---------------------------------*/
let account = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () => {
   account.classList.toggle('active');
}

document.querySelector('#close-account').onclick = () => {
    account.classList.remove('active');
}


/*---------------------------------orders---------------------------------*/
let myOrders = document.querySelector('.my-orders');

document.querySelector('#order-btn').onclick = () => {
    myOrders.classList.toggle('active');
}

document.querySelector('#close-orders').onclick = () => {
    myOrders.classList.remove('active');
}


/*---------------------------------cart---------------------------------*/
let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');
}

document.querySelector('#close-cart').onclick = () => {
    cart.classList.remove('active');
}


/*---------------------------------order---------------------------------*/
let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco => {
    acco.onclick = () => {
        accordion.forEach(remove => remove.classList.remove('active'));
        acco.classList.add('active')
    }
})



window.onscroll = () => {
    navbar.classList.remove('active');
    myOrders.classList.remove('active');
    cart.classList.remove('active');
}