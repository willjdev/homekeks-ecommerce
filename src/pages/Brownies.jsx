import { useMemo } from 'react';
import { ProductsCard } from '../products/components/';
import './styles/productPage.css';
import { getProductData } from '../products/helpers/getProductData';


export const Brownies = ({ state, handleAddCount, handleReduceCount, handleDeleteCount }) => {

  const productList = useMemo( () => getProductData('brownies'));

  return (
    <div className='products-container'>
        <div className='title-box'>
            <h1 className="product-title">Brownies</h1>
        </div>

        <div className='product-card-container'>
          {
            productList.map( product => (
              <ProductsCard 
                key={ product.id }
                product={product} 
                handleAddCount={handleAddCount}
                handleReduceCount={handleReduceCount}
                handleDeleteCount={ handleDeleteCount }
                state={state}
              />
            ))
          }
        </div>

    </div>
  )
}
