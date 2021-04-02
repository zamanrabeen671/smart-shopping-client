import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CheckOut.css';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
const CheckOut = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://strawberry-crumble-09049.herokuapp.com/product/' + id)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    const handleCheckOut = () => {
        const orderDetails = {...loggedInUser, product: product, orderTime: new Date()}
        fetch('https://strawberry-crumble-09049.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                alert('your order pressed successfully')
            }
        })
    }
    return (
        <div className="container">
            <div className="checkout-container">
                <h1>Checkout</h1>
                <div className="row first-block">
                    <div className="col-md-7">Description</div>
                    <div className="col-md-3">Quantity</div>
                    <div className="col-md-2">Price</div>
                </div>
                <hr />
                <div className="row second-block">
                    <div className="col-md-7">{product.name}</div>
                    <div className="col-md-3">1</div>
                    <div className="col-md-2">${product.price}.00</div>
                </div>
                <hr />
                <div className="row third-block">
                    <div className="col-md-7">Total</div>
                    <div className="col-md-3"></div>
                    <div className="col-md-2">=${product.price}.00</div>
                </div>

                <div className="checkout-btn">
                    <button className="btn btn-success" onClick={handleCheckOut}> <Link to="/order" style={{color: 'white'}}>Checkout</Link> </button>
                </div>
            </div>

        </div>
    );
};

export default CheckOut;