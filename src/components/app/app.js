import cards from "../../data.js";
import Card from "../view/components/card.js";
import Cart from "../view/pages/cart/cart.js"


export default class App {
    
    constructor() {
        this.productsContainer = document.querySelector('.products-list')
        this.filterBtns = document.querySelectorAll('.list-item');
        this.BtnReset = document.querySelector('.btn-reset')
        this.searchInput = document.getElementById('search-input');
        this.SelectOption = document.querySelector('select')

        
        this.RenderCards(cards)
        
        this.extraCards = [...cards];//копии массива с карточками товаров
        ////////
        this.priceMin = '0';
        this.priceMax = '1000';
        this.stockMin = '0';
        this.stockMax = '45';
        this.sortCards = [...cards];
        this.Brand = [];
        this.Category = [];
        this.nameFilter = [];
        this.getNameFIlter(cards, this.nameFilter)
        this.SelectOption.addEventListener('change',() => this.SortCard(this.sortCards))
        document.querySelectorAll(".element").forEach(n => this.slider(n)); //слушатель на два слайдера
        this.inputFilter()
        ////
        this.inputStockMin = document.querySelectorAll('.inputMinValue')
        this.inputStockMax = document.querySelectorAll('.inputMaxValueStock')
        this.inputPriceMax = document.querySelectorAll('.inputMaxValuePrice')
        this.Progress = document.querySelectorAll('.progress')
        this.BtnReset.addEventListener('click', () => this.resetAll())
        ////
        this.col = document.querySelector('.tile-of-col'),
        this.row = document.querySelector('.tile-of-row'),
        this.productList = document.querySelector('.products-list'),
        this.productCard = document.querySelectorAll('.product-card')

        this.col.addEventListener('click', () => this.ColumnCard())
        this.row.addEventListener('click', () => this.RowCard())
        this.cart = new Cart();

        }
        
        RenderCards(arr) {
            this.productsContainer.innerHTML = null;
            this.productsContainer.innerHTML = (arr.map(item => {
                const allCards = new Card(item);
                return allCards.render()
            })).join("")
        }

        SortCard(arr) {
            console.log(this.SelectOption)
            console.log( this.option)
            this.option = this.SelectOption.value;
            // productsContainer.innerHTML = null;
            
            if ( this.option == 'value1') {
                this.sortCards = this.extraCards.sort((a,b) =>a.price - b.price);
                
            } else if ( this.option == 'value2') {
                this.sortCards = this.extraCards.sort((a,b) =>b.price - a.price);
                
                
            } else if ( this.option == 'value3') {
                this.sortCards = this.extraCards.sort((a,b) =>a.stock - b.stock);
    
            
            } else if ( this.option == 'value4') {
                this.sortCards = this.extraCards.sort((a,b) =>b.stock - a.stock);
    

            }
            this.RenderCards(this.sortCards)

        }
        

        changeUrl (arrBrand, arrCategory) {
            let url = new URL(window.location)
            // let params = new URLSearchParams(url.search)
            let strNamefilterBrand = this.Brand.join('%')
            let strNamefilterCategory = this.Category.join('%')
            strNamefilterBrand && url.searchParams.set('brand' , strNamefilterBrand);
            strNamefilterCategory && url.searchParams.set('category' , strNamefilterCategory);
            url.searchParams.set('price' , `${this.priceMin}to${this.priceMax}`);
            url.searchParams.set('stock' , `${this.stockMin}to${this.stockMax}`);
            url.searchParams.set('search' , this.searchInput.value );
            console.log(url)
            // window.location = url;
            window.history.pushState({}, '', url.href); 
            }

            getNameFIlter(arr, arr2) {
                for (let btn of this.filterBtns) {
                    btn.addEventListener('click', (event) => {
                        btn.toggleAttribute("disabled")
                        btn.classList.toggle('list-item-active')
                        let name = btn.textContent;
                        this.nameFilter.push(name)
                        if (btn.dataset.filter == 'category') {
                            this.Category.push(name);
                        } else {
                            this.Brand.push(name);
                        }
                    
                        this.NewFiltArr(cards, this.nameFilter)
                        this.changeUrl(this.Brand, this.Category);
                        // this.SortCard(cards)
                    });
            
                };
            };
            

                NewFiltArr(arr1, params) {

                if (this.Brand.length == 0 && this.Category.length == 0 ) {
                    
                    this.extraCards = arr1.filter(item =>item.price >= this.priceMin && item.price <= this.priceMax && item.stock >= this.stockMin && item.stock <= this.stockMax)
            
            
                }
                else if (this.Brand.length == 0 || this.Category.length == 0) {
                    // console.log(searchInput.value.length)
                    this.extraCards = arr1.filter(item => item.price >=this.priceMin && item.price <= this.priceMax && item.stock >= this.stockMin && item.stock <= this.stockMax && params.includes(item.brand)  ||  params.includes(item.category))
            

            
                } else  {
                    this.extraCards = arr1.filter(item => item.price >=this.priceMin && item.price <= this.priceMax && item.stock >= this.stockMin && item.stock <= this.stockMax && params.includes(item.brand)  &&  params.includes(item.category))
                
                    if (this.extraCards.length == 0) {
                        productsContainer.innerHTML = 'Nothing found';
                    }
                };

                this.RenderCards(this.extraCards)

                if (this.extraCards.length == 0) {
                    productsContainer.innerHTML = 'Nothing found';
                }
                
            };


            getPriceVal(e,namb1,namb2) {
                if (e.target.dataset.filter =='price') {
                    this.priceMin = namb1;
                    this.priceMax = namb2;
                } else {
                    this.stockMin = namb1;
                    this.stockMax = namb2;
                }
            }
            
            slider (element) {
            
                const slider = Boolean(element.classList) ? element : document.querySelector(selector);
                const rangeInput = slider.querySelectorAll(".range-input input");
                const priceInput = slider.querySelectorAll(".price-input input");
                const range = slider.querySelector(".slider .progress");
            
                let priceGap = 10;
            
            
                //слушатель на инпут
                priceInput.forEach(input => {
                    input.addEventListener("input", e => {
                        let minPrice = parseInt(priceInput[0].value);
                        let maxPrice = parseInt(priceInput[1].value);
                        this.getPriceVal(e,minPrice, maxPrice);
                        this.NewFiltArr(this.extraCards, this.nameFilter);
                        this.changeUrl(this.Brand, this.Category);
                        this.SortCard(this.extraCards)
                        this.RenderCards(this.extraCards)
                        if (this.extraCards.length == 0) {
                            productsContainer.innerHTML = 'Nothing found';
                        }
                        
                        if ((maxPrice - this.minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
                            if (e.target.className === "input-min") {
                                rangeInput[0].value = minPrice;
                                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                            } else {
                                rangeInput[1].value = maxPrice;
                                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                            }
                        }
                        if (this.extraCards.length == 0) {
                            productsContainer.innerHTML = 'Nothing found';
                        }
                    });
                });
                rangeInput.forEach(input => {
                    input.addEventListener("input", e => {
                        
                        let minVal = parseInt(rangeInput[0].value),
                            maxVal = parseInt(rangeInput[1].value);
                            this.getPriceVal(e,minVal ,maxVal);
                            this.NewFiltArr(this.extraCards, this.nameFilter);
                            this.changeUrl(this.Brand, this.Category);
                            this.SortCard(this.extraCards)
                            console.log(this.extraCards)
                            this.RenderCards(this.extraCards)
                            if (this.extraCards.length == 0) {
                                productsContainer.innerHTML = 'Nothing found';
                            }
                        if ((maxVal - minVal) < priceGap) {
                            if (e.target.className === "range-min") {
                                rangeInput[0].value = maxVal - priceGap
                            } else {
                                rangeInput[1].value = minVal + priceGap;
                            }
                        } else {
                            priceInput[0].value = minVal;
                            priceInput[1].value = maxVal;
                            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                        }
                    });
                });
            }

            inputFilter() {
                this.searchInput.addEventListener('input', (event) => {
                    const value = (event.target.value.trim()).toUpperCase();
                    console.log(value)
                    console.log(this.extraCards.filter(item => (item.brand).toUpperCase().includes(value) || (item.category).toUpperCase().includes(value)))
                    let filtrCard = this.extraCards.filter(item => (item.brand).toUpperCase().includes(value) || (item.category).toUpperCase().includes(value))
                    
                    this.RenderCards(filtrCard)
                    if (filtrCard.length == 0) {
                        productsContainer.innerHTML = 'Nothing found';
                    }
                })
            }

            resetAll() {
                    this.priceMin = 0;
                    this.priceMax = 1000;
                    this.stockMin = 0;
                    this.stockMax = 45;
                    this.Brand.length = 0;
                    this.Category.length = 0;
                    this.nameFilter.length = 0
                    this.inputStockMin.value = 0;
                    
                    this.filterBtns.forEach(btn => btn.classList.remove('list-item-active'));
                    this.filterBtns.forEach(btn => btn.removeAttribute("disabled"));
                    this.inputStockMin.forEach(inp => inp.value = this.priceMin);
                    this.inputStockMax.forEach(inp => inp.value = this.stockMax);
                    this.inputPriceMax.forEach(inp => inp.value = this.priceMax);
                    this.Progress.forEach(progress => progress.style.right='0%')
                    this.Progress.forEach(progress => progress.style.left='0%')
                    this.RenderCards(cards)
                
            }


            ColumnCard() {
                this.productList.classList.add('products-list-column');
                this.productCard.forEach((item) => item.classList.add('product-card-column'));
                this.col.style.border='2px solid red';
                this.row.style.border='';
            }


            RowCard() {
                this.productList.classList.remove('products-list-column');
                this.productCard.forEach((item) => item.classList.remove('product-card-column'));
                this.row.style.border='2px solid red';
                this.col.style.border='';
            }

    }
    
    // const app = new App();

