import React from 'react';
import './defaultStyles/App.module.sass'
import {Header} from "./components/HeaderComponent/Header";
import {Footer} from "./components/FooterComponent/Footer";
import {Main} from "./components/pages/EcoMarketPage/MainComponent/Main";
import {Route, Routes} from "react-router-dom";
import {EcoMarketPage} from "./components/pages/EcoMarketPage/EcoMarketPage";
import {Layout} from "./components/Layout/Layout";

export const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                {/*path='/ecomarket'*/}
                <Route  path='/ecomarket' element={<EcoMarketPage/>} index/>
            </Route>
        </Routes>
    )
        ;
}


