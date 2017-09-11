const INITIAL_STATE = {
  filteredProductsList: [],
  apiProducts: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { ...state, apiProducts: action.payload };
    case 'SEARCH_PRODUCT':
      return { ...state, filteredProductsList: action.payload };
    default:
      return state;
  }
};
