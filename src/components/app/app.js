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
        // this.ranges = document.querySelectorAll(".slider .progress");
        

        this.BtnOpenMainPage.addEventListener('click', () => {
            this.StartPage();
        }) 

        this.BtnOpenBasket.addEventListener('click', () => {
            this.loadBasket()
        }) 

        
        
    }

    getStyle(){

    }
       

        getChangeVal(priceMinCB, priceMaxCB, stockMinCB, stockMaxCB, filtrNameArr) {
            this.storage.filter.priceMin = priceMinCB;
            this.storage.filter.priceMax = priceMaxCB;
            this.storage.filter.stockMin = stockMinCB;
            this.storage.filter.stockMax = stockMaxCB;
            this.storage.nameFilter = [...filtrNameArr]
            console.log('app')
            console.log(this.storage)

        }




        StartPage() {
            console.log(this.storage)
            console.log('append')
            const mainPage = new mainPageStore(this.storage);
            this.mainSection.innerHTML = mainPage.render(this.storage);
            mainPage.addListener(this.getChangeVal.bind(this))
            this.ranges = document.querySelectorAll(".slider .progress");
       
            this.ranges[0].style.left = ((this.storage.filter.priceMin / 1000) * 100) + "%";
            this.ranges[0].style.right = 100 - (this.storage.filter.priceMax/ 1000) * 100 + "%";
            this.ranges[1].style.left = ((this.storage.filter.stockMin / this.storage.filter.stockMax) * 100) + "%";
            this.ranges[1].style.right = 100 - (this.storage.filter.stockMax / 50) * 100 + "%";
            
            // document.querySelectorAll('.list-item').forEach(function (item) {
            // //   if( this.storage.nameFilter.includes(item.textContent)) 
            //       console.log(this.storage.nameFilter)
            //     } )

            this.getStyle(document.querySelectorAll('.list-item'),  this.storage.nameFilter)


            }


        getStyle(arr1, nameFilter) {
            


                console.log(bigArr)
                console.log(smallArr)

                // bigArr.map((elementBig) => {
                //     console.log(elementBig)
                // })
                //     smallArr.map(elementSmall=>{
                //       if(elementBig.textContent === elementSmall){
                //         bigArr.splice(indexBig, 1, elementBig.textContent+= " add style");
                //       }
                      
                //     })
                    
                //   })
                //   return bigArr;


        }
                
            
    




        loadBasket() {
            console.log('basket')
            this.mainSection.innerHTML =''
            const basketPage = new Cart();
            this.mainSection.innerHTML = basketPage.render();
            // this.mainSection.appendChild(basketPage.onLoadBasket())
        }



        
    }
    


