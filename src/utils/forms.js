//Como manipular el valor de los objetos de manera dinamica...

export const requiredStrings = (values) => {
  return Object.values(values).some((value) => value === "" || value === 0);
};
