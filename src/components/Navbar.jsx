import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import BeamerSVG from "../assets/images/beamer.svg";
import UserflowSVG from "../assets/images/userflow.svg";
import X from "../assets/images/x.svg";

const pages = ["Home", "About", "Products"];

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const buttonStyles = {
    my: 2,
    mx: 3,
    display: "block",
    textTransform: "none",
    px: 2,
    borderRadius: 1,
    backgroundColor: "#1a57e6",
    color: "white",
    border: "1px solid #1a57e6",
    "&:hover": {
      color: "#1a57e6",
      backgroundColor: "#fff",
      borderRadius: "2rem",
      transition: "ease-in-out 0.2s",
    },
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#fff", zIndex: "998", position: "fixed" }}
    >
      <Container
        maxWidth="xl"
        sx={{
          boxShadow:
            "0 0 1px 0 rgba(19, 43, 57, .25), 0 4px 24px -4px rgba(19, 43, 57, .1)",
        }}
      >
        <Toolbar disableGutters>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://getbeamer.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img style={{ color: "#FFCB1F" }} src={BeamerSVG} alt="Beamer" />
            </a>
            <img style={{ padding: "0 7px" }} src={X} alt="Separator" />
            <a
              href="https://userflow.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ color: "#1a57e6" }}
                src={UserflowSVG}
                alt="Userflow"
              />
            </a>
          </div>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              ml: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navigate(`/${page.toLowerCase()}`)}
                sx={buttonStyles}
              >
                {page}
              </Button>
            ))}
            <Button
              onClick={() => navigate("/taskmanager")}
              sx={buttonStyles}
            >
              Task Manager
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
