import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/userActions';

export default function Navbar() {

    const cartstate = useSelector(state => state.cartReducer);
    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch()

    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/">My PIZZA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        {currentUser!=null ? (<div className="dropdown">
                            <a className="dropbtn">{currentUser.name}</a>
                            <div className="dropdown-content">
                                <a href="/orders">Orders</a>
                                <a href="#" onClick={() => dispatch(logoutUser())}><li>Logout</li></a>
                            </div>
                        </div>) :
                            (<li className="nav-item ">
                                <a className="nav-link" href="/login">
                                    Login
                                </a>
                            </li>)

                        }

                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                Cart({cartstate.cartItems.length})
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
