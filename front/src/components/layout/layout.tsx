import { Container } from "@mui/material";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: 1 }}>
        <Outlet />
      </Container>
    </>
  );
}
