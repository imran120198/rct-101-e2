import React, { useState, useEffect } from "react";
import { Image, Box } from "@chakra-ui/react";

const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  const Text = () => <div />;
  <Box boxSize="sm">
    <Image src="products.imageSrc" alt="Dan Abramov" />
  </Box>;
  
  const Stack = () => <div />;
  const Heading = () => <div />;
  const Tag = () => <div />;
  const TagLabel = () => <div />;

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const saveInfo = () => {
    fetch("https://localhost:8080/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        value: newTodo,
      }),
    })
      .then((res) => res.json())
      .then((d) => {
        setTodos([...todos, d]);
        setNewTodo("");
        console.log(d);
      });
  };
  saveInfo();

  useEffect(() => {
    fetch("https://localhost:8080/products")
      .then((res) => res.json())
      .then((d) => {
        setTodos(d);
      });
  }, []);

  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
  );
};

export default Product;
