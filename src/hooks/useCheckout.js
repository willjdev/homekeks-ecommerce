import { useEffect, useReducer } from "react";
import { checkoutReducer } from "../products/helpers/checkoutReducer";

const initialState = [];
const init = () => {
    return JSON.parse( localStorage.getItem('checkout') ) || [];
}

export const useCheckout = () => {

    const [state, dispatch] = useReducer( checkoutReducer, initialState, init);

    
    useEffect(() => {
        localStorage.setItem('checkout', JSON.stringify( state ));
    }, [state]);


    const total = state.reduce( ( acc, curr ) => {
        return acc + curr?.price * curr?.count
      }, 0);

    const handleAddCount = ( product ) => {
        const action = {
            type: 'Añadir a conteo',
            payload: product
        }
        dispatch( action );
    };

    const handleReduceCount = ( product ) => {
        const action = {
            type: 'Restar a conteo',
            payload: product
        }
        dispatch( action );
    }

    const handleDeleteCount = ( id ) => {
        const action = {
            type: 'Eliminar producto',
            payload: id
        }
        dispatch( action );
    }

    return {
        state, 
        handleAddCount,
        handleDeleteCount,
        handleReduceCount,
        total: total
    }


}