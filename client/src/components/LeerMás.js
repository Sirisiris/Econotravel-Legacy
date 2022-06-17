import React, { useState } from "react";
import "../App.css";
import { Typography } from "@mui/material"; 




const LeerMás = ({children}) => {
  const text = children;
  const [isLeerMás, setIsLeerMás] = useState(true);
  const toggleLeerMás = () => {
    setIsLeerMás(!isLeerMás);
  };
  return (
    <Typography
          variant="body1"
          component={'span'}
          color="#2e5137"
          className="text">
      {isLeerMás ? text.slice(0, 200) : text}
      <span onClick={toggleLeerMás} className="read-or-hide">
        {isLeerMás ? "   ...LeerMás" : "   ...MostrarMenos"}
      </span>
    </Typography>
  );
};
  
const Content = (description) => {
  return (
    <div className="container">
        <LeerMás>
        {description}
        </LeerMás>
    </div>
  );
};
  
export default Content;