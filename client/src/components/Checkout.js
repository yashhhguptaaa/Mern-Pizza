import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../actions/orderActions';
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';

export default function Checkout({ subtotal }) {

    const orderstate = useSelector(state => state.placeOrderReducer)
    const { loading, error, success } = orderstate;
    const dispatch = useDispatch()
    function tokenHander(token) {
        console.log(token);
        dispatch(placeOrder(token, subtotal))
    }

    return (
        <div>
            {loading && <Loading />}
            {success && <Success success="Your Order Placed Successfully" />}
            {error && <Error error='Something went wrong' />}

            <StripeCheckout

                amount={subtotal * 100}
                shippingAddress
                token={tokenHander}
                stripeKey='pk_test_51JBZZmSE1h9yxCAo5eQ653kzjQwmE9nXh7PzizVICEm81UHXsyuOabuvewRhkHjuKPzfN2rmTArj0gJSiU1Gjj4t00FCJ26kwq'
                currency='INR'
            >


                <button className='btn' onClick={() => {
                    { 
                        if(subtotal === 0){
                            alert(`Your cart is empty`)
                            window.location.reload();
                        }
                    }
                }}>Pay Now</button>
            </StripeCheckout>
        </div>
    )
}
