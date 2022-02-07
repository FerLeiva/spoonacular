import React, { useEffect, useState } from "react";
const axios = require('axios');

export default function RecipeDetail(props) {
  const [recipe, setRecipe] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://api.spoonacular.com/recipes/${1070648}/information?apiKey=d609a977b7dd46548337c1a05ffe54ab`)
      .then(({ data }) => {
        console.log(props)
        setRecipe(data);
      })
      .catch((err) => console.log(err));
    }, []);

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

  <div className="card mb-3" style={{maxWidth : '100rem', textAlign: '-webkit-center'}}>
  <div>
    <div className="col-md-4">
      <img src={recipe.image} class="img-fluid rounded-start" alt="Recipe Image"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <p className="card-text" style={{textAlign: 'justify'}}>{recipe.summary}</p>
        <h6 className="card-title">Ingredients</h6>
        {console.log(recipe.extendedIngredients)}
        <ul> {recipe.extendedIngredients.map((item) => {
          return (
            <li>
              <p className="card-text">{item.nameClean}</p>
            </li>
          )
        })}
        </ul>
        <div style={{textAlign: 'center'}}>
        <a className="btn btn-sm btn-success " style={{margin: '0.1rem', backgroundColor: '#2a8719', borderColor: '#2a8719'}}>{IsVegetarian(recipe.vegetarian)}</a>
        <a className="btn btn-sm btn-success" style={{margin: '0.1rem', backgroundColor: '#9c27b0', borderColor: '#9c27b0'}}>{IsVegan(recipe.vegan)}</a>
        <a className="btn btn-sm btn-success" style={{margin: '0.1rem', backgroundColor: '#ffc107', borderColor: '#ffc107'}}>{HasGluten(recipe.glutenFree)}</a>
        </div>
      </div>
    </div>
  </div>
</div>
    );
 
};