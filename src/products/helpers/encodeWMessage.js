

export const encodeMessage = ( name, lastname, phone, address, comments, state, total ) => {

    const generateOrderDetails = ( order ) => {
        return `${order.count} x ${order.name} = $${ order.count * order.price }.000`;
    }; 

    const orderDetails = state.map( generateOrderDetails ).join("\n");

    const message = `Hola, soy ${name} ${lastname} y me gustaría hacer el siguiente pedido:
    
    *Dirección:* ${ (address) }
    *Telefono:* ${phone}
    *Detalle de orden:*
    ${ orderDetails }

    *Comentarios:*
    ${ comments ?? 'Ninguno' }

    *Total del pedido:* $${total}.000

    ¡Gracias!
    `
    const encodedText = encodeURIComponent( message );

    return encodedText;
};