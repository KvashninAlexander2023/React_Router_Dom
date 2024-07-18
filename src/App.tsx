import React, { useState } from 'react';
import styles from "./components/Site.module.css";
import { Adidas } from './components/pages/adidas';
import { PageTwo } from './components/pages/puma';
import { PageThree } from './components/pages/abibas';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Error404 } from './components/pages/Error404';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NavWrapper } from './components/pages/_styles';
import { Model } from './components/pages/model';


const PATH = {
    PAGE1: "/adidas",
    PAGE2: "/puma",
    PAGE3: "/abibas",
    ERROR404: "/page/error404"
} as const

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavWrapper>
                        <NavLink to={PATH.PAGE1} >Adidas</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={PATH.PAGE2}>Puma</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={PATH.PAGE3}>Abibas</NavLink>
                    </NavWrapper>

                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/' element={<Navigate to={PATH.PAGE1} replace={true} />} />
                        <Route path={PATH.PAGE1} element={<Adidas />} />
                        <Route path={PATH.PAGE2} element={<PageTwo />} />
                        <Route path={PATH.PAGE3} element={<PageThree />} />
                        <Route path={"/:cross/:id"} element={<Model />} />
                        {/* <Route path={"/:puma/:id"} element={<Model />} /> */}


                        <Route path='/*' element={<Error404 />} />
                        {/* <Route path='/*' element={<Navigate to={PATH.ERROR404} replace={true} />} />
                        <Route path={PATH.ERROR404} element={<Error404 />} /> */}
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;


