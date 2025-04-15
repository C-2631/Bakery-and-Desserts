// Updated P&C.js without Delete Icon on cards
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Box,
  Rating,
  Stack,
  Chip,
  Tabs,
  Tab,
  AppBar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
import RoomIcon from "@mui/icons-material/Room";
import { useNavigate } from "react-router-dom";

const MotionCard = motion(Card);

const generateItems = (baseData, count) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    const base = baseData[i % baseData.length];
    items.push({
      ...base,
      id: `${base.place}-${i}`,
      place: `${base.place} ${i + 1}`,
      price: 5 + (i % 5) * 2,
    });
  }
  return items;
};

const basePastries = [
  {
    place: "Croissant",
    description: "Buttery, flaky French pastry.",
    image: "/pastry_images/1.jpg",
    rating: 4.9,
    season: "All Year",
    tagColor: "warning.main",
  },
  {
    place: "Éclair",
    description: "Choux pastry filled with cream.",
    image: "/pastry_images/2.jpg",
    rating: 4.8,
    season: "Spring",
    tagColor: "secondary.main",
  },
  {
    place: "Macaron",
    description: "Colorful almond meringue cookies.",
    image: "/pastry_images/3.jpg",
    rating: 4.7,
    season: "Summer",
    tagColor: "info.main",
  },
  {
    place: "Fruit Tart",
    description: "Crispy crust with creamy filling.",
    image: "/pastry_images/4.jpg",
    rating: 4.6,
    season: "Autumn",
    tagColor: "primary.main",
  },
  {
    place: "Danish",
    description: "Sweet multilayered breakfast pastry.",
    image: "/pastry_images/5.jpg",
    rating: 4.5,
    season: "All Year",
    tagColor: "success.main",
  },
  {
    place: "Cannoli",
    description: "Sicilian tube-shaped filled treat.",
    image: "/pastry_images/6.jpg",
    rating: 4.6,
    season: "Winter",
    tagColor: "error.main",
  },
  {
    place: "Strudel",
    description: "Layered pastry with fruit filling.",
    image: "/pastry_images/7.jpg",
    rating: 4.4,
    season: "Fall",
    tagColor: "warning.main",
  },
  {
    place: "Choux Bun",
    description: "Airy puff with creamy center.",
    image: "/pastry_images/8.jpg",
    rating: 4.5,
    season: "Spring",
    tagColor: "info.main",
  },
  {
    place: "Baklava",
    description: "Rich layers of filo and nuts.",
    image: "/pastry_images/9.jpg",
    rating: 4.9,
    season: "Summer",
    tagColor: "secondary.main",
  },
  {
    place: "Palmier",
    description: "Crispy, sugary puff hearts.",
    image: "/pastry_images/10.jpg",
    rating: 4.3,
    season: "All Year",
    tagColor: "primary.main",
  },
  {
    place: "Opera Cake",
    description: "Almond sponge with ganache.",
    image: "pastry_images/11.jpg",
    rating: 4.7,
    season: "Winter",
    tagColor: "info.main",
  },
  {
    place: "Napoleon",
    description: "Creamy layers of puff pastry.",
    image: "pastry_images/12.jpg",
    rating: 4.6,
    season: "Spring",
    tagColor: "warning.main",
  },
  {
    place: "Galette",
    description: "Rustic tart with fruity filling.",
    image: "/pastry_images/13.jpg",
    rating: 4.5,
    season: "Autumn",
    tagColor: "secondary.main",
  },
  {
    place: "Profiterole",
    description: "Mini choux buns with chocolate.",
    image: "/pastry_images/14.jpg",
    rating: 4.8,
    season: "Winter",
    tagColor: "primary.main",
  },
  {
    place: "Sfogliatella",
    description: "Shell-shaped Italian pastry.",
    image: "/pastry_images/15.jpg",
    rating: 4.4,
    season: "Summer",
    tagColor: "error.main",
  },
  {
    place: "Tarte Tatin",
    description: "Caramelized upside-down tart.",
    image: "/pastry_images/16.jpg",
    rating: 4.6,
    season: "Autumn",
    tagColor: "success.main",
  },
  {
    place: "Madeleine",
    description: "Shell-shaped French sponge.",
    image: "/pastry_images/17.jpg",
    rating: 4.3,
    season: "Spring",
    tagColor: "info.main",
  },
  {
    place: "Financier",
    description: "Almond cake with nutty flavor.",
    image: "/pastry_images/18.jpg",
    rating: 4.5,
    season: "Summer",
    tagColor: "primary.main",
  },
  {
    place: "Canelé",
    description: "Crispy shell with soft custard.",
    image: "/pastry_images/19.jpg",
    rating: 4.7,
    season: "Winter",
    tagColor: "warning.main",
  },
  {
    place: "Paris-Brest",
    description: "Nutty choux wheel with cream.",
    image: "/pastry_images/20.jpg",
    rating: 4.9,
    season: "All Year",
    tagColor: "secondary.main",
  },
];

const baseChocolates = [
  {
    name: "Truffle",
    description: "Rich ganache center coated in chocolate.",
    image: "/chocolate_images/1.jpeg",
    rating: 4.9,
    season: "All Year",
    tagColor: "warning.main",
  },
  {
    name: "Praline",
    description: "Nutty, smooth chocolate delight.",
    image: "/chocolate_images/2.jpeg",
    rating: 4.8,
    season: "Winter",
    tagColor: "secondary.main",
  },
  {
    name: "Bonbon",
    description: "Filled bite-sized chocolate with surprises.",
    image: "/chocolate_images/3.jpeg",
    rating: 4.7,
    season: "Spring",
    tagColor: "info.main",
  },
  {
    name: "Fudge",
    description: "Dense, chewy cocoa treat.",
    image: "/chocolate_images/4.jpeg",
    rating: 4.6,
    season: "Autumn",
    tagColor: "primary.main",
  },
  {
    name: "Chocolate Bark",
    description: "Thin chocolate slabs with toppings.",
    image: "/chocolate_images/5.jpeg",
    rating: 4.5,
    season: "Holiday",
    tagColor: "success.main",
  },
  {
    name: "Ganache",
    description: "Silky chocolate and cream mixture.",
    image: "/chocolate_images/6.jpeg",
    rating: 4.6,
    season: "Winter",
    tagColor: "error.main",
  },
  {
    name: "Chocolate Mousse",
    description: "Light and airy chocolate dessert.",
    image: "/chocolate_images/7.jpeg",
    rating: 4.4,
    season: "All Year",
    tagColor: "warning.main",
  },
  {
    name: "Chocolate Bar",
    description: "Classic solid chocolate form.",
    image: "/chocolate_images/8.jpeg",
    rating: 4.5,
    season: "All Year",
    tagColor: "info.main",
  },
  {
    name: "Hot Chocolate Bomb",
    description: "Melt-in-milk chocolate sphere.",
    image: "/chocolate_images/9.jpeg",
    rating: 4.9,
    season: "Winter",
    tagColor: "secondary.main",
  },
  {
    name: "Chocolate-Covered Strawberry",
    description: "Fruity and indulgent.",
    image: "/chocolate_images/10.jpeg",
    rating: 4.8,
    season: "Valentine",
    tagColor: "primary.main",
  },
  {
    name: "Chocolate Soufflé",
    description: "Warm, gooey center delight.",
    image: "/chocolate_images/11.jpeg",
    rating: 4.7,
    season: "Autumn",
    tagColor: "info.main",
  },
  {
    name: "Chocolate Trifle",
    description: "Layered dessert with cream and cake.",
    image: "/chocolate_images/12.jpeg",
    rating: 4.6,
    season: "Holiday",
    tagColor: "warning.main",
  },
  {
    name: "Chocolate Cupcake",
    description: "Mini cake with chocolate frosting.",
    image: "/chocolate_images/13.jpeg",
    rating: 4.5,
    season: "All Year",
    tagColor: "secondary.main",
  },
  {
    name: "Molten Lava Cake",
    description: "Decadent with flowing center.",
    image: "/chocolate_images/14.jpeg",
    rating: 4.9,
    season: "Winter",
    tagColor: "primary.main",
  },
  {
    name: "Chocolate Cheesecake",
    description: "Creamy and rich chocolate twist.",
    image: "/chocolate_images/15.jpeg",
    rating: 4.4,
    season: "Summer",
    tagColor: "error.main",
  },
  {
    name: "Chocolate Eclair",
    description: "Cream-filled pastry with glaze.",
    image: "/chocolate_images/16.jpeg",
    rating: 4.6,
    season: "Spring",
    tagColor: "success.main",
  },
  {
    name: "Chocolate Donut",
    description: "Ringed fried dough with glaze.",
    image: "/chocolate_images/17.jpeg",
    rating: 4.3,
    season: "All Year",
    tagColor: "info.main",
  },
  {
    name: "Chocolate Biscotti",
    description: "Crunchy cookie perfect with coffee.",
    image: "/chocolate_images/18.jpeg",
    rating: 4.5,
    season: "Fall",
    tagColor: "primary.main",
  },
  {
    name: "Chocolate Tart",
    description: "Shortcrust base with ganache.",
    image: "/chocolate_images/19.jpeg",
    rating: 4.7,
    season: "Autumn",
    tagColor: "warning.main",
  },
  {
    name: "Chocolate Pudding",
    description: "Smooth and creamy dessert.",
    image: "/chocolate_images/20.jpeg",
    rating: 4.9,
    season: "All Year",
    tagColor: "secondary.main",
  },
];

const pastriesData = generateItems(basePastries, 20);
const chocolatesData = generateItems(baseChocolates, 20);

const Cards = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [items] = useState({
    pastries: pastriesData,
    chocolates: chocolatesData,
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleTabChange = (_, newValue) => setSelectedTab(newValue);
  const currentType = selectedTab === 0 ? "pastries" : "chocolates";
  const currentData = items[currentType];

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    const existing = JSON.parse(localStorage.getItem("cart")) || [];
    localStorage.setItem(
      "cart",
      JSON.stringify([...existing, { ...selectedItem, quantity }])
    );
    setSelectedItem(null);
    navigate("/cart");
  };

  return (
    <Box
      sx={{
        py: 6,
        backgroundImage: "url('/background/1.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        mb={6}
        fontWeight={800}
        sx={{ color: "#fff", textShadow: "2px 2px 6px rgba(0,0,0,0.4)" }}
      >
        🍰 Pastries and Chocolates 
      </Typography>

      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab label="Pastries" />
          <Tab label="Chocolates" />
        </Tabs>
      </AppBar>

      <Grid container spacing={4} justifyContent="center">
        {currentData.map(
          (
            { id, place, description, image, rating, season, tagColor, price },
            index
          ) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
              <MotionCard
                onClick={() =>
                  handleCardClick({
                    id,
                    place,
                    description,
                    image,
                    rating,
                    season,
                    tagColor,
                    price,
                  })
                }
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 14px 34px rgba(255,255,255,0.25)",
                }}
                sx={{
                  height: "100%",
                  borderRadius: 5,
                  overflow: "hidden",
                  backdropFilter: "blur(12px)",
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 28px rgba(0, 0, 0, 0.3)",
                  color: "#000",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={image}
                  alt={place}
                  sx={{ objectFit: "cover", filter: "brightness(0.85)" }}
                />
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
                      {place}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.9,
                      mt: 1,
                      fontSize: "0.95rem",
                      color: "#000",
                    }}
                  >
                    {description}
                  </Typography>
                  <Rating
                    value={rating}
                    precision={0.1}
                    readOnly
                    sx={{ mt: 2, color: "#ffeb3b" }}
                  />
                  <Chip
                    label={season}
                    size="small"
                    sx={{
                      mt: 2,
                      backgroundColor: tagColor,
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: "0.75rem",
                      px: 1.5,
                    }}
                  />
                </CardContent>
              </MotionCard>
            </Grid>
          )
        )}
      </Grid>

      {/* Modal Popup */}
      <Dialog open={!!selectedItem} onClose={() => setSelectedItem(null)}>
        {selectedItem && (
          <>
            <DialogTitle>{selectedItem.place}</DialogTitle>
            <DialogContent>
              <img
                src={selectedItem.image}
                alt={selectedItem.place}
                style={{ width: "100%", borderRadius: 8, marginBottom: 16 }}
              />
              <Typography variant="body1" gutterBottom>
                {selectedItem.description}
              </Typography>
              <Typography variant="h6">Price: ${selectedItem.price}</Typography>
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
              <Button onClick={() => setSelectedItem(null)}>Cancel</Button>
              <Button variant="contained" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Cards;
