import { IconButton } from "@material-ui/core";
import React from "react";

import Start from "../../../../assets/svg/start";

import { useStyles } from "./style";

interface Product {
  id: number;
  name: string;
  qualification: number;
  time: string;
  price: number;
  image: string;
}

const CardProduct = ({
  product,
  onClick,
}: {
  product: Product;
  onClick: any;
}) => {
  const { root, container, divImg, img, divTime, textDiv, divAdd } =
    useStyles();
  const { id, image, name, price, qualification, time } = product;

  return (
    <div className={root} key={id}>
      <div className={container}>
        <div className={divImg}>
          <img className={img} src={image} alt={name} />
          <div className={divTime}>
            <p>{time}</p>
          </div>
          <div className={divAdd}>
            <IconButton onClick={onClick}>+</IconButton>
          </div>
        </div>
        <div className={textDiv}>
          <h3>{name}</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ display: "flex" }}>
              <div style={{ display: "flex", marginRight: "1em" }}>
                <Start />
              </div>
              <strong>{qualification}</strong>
            </p>
            <p>$ {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
