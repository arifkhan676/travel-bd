import React from 'react'
import { useParams } from 'react-router-dom'
import { traveldata } from '../TravelData/Traveldata';

const CartProducts = () => {

    const { cartId } = useParams();

    const CartsItems = traveldata.find(cartItem => cartItem.id === cartId);

    console.log('cartitems here  ' + cartId);


    return (
        <div>
            <h1>hi carts</h1>
        </div>
    )
}

export default CartProducts
