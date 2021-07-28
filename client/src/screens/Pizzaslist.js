import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { getAllPizzas , deletePizza } from '../actions/pizzaActions';
import {Link } from 'react-router-dom'

export default function Pizzaslist() {
    const dispatch = useDispatch()
    const pizzasstate = useSelector(state => state.getAllPizzasReducer);
    const { pizzas, loading, error } = pizzasstate;
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])
  
    return (
        <div>
            <h2>Pizzas List</h2>
            { loading && (<Loading />)}
            { error && (<Error error="Something went wrong"/> )}

            <table className="table table-bordered table-responsive-sm">
                <thead className="thead" style={{backgroundColor:'lightgrey'}}>
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { pizzas && pizzas.map(pizza => {
                        return <tr>
                            <td>{pizza.name}</td>
                            <td>
                                Small : {pizza.prices[0]['small']}<br/>
                                Medium : {pizza.prices[0]['medium']}<br/>
                                Large : {pizza.prices[0]['large']}
                            </td>
                            <td>{pizza.category}</td>
                            <td>
                                <i style={{color:'red'}} className="fa fa-trash" onClick= {() => {dispatch(deletePizza(pizza._id))}}></i>
                                <Link to={`/admin/editpizza/${pizza._id}`}><i style={{marginLeft:'20px'}} className="fa fa-edit"></i></Link>
                            </td>
                        </tr>
                    })}
                </tbody>

                
            </table>
            
        </div>
    )
}
