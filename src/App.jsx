import React, { useState } from "react";
import "./App.css";
import BookSearch from "./BookSearch";
import Books from "./Books";

const App = () => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  console.log("result", result);

  const handleChange = (e) => {
    setBook(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=12`)
      .then((res) => res.json())
      .then((data) => setResult(data));
  };

  return (
    <div className="App">
      <BookSearch handleChange={handleChange} handleSubmit={handleSubmit} result={result} />
      <Books book={book} result={result} />
    </div>
  );
};

export default App;