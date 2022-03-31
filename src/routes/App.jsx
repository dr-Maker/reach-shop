import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {  HashRouter, Routes, Route } from "react-router-dom";
import Layout from '../containers/Layout';
import Home from "@pages/Home";
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
           
                {/* <HashRouter> */}
                <BrowserRouter>
                    <Layout>
                    
                                <Routes>
                                    <Route path="/"  element={<Home/>}/>
                                    <Route exact path="/login" element={<Login />}/>
                                    <Route exact path="/recovery-password" element={<RecoveryPassword />}/>
                                    <Route exact path="/send-email" element={<SendMail />}/>
                                    <Route exact path="/new-password" element={<NewPassword />}/>
                                    <Route exact path="/account" element={<MyAccount />}/>
                                    <Route exact path="/singup" element={<CreateAccount />}/>
                                    <Route exact path="/checkout" element={<Checkout />}/>
                                    <Route exact path="/orders" element={<Orders />}/>
                                    <Route path="*" element={<NotFound />} />  
                                </Routes>    
                    </Layout>     
                </BrowserRouter>
                {/* </HashRouter> */}



            
        </AppContext.Provider>
        )
}

export default App