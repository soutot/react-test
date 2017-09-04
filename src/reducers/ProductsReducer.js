const INITIAL_STATE = {
  productsList: [
    {
      id: '1',
      tipo: 'banana',
      valor: '100',
    },
    {
      id: '2',
      tipo: 'abacaxi',
      valor: '200',
    },
    {
      id: '3',
      tipo: 'bolacha',
      valor: '300',
    },
  ],
  filteredProductsList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_PRODUCT':
      return { ...state, filteredProductsList: action.payload };
    default:
      return state;
  }
};
