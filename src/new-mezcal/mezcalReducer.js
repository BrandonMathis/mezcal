const initialState = {
  mezcals: [
    {
      name: 'Vida',
      region: 'Wahaka',
      agave: 'Espadin',
      description: 'A basic mezcal great for mixing drinks'
    }
  ]
};

export default function mezcalApp(state = initialState, action) {
  switch (action.type) {
  case 'CREATE_MEZCAL':
    return Object.assign({}, state, {
      mezcals: [
        ...state.mezcals,
        action.mezcal
      ]
    });
  default:
    return state;
  }
}
