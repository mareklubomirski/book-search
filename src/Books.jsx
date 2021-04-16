import React from "react";
import "./App.css";

import { Row, Col, Card } from 'reactstrap';

const Books = ({ book, result }) => {
  
  return (
    <Row>
      <Col>
        <Card>
          {Object.keys(result).map(book => (
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
          ))}
        </Card>
      </Col>
    </Row>
  );
};

export default Books;



