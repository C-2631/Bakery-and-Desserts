import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import {
  Home,
  Info,
  Cake,
  BakeryDining,
  Login,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState('/');

  const navItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'About', icon: <Info />, path: '/about' },
    { text: 'Cake', icon: <Cake />, path: '/cake' },
    { text: 'P&C', icon: <BakeryDining />, path: '/p&c' },
    { text: 'Cart', icon: <Login />, path: '/cart' },
  ];

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: "url('/background/navbar.jpg')", // Path to your background image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo & Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <TravelExploreIcon fontSize="large" />
            </motion.div>
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              ml: 1,
              fontWeight: 'bold',
              letterSpacing: 1,
              color: '#fff',
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)', // Subtle text shadow
            }}
          >
            Travel UI
          </Typography>
        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.text}
              startIcon={item.icon}
              onClick={() => navigate(item.path)}
              sx={{
                color: activePath === item.path ? '#ffd700' : '#fff', // Active item color
                fontWeight: 'bold',
                borderBottom: activePath === item.path ? '2px solid #e98417' : 'none',
                borderRadius: 0,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)', // Subtle hover effect
                },
                transition: 'all 0.3s ease', // Smooth transition for hover and active states
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
