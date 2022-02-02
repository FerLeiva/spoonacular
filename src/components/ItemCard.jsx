import React from "react";

export default function ItemCard(props) {
    return (
    <div>
        <h3>{props.name}</h3>
        <img
        src={props.img}
        alt="Product Image"
        />
        <h2>${props.about}</h2>
        <button>
        {props.details}
        </button>
    </div>
  );
};