import cards from "../../data.js";
import Card from "../view/components/card.js";
import FilterAside from "../view/components/aside.js";
import Cart from "../view/pages/cart/cart.js"
import mainPageStore from "../view/pages/mainPageStore"


export default class App {
    
    constructor() {

       this.storage = {
          filter: {
            priceMin: '2',
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
            console.log(this.storage)
            console.log('append')
            const mainPage = new mainPageStore(this.storage);
            this.mainSection.innerHTML = mainPage.render(this.storage)
            mainPage.addListener()
        }


        // Listener(){
        //     console.log('eventlist')
        //   }


        loadBasket() {
            console.log('basket')
            this.mainSection.innerHTML =''
            const basketPage = new Cart();
            this.mainSection.innerHTML = basketPage.render()
            // this.mainSection.appendChild(basketPage.onLoadBasket())
        }


        // getPriceVal(e,namb1,namb2) {
        //     if (e.target.dataset.filter =='price') {
        //         this.priceMin = namb1;
        //         this.priceMax = namb2;
        //     } else {
        //         this.stockMin = namb1;
        //         this.stockMax = namb2;
        //     }
        // }



        
    }
    


