import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Stack,
  Card,
  Menu,
  MenuItem,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Pastries",
    image: "/pastry_images/1.jpg",
    description:
      "Flaky, buttery, and filled with flavor. Discover our artisan pastries made fresh every day.",
  },
  {
    title: "Cakes",
    image: "/cake_images/1.jpg",
    description:
      "Celebrate every moment with our luscious, handcrafted cakes in a variety of flavors.",
  },
  {
    title: "Chocolates",
    image: "/chocolate_images/1.jpeg",
    description:
      "Rich, velvety chocolates that melt in your mouth and warm your heart.",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOrderClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = (category) => {
    if (category === "cake") {
      navigate("/cake"); // Redirect to Cake.js
    } else if (category === "pnc") {
      navigate("/p&c"); // Redirect to P&C.js for pastries and chocolates
    }
    setAnchorEl(null);
  };
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url('/background/2.jpeg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          pt: 0, 
          pb: 8,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            color: "#000",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)", // Subtle text shadow for readability
          }}
        >
          Indulge in Sweet Delights 🍰
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 600, mb: 4 }}>
          Welcome to your one-stop destination for heavenly cakes, delightful
          pastries, and rich chocolates. Baked with love and served with a
          smile!
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate("/about")}
          >
            Explore Menu
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            onClick={handleOrderClick}
          >
            Order Now
          </Button>
        </Stack>
      </Box>

      {/* Menu Dropdown for Order Now */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ mt: 2 }}
      >
        <MenuItem onClick={() => handleRedirect("cake")}>Order Cake</MenuItem>
        <MenuItem onClick={() => handleRedirect("pnc")}>
          Order Pastry & Chocolates
        </MenuItem>
      </Menu>

      {/* Product Categories */}
      <Box sx={{ py: 6, background: "#fff8f0" }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Sweet Temptations Await
          </Typography>
          <Typography variant="subtitle1" align="center" sx={{ mb: 5 }}>
            Dive into our delicious selection made with the finest ingredients.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {categories.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    maxWidth: 345,
                    mx: "auto",
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.03)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
