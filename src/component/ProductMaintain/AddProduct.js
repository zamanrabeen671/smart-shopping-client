import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            size: data.size,
            price: data.price,
            imageURL: imageURL
        }
        console.log(eventData)
        const url = 'https://strawberry-crumble-09049.herokuapp.com/addProduct';
        fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(data => {
            alert('added a new items')
            console.log(data)
        })

    };
    const handleImage = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'e10af06d2bb351c11828bd2489f3ff98')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                if (response) {
                    setImageURL(response.data.data.display_url);
                    console.log(response.data.data.display_url);
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const addProductContainer = {
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '10px',
        height: '100%',
        margin: '5px'
    }
    const adminCard ={
        padding: '5px',
        
    }
    return (
        <div style={addProductContainer}>
            <h2 style={{backgroundColor: 'whitesmoke', padding: '10px', borderRadius: '10px', margin: '5px'}}>Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={adminCard}>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="productName">Product Name</label> <br />
                                    < input name="name" defaultValue="" ref={register} placeholder="product name" />
                                    {errors.name && <span className="error">Name is required</span>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="size">Size</label> <br />
                                    < input name="size" placeholder="size" ref={register} />
                                    {errors.size && <span className="error">size is required</span>}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="price">Add Price</label> <br />
                                    < input name="price" placeholder="price" ref={register} />
                                    {errors.price && <span className="error">price is required</span>}

                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="image">Add Product Image</label><br />
                                    < input name="image" type="file" onChange={handleImage} />
                                    {errors.image && <span className="error">img  is required</span>} <br />
                                </div>
                            </div>
                            <input type="submit" value="save" className="btn btn-primary mt-2" />
                        </form>
        </div>
    );
};

export default AddProduct;