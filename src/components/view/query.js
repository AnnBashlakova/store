const hash = window.location.hash.slice(1);
const query = hash.includes('?') ? hash.slice(hash.indexOf('?') + 1) : '';
export const params = new URLSearchParams(query);

export function getQuery() {
  const category = params.getAll('category');
  const brand = params.getAll('brand');
  const priceMIN = Number(params.getAll('price').join('|').split('|')[0]);
  const priceMAX = Number(params.getAll('price').join('|').split('|')[1]);
  const stockMIN = Number(params.getAll('stock').join('|').split('|')[0]);
  const stockMAX = Number(params.getAll('stock').join('|').split('|')[1]);
  const sort = params.getAll('sort');
  const search = params.getAll('search');
  const searchBy = params.getAll('searchby');
  const view = params.getAll('view');

  return {
    category: category,
    brand: brand,
    priceMIN: priceMIN,
    priceMAX: priceMAX,
    stockMIN: stockMIN,
    stockMAX: stockMAX,
    sort: sort,
    search: search,
    searchBy: searchBy,
    view: view,
  };
}

export function delAllQuery() {
  params.delete('category');
  params.delete('brand');
  params.delete('price');
  params.delete('stock');
  params.delete('sort');
  params.delete('search');
  params.delete('searchby');
  params.delete('view');
}

export function copyQuery() {
  const query = params.toString();
  return query;
}