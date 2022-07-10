export const PI = 3.14;

export const sum = (x, y) => {
  return x + y;
};
export const square = (x, y) => {
  return x * x;
};
export const hypotenuse = (x, y) => {
  return Math.square(square(x) + square(y));
};
