import React from "react";

export default function Card(props) {
  const { exp } = props;
  return (
    <div className="resultCard">
      <figure className="image is-48x48">
        <img src={exp.img} alt={exp.title} />
      </figure>
      <h4 className="bolder">{exp.title}</h4>
      <span>
        <b>Year:</b>
        {exp.price}
      </span>
    </div>
  );
}