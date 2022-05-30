import React from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;

  return (
    <>
      {/*  AddProduct */}
      <AddProduct />
      <>
        {/* List of Products */}
        <Product />
      </>
      {/* Pagination */}
      <Pagination />
    </>
  );
};

export default Products;
