import { useEffect, useState } from 'react';
import './styles.css';

export const ProductsCard = ({ product, handleAddCount, handleReduceCount, state, handleDeleteCount }) => {
  
  let actualProduct = state.find( item => item.id === product.id );
  
  const [count, setCount] = useState(actualProduct?.count ?? 0);

  useEffect(() => {
    if ( actualProduct?.count === 0 ) {
      handleDeleteCount( actualProduct.id )
    }
  }, [actualProduct?.count])
  
  
  const handlePlusButton = () => {
    setCount( count + 1 );

    const addProduct = {
      id: product.id,
      name: `${product.nombre} ${product.tamaño ?? ''}`,
      price: product.precio,
      count: 1
    }

    //console.log('Añadido desde ' + product.nombre)

    handleAddCount && handleAddCount( addProduct );
  }

  const handleMinusButton = () => {
    if ( count === 0 ) return;
    setCount( count - 1);

    const minusProduct = {
      id: product.id,
      name: `${product.nombre} ${product.tamaño ?? ''}`,
      price: product.precio,
      count: 1
    }

    handleReduceCount && handleReduceCount( minusProduct );
  }


    return (
        <div className="product-card">
    
          <div className="product-img-container">
            <img src="https://res.cloudinary.com/ds4ygend0/image/upload/v1713575502/Carrusel-5_zqhk2r.jpg" alt="Product image" />
          </div>
    
          <div className='product-data-container'>
            {/* Product name */}
            <div className="product-name-card">{ `${product?.nombre} ${product?.tamaño ?? ''} `}</div>
            {/* Product description */}
            <p className="product-description">Galleton de arequipe con masa de arequipe y chispas de arequipe con todo de arequipe</p>
    
            {/* Product price and counter */}
            <div className='product-price-container'>
    
              <p className="product-price">${product?.precio}</p>
    
              <div className="product-counter">
                <span className="plus-button" onClick={handlePlusButton}>+</span>
                <div className="count">{count}</div>
                <span className="minus-button" onClick={handleMinusButton}>-</span>
              </div>
    
            </div>
    
    
          </div>
    
        </div>
      )
}
