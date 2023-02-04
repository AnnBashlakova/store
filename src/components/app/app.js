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
        nameFilter: [],
            
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


        getChangeVal(priceMinCB, priceMaxCB, stockMinCB, stockMaxCB, filtrNameArr) {
            this.storage.filter.priceMin = priceMinCB;
            this.storage.filter.priceMax = priceMaxCB;
            this.storage.filter.stockMin = stockMinCB;
            this.storage.filter.stockMax = stockMaxCB;
            this.storage.nameFilter = [...filtrNameArr]
            console.log('app')
            console.log(this.storage.nameFilter)
            console.log(filtrNameArr)

        }




        StartPage() {
            console.log(this.storage)
            console.log('append')
            const mainPage = new mainPageStore(this.storage);
            this.mainSection.innerHTML = mainPage.render(this.storage);
            mainPage.addListener(this.getChangeVal.bind(this))
            // mainPage.getPriceVal(this.storage)
        }




        loadBasket() {
            console.log('basket')
            this.mainSection.innerHTML =''
            const basketPage = new Cart();
            this.mainSection.innerHTML = basketPage.render();
            // this.mainSection.appendChild(basketPage.onLoadBasket())
        }



        
    }
    


