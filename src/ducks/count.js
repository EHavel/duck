export const types = {
  ADD_1: "ADD_1",
};

export const actions = {
  add1: () => ({
    type: types.ADD_1,
  }),
};

export const reducer = (state = 0, action) => {
  let newState = state;

  switch (action.type) {
    case types.ADD_1:
      newState++;
      break;
    default:
  }

  return newState;
};
