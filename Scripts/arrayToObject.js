const cars = [
  {
    name: "baleno",
    brand: "suzuki",
    mileage: 7
  },
  {
    name: "alto",
    brand: "suzuki",
    mileage: 12
  },
  {
    name: "scorpio",
    brand: "mahindra",
    mileage: 7
  },
  {
    name: "thar",
    brand: "mahindra",
    mileage: 4
  },
  {
    name: "city",
    brand: "honda",
    mileage: 12
  }
];

const returnObject = (cars) => {
  let finalObject = {};
  cars.forEach(({ brand, name }) => {
    finalObject[brand]
      ? finalObject[brand].push(name)
      : (finalObject[brand] = [name]);
  });
  console.log(finalObject);
  return finalObject;
};

returnObject(cars);
