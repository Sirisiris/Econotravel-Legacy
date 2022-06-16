import React from "react";
import Card from "./Card";

function CardList({ response }) {
  let data = [];
  if (response.data) {
    data = response.data.Search || [];
  }
  return (
    <div className="results">
      {data.map((data) => (
        <Card key={data.id} experiencia={data} />
      ))}
    </div>
  );
}

export default CardList;