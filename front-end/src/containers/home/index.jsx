import React, { useEffect, useState } from 'react';

import { Home } from '../../components';

import generateCars from './../../assets/defaultCars';
const Container = () => {
  const [color, setColor] = useState('');
  const [price, setPrice] = useState(['', '']);
  const [year, setYear] = useState(['', '']);
  const [brand, setBrand] = useState('');
  const [carState, setCarState] = useState('');
  const [allCars, setAllCars] = useState(generateCars());
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const filtered = allCars.filter((car) => {
      if (!car.color.includes(color)) return false;
      if (!car.brand.includes(brand)) return false;
      if (!car.state.includes(carState)) return false;
      if (
        (Boolean(price[0]) && car.price < price[0]) ||
        (Boolean(price[1]) && car.price > price[1])
      )
        return false;
      if (
        (Boolean(year[0]) && car.year < year[0]) ||
        (Boolean(year[1]) && car.year > year[1])
      )
        return false;
      return true;
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
        setCars,
        allCars,
        setCarState,
        cars,
      }}
    />
  );
};

export default Container;
