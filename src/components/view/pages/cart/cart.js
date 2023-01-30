import cards from "../../../../data.js";

export default class Cart {
    constructor () {
        this.BtnOpenBasket = document.querySelector('basket-icon-container')
        this.add = document.querySelectorAll('.btn-add');

        this.name = document.getElementById('name');
        this.email = document.getElementById('email');
        this.address = document.getElementById('address');
        this.number = document.getElementById('number');
        this.cardNum = document.getElementById('card-num');
        this.cvv = document.getElementById('cvv');
        this.date = document.getElementById('date');
        this.errMes = document.querySelector('.err-mes');
        this.succMes = document.querySelector('.succ-mes');
        this.BtnOpenBasket = document.querySelector('.basket-icon-link')
        this.mainSection = document.querySelector('.large-section')
        this.BtnOpenBasket.addEventListener('click', () => this.onLoadBasket())
        for (let i = 0; i < this.add.length; i++) {
            this.add[i].addEventListener('click', () => {
                this.cartNums(cards[i]);
                this.totalAmount(cards[i]);
            })
        }

        this.onLoad();
    }


    onLoadBasket() {
        this.mainSection.innerHTML = `<main class="main-container container">
                <section class="products-container cart">
                    <div class="product-header">
                        <h5 class="product-title">PRODUCT</h5>
                        <h5 class="price">PRICE</h5>
                        <h5 class="quantity">QUANTITY</h5>
                        <h5 class="total">TOTAL</h5>
                    </div>
                    <div class="products">
                    </div>
                </section>
            </main>`;

        this.prodCont = document.querySelector('.products');
        this.display();
    }





    onLoad() {
        let prodNums = localStorage.getItem('cartNums');
        if (prodNums) {
            document.querySelector('.nmb-items').textContent = prodNums;
        }
    }

    cartNums(card, action) {
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
        this.setItems(card);
    }

    setItems(card) {
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

    totalAmount(card, action) {
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

    display() {
        let items = localStorage.getItem('prodInCart');
        items = JSON.parse(items)
        //let prodCont = document.querySelector('.products');
        console.log(this.prodCont)
        let cost = localStorage.getItem('total');
        cost = parseInt(cost);
    
        if(items && this.prodCont) {
            this.prodCont.innerHTML = '';
            console.log(items)
            Object.values(items).map((item, index) => {
                this.prodCont.innerHTML += `
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
    
            this.prodCont.innerHTML += `
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

            this.openModalButtons = document.querySelectorAll('[data-modal-target]');
            this.closeModalButtons = document.querySelectorAll('[data-close-button]');

            this.openModalButtons.forEach(button => {
                button.addEventListener('click', () => {
                const modal = document.querySelector(button.dataset.modalTarget)
                this.openModal(modal)
                })
            })
    
          
    
            this.closeModalButtons.forEach(button => {
                button.addEventListener('click', () => {
                const modal = button.closest('.modal')
                this.closeModal(modal)
                })
            })


            this.deletebtn();
            this.manage();
            this.overlay = document.getElementById('overlay');
            this.overlay.addEventListener('click', () => {
            const modals = document.querySelectorAll('.modal.active')
            modals.forEach(modal => {
            this.closeModal(modal)
            })


            this.form = document.getElementById('form');
            this.form.addEventListener('submit', (event) => {
                console.log('sffs')
            event.preventDefault();
        
            this.checkRequired([this.name, this.email, this.number, this.address, this.cardNum, this.cvv, this.date]);
            this.checkLength(this.name, 3, 30);
            this.checkLength(this.number, 9, 20);
            this.checkLength(this.address, 5, 100);
            this.checkLengthCard(this.cardNum, 16);
            this.checkLengthCard(this.date, 4);
            this.checkLengthCard(this.cvv, 3);
        })

        
        })

            console.log()
    
        }
    
        //console.log(prodCont)
        if (items === null) {
            this.prodCont.innerHTML = `
            <h2>Cart is Empty</h2>
                <a href="/index.html">
                    <button class="btn">Back to home</button>
                </a>
            `;
        
            this.deletebtn();
            this.manage();
        }
    }

    manage() {
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
                    this.cartNums(items[currentProduct], "decrease");
                    this.totalAmount(items[currentProduct], "decrease");
                    localStorage.setItem('prodInCart', JSON.stringify(items));
                    this.display();
                }
            });
    
            increaseButtons[i].addEventListener('click', () => {
                console.log(items);
                currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
                console.log(currentQuantity);
                currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleUpperCase().replace('Х','').trim();
                console.log(currentProduct);
    
                items[currentProduct].inCart += 1;
                this.cartNums(items[currentProduct]);
                this.totalAmount(items[currentProduct]);
                localStorage.setItem('prodInCart', JSON.stringify(items));
                this.display();
            });
        }
    }

    deletebtn() {
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
    
                this.display();
                this.onLoad();
            })
        }
    }

///              MODAL             ///

    openModal(modal) {
        if (modal == null) return
        modal.classList.add('active')
        this.overlay.classList.add('active')
    }

    closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        this.overlay.classList.remove('active')
    }

    showError(input, message) {
        const formVal = input.parentElement;
        formVal.className = 'form-validation error';
    
        const error = formVal.querySelector('p');
        error.innerText = message;
        this.errMes.classList.add('mes-active');
    }

    showValid(input) {
        const formVal = input.parentElement;
        formVal.className = 'form-validation valid';
    
        this.succMes.classList.add('mes-active');
        this.errMes.classList.remove('mes-active');
    }

    checkRequired(input) {

        input.forEach((input) => {
            console.log(input)
            if(input.value.trim() === '') {
                this.showError(input, `${errorName(input)} is required`);
            } else {
                this.showValid(input);
            }
        })
    }

    errorName(input) {
        return input.name.charAt(0).toUpperCase() + input.name.slice(1);
    }

    checkLength(input, min, max) {
        if(input.value.length < min) {
            this.showError(input, `${errorName(input)} must have at least ${min} characters`);
        } else if (input.value.length > max) {
            this.showError(input, `${errorName(input)} must have less than ${max} characters`);
        } else {
            this.showValid(input);
        }
    }

    checkLengthCard(input, limit) {
        if(input.value.length < limit || input.value.length > limit) {
            this.showError(input, `${errorName(input)} must have ${limit} characters`);
        } else {
            this.showValid(input);
        }
    }
}

// const cart = new Cart();

// export default Cart;


