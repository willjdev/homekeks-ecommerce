import { NavBar, Banner } from './ui'
import { CookiesPage, Contacto, Checkout, EmptyCheckout, CompleteBuy, ErrorPage, Brownies, Tortas } from './pages/';
import { Routes, Route } from "react-router-dom";
import { useCheckout } from './hooks/useCheckout';




export const Home = () => {

  const { state, handleAddCount, handleReduceCount, handleDeleteCount, total } = useCheckout();

    
  return (
    <div className='body'>
      {/* <UserProvider> */}
        <NavBar state={ state } />
        <Routes>
          <Route path='/' element={ <Banner/> } />
          <Route path='brownies' element={ <Brownies state={ state } handleAddCount={ handleAddCount } handleReduceCount={ handleReduceCount } handleDeleteCount={ handleDeleteCount } /> } />
          <Route path='tortas' element={ <Tortas state={ state } handleAddCount={ handleAddCount } handleReduceCount={ handleReduceCount } handleDeleteCount={ handleDeleteCount } /> } />
          <Route path='galletones' element={ <CookiesPage state={ state } handleAddCount={ handleAddCount } handleReduceCount={ handleReduceCount } handleDeleteCount={ handleDeleteCount } /> } />
          <Route path='contacto' element={ <Contacto/> } />
          <Route path='carrito' element={ <Checkout state={ state } handleAddCount={ handleAddCount } handleReduceCount={ handleReduceCount } handleDeleteCount={ handleDeleteCount } total={ total } /> } />
          <Route path='vacio' element={ <EmptyCheckout/> } />
          <Route path='finalizar' element={ <CompleteBuy state={ state } total={ total } /> } />

          <Route path='/*' element={ <ErrorPage/> } />




        </Routes>
      {/* </UserProvider> */}
    </div>
  )
}
