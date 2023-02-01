export default class mainPageStore {
    constructor(prop) {

      // console.log(this.storage)
      console.log(prop)
        this.priceMin = prop.filter.priceMin;
        this.priceMax = prop.filter.priceMax;
        this.stockMin = prop.filter.stockMin;
        this.stockMax = prop.filter.stockMax;


    }


    render(prop, getNumFiltr) {
      console.log(prop)
      getNumFiltr(this.priceMin, this. priceMax, this.stockMin, this.stockMax);
        return `

          <section class="subheader container">
    </section>
  
    <main class="main-container container">
  
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
  
      </aside>
  
      <section class="products-container">
  
        <div class="products-container-header">
  
          <!-- <button class="btn btn-sort">SORT BY</button> -->

          <select class="btn btn-sort" name="SORT BY"> <!--Supplement an id here instead of using 'name'-->
            <option value="value0">SORT BY</option>
            <option value="value1">sort by price ASC</option>
            <option value="value2">sort by price DESC</option>
            <option value="value3">sort by stock ASC</option>
            <option value="value4">sort by stock DESC</option>
          </select>
  
          <form class="search-form">
            <input type="search" id="search-input" placeholder="Search" data-search>
            <!-- <button type="submit"></button> -->
          </form>
  
          <div class="tile">
            <div class="tile-of-3 tile-of-col">||</div>
            <div class="tile-of-6 tile-of-row">=</div>
          </div>
  
        </div>
  
        <div class="products-list">

                        <div class="product-card">
                
                        <div class="product-top">
                          <span class="product-name">NIKE AIR FORCE 1 07</span>
                        </div>
                
                        <div class="product-middle">
                          <img class="product-img" src="https://www.basketshop.ru/files/catalog/43246/DZ4493-700%20(3).JPG" alt="nike_air_force_1.jpg">
                
                          <ul class="product-data-list">
                            <li class="categori">Category: snicers</li>
                            <li class="brand-ame">Brand: Nike</li>
                            <li class="price">Price: 250$</li>
                            <li class="stock">Stock: 15</li>
                          </ul>
                        </div>
                
                        <div class="product-bottom">
                
                          <button class="btn btn-add">ADD TO BASKET</button>
                          <button class="btn btn-info">MORE INFO</button>
                
                        </div>
                
                        </div>
      
  
  
        </div>
  
      </section>

      </main>
        
        `
    }




    destroy() {
        return null;
    }
}