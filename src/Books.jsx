import React from "react";
import "./Books.css";
import { CardImg } from "reactstrap";

const Books = ({ books }) => {
  return (
    <div className="card-container" style={{ display: "flex", flexWrap: "wrap" }}>
      {books?.map((book) => (
        <div key={book.id} >
          <div className="image-container" style={{ maxWidth: 100 }}>
          <a target="blank" href={book.volumeInfo.previewLink}>
            <CardImg
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
            </a>
          </div>
          <div className="card-content">
            <div className="card-title">
              <h3>{book.volumeInfo.title}</h3>
            </div>
            <div className="card-body">
              <p>:)</p>
            </div>
            </div>
            <div className="btn">
              <button>
                <a href={book.volumeInfo.previewLink}>
                  Purchase
               </a>
              </button>
            </div>
          
          
        </div>
      ))}
    </div>
  );
};

export default Books;
