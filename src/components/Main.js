import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import ArrowsDown from './ArrowsDown';


const Main = () => {

    const location = useLocation()

    return (
        <div className="main container d-flex flex-column justify-content-between">
            <Navbar />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </AnimatePresence>
            <ArrowsDown />
        </div>
    )
}

export default Main