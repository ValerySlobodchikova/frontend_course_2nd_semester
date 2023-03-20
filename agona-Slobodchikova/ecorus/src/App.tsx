import React from 'react';
import './defaultStyles/App.module.sass'
import {Header} from "./components/HeaderComponent/Header";
import {Footer} from "./components/FooterComponent/Footer";

import {Route, Routes} from "react-router-dom";
import {EcoMarketPage} from "./components/pages/EcoMarketPage";
import {Layout} from "./components/Layout/Layout";
import {MainPage} from "./components/pages/MainPage";

export const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                {/*path='/ecomarket'*/}
                <Route path='/ecomarket' element={<EcoMarketPage/>} />
                <Route path='/' element={<MainPage/>} index/>
            </Route>
        </Routes>
    )
        ;
}


