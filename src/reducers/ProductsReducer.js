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
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'teste':
      return { ...state, productsList: 'teste2' };
    default:
      return state;
  }
};
