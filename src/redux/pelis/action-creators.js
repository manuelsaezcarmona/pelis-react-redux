import { pelisActionTypes } from './action-types';
import * as http from '../../api/peli-service';

export const loadPelis = () => {
  return (dispatch) => {
    http.getPelis().then((listPelis) => {
      dispatch({
        type: pelisActionTypes.load,
        pelis: listPelis,
      });
    });
  };
};

export const addPeli = (peli) => {
  return (dispatch) => {
    http.addPeli(peli).then((addedPeli) => {
      dispatch({
        type: pelisActionTypes.add,
        peli: addedPeli,
      });
    });
  };
};
