import React from "react";

import { useStyles } from "./style";

interface Product {
  id: number;
  name: string;
  qualification: number;
  time: string;
  price: number;
  image: string;
}

const CardProduct = ({ product }: { product: Product }) => {
  const { root, container, divImg, img, divTime, textDiv } = useStyles();
  const { id, image, name, price, qualification, time } = product;

  return (
    <div className={root} key={id}>
      <div className={container}>
        <div className={divImg}>
          <img className={img} src={image} alt={name} />
          <div className={divTime}>
            <p>{time}</p>
          </div>
        </div>
        <div className={textDiv}>
          <h3>{name}</h3>
          <p>
            <strong>{qualification}</strong> $$ {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
