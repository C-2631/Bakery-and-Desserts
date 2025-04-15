import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  Stack,
  Chip,
  Container,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionCard = motion(Card);

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleClear = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box
      sx={{
        py: 6,
        backgroundImage: "url('/background/4.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          fontWeight="bold"
          align="center"
          color="#fff"
          gutterBottom
        >
          Your Cart 🛒
        </Typography>

        {cartItems.length === 0 ? (
          <Box textAlign="center" mt={5}>
            <Typography color="white">
              No items in cart. Go add some cakes! 🍰
            </Typography>
            <Button
              variant="outlined"
              sx={{
                mt: 3,
                borderColor: "#fff",
                color: "#fff",
                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
              href="/cake"
            >
              Browse Cakes
            </Button>
            <Button
              variant="outlined"
              sx={{
                mt: 3,
                borderColor: "#fff",
                color: "#fff",
                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
              href="/p&c" // Adjust path if needed
            >
              Browse Pastries
            </Button>
            <Button
              variant="outlined"
              sx={{
                mt: 3,
                borderColor: "#fff",
                color: "#fff",
                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
              href="/p&c" // Adjust path if needed
            >
              Browse Chocolates
            </Button>
          </Box>
        ) : (
          <>
            <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
              {cartItems.map((item, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <MotionCard
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    sx={{
                      height: "100%",
                      borderRadius: 5,
                      overflow: "hidden",
                      backdropFilter: "blur(12px)",
                      background: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 8px 28px rgba(0, 0, 0, 0.3)",
                      color: "#fff",
                      position: "relative",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={item.img || "/fallback.jpg"} // Fallback image if img is not available
                      alt={item.title}
                      sx={{
                        objectFit: "cover",
                        filter: "brightness(0.85)",
                      }}
                    />
                    <CardContent sx={{ px: 2, py: 3, textAlign: "center" }}>
                      <Typography variant="h6" fontWeight={700} gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="#fff" gutterBottom>
                        {item.desc}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                        alignItems="center"
                        mt={2}
                        flexWrap="wrap"
                      >
                        <Chip label={`Qty: ${item.quantity}`} color="info" />
                        <Chip label={`$${item.price}`} color="primary" />
                        <Chip
                          label={`Subtotal: $${(
                            item.price * item.quantity
                          ).toFixed(2)}`}
                          color="success"
                        />
                      </Stack>
                      <IconButton
                        onClick={() => handleRemove(i)}
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          color: "#fff",
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </CardContent>
                  </MotionCard>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: "center", mt: 5 }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                color="#4a148c"
                gutterBottom
              >
                Total: ${total.toFixed(2)}
              </Typography>
              <Button variant="contained" color="error" onClick={handleClear}>
                Clear Cart
              </Button>
              {/* Checkout Button */}
              <Button
                variant="contained"
                color="primary"
                sx={{ ml: 2 }}
                onClick={() => navigate("/checkout")} // Navigate to checkout page
              >
                Checkout
              </Button>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Cart;
