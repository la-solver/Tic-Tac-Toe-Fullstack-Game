import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        color: "#fff",
        textAlign: "center",
        p: 2,
        fontFamily: "Poppins",
      }}
    >
      <Typography
        variant="body2"
        sx={{ fontFamily: "Poppins", fontSize: "1rem" }}
      >
        © {currentYear} Tic Tac Toe Pro. Created by{" "}
        <a
          href="https://github.com/hoangsonww"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          Son Nguyen
        </a>{" "}
        with ❤️
      </Typography>
    </Box>
  );
};

export default Footer;
