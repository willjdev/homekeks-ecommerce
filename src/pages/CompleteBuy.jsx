import { Link } from 'react-router-dom';
import './styles/CompleteBuy.css';
import { useForm } from '../hooks/useForm';
import { encodeMessage } from '../products/helpers/encodeWMessage';
import Swal from 'sweetalert2';

export const CompleteBuy = ({ state, total }) => {

  const {name, lastname, phone, address, comments, onInputChange } = useForm('');

  const message = encodeMessage( name, lastname, phone, address, comments, state, total );
  const phoneNumber = 3012213956;

  
  const handleSendOrder = ( e ) => {
    e.preventDefault();
    if ( !name || !lastname || !phone || !address ) {
      Swal.fire({
        title: "Datos incompletos",
        text: "Llena los campos del formulario",
        icon: "warning"
      });
      return
      
    }
    window.location.href = `https://wa.me/${ phoneNumber }/?text=${ message }`;
  }

  return (
    <div className="complete-buy-container">

      <div className="confirm-order-box">
        <h1>Confirmar Orden</h1>
        <p>Ingrese los siguientes datos por favor</p>
      </div>        

      <form className='order-form'>

        <div className='form-item'>
          <label htmlFor="name">Nombre:</label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            value={ name }
            onChange={ onInputChange }
            required
          />
        </div>
        
        <div className='form-item'>
          <label htmlFor="lastname">Apellido:</label>
          <input 
            id="lastname" 
            name="lastname" 
            type="text" 
            value={ lastname }
            onChange={ onInputChange }
            required
          />
        </div>

        <div className='form-item'>
          <label htmlFor="phone">Telefono:</label>
          <input 
            id="phone" 
            name="phone" 
            type="text" 
            value={ phone }
            onChange={ onInputChange }
            required
          />
        </div>

        <div className='form-item'>
          <label htmlFor="address">Dirección:</label>
          <input 
            id="address"  
            name="address" 
            type="text" 
            value={ address }
            onChange={ onInputChange }
            required
          />
        </div>

        <div className='form-item'>
          <label htmlFor="comments">Comentarios (opcional): </label>
          <textarea 
            name="comments" 
            id="comments" 
            value={ comments }
            onChange={ onInputChange }
            cols="30" 
            rows="5"
          >
          </textarea>
        </div>

        <br />

        <button type="submit" className="send-button" onClick={ handleSendOrder }>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
          Enviar por WhatsApp
        </button>
        <Link to={'../carrito'} className="back-button">Volver a orden</Link>
        <br />
      </form>

    </div>
  )
}
