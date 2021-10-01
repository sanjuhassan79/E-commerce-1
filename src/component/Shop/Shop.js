import React, {useEffect, useState } from 'react';
import Card from '../Card/Card';
import Products from '../Products/Products';

import './Shop.css'



    


const Shop = () => {
    // products loade state
    const [products,setproduct]=useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res=>res.json())
            .then(data=>{
                setproduct(data);
                setdisplaypv(data);
            })
    }, []);

// add to handle event
const [cart,setCart]=useState([])
const handleAddToCart=(productNibe)=>{

    // console.log(productNibe.name);
const newCart=[...cart,productNibe]

setCart(newCart)
}
// handleSearch

const [displaypv,setdisplaypv]=useState([])

const handleSearch=event=>{
const searchText= event.target.value
const mathpb=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
setdisplaypv(mathpb) 
}
    return (
        <div>
            <div className="search-container">
                <input
                onChange={handleSearch}
                className="inputItem" type="text" />
            </div>
        <div className="shopItem">
            
            <div className="row row-cols-1 row-cols-md-3 g-4">

            {displaypv.map(products=><Products 
            key={products.key}
            products={products}
            handleAddToCart={handleAddToCart}
            ></Products>)}

            </div>






            
            <div className="card">
            <Card 
             key={cart.key}
            cart={cart}
           
            
            ></Card>
            </div>
        </div>
        </div>
    );
};

export default Shop;