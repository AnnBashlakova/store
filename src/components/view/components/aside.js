
export default class FilterAside {
    constructor() {
        this.priceMin = '0';
        this.priceMax = '1000';
        this.stockMin = '0';
        this.stockMax = '45';

    }

    render() {
        return `  <section class="subheader container">
        </section>
         <aside class="sidebar">
  
        <button class="btn btn-reset">RESET FILTER</button>
  
        <div class="filter-category-container">
  
          <div class="category">
            <span class="filter-title">CATEGORY</span>
            <ul class="list">
              <button class="list-item" data-filter="category">Snikers</button>
              <button class="list-item"  data-filter="category">T-shirts</button>
              <button class="list-item"  data-filter="category">Hoodies</button>
              <button class="list-item"  data-filter="category">Shorts</button>
              <button class="list-item"  data-filter="category">Socks</button>
            </ul>
          </div>
  
          <div class="brand">
            <span class="filter-title">BRAND</span>
            <ul class="list">
              <button class="list-item"  data-filter="brand">Nike</button>
              <button class="list-item"  data-filter="brand">Jordan</button>
              <button class="list-item"  data-filter="brand">Puma</button>
              <button class="list-item"  data-filter="brand">Adidas</button>
              <button class="list-item"  data-filter="brand">Vans</button>
            </ul>
          </div>
  
        </div>
  
        <div class="range-filter-container">
  
          <div class="price-filter">
  
            <span class="range-filter-title">PRICE</span>
  
            <div class="element price-filter">
              <div class="price-input" data-filter="price">
  
                <div class="field field-price">
                  <input type="number" class="input-min inputMinValue" value="${this.priceMin}" data-filter="price">
                </div>
    
                <div class="field field-price">
                  <input type="number" class="input-max inputMaxValuePrice" value="${this.priceMax}" data-filter="price">
                </div>
                
              </div>
      
              <div class="slider">
                <div class="progress"></div>
              </div>
      
              <div class="range-input">
                <input type="range" class="range-min inputMinValue" min="0" max="1000" value="${this.priceMin}" step="5" data-filter="price">
                <input type="range" class="range-max inputMaxValuePrice" min="0" max="1000" value="${this.priceMax}" step="5" data-filter="price">
              </div>
    
            </div>
            </div>

            <div class="price-filter">
  
              <span class="range-filter-title">STOCK</span>
    
              <div class="element stock-filter">
                <div class="price-input">
    
                  <div class="field">
                    <input type="number" class="input-min inputMinValue" value="${this.stockMin}" data-filter="stock">
                  </div>
      
                  <div class="field ">
                    <input type="number" class="input-max input-max-stock inputMaxValueStock" value="${this.stockMax}" data-filter="stock">
                  </div>
                  
                </div>
        
                <div class="slider">
                  <div class="progress"></div>
                </div>
        
                <div class="range-input">
                  <input type="range" class="range-min inputMinValue" min="0" max="50" value="${this.stockMin}" step="1" data-filter="stock">
                  <input type="range" class="range-max inputMaxValueStock" min="0" max="50" value="${this.stockMax}" step="1" data-filter="stock">
                </div>
      
              </div>
              </div>

  
          


        </div>
  
      </aside>`
    }
}


