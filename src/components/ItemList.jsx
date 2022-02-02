import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
const axios = require('axios');

export default function ItemList(props) {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=d609a977b7dd46548337c1a05ffe54ab`)
        .then(({ data }) => {
          setItems(data);
        })
        .catch((err) => console.log(err));
    }, []);
    
    console.log(items)
    return (
        <div>
            {items.count &&
              items.results.map((item) => {
                  return (
                      <ItemCard
                      name={item.title}
                      img={item.image}
                      about={item.imageType}
                      details={item.id}
                      // OnClick={() => push(`/item/${item.id}`)}
                      />
                      );
                    })}
          </div>
    );
};