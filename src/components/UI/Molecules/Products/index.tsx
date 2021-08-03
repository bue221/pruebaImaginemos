import React from "react";

import { useStyles } from "./style";

import products from "../../../../commons/utils/products.json";

import CardProduct from "../../Atoms/CardProduct";
import { addToCart } from "../../../../features/shoppingCart/shoppingCart";
import { useAppDispatch } from "../../../../app/hooks";

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

  const dispatch = useAppDispatch();

  const addItem = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className={root}>
      {products.map((product: Product) => (
        <CardProduct
          product={product}
          onClick={() => addItem(product)}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default Products;
