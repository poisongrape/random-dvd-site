import { createStore } from "redux";
import data from "../data/dvd-data.json";
import { DELETE_DVD, ADD_DVD } from "../actions/actions";

const initialState = data?.items;

function reducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_DVD:
      return state.filter((dvd) => {
        return dvd.id !== action.id;
      });
    case ADD_DVD:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          category: action.category,
          featured: action.featured,
        }
      ];
    default:
      return state;
  }
}

export const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));
