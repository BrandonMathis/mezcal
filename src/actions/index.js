let nextMezcalId = 0;

export const createMezcal = (mezcal) => {
  return {
    type: 'CREATE_MEZCAL',
    id: nextMezcalId++,
    mezcal
  };
};
