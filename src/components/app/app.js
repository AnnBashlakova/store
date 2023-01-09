import cards from "../../data.js";
import {
    getQuery
} from "../view/query.js";
import Card from "../view/components/card.js";



const productsContainer = document.querySelector('.products-list')
const filterBtns = document.querySelectorAll('.list-item');

    productsContainer.innerHTML = (cards.map(item => Card(item))).join(""); //заполнение верстки карточками



let extraCards = [...cards];//копии массива с карточками товаров


//const searchInput = document.getElementById('search-input');
let priceMin = 0;
let priceMax = 1000;

let stockMin = 0;
let stockMax = 45;

let Brand = [];
let Category = [];
let nameFilter = [];
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
            NewFiltArr(cards, nameFilter)
        });

    };
};
getNameFIlter();

//фильтрация по категориям
function NewFiltArr(arr1, params) {
    productsContainer.innerHTML = null;

    if (Brand.length == 0 && Category.length == 0) {
        console.log(priceMin)
        console.log(stockMax)
        extraCards = arr1.filter(item =>item.price >= priceMin && item.price <= priceMax && item.stock >= stockMin && item.stock <= stockMax)
        productsContainer.innerHTML = (extraCards.map(item => Card(item))).join("");

    }
    else if (Brand.length == 0 || Category.length == 0) {
        console.log(priceMin)
        console.log(stockMax)
        extraCards = arr1.filter(item => item.price >= priceMin && item.price <= priceMax && item.stock >= stockMin && item.stock <= stockMax && params.includes(item.brand)  ||  params.includes(item.category))
        productsContainer.innerHTML = (extraCards.map(item => Card(item))).join("");

    } else  {
        console.log(priceMin)
        console.log(stockMax)
        extraCards = arr1.filter(item => item.price >= priceMin && item.price <= priceMax && item.stock >= stockMin && item.stock <= stockMax && params.includes(item.brand)  &&  params.includes(item.category))
        productsContainer.innerHTML = (extraCards.map(item => Card(item))).join("");
    };
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
            NewFiltArr(cards, nameFilter)
                
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
                NewFiltArr(cards, nameFilter)
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

document.querySelector('.btn-reset').addEventListener('click',function () {
    priceMin = 0;
    priceMax = 1000;
    stockMin = 0;
    stockMax = 45;
    Brand.length = 0;
    Category.length = 0;
    nameFilter.length = 0
    productsContainer.innerHTML = (cards.map(item => Card(item))).join("");
    filterBtns.forEach(btn => btn.classList.remove('list-item-active'));
    filterBtns.forEach(btn => btn.removeAttribute("disabled"));
    inputStockMin.forEach(inp => inp.value = priceMin);
    inputStockMax.forEach(inp => inp.value = stockMax);
    inputPriceMax.forEach(inp => inp.value = priceMax);
    Progress.forEach(progress => progress.style.right='0%')

})
/*let nameFilter = []
let url = new URL(window.location)
let params = new URLSearchParams(url.search)
//url.searchParams.set('nike');
console.log(url)
//window.location = url;

btn.addEventListener('click', (event) => {
    if (event.target) {
        params.append(event.target.textContent, event.target.value);
    }
})*/

// function enabledROuteChange() {
//     window.addEventListener('hashchange', () => {
//         const hash= window.location.hash;
//         console.log(hash)
//     })
// }
// enabledROuteChange()




// let url = new URL(window.location)


// const urlParams = new URLSearchParams(window.location.search);

// console.log(url)
// console.log(urlParams)
// console.log(params)

// new URL('https://google.com/search?query=JavaScript')


//инпут сортировка


/*function inputFilter() {
    searchInput.addEventListener('input', (event) => {
        const value = event.target.value;
        cards.forEach(card => {
            const isVisible = card.brand.includes(value) || card.category.includes(value)
            console.log(isVisible)
            prodCard.classList.toggle("hidden", !isVisible)
        })
    })
}
inputFilter();*/