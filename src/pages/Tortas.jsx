import { useMemo } from 'react';
import { ProductsCard } from '../products/components/';
import { getProductData } from '../products/helpers/getProductData';
import './styles/productPage.css';

export const Tortas = ({ state, handleAddCount, handleReduceCount, handleDeleteCount }) => {

  const productList = useMemo( () => getProductData('tortas'));

  return (
    <div className='products-container'>
        <div className='title-box'>
            <h1 className="product-title">Tortas</h1>
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
