
export default class Card {
    constructor(item) {
        this.model = item.model;
        this.img1 =  item.img1;
        this.category =  item.category;
        this.brand =  item.brand;
        this.price =  item.price;
        this.stock =  item.stock;

    }

    render() {
        return ` <div class="product-card">
                
        <div class="product-top">
            <span class="product-name">${this.model}</span>
        </div>
    
        <div class="product-middle">
            <img class="product-img" src="${this.img1}" alt="nike_air_force_1.jpg">
    
            <ul class="product-data-list">
            <li class="categori">Category:${this.category}</li>
            <li class="brand-ame">Brand:${this.brand}</li>
            <li class="price">Price:${this.price}$</li>
            <li class="stock">Stock:${this.stock}</li>
            </ul>
        </div>
    
        <div class="product-bottom">
    
            <button class="btn btn-add">ADD TO BASKET</button>
            <button class="btn btn-info">MORE INFO</button>
    
        </div>
    
        </div>`
    }
}

