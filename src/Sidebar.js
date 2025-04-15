import React, { useState, useEffect } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Box,
} from "@mui/material";
import { Home, Info, Cake, BakeryDining, Login } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { text: "Home", icon: <Home />, path: "/" },
  { text: "About", icon: <Info />, path: "/about" },
  { text: "Cake", icon: <Cake />, path: "/cake" },
  { text: "P&C", icon: <BakeryDining />, path: "/p&c" },
  { text: "Cart", icon: <Login />, path: "/cart" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPath, setSelectedPath] = useState(location.pathname);

  useEffect(() => {
    setSelectedPath(location.pathname);
  }, [location.pathname]);

  const handleNavigate = (path) => {
    setSelectedPath(path);
    navigate(path);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          backgroundImage: "url('/background/sidebar.jpeg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          color: "#000",
          borderRight: "none",
        },
      }}
    >
      <List sx={{ mt: 2 }}>
        {navItems.map((item, index) => {
          const isActive = selectedPath === item.path;

          return (
            <Tooltip key={item.text} title={item.text} placement="right" arrow>
              <Box
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <ListItemButton
                  onClick={() => handleNavigate(item.path)}
                  selected={isActive}
                  sx={{
                    position: "relative",
                    my: 1,
                    mx: 2,
                    borderRadius: 2,
                    backgroundColor: isActive ? "#27274a" : "transparent",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      backgroundColor: "#2e2e55",
                    },
                  }}
                >
                  {/* Active Item Highlight */}
                  {isActive && (
                    <Box
                      component={motion.div}
                      layoutId="activeSidebarItem"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: 4,
                        backgroundColor: "#ff8c00", // Glowing indicator
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                      }}
                    />
                  )}
                  <ListItemIcon sx={{ color: "#fff", minWidth: 36 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: isActive ? "bold" : "normal",
                    }}
                  />
                </ListItemButton>
              </Box>
            </Tooltip>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
