import React from "react";
import "./Books.css";

const Books = ({ books }) => {
  return (
    <div className="card-container">
      {books?.map((book) => (
        <div key={book.id} className="book-card" >
          <div className="image-container">
          <a target="blank" href={book.volumeInfo.previewLink}>
            <img
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
              {/* <p>:)</p> */}
            </div>
            </div>
            <div className="btn">
              <button>
                <a href={book.volumeInfo.previewLink}>
                  Find out more
               </a>
              </button>
            </div>
          
          
        </div>
      ))}
    </div>
  );
};

export default Books;
