export const fetchProducts = (products) => {
  return {
    type: 'FETCH_PRODUCTS',
    payload: products,
  };
};

export const searchForProduct = (filteredProductsList) => {
  return {
    type: 'SEARCH_PRODUCT',
    payload: filteredProductsList,
  };
};

