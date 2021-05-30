import React, { useEffect, useState } from 'react';

import { Home } from '../../components';

import volks from '../../assets/cars/volkswagen-virtus.jpg';

const defaultCar = {
  img: volks,
  name: 'Volkswagen Virtus',
  brand: 'volkswagen',
  year: 2010,
  color: 'branco',
  state: 'usado',
  price: 1599.99,
  description: '1.4 250 TSI GTS AUTOMÁTICO',
};

const Container = () => {
  const [color, setColor] = useState('');
  const [price, setPrice] = useState(['', '']);
  const [year, setYear] = useState(['', '']);
  const [brand, setBrand] = useState('');
  const [carState, setCarState] = useState('');

  const [allCars, setAllCars] = useState([defaultCar]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const filtered = allCars.filter((car) => {
      let valid = true;
      if (!car.color.includes(color)) valid = false;
      if (!car.brand.includes(brand)) valid = false;
      if (!car.state.includes(carState)) valid = false;
      if (
        (Boolean(price[0]) && car.price < price[0]) ||
        (Boolean(price[1]) && car.price > price[1])
      )
        valid = false;
      if (
        (Boolean(year[0]) && car.year < year[0]) ||
        (Boolean(year[1]) && car.year > year[1])
      )
        valid = false;
      return valid;
    });

    setCars(filtered);
  }, [color, price, year, brand, carState, allCars]);

  return (
    <Home
      {...{
        color,
        setColor,
        price,
        setPrice,
        year,
        setYear,
        brand,
        setBrand,
        carState,
        setCarState,
        cars,
      }}
    />
  );
};

export default Container;