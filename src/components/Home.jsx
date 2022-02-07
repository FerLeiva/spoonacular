import React from "react";
import ItemList from './ItemList'
import Footer from './Footer';

export default function Homepage() {
  return (
    <div>
    <h1>Dishes Menu</h1>
    <ItemList />
    <Footer/>
  </div>
  );
};