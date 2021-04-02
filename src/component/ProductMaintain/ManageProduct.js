import React, { useEffect, useState } from 'react';
import ProductMaintain from './ProductMaintain';
import { Spinner } from 'react-bootstrap';
const ManageProduct = () => {
    const [manageProduct, setManageProduct] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://strawberry-crumble-09049.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setManageProduct(data)
                setLoading(true);
            })
    }, [])
    const HeaderContent = {
        backgroundColor: 'green',
        padding: '10px',
        borderRadius: '10px',
        marginTop: '20px',
        marginBottom: '10px',
        fontWeight: 'bold',
        color: 'white'
    }
    return (
        <div style={{backgroundColor: 'white', borderRadius: '10px'}}>
            <h2>Manage Product</h2>
            <div style={HeaderContent}>
                <div className="row">
                    <div className="col-md-4">product</div>
                    <div className="col-md-3">size</div>
                    <div className="col-md-2">price</div>
                    <div className="col-md-3">action</div>
                </div>
            </div>
            { loading ? 
                manageProduct.map(pd => <ProductMaintain pd={pd}></ProductMaintain>) :
                <Spinner style={{margin: '150px 250px'}} animation="border" />
            }
        </div>
    );
};

export default ManageProduct;