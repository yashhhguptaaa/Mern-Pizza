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
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"> <span className="navbar-toggler-icon"></span></i>
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

                        <li className="nav-item ms-auto">
                            <a className="nav-link" href="/cart">
                                Cart({cartstate.cartItems.length})
                            </a>
                        </li>
                    </ul>
                </div> */}
                <div style={{display:'flex'}} class=" nav-item dropdown ms-auto">
                    {
                        currentUser != null ?
                            (<div>
                                <button style={{backgroundColor:'white',border:'none',outline:'none',marginTop:'6px'}} class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {currentUser.name}
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                    <li><a class="dropdown-item" href="/orders">Orders</a></li>
                                    <li><a class="dropdown-item" href="#" onClick={() => dispatch(logoutUser())}>Logout</a></li>
                                </ul>
                            </div>)
                            :
                            (<div><li style={{listStyle:'none' , fontSize:'18px',marginTop:'2px',marginLeft:'15px'}}><a className="dropdown-item" href="/login">Login</a></li></div>)
                    }
                    <li style={{listStyle:'none'}} className="nav-item ms-auto">
                        <a  className="nav-link" href="/cart">
                            Cart({cartstate.cartItems.length})
                        </a>
                    </li>
                </div>
            </nav>
        </div>
    )
}