export const DELETE_DVD = "DELETE_DVD";
export const ADD_DVD = "ADD_DVD";

export function deleteDvd(id) {
  return {
    type: DELETE_DVD,
    id: id,
  };
}

export function addDvd(vals) {
  // Psuedo random id generator.
  const id = Math.floor(Math.random() * 1000);

  return {
    type: ADD_DVD,
    id: id,
    name: vals.dvdName ?? "",
    category: vals.dvdCategory ?? "",
    featured: vals.dvdIsFeatured ?? false,
  };
}
