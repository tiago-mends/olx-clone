import React from 'react';
import { Switch } from 'react-router-dom';

import RouteHandler from './components/RouteHandler';

import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd';
import Ads from './pages/Ads';
import MyAccount from './pages/MyAccount';


import NotFound from './pages/NotFound';

const routesControl = () => {
    return (
        <Switch>
            <RouteHandler exact path="/">
                <Home />
            </RouteHandler>

            <RouteHandler exact path="/about">
                <About />
            </RouteHandler>

            <RouteHandler exact path="/signin">
                <SignIn />
            </RouteHandler>

            <RouteHandler exact path="/signup">
                <SignUp />
            </RouteHandler>

            <RouteHandler exact path="/ad/:id">
                <AdPage />
            </RouteHandler>

            <RouteHandler exact path="/ads">
                <Ads />
            </RouteHandler>

            <RouteHandler private exact path="/post-an-ad">
                <AddAd />
            </RouteHandler>

            <RouteHandler private exact path="/myaccount">
                <MyAccount />
            </RouteHandler>

            <RouteHandler>
                <NotFound />
            </RouteHandler>
        </Switch>
    );
}

export default routesControl;