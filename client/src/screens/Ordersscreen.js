import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../actions/orderActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Ordersscreen() {

    AOS.init()


    const dispatch = useDispatch();
    const orderstate = useSelector(state => state.getUserOrdersReducer);
    const { orders, error, loading } = orderstate;

    useEffect(() => {
        dispatch(getUserOrders());
    }, [])
    return (
        <div
        >
            <h2 style={{ fontSize: '35px' }}>MY Orders</h2>
            <hr />
            <div className="row justify-content-center p-2">
                {loading && (<Loading />)}
                {error && (<Error error="Something went wrong!!" />)}
                {orders && orders.map(order => {
                    return <div data-aos='flip-up'
                        data-aos-duration="1000" className="col-md-8 shadow-lg p-3 mb-5 bg-white rounded" >
                        <div className="flex-container" style={{ backgroundColor: "red", marginBottom: '30px', color: 'white' }}>
                            <div className="text-left w-100 m-1">
                                <h2 style={{ fontSize: '25px', color: 'black' }}>Items</h2>
                                <hr />
                                {order.orderItems.map(item => {
                                    return <div>
                                        {item.name} [{item.varient}]*{item.quantity} = {item.price}
                                    </div>
                                })}
                            </div>
                            <div className="text-left w-100 m-1">
                                <h2 style={{ fontSize: '25px', color: 'black' }}>Address</h2>
                                <hr />
                                <p>Street : {order.shippingAddress.street}</p>
                                <p>City : {order.shippingAddress.city}</p>
                                <p>Country : {order.shippingAddress.country}</p>
                                <p>Pincode : {order.shippingAddress.pincode}</p>
                            </div>
                            <div className="text-left w-100 m-1">
                                <h2 style={{ fontSize: '25px', color: 'black' }}>Order Info</h2>
                                <hr />
                                <p>Order Amount : {order.orderAmount}</p>
                                <p>Date : {order.createdAt.substring(0, 10)}</p>
                                <p>Transaction Id : {order.transactionId}</p>
                                <p>Order Id : {order._id}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
