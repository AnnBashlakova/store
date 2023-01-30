import cards from "../../data.js";
import Card from "../view/components/card.js";
import FilterAside from "../view/components/aside.js";
import Cart from "../view/pages/cart/cart.js"
import mainPageStore from "../view/pages/mainPageStore"


export default class App {
    
    constructor() {
        this.mainSection = document.querySelector('.large-section');
        this.BtnOpenMainPage = document.querySelector('.sneaker-icon-link');
        this.BtnOpenBasket = document.querySelector('.basket-icon-link')
        this.loadStore();
        

        // this.BtnOpenMainPage.addEventListener('click', this.loadStore()) 

        // this.BtnOpenBasket.addEventListener('click', this.loadBasket()) 

        
        
    }
        loadStore() {
            console.log('append')
            
            const mainPage = new mainPageStore();
            console.log((mainPage.render()))

            
            this.mainSection.appendChild(mainPage.render());
        }


        loadBasket() {
            console.log('basket')
            this.mainSection.innerHTML =''
            const basketPage = new Cart();
            this.mainSection.appendChild(basketPage.onLoadBasket())
        }


        // openBasket() {
        //     this.basket = new Cart();
        //     this.mainSection.innerHTML = basket.onLoadBasket();
        // }
        
    }
    


