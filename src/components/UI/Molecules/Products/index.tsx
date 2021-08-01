import React from "react";

import { useStyles } from "./style";

import products from "../../../../commons/utils/products.json";

import CardProduct from "../../Atoms/CardProduct";

interface Product {
  id: number;
  name: string;
  qualification: number;
  time: string;
  price: number;
  image: string;
}

const Products = () => {
  const { root } = useStyles();
  return (
    <div className={root}>
      {products.map((product: Product) => (
        <CardProduct product={product} />
      ))}
    </div>
  );
};

export default Products;
