import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ReactLogo from "../../assets/react-logo.png";
import {Grid} from "@mui/material";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Comments", path: "/" },
  { label: "About", path: "/about" },
  // { label: "Contact", path: "/contact" },
];
export default function DrawerAppBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Grid container justifyContent={"space-between"}>
          <Grid>
            <Toolbar>
              <Grid container textAlign={"center"}>
                <Grid>
                  <img
                    src={ReactLogo}
                    alt="React Logo"
                    style={{ width: 30, height: 30 }}
                  />
                </Grid>
                <Grid>
                  <Typography
                    style={{
                      marginLeft: 10,
                      fontWeight: "bold",
                    }}
                    variant="h5"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  >
                    My React App
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </Grid>
          <Grid>
            <Toolbar>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{ color: "#fff" }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
