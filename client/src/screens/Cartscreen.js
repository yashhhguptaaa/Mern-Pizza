import React from 'react';
import {useSelector ,useDispatch} from 'react-redux';
import {addToCart, deleteFromCart} from '../actions/cartActions';
import Checkout from '../components/Checkout';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Cartscreen() {

    AOS.init();

    const dispatch = useDispatch();
    const cartstate = useSelector(state => state.cartReducer);
    const cartItems = cartstate.cartItems;
    var subTotal = cartItems.reduce((total,Item) => { return total +Item.price},0 )

    if(localStorage.getItem('currentuser')== null){
        alert(`You have to login first`)
        window.location.href='/login'
    }
    
    return (
        <div data-aos='fade-down'
        data-aos-duration="2000">
            <div className="row justify-content-center p-2">

                <div className="col-md-6">
                    <h2 style={{fontSize:'30px !important'}}>My CART</h2>

                   { cartItems.length==0 ?<h1>No PIZZAS</h1>:
                     cartItems.map(item => {
                        return <div className="flex-container">

                                    <div className='text-start m-1 w-100'>
                                        <h1>{item.name}[{item.varient}]</h1>
                                        <h1>Price: {item.quantity}*{item.prices[0][item.varient]}= {item.price}</h1>
                                        <h1 style={{display:"inline"}}>Quantity:</h1>
                                        <i className="fa fa-plus" onClick={() => { dispatch(addToCart(item,item.quantity+1,item.varient))}}></i>
                                        <b>{item.quantity}</b>
                                        <i className="fa fa-minus" aria-hidden="true" onClick={() => { dispatch(addToCart(item,item.quantity-1,item.varient))}}></i>
                                        <hr />
                                    </div>
                                   
                                    <div className='m-1 w-100'>
                                        <img className ='text-end float-right' style={{height :'100px',width:'100px'}}src={item.image} />
                                    </div>
                                    <div className='m-1 w-100'>
                                        <i className="fas fa-trash-alt mt-5" onClick={() => {dispatch(deleteFromCart(item))}}></i>
                                    </div>
                              </div>
                    })}

                    
                </div>
                <div className="col-md-4 text-end"> 
                 <h2 style={{fontSize:'30px !important'}}>SubTotal :- {subTotal} Rs/-</h2>
                 <Checkout subtotal={subTotal}/>
                </div>

            </div>
        </div>
    )
}
