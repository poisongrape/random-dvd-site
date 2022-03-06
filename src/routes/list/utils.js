/**
 * Filter dvd items by category.
 * @param {object[]} list - Array of dvd items.
 * @param {string} category - Category to filter on.
 * @returns {object[]} Array of filtered dvd items.
 */
 export const filterListByCategory = (list, category) => {
  let filteredList = [...list];

  filteredList = filteredList.filter(item => item.category.toLowerCase() === category.toLowerCase());

  return filteredList;
}

/**
 * Sort dvd items alphabetically.
 * @param {object[]} list - Array of dvd items.
 * @returns {object[]} Array of sorted dvd items.
 */
export const sortListAlphabetically = (list) => {
  let sortedList = [...list];

  sortedList = sortedList.sort((a, b) => {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  });

  return sortedList;
}

/**
 * Sort dvd items by category first, then by name.
 * @param {object[]} list - Array of dvd items.
 * @returns {object[]} Array of sorted dvd items.
 */
export const sortListByCategory = (list) => {
  let sortedList = [...list];

  sortedList = sortListAlphabetically(sortedList);
  sortedList = sortedList.sort((a, b) => {
    if (a.category < b.category) { return -1; }
    if (a.category > b.category) { return 1; }
    return 0;
  });

  return sortedList;
};