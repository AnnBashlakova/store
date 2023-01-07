import cards from "../../data.js";
import { getQuery } from "../view/query.js";
import Card from "../view/components/card.js";


const productsContainer = document.querySelector('.products-list');
const filterBtns = document.querySelectorAll('.list-item');



productsContainer.innerHTML = cards.forEach(item => Card(item));
//клик по кнопке-> coртировка


//const searchInput = document.getElementById('search-input');

function getNameFIlter(){
    //let res = [];
    let nameFilter = [];
    let countBrand = [];
    let countCategory =[];
    //const searchParam = getQuery().search.join();
        for (let btn of filterBtns) {
            
            btn.addEventListener('click', (event) => {
            btn.toggleAttribute("disabled")
            btn.classList.toggle('list-item-active')
            let name = event.target.textContent;
            nameFilter.push(name)
            if (event.target.dataset.filter == 'category') {
                countCategory.push(1)
            } else {
                countBrand.push(1);
            }
            if (countBrand.length > 0 && countCategory.length == 0) {
                console.log('fdfdfd')
                let sortArr = cards.filter(item => nameFilter.includes(item.brand)) ;
            //res = cards.filter(card => card.brand.toLowerCase().includes(searchParam));
            console.log(sortArr)
            // console.log(cards)
            productsContainer.innerHTML = getItems(sortArr);
            } else if (countBrand.length == 0 && countCategory.length > 0) {
                let sortArrB = cards.filter(item => nameFilter.includes(item.category)) ;
                productsContainer.innerHTML = getItems(sortArrB);
                console.log(sortArrB)
            } else if (countBrand.length > 0 && countCategory.length > 0) {
                let sortArrC = cards.filter(item => nameFilter.includes(item.category) && nameFilter.includes(item.brand)) ;
                productsContainer.innerHTML = getItems(sortArrC);
                console.log(sortArrC)
            }
            // console.log(nameFilter)
            // const sortArr = cards.filter(card => card.brand == name.toUpperCase());
            // const sortArr = cards.filter(item => nameFilter.some(d => d == item.brand || d == item.category ))
            // const sortArr = cards.filter(item => nameFilter.includes(item.brand) || nameFilter.includes(item.category)) ;
            // //res = cards.filter(card => card.brand.toLowerCase().includes(searchParam));
            // console.log(sortArr)
            // productsContainer.innerHTML = getItems(sortArr);
        });
        
        }

        //return res;
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



const slider = (element) => {
    console.log('dfdffd')
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