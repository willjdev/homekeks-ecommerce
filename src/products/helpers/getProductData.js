import { products } from '../../data/products';

export const getProductData = ( category ) => {

    return products[category];

}