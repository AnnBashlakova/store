import cards from "../../data.js";
import { getQuery } from "../view/query.js";


const productsContainer = document.querySelector('.products-list')

productsContainer.innerHTML = getItems(cards);


function getItems(array) {
            return  array.map(item => ` 

    <div class="product-card">
                
                        <div class="product-top">
                            <span class="product-name">${item.model}</span>
                        </div>
                
                        <div class="product-middle">
                            <img class="product-img" src="${item.img1}" alt="nike_air_force_1.jpg">
                
                            <ul class="product-data-list">
                            <li class="categori">Category:${item.category}</li>
                            <li class="brand-ame">Brand:${item.brand}</li>
                            <li class="price">Price:${item.price}$</li>
                            <li class="stock">Stock:${item.stock}</li>
                            </ul>
                        </div>
                
                        <div class="product-bottom">
                
                            <button class="btn btn-add">ADD TO BASKET</button>
                            <button class="btn btn-info">MORE INFO</button>
                
                        </div>
                
                        </div>` 
    ).join(''); }



//клик по кнопке-> coртировка

const filterBtns = document.querySelectorAll('.list-item');
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