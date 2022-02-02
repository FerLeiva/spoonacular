import React, { useEffect, useState } from "react";

export default function ItemDetail(props) {
  const [item, setItem] = useState(null);
  
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/search/${props.id}`)
      .then(({ data }) => {
        setItem(data.book);
      });
  }, [props.id]);

  if (item) {
    return (
    <div className={style.details}>
        <div>
            <img
              src={item.img}
              alt="Product Image"
            />
        </div>
        <div>
            <h3>{item.title}</h3>
            <h3>${item.price}</h3>
            <p>{item.description}</p>
            <h3>{item.stock}</h3>
            <button>Add to menu</button>
        </div>
    </div>
    );
  };
};