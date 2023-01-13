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
const filterBtns = document.querySelectorAll('.list-item');
const BtnReset = document.querySelector('.btn-reset')
const searchInput = document.getElementById('search-input');
const SelectOption = document.querySelector('select')


// class 

const allCards = new Card(cards)

    // productsContainer.innerHTML = (cards.map(item => {
    //     const card = new Card(item)}
    //     ).join(""); //заполнение верстки карточками


    // productsContainer.innerHTML = (cards.map(item => {
    //     const card = new Card(item)}
    //     )).join(""); //заполнение верстки карточками

        productsContainer.innerHTML = (cards.map(item => allCards.сard(item))).join("");

let Option;

// class Sort {

// }

function SortCard(arr){
    SelectOption.addEventListener('change', () => {
        console.log(SelectOption.value)
        Option = SelectOption.value
        if (Option == 'value1') {
            let sortCards = arr.sort((a,b) =>a.price - b.price);

            productsContainer.innerHTML = (sortCards.map(item =>Cards.Card(item))).join("");
        } else if (Option == 'value2') {
            let sortCards = arr.sort((a,b) =>b.price - a.price);

            productsContainer.innerHTML = (sortCards.map(item => Cards.Card(item))).join("");
        } else if (Option == 'value3') {
            let sortCards = arr.sort((a,b) =>a.stock - b.stock);

            productsContainer.innerHTML = (sortCards.map(item => Cards.Card(item))).join("");
        } else if (Option == 'value4') {
            let sortCards = arr.sort((a,b) =>b.stock - a.stock);

            productsContainer.innerHTML = (sortCards.map(item => Cards.Card(item))).join("");
        }
    })
}

// function SortCard(arr){
//     SelectOption.addEventListener('change', () => {
//         console.log(SelectOption.value)
//         Option = SelectOption.value
//         if (Option == 'value1') {
//             let sortCards = arr.sort((a,b) =>a.price - b.price);

//             productsContainer.innerHTML = (sortCards.map(item => Card(item))).join("");
//         } else if (Option == 'value2') {
//             let sortCards = arr.sort((a,b) =>b.price - a.price);

//             productsContainer.innerHTML = (sortCards.map(item => Card(item))).join("");
//         } else if (Option == 'value3') {
//             let sortCards = arr.sort((a,b) =>a.stock - b.stock);

//             productsContainer.innerHTML = (sortCards.map(item => Card(item))).join("");
//         } else if (Option == 'value4') {
//             let sortCards = arr.sort((a,b) =>b.stock - a.stock);

//             productsContainer.innerHTML = (sortCards.map(item => Card(item))).join("");
//         }
//     })
// }

SortCard(cards);
// function SortCard() {
//     SelectOption.forEach(opt => opt.addEventListener('click', () => {
//         console.log('fgggfg')
//     }))
// }
// SortCard();

// const allCards = new AllCards(cards)
// console.log(allCards)
//     productsContainer.innerHTML = (cards.map(item => allCards.Card(item))).join(""); //заполнение верстки карточками



let extraCards = [...cards];//копии массива с карточками товаров



let priceMin = '0';
let priceMax = '1000';

let stockMin = '0';
let stockMax = '45';

let Brand = [];
let Category = [];
let nameFilter = [];


function changeUrl (arrBrand, arrCategory) {
    let url = new URL(window.location)
    // let params = new URLSearchParams(url.search)
    let strNamefilterBrand = arrBrand.join('%')
    let strNamefilterCategory = arrCategory.join('%')
    strNamefilterBrand && url.searchParams.set('brand' , strNamefilterBrand);
    strNamefilterCategory && url.searchParams.set('category' , strNamefilterCategory);
    url.searchParams.set('price' , `${priceMin}to${priceMax}`);
    url.searchParams.set('stock' , `${stockMin}to${stockMax}`);
    url.searchParams.set('search' , searchInput.value );
    console.log(url)
    // window.location = url;
    window.history.pushState({}, '', url.href); 
}


//массив с параметрами фильтра-> при клике, фильтрация карточек, по параметрам из массива
function getNameFIlter() {
    for (let btn of filterBtns) {
        btn.addEventListener('click', (event) => {
            btn.toggleAttribute("disabled")
            btn.classList.toggle('list-item-active')
            let name = event.target.textContent;
            nameFilter.push(name)
            if (event.target.dataset.filter == 'category') {
                Category.push(name);
            } else {
                Brand.push(name);
            }
            NewFiltArr(cards, nameFilter);
            changeUrl(Brand, Category);
        });

    };
};
getNameFIlter();

//фильтрация по категориям
function NewFiltArr(arr1, params) {
    productsContainer.innerHTML = null;

    if (Brand.length == 0 && Category.length == 0 ) {
        
        extraCards = arr1.filter(item =>item.price >= priceMin && item.price <= priceMax && item.stock >= stockMin && item.stock <= stockMax)
        productsContainer.innerHTML = (extraCards.map(item => Card(item))).join("");
        if (extraCards.length == 0) {
            productsContainer.innerHTML = 'Nothing found';
        }

    }
    else if (Brand.length == 0 || Category.length == 0) {
        console.log(searchInput.value.length)
        extraCards = arr1.filter(item => item.price >= priceMin && item.price <= priceMax && item.stock >= stockMin && item.stock <= stockMax && params.includes(item.brand)  ||  params.includes(item.category))
        productsContainer.innerHTML = (extraCards.map(item => Card(item))).join("");
        if (extraCards.length == 0) {
            productsContainer.innerHTML = 'Nothing found';
        }

    } else  {
        extraCards = arr1.filter(item => item.price >= priceMin && item.price <= priceMax && item.stock >= stockMin && item.stock <= stockMax && params.includes(item.brand)  &&  params.includes(item.category))
        productsContainer.innerHTML = (extraCards.map(item => Card(item))).join("");
        if (extraCards.length == 0) {
            productsContainer.innerHTML = 'Nothing found';
        }
    };
    SortCard(extraCards)
    
};




// числовой фильтр
// const priceInputs = document.querySelectorAll(".price-input input");

function getPriceVal(e,namb1,namb2) {
    if (e.target.dataset.filter =='price') {
        priceMin = namb1;
        priceMax = namb2;
    } else {
        stockMin = namb1;
        stockMax = namb2;
    }
}

const slider = (element) => {

    const slider = Boolean(element.classList) ? element : document.querySelector(selector);
    const rangeInput = slider.querySelectorAll(".range-input input");
    const priceInput = slider.querySelectorAll(".price-input input");
    const range = slider.querySelector(".slider .progress");

    let priceGap = 10;


    //слушатель на инпут
    priceInput.forEach(input => {
        input.addEventListener("input", e => {
            let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);
            getPriceVal(e,minPrice, maxPrice);
            NewFiltArr(cards, nameFilter);
            changeUrl(Brand, Category);
            SortCard(extraCards)
                
            if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
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


    //слушатель на ползунок
    rangeInput.forEach(input => {
        input.addEventListener("input", e => {
            
            let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value);
                getPriceVal(e,minVal ,maxVal);
                NewFiltArr(cards, nameFilter);
                changeUrl(Brand, Category);
                SortCard(extraCards)
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

document.querySelectorAll(".element").forEach(n => slider(n)); //слушатель на два слайдера

const inputStockMin = document.querySelectorAll('.inputMinValue')
const inputStockMax = document.querySelectorAll('.inputMaxValueStock')
const inputPriceMax = document.querySelectorAll('.inputMaxValuePrice')
const Progress = document.querySelectorAll('.progress')

BtnReset.addEventListener('click',function () {
    priceMin = 0;
    priceMax = 1000;
    stockMin = 0;
    stockMax = 45;
    Brand.length = 0;
    Category.length = 0;
    nameFilter.length = 0
    inputStockMin.value = 0;
    productsContainer.innerHTML = (cards.map(item => allCards.Card(item))).join("");
    filterBtns.forEach(btn => btn.classList.remove('list-item-active'));
    filterBtns.forEach(btn => btn.removeAttribute("disabled"));
    inputStockMin.forEach(inp => inp.value = priceMin);
    inputStockMax.forEach(inp => inp.value = stockMax);
    inputPriceMax.forEach(inp => inp.value = priceMax);
    Progress.forEach(progress => progress.style.right='0%')

})



//инпут сортировка


function inputFilter() {
    searchInput.addEventListener('input', (event) => {
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
inputFilter();

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