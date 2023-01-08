import cards from "../../data.js";
import { getQuery } from "../view/query.js";
import Card from "../view/components/card.js";


const productsContainer = document.querySelector('.products-list');
const filterBtns = document.querySelectorAll('.list-item');


productsContainer.innerHTML = (cards.map(item => Card(item))).join("");

let NumberMin = 0;
let NumberMax = 1000;
let extraCards = [...cards];
let extraCardsAllFilter = [...cards];

function getNumberFilter() {
    NumberMin = priceInputs[0].value
    NumberMax = priceInputs[1].value
    // console.log(NumberMin)
    // console.log(NumberMax)

}

let StockMin = 0;
let StockMax = 45;
function getNumberStock() {
    StockMin = priceInputs[2].value
    StockMax = priceInputs[3].value
    console.log(StockMin)
    console.log(StockMax)

}

//клик по кнопке-> coртировка


//const searchInput = document.getElementById('search-input');


let Brand = [];
let Category = [];
let nameFilter = [];
function getNameFIlter(){
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
        
        }

};
getNameFIlter();


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

/////// числовой фильтр
const priceInputs = document.querySelectorAll(".price-input input");
const slider = (element) => {

    const slider = Boolean(element.classList) ? element : document.querySelector(selector);
    const rangeInput = slider.querySelectorAll(".range-input input");
    const priceInput = slider.querySelectorAll(".price-input input");
    const range = slider.querySelector(".slider .progress");

    let priceGap = 10;

    //слушатель на инпут
    priceInput.forEach(input => {
        input.addEventListener("input", e => {
            getNumberFilter();
            getNumberStock();
            NewFiltArrNumb(cards, NumberMin, NumberMax);
            NewFiltArrStock(cards, StockMin, StockMax);
            // console.log(priceInput[0].value)
            // console.log(priceInput[1].value)

            let minPrice = parseInt(priceInput[0].value),
                maxPrice = parseInt(priceInput[1].value);
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
            getNumberFilter();
            getNumberStock();
            NewFiltArrNumb(cards, NumberMin, NumberMax);
            NewFiltArrStock(cards, StockMin, StockMax)
            let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value);
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

document.querySelectorAll(".element").forEach(n => slider(n));


// const inputNumber = document.querySelector('.filter-price')
// console.log(inputNumber)

// inputNumber.addEventListener("input", console.log(inputNumber.value))


// let NumberMin = 0;
// let NumberMax = 1000;


// let extraCards = [...cards];
// let extraCardsAllFilter = [...cards];

function NewFiltArr(arr1, params) {
    console.log(NumberMin)
    console.log(NumberMax)
    productsContainer.innerHTML = null;
    if (Brand.length == 0 || Category.length == 0) {
        extraCards = arr1.filter(item => item.price >= NumberMin && item.price <= NumberMax && item.stock >= StockMin && item.stock <= StockMax && params.includes(item.brand)  ||  params.includes(item.category))
        productsContainer.innerHTML = (extraCards.map(item => Card(item))).join("");
    } else if(Brand.length == 0 && Category.length == 0) {
        extraCardsAllFilter = arr1.filter(item => item.price >= NumberMin && item.price <= NumberMax && item.stock >= StockMin && item.stock <= StockMax)
        productsContainer.innerHTML = (extraCardsAllFilter.map(item => Card(item))).join("");
    } else  {
        extraCardsAllFilter = arr1.filter(item => item.price >= NumberMin && item.price <= NumberMax && item.stock >= StockMin && item.stock <= StockMax && params.includes(item.brand)  &&  params.includes(item.category))
        productsContainer.innerHTML = (extraCardsAllFilter.map(item => Card(item))).join("");
    }

}


function NewFiltArrNumb(arr1, num1, num2) {

        let extraCardsNum = arr1.filter(item => item.price >= num1 && item.price <= num2)
        productsContainer.innerHTML = (extraCardsNum.map(item => Card(item))).join("");

}

function NewFiltArrStock(arr1, num1, num2) {

    let extraCardsStock = arr1.filter(item => item.stock >= num1 && item.stock <= num2)
    productsContainer.innerHTML = (extraCardsStock.map(item => Card(item))).join("");

}