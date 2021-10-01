import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css'
import Rating from 'react-rating';

const Products = (props) => {
 const {name,img,seller,price,star}=props.products
 const element = <FontAwesomeIcon icon={faShoppingCart} />
    // console.log(props.products);
    return (
        <div className="col">
        <div className="card">
        <img src={img} className="card-img-top" alt="..."/> 
          <div className="card-body">
            <h5 className="card-title">{name.slice(0,30)}</h5>
            {/* <p className="card-text">{props.products.features[0]}</p> */}
            <p className="card-text">{seller}</p>
            <p className="card-text">{price}</p>
            <Rating
              initialRating={star}
             readonly
             emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
            
            ></Rating>
<br />
            <button onClick={()=>props.handleAddToCart(props.products)}>{element}add to cart</button>

          </div>
        </div>
      </div>
    );
};

export default Products;