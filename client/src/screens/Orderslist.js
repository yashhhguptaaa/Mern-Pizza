import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { getAllOrders , deliverOrder } from '../actions/orderActions';

export default function Orderslist() {

    const dispatch = useDispatch()

    const getordersstate = useSelector(state => state.getAllOrdersReducer)
    const { loading, error, orders } = getordersstate

    useEffect(() => {

        dispatch(getAllOrders())
    }, [])
    return (
        <div>
            <h1>Orders List</h1>
            {loading && (<Loading />)}

            <table className="table table-striped table-bordered table-responsive-sm">
                <thead className="table-dark">
                    <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>User Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {orders && orders.map(order => {
                        return <tr>
                            <td>{order._id}</td>
                            <td>{order.email}</td>
                            <td>{order.userid}</td>
                            <td>{order.orderAmount}</td>
                            <td>{order.createdAt.substring(0, 10)}</td>
                            <td>
                                {order.isDelivered ? (<h1>Delivered</h1>) : (<button onClick={() => dispatch(deliverOrder(order._id))} className="btn">Deliver</button>)}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
