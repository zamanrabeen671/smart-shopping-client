import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Order.css'
const OrderDetails = (props) => {
    const {name, product, orderTime} = props.info;
    const productContainer = {
        color: 'tomato',
        padding: '10px',
        lineHeight: '0.5',
        borderBottom: '1px solid black',
        fontSize: '20px',
        paddingBottom: '10px',
        marginBottom: '10px'
    }
    return (
        <div className="order-container">
            <p style={{fontSize: '22px', color: "white"}}>Dear <span style={{color: '#689F38'}}><strong>{name}</strong></span> your order items <FontAwesomeIcon icon={faArrowDown}/></p>
            <div style={productContainer}>
                <p> <span style={{color: 'white'}}>product</span> : <strong>{product.name}</strong></p>
                <p><span style={{color: 'white'}}>Total-price</span>: <strong>{product.price}</strong></p>
                <p><span style={{color: 'white'}}>Quantity</span>: <strong>1</strong></p>
                <p><span style={{color: 'white'}}>Order-Time</span>: <strong>{(new Date(orderTime).toDateString('dd/mm/yyyy'))}</strong></p>
            </div>
           
        </div>
    );
};

export default OrderDetails;