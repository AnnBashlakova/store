import cards from "../../../../data.js"

const add = document.querySelectorAll('.btn-add');
//const totalDiv = document.querySelector('.header-middle');

for (let i = 0; i < add.length; i++) {
    add[i].addEventListener('click', () => {
        cartNums(cards[i]);
        totalAmount(cards[i]);
    })
}

function onLoad() {
    let prodNums = localStorage.getItem('cartNums')

    if (prodNums) {
        document.querySelector('.nmb-items').textContent = prodNums;
    }
}

function cartNums(card, action) {
    let prodNums = localStorage.getItem('cartNums');
    prodNums = parseInt(prodNums);

    let items = localStorage.getItem('prodInCart');
    items = JSON.parse(items);

    if(action) {
        localStorage.setItem("cartNums", prodNums - 1);
        document.querySelector('.nmb-items').textContent = prodNums - 1;
    } else if(prodNums) {
        localStorage.setItem('cartNums', prodNums + 1);
        document.querySelector('.nmb-items').textContent = prodNums + 1;
    } else {
        localStorage.setItem('cartNums', 1);
        document.querySelector('.nmb-items').textContent = 1;
    }
    setItems(card);
}

function setItems(card) {
    let prodNums = localStorage.getItem('cartNums');
    prodNums = parseInt(prodNums);

    let items = localStorage.getItem('prodInCart');
    items = JSON.parse(items);

    if (items !== null) {
        if (items[card.model] == undefined) {
            items = {
                ...items,
                [card.model]: card
            }
        }
        items[card.model].inCart += 1;
    } else {
        card.inCart = 1;
        items = {
            [card.model]: card
        }
    }
    localStorage.setItem('prodInCart', JSON.stringify(items));
}

function totalAmount(card, action) {
    let cost = localStorage.getItem('total');
    
    if (action) {
        cost = parseInt(cost);
        localStorage.setItem('total', cost - card.price)
    } else if (cost !== null) {
        cost = parseInt(cost);
        localStorage.setItem('total', cost + card.price)
    } else {
        localStorage.setItem('total', card.price)
    }
}

function display() {
    let items = localStorage.getItem('prodInCart');
    items = JSON.parse(items)
    let prodCont = document.querySelector('.products');
    let cost = localStorage.getItem('total');
    cost = parseInt(cost);

    if(items && prodCont) {
        prodCont.innerHTML = '';
        Object.values(items).map((item, index) => {
            prodCont.innerHTML += `
            <div class="product">
                <div class="first-part">
                    <h5 class="signs remove">Х</h5>
                    <img class="product-img" src="${item.img1}">
                    <span class="product-name">${item.model}</span>
                </div>
                <div class="price">$${item.price},00</div>
                <div class="quantity">
                    <h5 class="signs increase">+</h5>
                    <span>${item.inCart}</span>
                    <h5 class="signs decrease">-</h5>
                </div>
                <div class="total">
                    $${item.inCart * item.price},00
                </div>
            </div>
            `
        })

        prodCont.innerHTML += `
            <div class="cartTotal">
                <h2 class="cart-total-title">TOTAL AMOUNT</h2>
                <span class="header-totall-price">$${cost},00</span>
                <button class="btn" data-modal-target="#modal">BUY NOW</button>
                <div class="modal" id="modal">
                    <div class="modal-header">
                    <div class="title">PURCHASE</div>
                        <button data-close-button class="close-button">&times;</button>
                    </div>
                    <form action="#" method="GET" class="modal-form" id="form">
                    <div class="modal-body">
                        <div class="form-validation">
                            <input type="text" class"modal-input" id="name" name="name" placeholder="Name">
                            <p>Error</p>
                        </div>
                        <div class="form-validation">
                            <input type="number" class"modal-input" id="number" name="number" placeholder="Phone number">
                            <p>Error</p>
                        </div>
                        <div class="form-validation">
                            <input type="text" class"modal-input" id="address" name="address" placeholder="Delivery address">
                            <p>Error</p>
                        </div>
                        <div class="form-validation">
                            <input type="email" id="email" name="email" placeholder="E-mail">
                            <p>Error</p>
                        </div>
                        <div class="form-validation">
                            <input type="number" id="card-num" name="card" placeholder="Your Card">
                            <p>Error</p>
                        </div>
                        <div class="form-validation">
                            <input type="text" class"sm-input" id="date" name="date" placeholder="MM/YY">
                            <p>Error</p>
                        </div>
                        <div class="form-validation">
                            <input type="number" class"sm-input" id="cvv" name="cvv" placeholder="CVV">
                            <p>Error</p>
                        </div>
                    </div>
                    <input type="submit" class="modal-btn btn" value="Confirm">
                    </form>
                    <h4 class="err-mes">
                        Error!! Check your data!
                    </h4>
                    <h4 class="succ-mes">
                        Thank you for order!
                    </h4>
                </div>
                <div id="overlay"></div>
            </div>
        `;
        deletebtn();
        manage();

    }

    console.log(items)

    if (Object.keys(items).length === 0) {
        prodCont.innerHTML = `
        <h2>Cart is Empty</h2>
            <a href="/index.html">
                <button class="btn">Back to home</button>
            </a>
        `;
    
        deletebtn();
        manage();
    }
}

function manage() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let items = localStorage.getItem('prodInCart');
    items = JSON.parse(items);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(items);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleUpperCase().replace('Х','').trim();
            console.log(currentProduct);

            if(items[currentProduct].inCart > 1 ) {
                items[currentProduct].inCart -= 1;
                cartNums(items[currentProduct], "decrease");
                totalAmount(items[currentProduct], "decrease");
                localStorage.setItem('prodInCart', JSON.stringify(items));
                display();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(items);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleUpperCase().replace('Х','').trim();
            console.log(currentProduct);

            items[currentProduct].inCart += 1;
            cartNums(items[currentProduct]);
            totalAmount(items[currentProduct]);
            localStorage.setItem('prodInCart', JSON.stringify(items));
            display();
        });
    }
}

function deletebtn() {
    let deleteButtons = document.querySelectorAll('.remove');
    let prodNums = localStorage.getItem('cartNums');
    let cost = localStorage.getItem("total");
    let items = localStorage.getItem('prodInCart');
    items = JSON.parse(items);
    let productName;

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleUpperCase().replace('Х','').trim();

            localStorage.setItem('cartNums', prodNums - items[productName].inCart);
            localStorage.setItem('total', cost - ( items[productName].price * items[productName].inCart));

            delete items[productName];
            localStorage.setItem('prodInCart', JSON.stringify(items));

            display();
            onLoad();
        })
    }
}


onLoad();
display();

/// MODAL

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const address = document.getElementById('address');
const number = document.getElementById('number');
const cardNum = document.getElementById('card-num');
const cvv = document.getElementById('cvv');
const date = document.getElementById('date');

const errMes = document.querySelector('.err-mes');
const succMes = document.querySelector('.succ-mes');

function showError(input, message) {
    const formVal = input.parentElement;
    formVal.className = 'form-validation error';

    const error = formVal.querySelector('p');
    error.innerText = message;
    errMes.classList.add('mes-active');
}

function showValid(input) {
    const formVal = input.parentElement;
    formVal.className = 'form-validation valid';

    succMes.classList.add('mes-active');
    errMes.classList.remove('mes-active');
}

function checkRequired(input) {
    input.forEach((input) => {
        if(input.value.trim() === '') {
            showError(input, `${errorName(input)} is required`);
        } else {
            showValid(input);
        }
    })
}

function errorName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${errorName(input)} must have at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${errorName(input)} must have less than ${max} characters`);
    } else {
        showValid(input);
    }
}

function checkLengthCard(input, limit) {
    if(input.value.length < limit || input.value.length > limit) {
        showError(input, `${errorName(input)} must have ${limit} characters`);
    } else {
        showValid(input);
    }
}

/*function slash() {
    let dateVal = date.value;
    if(dateVal.length === 2) {
        dateVal += '/';
    }
}    
date.addEventListener('keyup', slash);*/

form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkRequired([name, email, number, address, cardNum, cvv, date]);
    checkLength(name, 3, 30);
    checkLength(number, 9, 20);
    checkLength(address, 5, 100);
    checkLengthCard(cardNum, 16);
    checkLengthCard(date, 4);
    checkLengthCard(cvv, 3);
})