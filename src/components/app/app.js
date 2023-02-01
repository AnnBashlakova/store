import cards from "../../data.js";
import Card from "../view/components/card.js";
import FilterAside from "../view/components/aside.js";
import Cart from "../view/pages/cart/cart.js"
import mainPageStore from "../view/pages/mainPageStore"


export default class App {
    
    constructor() {

       const  storage = {
          filter: {
            priceMin: '0',
            priceMax: '1000',
            stockMin: '0',
            stockMax: '45'
          } , 
            
        }

        // console.log(storage)
        this.mainSection = document.querySelector('.large-section');
        this.BtnOpenMainPage = document.querySelector('.sneaker-icon-link');
        this.BtnOpenBasket = document.querySelector('.basket-icon-link')

        

        this.BtnOpenMainPage.addEventListener('click', () => {
            this.StartPage();
        }) 

        this.BtnOpenBasket.addEventListener('click', () => {
            this.loadBasket()
        }) 

        
        
    }
        StartPage() {
            // console.log(this.storage)
            console.log('append')
            const mainPage = new mainPageStore(this.storage);
            this.mainSection.innerHTML = mainPage.render()
        }


        loadBasket() {
            console.log('basket')
            this.mainSection.innerHTML =''
            const basketPage = new Cart();
            this.mainSection.innerHTML = basketPage.render()
            // this.mainSection.appendChild(basketPage.onLoadBasket())
        }


        // openBasket() {
        //     this.basket = new Cart();
        //     this.mainSection.innerHTML = basket.onLoadBasket();
        // }
        
    }
    


