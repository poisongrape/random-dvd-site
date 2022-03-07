import {
  filterListByCategory,
  sortListAlphabetically,
  sortListByCategory,
} from "./utils";

const list = [
  {
    name: "A",
    category: "a",
  },
  {
    name: "D",
    category: "b",
  },
  {
    name: "C",
    category: "a",
  },
  {
    name: "B",
    category: "c",
  }
];

describe("List util function - filterListByCategory", () => {
  it ("Should filter list to only show dvds that belong to specified category", () => {
    const listCopy = [...list];
    const expected = [
      {
        name: "A",
        category: "a",
      },
      {
        name: "C",
        category: "a",
      }
    ];

    expect(filterListByCategory(listCopy, "a")).toStrictEqual(expected);
  });
});

describe("List util function - sortListAlphabetically", () => {
  it ("Should sort list by name in alphabetical order", () => {
    const listCopy = [...list];
    const expected = [
      {
        name: "A",
        category: "a",
      },
      {
        name: "B",
        category: "c",
      },
      {
        name: "C",
        category: "a",
      },
      {
        name: "D",
        category: "b",
      },
    ];

    expect(sortListAlphabetically(listCopy)).toStrictEqual(expected);
  });
});

describe("List util function - sortListByCategory", () => {
  it ("Should sort list by category first, then alphabetically", () => {
    const listCopy = [...list];
    const expected = [
      {
        name: "A",
        category: "a",
      },
      {
        name: "C",
        category: "a",
      },
      {
        name: "D",
        category: "b",
      },
      {
        name: "B",
        category: "c",
      },
    ];

    expect(sortListByCategory(listCopy)).toStrictEqual(expected);
  });
});
