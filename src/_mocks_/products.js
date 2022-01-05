import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgProduct } from '../utils/mockImages';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'English 9th',
  'English 10th',
  'English 1st Year',
  'English 2nd Year',
  'Urdu 9th',
  'Urdu 10th',
  'Urdu 1st Year',
  'Urdu 2nd Year',
  'Paper Sheet'
];
const PRODUCT_COLOR = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107'
];

// ----------------------------------------------------------------------

const products = [...Array(9)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: mockImgProduct(1),
    name: PRODUCT_NAME[index],
    price: faker.datatype.number({ min: 5, max: 10, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 10, max: 12, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['new', '', ''])
  };
});

export default products;
