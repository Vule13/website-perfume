export const saveToLocalStorage = (name, value) => {
  localStorage.setItem(name, value);
};

export const getFromLocalStorage = (name) => {
  return localStorage.getItem(name);
};
