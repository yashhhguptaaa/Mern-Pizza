import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { addToCart } from '../actions/cartActions';

export default function Pizza({ pizza }) {

    AOS.init()

    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState('small');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    const addtocart = () => {
        if (localStorage.getItem('currentUser') == null) {
            alert(`Please Register first`)
            window.location.href = '/registration'
        }
        else {
            dispatch(addToCart(pizza, quantity, varient))
        }

    }

    return (
        <div
            data-aos='zoom-out'
            data-aos-duration="1000"
            className="shadow-lg p-3 mb-5 bg-white rounded">

            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} className="img-fluid" style={{ height: "200px" }} />
            </div>
            <div className="flex-container m-1">
                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select className="form-control" value={varient} onChange={(e) => { setVarient(e.target.value) }}>
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className="form-control" value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>

            <div className="flex-container">
                <div className="w-100 m-1">
                    <h1 className="mt-1">Price: {pizza.prices[0][varient] * quantity} Rs/-</h1>
                </div>

                <div className="w-100 m-1">
                    <button className="btn"
                        onClick={addtocart}>ADD TO CART</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={pizza.image} className="img-fluid" style={{ height: "400px" }} />
                </Modal.Body>
                <Modal.Body>
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
