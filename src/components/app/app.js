// import AppController from '../controller/controller';
// export default class App {
//   controller: AppController;

//   constructor() {
//     this.controller = new AppController();
//   }

// }



import cards from "../../data.js";
import {
    getQuery
} from "../view/query.js";
import Card from "../view/components/card.js";

const productsContainer = document.querySelector('.products-list')
// const filterBtns = document.querySelectorAll('.list-item');
// const BtnReset = document.querySelector('.btn-reset')
// const searchInput = document.getElementById('search-input');
// const SelectOption = document.querySelector('select')




// productsContainer.innerHTML = (cards.map(item => {
//             const allCards = new Card(item);
//             return allCards.render()
//         })).join("")
            


// let Option;



class App {

    constructor() {
        this.filterBtns = document.querySelectorAll('.list-item');
        this.BtnReset = document.querySelector('.btn-reset')
        this.searchInput = document.getElementById('search-input');
        this.SelectOption = document.querySelector('select')
        // this.option = this.SelectOption.value;
        // this.handlerCards = [...cards]
        
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
        // this.SortCard(cards)

        }
        
        RenderCards(arr) {
            productsContainer.innerHTML = null;
            productsContainer.innerHTML = (arr.map(item => {
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
            
                    if (this.extraCards.length == 0) {
                        productsContainer.innerHTML = 'Nothing found';
                    }
            
                }
                else if (this.Brand.length == 0 || this.Category.length == 0) {
                    // console.log(searchInput.value.length)
                    this.extraCards = arr1.filter(item => item.price >=this.priceMin && item.price <= this.priceMax && item.stock >= this.stockMin && item.stock <= this.stockMax && params.includes(item.brand)  ||  params.includes(item.category))
            
                    if (this.extraCards.length == 0) {
                        productsContainer.innerHTML = 'Nothing found';
                    }
            
                } else  {
                    this.extraCards = arr1.filter(item => item.price >=this.priceMin && item.price <= this.priceMax && item.stock >= this.stockMin && item.stock <= this.stockMax && params.includes(item.brand)  &&  params.includes(item.category))
                
                    if (extraCards.length == 0) {
                        productsContainer.innerHTML = 'Nothing found';
                    }
                };
                this.RenderCards(this.extraCards)
                this.SortCard(this.extraCards)
                // this.SortCard(this.cards)
                
                
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
                console.log('gggggggg')
            
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
                        this.NewFiltArr(cards, this.nameFilter);
                        this.changeUrl(this.Brand, this.Category);
                        this.SortCard(this.extraCards)
                            
                        if ((maxPrice - this.minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
                            if (e.target.className === "input-min") {
                                rangeInput[0].value = minPrice;
                                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                            } else {
                                rangeInput[1].value = maxPrice;
                                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                            }
                        }
                    });
                });
                rangeInput.forEach(input => {
                    input.addEventListener("input", e => {
                        
                        let minVal = parseInt(rangeInput[0].value),
                            maxVal = parseInt(rangeInput[1].value);
                            this.getPriceVal(e,minVal ,maxVal);
                            this.NewFiltArr(cards, this.nameFilter);
                            this.changeUrl(this.Brand, this.Category);
                            this.SortCard(this.extraCards)
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
            // document.querySelectorAll(".element").forEach(n => slider(n)); //слушатель на два слайдера

    }
    
    const app = new App();




// числовой фильтр
// const priceInputs = document.querySelectorAll(".price-input input");

// function getPriceVal(e,namb1,namb2) {
//     if (e.target.dataset.filter =='price') {
//         priceMin = namb1;
//         priceMax = namb2;
//     } else {
//         stockMin = namb1;
//         stockMax = namb2;
//     }
// }

// const slider = (element) => {

//     const slider = Boolean(element.classList) ? element : document.querySelector(selector);
//     const rangeInput = slider.querySelectorAll(".range-input input");
//     const priceInput = slider.querySelectorAll(".price-input input");
//     const range = slider.querySelector(".slider .progress");

//     let priceGap = 10;


//     //слушатель на инпут
//     priceInput.forEach(input => {
//         input.addEventListener("input", e => {
//             let minPrice = parseInt(priceInput[0].value),
//             maxPrice = parseInt(priceInput[1].value);
//             getPriceVal(e,minPrice, maxPrice);
//             NewFiltArr(cards, nameFilter);
//             changeUrl(Brand, Category);
//             SortCard(extraCards)
                
//             if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
//                 if (e.target.className === "input-min") {
//                     rangeInput[0].value = minPrice;
//                     range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
//                 } else {
//                     rangeInput[1].value = maxPrice;
//                     range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
//                 }
//             }
//         });
//     });


    //слушатель на ползунок
//     rangeInput.forEach(input => {
//         input.addEventListener("input", e => {
            
//             let minVal = parseInt(rangeInput[0].value),
//                 maxVal = parseInt(rangeInput[1].value);
//                 getPriceVal(e,minVal ,maxVal);
//                 NewFiltArr(cards, nameFilter);
//                 changeUrl(Brand, Category);
//                 SortCard(extraCards)
//             if ((maxVal - minVal) < priceGap) {
//                 if (e.target.className === "range-min") {
//                     rangeInput[0].value = maxVal - priceGap
//                 } else {
//                     rangeInput[1].value = minVal + priceGap;
//                 }
//             } else {
//                 priceInput[0].value = minVal;
//                 priceInput[1].value = maxVal;
//                 range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
//                 range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//             }
//         });
//     });
// }

// document.querySelectorAll(".element").forEach(n => slider(n)); //слушатель на два слайдера

const inputStockMin = document.querySelectorAll('.inputMinValue')
const inputStockMax = document.querySelectorAll('.inputMaxValueStock')
const inputPriceMax = document.querySelectorAll('.inputMaxValuePrice')
const Progress = document.querySelectorAll('.progress')

// BtnReset.addEventListener('click',function () {
//     priceMin = 0;
//     priceMax = 1000;
//     stockMin = 0;
//     stockMax = 45;
//     Brand.length = 0;
//     Category.length = 0;
//     nameFilter.length = 0
//     inputStockMin.value = 0;
//     productsContainer.innerHTML = (cards.map(item => allCards.Card(item))).join("");
//     filterBtns.forEach(btn => btn.classList.remove('list-item-active'));
//     filterBtns.forEach(btn => btn.removeAttribute("disabled"));
//     inputStockMin.forEach(inp => inp.value = priceMin);
//     inputStockMax.forEach(inp => inp.value = stockMax);
//     inputPriceMax.forEach(inp => inp.value = priceMax);
//     Progress.forEach(progress => progress.style.right='0%')

// })



//инпут сортировка


function inputFilter() {
    searchInput.addEventListener('input', (event) => {
        productsContainer.innerHTML = null;
        const value = (event.target.value.trim()).toUpperCase();
        let FiltrCard = extraCards.filter(item => (item.brand).toUpperCase().includes(value) || (item.category).toUpperCase().includes(value))
        productsContainer.innerHTML = (FiltrCard.map(item => allCards.Card(item))).join("");
        if (FiltrCard.length == 0) {
            productsContainer.innerHTML = 'Nothing found';
        }
        changeUrl(Brand, Category)
        SortCard(FiltrCard)
        // cards.forEach(card => {
        //     const isVisible = card.brand.includes(value) || card.category.includes(value)
        //     console.log(isVisible)
        //     prodCard.classList.toggle("hidden", !isVisible)
        // })
    })
}
// inputFilter();

//отображеине

const col = document.querySelector('.tile-of-col'),
        row = document.querySelector('.tile-of-row'),
        productList = document.querySelector('.products-list'),
        productCard = document.querySelectorAll('.product-card')

col.addEventListener('click', () => {
    productList.classList.add('products-list-column');
    productCard.forEach((item) => item.classList.add('product-card-column'));
    col.style.border='2px solid red';
    row.style.border='';

});

row.addEventListener('click', () => {
    productList.classList.remove('products-list-column');
    productCard.forEach((item) => item.classList.remove('product-card-column'));
    row.style.border='2px solid red';
    col.style.border='';

});



export default App;