import React, { Component } from "react";
import { Grid, Button, Typography } from "@mui/material";
import experiencia0 from "../images/experiencia0.png";
import { Link } from "react-router-dom";


export default class Register extends Component {
  render() {
    return (
      <>
        <Grid
          container
          style={{ 
            backgroundColor: "#fbf1e3",
            textAlign: "center",
            padding: "1em"
         }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <div>
            <Typography
              variant="h2"
              style={{ 
               width: "30rem",
               fontSize: "2.5rem", 
               fontWeight: "300", 
               color: "#2e5137",
               textTransform: "uppercase",
               marginBottom: "1em" }}
            >
              Travel any corner of Barcelona with Us
            </Typography>
            <div className="form">
              <Typography
                variant="p"
                style={{
                  color: "#2e5137",
                  width: "30rem",
                  fontSize: "1.3rem",
                  fontWeight: "300",
                  display: "block",
                  margin: "0.2em"
                }}
              >
                Username
              </Typography>
              <input label="Username" className="input-login" />
              <Typography
                variant="p"
                style={{
                  color: "#2e5137",
                  width: "30rem",
                  fontSize: "1.3rem",
                  fontWeight: "300",
                  display: "block",
                  margin: "0.2em"
                }}
              >
                Password
              </Typography>
              <input label="Password" className="input-login" />
              <Typography
                variant="p"
                style={{
                  color: "#2e5137",
                  width: "30rem",
                  fontSize: "1.3rem",
                  fontWeight: "300",
                  display: "block",
                  margin: "0.2em"
                }}
              >
                Email
              </Typography>
              <input label="Password" className="input-login" />
              <Typography
                variant="p"
                style={{
                  color: "#2e5137",
                  width: "30rem",
                  fontSize: "1.3rem",
                  fontWeight: "300",
                  display: "block",
                  fontStyle: "italic",
                  margin: "0.2em"
                }}
              >
                Haz click <Link to="/login"><span className="span-login">aquí</span></Link> si ya estas registrado
              </Typography>
              <div>
                <Button
                  style={{
                    backgroundColor: "#FBF1E3",
                    width: "15rem",
                    height: "3rem",
                    borderRadius: "10px",
                    color: "#2e5137",
                    textTransform: "capitalize",
                    fontSize: "1.5rem",
                    fontWeight: "200",
                    border: "2.5px solid #2e5137",
                    margin: "1.3em"
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img className="cover" src={experiencia0} alt="Cover" />
          </div>
        </Grid>
      </>
    );
  }
}
