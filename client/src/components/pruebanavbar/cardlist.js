import React from "react";
import Card from "./card";

function CardList({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.Search || [];
  }
  return (
    <div className="results">
      {data.map((item) => (
        <Card key={item.imdbID} exp={item} />
      ))}
    </div>
  );
}

export default CardList;