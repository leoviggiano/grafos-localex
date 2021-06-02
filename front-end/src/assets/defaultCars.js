import cars from './cars';

const descriptions = [
  '2.8 HIGH COUNTRY 4X4 CD 16V TURBO DIESEL 4P AUTOMÁTICO',
  '2.0 16V DIESEL LONGITUDE 4X4 AUTOMÁTICO',
  '2.0 16V TURBO DIESEL SPORT 4P 4X4 AUTOMÁTICO',
  '1.0 MPFI LT 8V FLEX 4P MANUAL 4X4',
];
const states = ['Usado', 'Novo'];

const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomValue = (arr = []) => arr[Math.floor(Math.random() * arr.length)];

const createCar = (value) => {
  return {
    ...value,
    description: randomValue(descriptions),
    year: randomIntFromInterval(2010, 2020),
    price: randomIntFromInterval(1000, 50000),
    state: randomValue(states),
  };
};

const generateCars = () => Object.values(cars).map((c) => createCar(c));
export default generateCars;
