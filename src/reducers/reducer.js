import { createStore } from "redux";
import data from "../data/dvd-data.json";

const initialState = data?.items;

function reducer(state = initialState, action) {
  switch (action.type) {
    case "delete":
      return state.filter((dvd) => {
        return dvd.id !== action.id;
      });
    case "add":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          category: action.category,
          featured: action.featured || false,
        }
      ];
    default:
      return state;
  }
}

export const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));
