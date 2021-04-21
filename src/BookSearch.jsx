import React from "react";
import "./App.css";
import {
  Form,
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "reactstrap";

const BookSearch = ({ handleChange, handleSubmit }) => {
  return (
    <>
      <h1
        className="display-2 text-center text-white mb-3"
        style={{ zIndex: 2 }}
      >
        Book Search
      </h1>
      <div style={{ width: "60%", zIndex: 2 }}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <InputGroup size="lg" className="mb-3">
              <Input onChange={handleChange} placeholder="Search for books" />
              <InputGroupAddon addonType="append">
                <Button type="submit" size="lg" color="secondary">
                  <i className="fas fa-search"></i>
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </Form>
      </div>
    </>
  );
};
export default BookSearch;
