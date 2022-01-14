import React from 'react';
import "../styles/PorductItem.scss";

const ProductItem = ()=>{
    return(
        <div className="productItem">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bicicleta" />
                <div className="product-info">
                    <div>
                    <p>$120.000</p>
                    <p>Bicicleta</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="agregar a compra"></img>
                    </figure>
            </div>
        </div>
    )
}


export default ProductItem;