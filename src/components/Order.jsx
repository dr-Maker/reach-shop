import React from 'react';
import "../styles/Order.scss";

const Order = ()=>{
    return(
        <div className="Order">
            <p>
                <span>04.25.2021</span>
                <span>6 articulos</span>
            </p>
                <p>$560.000</p>
                <img src="./icons/flechita.svg" alt="arrow" />
        </div>
    )
}

export default Order;
