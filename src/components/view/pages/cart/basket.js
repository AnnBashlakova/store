export default class Basket {
    constructor () {
        this.BtnOpenBasket = document.querySelector('.basket-icon-link')
        this.mainSection = document.querySelector('.large-section')
        this.BtnOpenBasket.addEventListener('click', () => this.onLoadBasket())
    
        }
        onLoadBasket() {
            console.log(this.mainSection)
            console.log('fdfdfff')
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

        }


    }


