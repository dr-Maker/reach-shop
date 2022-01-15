import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../containers/Layout';
import Home from "../pages/Home";
import Login from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword';
import SendMail from '../pages/SendMail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from "../pages/NotFound";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

import '../styles/global.css';

const App = ()=>{
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
             <Layout>
                <BrowserRouter>
                
                            <Routes>
                                <Route  index  element={<Home/>}/>
                                <Route  path="/login" element={<Login />}/>
                                <Route  path="/recovery-password" element={<RecoveryPassword />}/>
                                <Route  path="/send-email" element={<SendMail />}/>
                                <Route  path="/new-password" element={<NewPassword />}/>
                                <Route  path="/account" element={<MyAccount />}/>
                                <Route  path="/singup" element={<CreateAccount />}/>
                                <Route  path="/checkout" element={<Checkout />}/>
                                <Route  path="/orders" element={<Orders />}/>
                                <Route path={"*"} element={<NotFound />} />
                            </Routes>         
                </BrowserRouter>
            </Layout>
        </AppContext.Provider>
        )
}

export default App