import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetails from './OrderDetails';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('https://strawberry-crumble-09049.herokuapp.com/ShowOrder?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    const orderContent = {
        backgroundColor: 'white',
        Padding: '10px',
        textAlign: 'center',
        borderRadius: '5px',
        boxShadow: '2px 2px 5px gray',
        paddingBottom: '10px'
    }
    return (
        <div style={orderContent} className="container mt-5">
            <h2 style={{padding:'5px'}}>YOU ARE ORDERS {user.length} ITEMS</h2>
            {
                user.map(info => <OrderDetails info = {info}></OrderDetails>)
            }
        </div>
    );
};

export default Order;