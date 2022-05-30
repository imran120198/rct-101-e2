import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  <Button colorScheme="teal" variant="outline" onClick={() => {InitialFocus()} }>
    Add New Product
  </Button>;

  function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef();
    const finalRef = React.useRef();

    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
        <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input ref={initialRef} placeholder="Title" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Category</FormLabel>
                <Input placeholder="Category" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Gender</FormLabel>
                <Select>
                  <option type="radio" value="male">
                    Male
                  </option>
                  <option type="radio" value="female">
                    Female
                  </option>
                  <option type="radio" value="unisex">
                    Unisex
                  </option>
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Price</FormLabel>
                <Input placeholder="Rs Price" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Create</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  const ModalBody = () => <div />;
  const Input = () => <div />;
  const Select = () => <div />;
  const RadioGroup = () => <div />;
  const Radio = () => <div />;

  return (
    <>
      <Button my={4} data-cy="add-product-button">
        Add New Product
      </Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" placeholder="Price" />
          <Button data-cy="add-product-submit-button">Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
