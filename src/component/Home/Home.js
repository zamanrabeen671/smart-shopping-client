import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch('https://strawberry-crumble-09049.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setLoading(true)
            })
            
    }, [])
    return (
        <div className="container">
            <div className="row">
            
                {
                    loading ? 
                    products.map(product => <Product product={product}></Product>) :
                    <Spinner style={{margin: '150px auto'}} animation="border" />
                }
            </div>
        </div>
    );
};

export default Home;