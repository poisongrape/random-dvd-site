import { ADD_DVD, DELETE_DVD } from "../actions/actions";
import { reducer, initialState } from "./reducer";

describe("Reducer", () => {
  it ("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it ("should delete a dvd", () => {
    const prevState = [
      {
        id: 1,
        name: "foo",
        category: "aaa",
      },
      {
        id: 2,
        name: "bar",
        category: "bbb",
      }
    ];

    expect(reducer(prevState, { type: DELETE_DVD, id: 1 })).toEqual([{
      id: 2,
      name: "bar",
      category: "bbb"
    }]);
  });

  it ("should add a dvd", () => {
    const prevState = [
      {
        id: 1,
        name: "foo",
        category: "aaa",
      },
    ];

    expect(reducer(prevState, {
      type: ADD_DVD,
      id: 111,
      name: "bar",
      category: "bbb",
      featured: false,
    })).toEqual([
      {
        id: 1,
        name: "foo",
        category: "aaa",
      },
      {
        id: 111,
        name: "bar",
        category: "bbb",
        featured: false,
      },
    ]);
  });
});
