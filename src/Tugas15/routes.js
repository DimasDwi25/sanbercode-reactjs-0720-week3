import React from 'react';
import { Switch,Link, Route } from 'react-router-dom';
import DaftarBuah from '../Tugas 11/DaftarBuah';
import Timer from '../Tugas 11/timer';
import Lists from '../Tugas13/list';
import SimpleHooks from '../Tugas14/hooks';
import Buah from '../Tugas15/Tugas15'
import './navbar.css';

const Routes = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/timer">Timer</Link>
                </li>
                <li>
                    <Link to="/list">List</Link>
                </li>
                <li>
                    <Link to="/hooks">Hooks</Link>
                </li>
                <li>
                    <Link to="/Buah">Daftar Buah Context</Link>
                </li>
            </ul>
        </nav>
        
        <switch>
            <Route exact path="/">
                <DaftarBuah />
            </Route>
            <Route path="/timer">
                <Timer />
            </Route>
            <Route path="/list">
                <Lists />
            </Route>
            <Route path="/hooks">
                <SimpleHooks />
            </Route>
            <Route path="/buah">
                <Buah />
            </Route>
            <Route path="/"/>
        </switch>
        </>
    )
}

export default Routes
