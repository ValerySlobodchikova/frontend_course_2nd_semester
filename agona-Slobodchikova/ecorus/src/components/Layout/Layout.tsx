import react from 'react';
import {Header} from "../HeaderComponent/Header";
import {Outlet} from "react-router-dom";
import {Footer} from "../FooterComponent/Footer";

export const Layout = () => {
    return (
        <div>
            <header><Header/></header>
            <main>
                <Outlet/>
            </main>
            <footer><Footer/></footer>
        </div>
    )

}