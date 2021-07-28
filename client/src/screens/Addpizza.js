import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPizza } from '../actions/pizzaActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success'



export default function Addpizza() {

    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [smallprice, setSmallprice] = useState()
    const [mediumprice, setMediumprice] = useState()
    const [largeprice, setLargeprice] = useState()
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    const addpizzastate = useSelector(state => state.addPizzaReducer)
    const {loading , error ,success} = addpizzastate;

    function formHandler(e){
        e.preventDefault();

        const pizza = {
            name,
            image,
            description,
            category,
            prices : 
                {
                    small: smallprice,
                    medium : mediumprice,
                    large: largeprice
                }
            
        }
        dispatch(addPizza(pizza))

    }
    return (
        <div>
            <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
                <h1>Add Pizza</h1>
                { loading && <Loading/>}
                { error && <Error error="Something went wrong" />}
                { success && <Success success = "Pizza Added Successfully" />}

                <form onSubmit={formHandler}>
                    <input className="form-control" type="text" placeholder="Write Pizza name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <input className="form-control" type="number" placeholder="Small Varient Price" value={smallprice} onChange={(e) => { setSmallprice(e.target.value) }} />
                    <input className="form-control" type="number" placeholder="Medium Varient Price" value={mediumprice} onChange={(e) => { setMediumprice(e.target.value) }} />
                    <input className="form-control" type="number" placeholder="Large Varient Price" value={largeprice} onChange={(e) => { setLargeprice(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Put Image URL" value={image} onChange={(e) => { setImage(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Write description about pizza" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Pizza Category" value={category} onChange={(e) => { setCategory(e.target.value) }} />
                    <button className="btn mt-3" type="submit">Add Pizza</button>
                </form>
            </div>
        </div>
    )
}
