import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Select } from '@chakra-ui/react'

const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
  <div direction="row" spacing={4} align="center">
    <Button colorScheme="teal" variant="ghost">
      Button
    </Button>
  </div>;
  //const ButtonGroup = () => <div />;
  <Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>

  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCo0unt, SetTotalCount] = useState(0);
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    const geturl = async () => {
      let res = await axios.get("https://localhost:8080/products");
      console.log(res.data);
      setTodos(res.data);
      SetTotalCount(Number(res.headers["x-total-count"]));
    };
    geturl();
  }, [page, limit]);

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button">First</Button>
      <Button data-cy="pagination-previous-button">Previous</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button">Next</Button>
      <Button data-cy="pagination-last-button">Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
