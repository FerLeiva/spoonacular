import React from "react";

export default function ItemCard(props) {

 const handleRecipe = (props) => {
  const id = props.details
  }

  return (

    <div className="card" style={{padding: '0.5rem', width: '18rem',height: '24rem'}}>
  <a className="anchor" href={`recipes/${props.details}`}>
  <img src={props.img} className="card-img-top" alt="Product Image"/>
  </a>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text" style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{props.about}</p>
    <a className="btn btn-sm btn-success " style={{margin: '0.1rem', backgroundColor: '#2a8719', borderColor: '#2a8719'}}>{props.vegetarian}</a>
        <a className="btn btn-sm btn-success" style={{margin: '0.1rem', backgroundColor: '#9c27b0', borderColor: '#9c27b0'}}>{props.vegan}</a>
        <a className="btn btn-sm btn-success" style={{margin: '0.1rem', backgroundColor: '#ffc107', borderColor: '#ffc107'}}>{props.gluten}</a>
  </div>
</div>
  );
};