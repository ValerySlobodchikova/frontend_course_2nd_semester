import React from 'react';
import './defaultStyles/App.module.sass'
import {Header} from "./components/EcoMarketPage/HeaderComponent/Header";
import {Footer} from "./components/EcoMarketPage/FooterComponent/Footer";
import {Main} from "./components/EcoMarketPage/MainComponent/Main";
function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
