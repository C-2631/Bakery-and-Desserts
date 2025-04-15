import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material"; // Add this at the top if not already

const MotionBox = motion(Box);

const Checkout = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleSubmit = () => {
    if (!name || !address || !payment) return alert("Please fill all fields");
    localStorage.removeItem("cart");
    localStorage.setItem(
      "orderDetails",
      JSON.stringify({ name, address, payment, cartItems })
    );
    navigate("/order-confirmation");
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box
      sx={{
        py: 6,
        background: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          color="#4a148c"
          gutterBottom
        >
          Checkout
        </Typography>

        {/* Form Fields */}
        <Box
          sx={{
            p: 4,
            background: "#fff",
            borderRadius: 4,
            boxShadow: 3,
            mb: 5,
          }}
        >
          <Stack spacing={3}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <FormControl fullWidth required>
              <InputLabel>Payment Method</InputLabel>
              <Select
                value={payment}
                label="Payment Method"
                onChange={(e) => setPayment(e.target.value)}
              >
                <MenuItem value="UPI">UPI</MenuItem>
                <MenuItem value="Credit Card">Credit Card</MenuItem>
                <MenuItem value="Debit Card">Debit Card</MenuItem>
                <MenuItem value="Cash on Delivery">Cash on Delivery</MenuItem>
                <MenuItem value="Net Banking">Net Banking</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate("/cart")}
            >
              Back to Cart
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Confirm Order
            </Button>
          </Stack>
        </Box>

        {/* Order Summary */}
        <Typography variant="h5" fontWeight="bold" gutterBottom color="white">
          Your Order Summary:
        </Typography>
        <Grid container spacing={3}>
          {cartItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    background: "rgba(255,255,255,0.9)",
                    boxShadow: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img || "/fallback.jpg"}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography fontWeight="bold">{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Qty: {item.quantity} • Price: ${item.price}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body2" fontWeight={500}>
                      Subtotal: ${(item.quantity * item.price).toFixed(2)}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="h6"
          fontWeight="bold"
          align="center"
          color="white"
          sx={{ mt: 5 }}
        >
          Total: ${total.toFixed(2)}
        </Typography>
      </Container>
    </Box>
  );
};

export default Checkout;
