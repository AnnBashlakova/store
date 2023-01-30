import cards from "../../data.js";
import Card from "../view/components/card.js";
import FilterAside from "../view/components/aside.js";
import Cart from "../view/pages/cart/cart.js"
import mainPageStore from "../view/pages/mainPageStore"


export default class App {
    
    constructor() {
        this.mainSection = document.querySelector('.large-section')
        this.loadStore()
        this.store = new mainPageStore
        this.basket = new Cart();
        
        
    }
        loadStore() {
            const mainPage = new mainPageStore()
            this.mainSection.innerHTML = mainPage.render();
        }

        // openBasket() {
        //     this.basket = new Cart();
        //     this.mainSection.innerHTML = basket.onLoadBasket();
        // }
        
    }
    


