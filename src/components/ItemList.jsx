import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
const axios = require('axios');

export default function ItemList(props) {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.spoonacular.com/recipes/random?apiKey=d609a977b7dd46548337c1a05ffe54ab&number=8&tags=vegetable&addRecipeInformation=true')
    .then(({ data }) => {
      setItems(data);
    })
    .catch((err) => console.log(err));
  }, []);

  console.log(items)
  
  function IsVegan (food) {
    let validation = ''
    if (food === true) {
      validation = 'Vegan Friendly'
    return  validation
  }
  else{
    validation = 'NOT Vegan'
    return validation
  }
  }

  function IsVegetarian (food) {
    let validation = ''
    if (food === true) {
      validation = 'Vegetarian Friendly'
    return  validation
  }
  else{
    validation = 'NOT Vegetarian'
    return validation
  }
  }

  function HasGluten (food) {
    let validation = ''
    if (food === true) {
      validation = 'Gluten Free'
    return  validation
  }
  else{
    validation = 'NOT Gluten Free'
    return validation
  }
 }
  
  return (
  <div style={{width:'auto',display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
    {items.recipes &&
    items.recipes.map((item) => {
      return (
        <div>
      <ItemCard
      name={item.title}
      img={item.image}
      details={item.id}
      about={item.summary}
      vegetarian={IsVegetarian(item.vegetarian)}
      vegan={IsVegan(item.vegan)}
      gluten={HasGluten(item.glutenFree)}
      // OnClick={() => push(`/item/${item.id}`)}
      />
      </div>
      );
    })}
  </div>
  );
};