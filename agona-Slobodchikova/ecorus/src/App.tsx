import React from 'react';
import './styles/App.module.sass'
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {MainPage} from "./pages/MainPage";
import {EcoMarketPage} from "./pages/EcoMarketPage";

export const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/ecomarket' element={<EcoMarketPage/>} />
                <Route path='/' element={<MainPage/>} index/>
            </Route>
        </Routes>
    )
        ;
}


