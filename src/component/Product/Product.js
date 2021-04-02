import React from 'react';
import { useHistory } from 'react-router';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, size, price, imageURL, _id } = props.product;
    const history = useHistory();
    const buyNow = id => {
        const url = `/product/${id}`;
        history.push(url);
    }
    return (
        <div className="card-content">
            <div className="card-item">
                <div className="col-md-4 col-sm-12 mt-5">
                    <img style={{ width: '280px', height:'300px' }} src={imageURL} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div>
                        <p style={{fontSize: '20px', padding:'5px'}}>{name} -- {size}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <p style={{color: 'orange', fontWeight: 'bold'}}>${price}</p>
                </div>
                <div className="col-6">
                    <button className="btn btn-success" onClick={() => buyNow(_id)}><FontAwesomeIcon icon={faCartPlus} /> buy now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;