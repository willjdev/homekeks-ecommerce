

export const checkoutReducer = ( initialState = [], action ) => {

    switch( action.type ) {
        
        case 'Añadir a conteo':

            if ( initialState.some( product => product?.id === action.payload.id ) ) {
                return initialState.map( product => {
                    if (product.name === action.payload.name) {
                        return {
                            ...product,
                            count: product.count + action.payload.count
                        }
                    } 
                    return product
                })
            }

            return [...initialState, action.payload];

            

        case 'Restar a conteo':

            if ( initialState.length < 1 ) return;

            return initialState.map( product => {
                if (product.name === action.payload.name) {
                    
                    if ( product.count === 0 ) return;
                    return {
                        ...product,
                        count: product.count - action.payload.count
                    }
                }
                return product
            })
        case 'Eliminar producto':
            return initialState.filter( product => product.id !== action.payload );
        
        default:
            return initialState;
    }

}