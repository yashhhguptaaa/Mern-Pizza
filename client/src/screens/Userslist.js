import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { deleteUser, getAllUsers } from '../actions/userActions';


export default function Userslist() {

    const dispatch = useDispatch()
    const usersstate = useSelector(state => state.getAllUsersReducer)
    const { loading, error, users } = usersstate


    useEffect(() => {

        dispatch(getAllUsers())

    }, [])
    return (
        <div>
            <h1>Users List</h1>
            {loading && (<Loading />)}
            {error && (<Error error="Something went wrong" />)}

            <table className="table table-bordered table-responsive-sm">
                <thead className="thead" style={{ backgroundColor: 'lightgrey' }}>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user => {
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <i style={{ color: 'red' }} className="fa fa-trash" onClick={() => { user.isAdmin === true ? alert(`The user is Admin`) : dispatch(deleteUser(user._id)) }}></i>
                            </td>
                        </tr>
                    })}
                </tbody>


            </table>
        </div>
    )
}
