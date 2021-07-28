import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';

export default function Loginscreen() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const loginstate = useSelector(state => state.loginUserReducer);
    const { loading, success, error } = loginstate;
    const dispatch = useDispatch();
    function login() {

        const user = {
            email,
            password
        }
        console.log(user);
        dispatch(loginUser(user));

    }

    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = '/';
        }
    }, [])
    return (
        <div className="login">
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">




                    <h2 className="text-center" style={{ fontSize: '35px' }}>Login</h2>
                    {loading && <Loading />}
                    {success && <Success success="User Login Successfully" />}
                    {error && <Error error='Invalid Credientals' />}
                    <div>
                        <input required type="email" placeholder="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input required type="password" placeholder="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <button className="btn mt-3 mb-3" onClick={login}>LOGIN</button>
                        <br />
                        <a style={{ color: 'black', textDecoration: 'none' }} href="/registration">Click Here To Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
