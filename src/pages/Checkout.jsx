import { useEffect, useState } from 'react';
import './styles/Checkout.css'
import { Link } from 'react-router-dom';
import { CheckoutProduct } from '../products/components/CheckoutProduct';
import { EmptyCheckout } from './EmptyCheckout';

export const Checkout = ({ state, handleAddCount, handleReduceCount, handleDeleteCount, total }) => {

  if ( state.length === 0 ) {
    return (
      <EmptyCheckout />
    )
  }

  return (
    <div className="checkout-container">
      <div className="checkout-box">

        <div className="order-summary">
          <h1>Resumen de orden</h1>
        </div>

        <div className="order-details-box">
          {
            state && state.map( product => (
              <CheckoutProduct 
                key={ product.id }
                product={ product }
                handleAddCount={ handleAddCount }
                handleReduceCount={ handleReduceCount }
                handleDeleteCount={ handleDeleteCount }                
              />
            ))
          }
        </div>

        <div className='total-payment-box'>
          <div className="total-box">
            <p>Total a pagar</p>
            <div className='total-pay'>${ total }.000</div>
          </div>
          
          <Link to={'../finalizar'} className="payment-box">
            <button>Confirmar</button>
          </Link>

        </div>

      </div>

    </div>
  )
}
