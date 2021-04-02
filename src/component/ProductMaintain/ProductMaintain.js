import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const ProductMaintain = (props) => {
    const {name, size, price} = props.pd;
    const MaintainerContainer = {
        backgroundColor: 'whiteSmoke',
        padding: '10px',
        borderRadius: '2px',
        height: '100%'
    }
    const handleDelete = (id) => {
     fetch(`https://strawberry-crumble-09049.herokuapp.com/delete/${id}`, {
         method: 'DELETE'
     })
     .then(res => res.json())
     .then(data => {
         if(data) {
          alert('are you sure?');
          window.location.reload(false);
         }
     })   
    }
    const btnStyleDel = {
        backgroundColor: 'red',
        padding: '0 5px'
    }
    const btnStyleEdit = {
        backgroundColor: 'green',
        padding: '0 5px'
    }
    const contentStyle = {
        fontWeight: 'bold'
    }
    return (
        <div style={MaintainerContainer}>
            <div className="row">
                <div className="col-md-4" style={contentStyle}>{name}</div>
                <div className="col-md-3" style={contentStyle}>{size}</div>
                <div className="col-md-2" style={contentStyle}>{price}</div>
                <div className="col-md-3"><button style={btnStyleEdit}><FontAwesomeIcon icon={faEdit}/></button> <button style={btnStyleDel} onClick={() => handleDelete(props.pd._id)}><FontAwesomeIcon icon={faTrashAlt}/></button></div>
            </div>
        </div>
    );
};

export default ProductMaintain;