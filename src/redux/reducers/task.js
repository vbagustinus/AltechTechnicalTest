import {GET_DATA_LIST_SUCCESS} from '../actions/types';

const initial = {
  list: [],
};

export default (state = initial, action) => {
  switch (action.type) {
    case GET_DATA_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload.list,
      };
    default:
      return state;
  }
};
