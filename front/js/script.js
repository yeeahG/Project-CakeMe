/*---------------------------------nav---------------------------------*/
let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
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






window.onscroll = () => {
    navbar.classList.remove('active');
    myOrders.classList.remove('active');
    cart.classList.remove('active');
}