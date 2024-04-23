import React from "react";
import "./Quote.css";
import quotes from "./quotes.json";

export const Card = ({ quote, author }) => {
  return (
    <div className="card">
      <h2 className="quote">{quote}</h2>
      <p className="author">{author}</p>
    </div>
  );
};

const Quote = () => {
  return (
    <div className="container">
      {quotes.map((quote, index) => {
        return <Card key={index} quote={quote.quote} author={quote.author} />;
      })}
    </div>
  );
};

export default Quote;
