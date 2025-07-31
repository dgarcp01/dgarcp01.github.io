import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
    Chip,
  Container
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const pages = [
  { label: "Home", path: "/" },
  { label: "Posts", path: "/blog" },
  { label: "Projects", path: "/proyectos" },
  { label: "Publications", path: "/publicaciones" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

    return (
      
        <AppBar color="transparent" elevation={ 0} position="static">
            <Toolbar >

        <Container maxWidth="md">
        {/* Chips desktop */}
        <Box
          sx={{
                display: { xs: "none", sm: "flex" },
                my: 2,
                justifyContent:"left",
                gap: 1,
          }}
        >
          {pages.map((page) => (
            <Chip
              key={page.path}
              label={page.label}
              component={Link}
              to={page.path}
              clickable
              color={isActive(page.path) ? "primary" : "secondary"}
              variant={isActive(page.path) ? "filled" : "outlined"}
            />
          ))}
            </Box>
            </Container>

        {/* Menú hamburguesa en mobile */}
        <IconButton
          color="inherit"
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              width: 220,
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {pages.map((page) => (
              <Chip
                key={page.path}
                label={page.label}
                component={Link}
                to={page.path}
                clickable
                color={isActive(page.path) ? "primary" : "secondary"}
                variant={isActive(page.path) ? "filled" : "outlined"}
                onClick={() => setOpen(false)}
              />
            ))}
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
