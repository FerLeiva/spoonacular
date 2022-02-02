import React from "react";
import Footer from "./Footer";
import ItemList from './ItemList'

export default function Homepage() {
    return (
    <div>
        <div>
          <h1>Dishes Menu</h1>
        </div>
        <ItemList/>
        <Footer/>
    </div>
    );
};