import React from 'react';
import Navbar from './Navbar';
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function Bla() {
    return (
        <div>
            <HashRouter>
                <Navbar />
                <div className='content'>
                    <Routes>
                        <Route path='/' Component={Home} />
                        <Route path='/contact' Component={Contact} />
                        <Route path='/about' Component={About} />
                    </Routes>
                </div>
            </HashRouter>
        </div>
    );
}

export default Bla;