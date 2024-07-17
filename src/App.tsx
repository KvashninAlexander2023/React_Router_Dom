import React, { useState } from 'react';
import styles from "./components/Site.module.css";
import { PageOne } from './components/pages/PageOne';
import { PageTwo } from './components/pages/PageTwo';
import { PageThree } from './components/pages/PageThree';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Error404 } from './components/pages/Error404';
import { NavLink } from 'react-router-dom';


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavLink to="/page1" className={({ isActive }) =>
                         isActive ? styles.activeNavLink : styles.navLink
                    } >page1</NavLink>
                    <div><NavLink to="/page2" className={({ isActive }) =>
                        isActive ? styles.activeNavLink : styles.navLink
                    } >page2</NavLink></div>
                    <div><NavLink to="/page3" className={({ isActive }) =>
                        isActive ? styles.activeNavLink : styles.navLink
                    } >page3</NavLink></div>

                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/' element={<Navigate to="/page1" replace={true} />} />
                        <Route path='/page1' element={<PageOne />} />
                        <Route path='/page2' element={<PageTwo />} />
                        <Route path='/page3' element={<PageThree />} />

                        <Route path='/*' element={<Navigate to="/error404" replace={true} />} />
                        <Route path='/error404' element={<Error404 />} />
                    </Routes>
                    Здесь будут кроссовки
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
