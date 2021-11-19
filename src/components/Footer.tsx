import { AppBar, Container, Typography, Toolbar, Box, Grid } from "@mui/material";
import * as React from 'react';
import App from "../App";

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        position: "fixed",
        left: "0px",
        bottom: "0px",
        height: "30px",
        width: "100%",
      }}
    >
    <Typography>© 2021 NutiNaguti</Typography>
    </footer>
  );
}
