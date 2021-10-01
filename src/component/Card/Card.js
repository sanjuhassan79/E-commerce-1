import React from 'react';
import './Card.css'

const Card = (props) => {
    const {cart}=props;
    let total=0

    for(const product of cart){
        total=total+product.price
    }

    const shipping=15;
    const tax=(total+shipping)*0.1
const Grand=total+shipping+tax
    return (
        <div>
            <h1>Order Summary</h1>
            <h5>Items Ordered :{props.cart.length}</h5>
            <p>Total :{total}</p>
            <p>Shipping :{shipping}</p>
            <p>Tax :{tax}</p>
            <p>Grand Total :{Grand}</p>
            <br />

            <p>Total :{total}</p>
            <ul>
            {
                cart.map(pb=><li>{pb.name}</li>)
            }
            </ul>
        </div>
    );
};

export default Card;