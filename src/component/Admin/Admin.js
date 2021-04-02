import React, { useEffect, useState } from 'react';
import AddProduct from '../ProductMaintain/AddProduct';
import ManageProduct from '../ProductMaintain/ManageProduct';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faPlus , faEdit} from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
    const [manager, setManager] = useState(false);
   const [addProduct, setAddProduct] = useState(true);
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 managing-area">
                    <h1 className="brand-name">Smart Shopping</h1>
                    <button className="manage-button" onClick={() => {
                        setManager(true);
                        setAddProduct(false);
                    } } ><FontAwesomeIcon icon={faTasks}/> Manage Product</button> <br />
                    <button className="manage-button" onClick={() => {
                        setAddProduct(true);
                        setManager(false)
                    } } ><FontAwesomeIcon icon={faPlus}/> Add Product</button> <br />
                    <button className="manage-button"><FontAwesomeIcon icon={faEdit}/> Edit</button>
                </div>
                <div className="col-md-8">
                    {
                        addProduct &&
            
                        <AddProduct></AddProduct> 
                    }
                    {
                        manager && 
                        <ManageProduct>
        
                        </ManageProduct>
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;