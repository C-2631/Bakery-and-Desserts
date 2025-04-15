import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Rating,
  Stack,
  Chip,
  Container,
  Pagination,
} from "@mui/material";
import { motion } from "framer-motion";
import RoomIcon from "@mui/icons-material/Room";

const MotionCard = motion(Card);

const cakes = [
  {
    title: "Chocolate Truffle Cake",
    img: "/cake_images/1.jpg",
    desc: "Rich, fudgy chocolate cake with layers of velvety ganache.",
    price: 12,
    rating: 4.8,
  },
  {
    title: "Red Velvet Cake",
    img: "/cake_images/2.jpeg",
    desc: "Classic red velvet with cream cheese frosting. Smooth and dreamy.",
    price: 10,
    rating: 4.7,
  },
  {
    title: "Strawberry Shortcake",
    img: "/cake_images/3.jpg",
    desc: "Fresh strawberries, whipped cream, and soft sponge cake layers.",
    price: 11,
    rating: 4.9,
  },
  {
    title: "Black Forest Cake",
    img: "/cake_images/4.jpeg",
    desc: "German favorite with cherries, chocolate, and cream.",
    price: 13,
    rating: 4.6,
  },
  {
    title: "Vanilla Bean Cake",
    img: "/cake_images/5.jpeg",
    desc: "Simple yet elegant. Pure vanilla flavor in every bite.",
    price: 9,
    rating: 4.5,
  },
  {
    title: "Tiramisu Cake",
    img: "/cake_images/6.jpg",
    desc: "Italian coffee cake layered with mascarpone and cocoa.",
    price: 14,
    rating: 4.9,
  },
  {
    title: "Mango Mousse Cake",
    img: "/cake_images/7.jpeg",
    desc: "Tropical mango mousse on a fluffy sponge base.",
    price: 10,
    rating: 4.7,
  },
  {
    title: "Blueberry Cheesecake",
    img: "/cake_images/8.jpg",
    desc: "Creamy cheesecake topped with fresh blueberries.",
    price: 12,
    rating: 4.8,
  },
  {
    title: "Lemon Zest Cake",
    img: "/cake_images/9.jpeg",
    desc: "Zingy lemon flavor with a light and airy finish.",
    price: 9,
    rating: 4.4,
  },
  {
    title: "Oreo Crunch Cake",
    img: "/cake_images/10.jpeg",
    desc: "Chocolate sponge loaded with crushed Oreos and cream.",
    price: 11,
    rating: 4.8,
  },
  {
    title: "Caramel Drizzle Cake",
    img: "/cake_images/11.jpg",
    desc: "Sticky caramel sauce drizzled over a buttery cake.",
    price: 10,
    rating: 4.6,
  },
  {
    title: "Pineapple Upside-Down Cake",
    img: "/cake_images/12.jpg",
    desc: "Sweet pineapple rings and caramelized goodness.",
    price: 10,
    rating: 4.5,
  },
  {
    title: "Biscoff Cake",
    img: "/cake_images/13.jpeg",
    desc: "Lotus Biscoff buttercream on soft layers of sponge.",
    price: 13,
    rating: 4.9,
  },
  {
    title: "Raspberry Chocolate Cake",
    img: "/cake_images/14.jpeg",
    desc: "Tangy raspberries and rich chocolate fusion.",
    price: 12,
    rating: 4.7,
  },
  {
    title: "Funfetti Cake",
    img: "/cake_images/15.jpg",
    desc: "Sprinkles, color, and joy in every slice.",
    price: 9,
    rating: 4.3,
  },
  {
    title: "Coconut Cake",
    img: "/cake_images/16.jpeg",
    desc: "Delicious coconut flavor with a buttery base.",
    price: 10,
    rating: 4.4,
  },
  {
    title: "Peanut Butter Cake",
    img: "/cake_images/17.jpg",
    desc: "Nutty and rich, layered with creamy peanut butter frosting.",
    price: 11,
    rating: 4.6,
  },
  {
    title: "Mint Chocolate Cake",
    img: "/cake_images/18.jpeg",
    desc: "Refreshing mint meets dark chocolate in a perfect combo.",
    price: 12,
    rating: 4.6,
  },
  {
    title: "Banana Walnut Cake",
    img: "/cake_images/19.jpeg",
    desc: "Moist banana cake loaded with crunchy walnuts.",
    price: 10,
    rating: 4.5,
  },
  {
    title: "Espresso Cream Cake",
    img: "/cake_images/20.jpeg",
    desc: "For coffee lovers — bold espresso and creamy layers.",
    price: 14,
    rating: 4.8,
  },
];

const Cake = () => {
  const [selectedCake, setSelectedCake] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;
  const paginatedCakes = cakes.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const pageCount = Math.ceil(cakes.length / itemsPerPage);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    localStorage.setItem(
      "cart",
      JSON.stringify([...existingCart, { ...selectedCake, quantity }])
    );
    setSelectedCake(null);
  };

  return (
    <Box
      sx={{
        py: 6,
        backgroundImage: "url('/background/3.jpeg')",
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
          color="#4a148c"
          gutterBottom
        >
          Our Cake Collection 🍰
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="#6a1b9a"
          sx={{ mb: 5, maxWidth: 700, mx: "auto" }}
        >
          A curated list of our most-loved cakes — from rich chocolate truffle
          to fruity fusions. Handcrafted with care, layered with flavor.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {paginatedCakes.map((cake, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <MotionCard
                onClick={() => {
                  setSelectedCake(cake);
                  setQuantity(1);
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 14px 34px rgba(0,0,0,0.25)",
                }}
                sx={{
                  borderRadius: 5,
                  overflow: "hidden",
                  backdropFilter: "blur(16px)",
                  background: "rgba(0, 0, 0, 0.55)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={cake.img}
                    alt={cake.title}
                    sx={{
                      height: 200,
                      objectFit: "cover",
                      filter: "brightness(0.85)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.05))",
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "center",
                    py: 3,
                    px: 2,
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <RoomIcon fontSize="small" sx={{ color: "#ffd54f" }} />
                    <Typography variant="h6" fontWeight={700}>
                      {cake.title}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.95,
                      mt: 1,
                      fontSize: "0.95rem",
                      color: "#f1f1f1",
                    }}
                  >
                    {cake.desc}
                  </Typography>
                  <Rating
                    value={cake.rating}
                    precision={0.1}
                    readOnly
                    sx={{ mt: 2, color: "#ffeb3b" }}
                  />
                  <Chip
                    label={`$${cake.price}`}
                    size="small"
                    sx={{
                      mt: 2,
                      backgroundColor: "primary.main",
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: "0.75rem",
                      px: 1.5,
                    }}
                  />
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
            size="large"
            shape="rounded"
          />
        </Box>

        <Dialog open={!!selectedCake} onClose={() => setSelectedCake(null)}>
          {selectedCake && (
            <>
              <DialogTitle>{selectedCake.title}</DialogTitle>
              <DialogContent>
                <img
                  src={selectedCake.img}
                  alt={selectedCake.title}
                  style={{ width: "100%", borderRadius: 8, marginBottom: 16 }}
                />
                <Typography>{selectedCake.desc}</Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Price: ${selectedCake.price}
                </Typography>
                <TextField
                  label="Quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  fullWidth
                  sx={{ mt: 2 }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setSelectedCake(null)}>Cancel</Button>
                <Button variant="contained" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Cake;
