import cards from "../../data.js";
import { getQuery } from "../view/query.js";
import Card from "../view/components/card.js";


const productsContainer = document.querySelector('.products-list');
const filterBtns = document.querySelectorAll('.list-item');



// productsContainer.innerHTML = ret cards.forEach(item => {
//     Card(item)
// });

productsContainer.innerHTML = (cards.map(item => Card(item))).join("");



//клик по кнопке-> coртировка


//const searchInput = document.getElementById('search-input');


let Brand = [];
let Category = [];
function getNameFIlter(){
    let nameFilter = [];
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

let extraCards = [...cards];
let extraCardsAllFilter = [...cards];

function NewFiltArr(arr1, params) {
    productsContainer.innerHTML = null;
    if (Brand.length == 0 || Category.length == 0) {
        extraCards = arr1.filter(item => params.includes(item.brand)  ||  params.includes(item.category))
        productsContainer.innerHTML = (extraCards.map(item => Card(item))).join("");
    } else {
        extraCardsAllFilter = arr1.filter(item => params.includes(item.brand)  &&  params.includes(item.category))
        productsContainer.innerHTML = (extraCardsAllFilter.map(item => Card(item))).join("");
    }

}





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



const slider = (element) => {

    const slider = Boolean(element.classList) ? element : document.querySelector(selector);
    const rangeInput = slider.querySelectorAll(".range-input input");
    const priceInput = slider.querySelectorAll(".price-input input");
    const range = slider.querySelector(".slider .progress");

    let priceGap = 1000;

    priceInput.forEach(input => {
        input.addEventListener("input", e => {
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

    rangeInput.forEach(input => {
        input.addEventListener("input", e => {
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