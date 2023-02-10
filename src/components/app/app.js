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
            },
            nameFilter: [],

        }

        // console.log(storage)
        this.mainSection = document.querySelector('.large-section');
        this.BtnOpenMainPage = document.querySelector('.sneaker-icon-link');
        this.BtnOpenBasket = document.querySelector('.basket-icon-link');
        this.extraCards = [...cards];

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
        this.NewFiltArr();
        if (this.extraCards.length == 0) {
            this.productsContainer.innerHTML = 'Nothing found';
        }
    }




    StartPage() {
        const mainPage = new mainPageStore(this.storage);
        this.mainSection.innerHTML = mainPage.render(this.storage);
        mainPage.addListener(this.getChangeVal.bind(this));
        this.getStyle(document.querySelectorAll('.list-item'), this.storage.nameFilter);
        this.RenderCards(this.extraCards)
        // console.log(this.extraCards)

    }


    RenderCards(arr) {
        this.productsContainer = document.querySelector('.products-list')
        this.productsContainer.innerHTML = (arr.map(item => {
            const allCards = new Card(item);
            return allCards.render()
        })).join("")
    }

    getStyle(arr1, nameFilter) {
        for (let i = 0; i < arr1.length; i++) {
            if (nameFilter.includes(arr1[i].textContent)) {
                arr1[i].classList.add('list-item-active');
                arr1[i].setAttribute("disabled", "disabled");
            };
        };

        this.ranges = document.querySelectorAll(".slider .progress");
        this.ranges[0].style.left = ((this.storage.filter.priceMin / 1000) * 100) + "%";
        this.ranges[0].style.right = 100 - (this.storage.filter.priceMax / 1000) * 100 + "%";
        this.ranges[1].style.left = ((this.storage.filter.stockMin / this.storage.filter.stockMax) * 100) + "%";
        this.ranges[1].style.right = 100 - (this.storage.filter.stockMax / 50) * 100 + "%";
    };

    NewFiltArr(arr1) {

        if (this.storage.nameFilter == 0) {
            this.extraCards = cards.filter(item => item.price >= this.storage.filter.priceMin && item.price <= this.storage.filter.priceMax && item.stock >= this.storage.filter.stockMin && item.stock <= this.storage.filter.stockMax);

        } else {
            console.log('фильтр с именами')
            // this.extraCards = cards.filter(item => item.price >=this.priceMin && item.price <= this.priceMax && item.stock >= this.stockMin && item.stock <= this.stockMax && this.storage.nameFilter.includes(item.brand))
            this.extraCards = cards.filter(item => this.storage.nameFilter.includes(item.brand) && this.storage.nameFilter.includes(item.category))
            // this.extraCards = arr1.filter(item => item.price >= this.storage.filter.priceMin && item.price <= this.storage.filter.priceMax && item.stock >= this.storage.filter.stockMin && item.stock <= this.storage.filter.stockMax && this.storage.nameFilter.includes(item.brand));
        }

        this.RenderCards(this.extraCards)
    };






    loadBasket() {
        console.log('basket')
        this.mainSection.innerHTML = ''
        const basketPage = new Cart();
        this.mainSection.innerHTML = basketPage.render();
        // this.mainSection.appendChild(basketPage.onLoadBasket())
    }




}