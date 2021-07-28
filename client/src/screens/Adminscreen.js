import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Userslist from './Userslist'
import Orderslist from './Orderslist';
import Addpizza from './Addpizza';
import Pizzaslist from './Pizzaslist';
import { Switch, Route , Link } from 'react-router-dom';
import Editpizza from './Editpizza';

export default function Adminscreen() {
    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch()

    useEffect(() => {

        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }

    }, [])
    return (
        <div>

            <div className="row justify-content-center p-3">
                <div className="col-md-10">
                    <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>

                    <ul className="adminfunctions">
                        <li><Link to="/admin/userslist">Users List</Link></li>
                        <li><Link to="/admin/pizzaslist">Pizzas List</Link></li>
                        <li><Link to="/admin/addpizza">Add New Pizza</Link></li>
                        <li><Link to="/admin/orderslist">Orders List</Link></li>
                    </ul>

                    <Switch>
                        <Route path="/admin" component={Userslist} exact />
                        <Route path="/admin/userslist" component={Userslist} exact />
                        <Route path="/admin/orderslist" component={Orderslist} exact />
                        <Route path="/admin/addpizza" component={Addpizza} exact />
                        <Route path="/admin/pizzaslist" component={Pizzaslist} exact />
                        <Route path="/admin/editpizza/:pizzaid" component={Editpizza} exact />
                    </Switch>
                </div>

            </div>


        </div>
    )
}
