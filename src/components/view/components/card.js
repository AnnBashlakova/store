
export default function Card(item) { 
    return ` <div class="product-card">
                
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
}


