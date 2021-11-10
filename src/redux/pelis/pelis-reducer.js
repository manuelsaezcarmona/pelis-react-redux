import { pelisActionTypes } from './action-types';

const initialState = {
  pelis: [],
};

export const pelisReducer = (state = initialState, action) => {
  switch (action.type) {
    case pelisActionTypes.load:
      return { ...state, pelis: [...action.pelis] };

    case pelisActionTypes.add:
      return { ...state, pelis: [...state.pelis, action.peli] };
    default:
      return state;
  }
};
