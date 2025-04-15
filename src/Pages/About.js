import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  Pagination,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const items = [
  ...Array.from({ length: 20 }, (_, i) => ({
    title: `Cake ${i + 1}`,
    description: `Delicious cake number ${i + 1} with rich flavor and soft layers.`,
    image: `/cake_images/${i + 1}.jpg`,
  })),
  ...Array.from({ length: 20 }, (_, i) => ({
    title: `Pastry ${i + 1}`,
    description: `Flaky and buttery pastry number ${i + 1}, perfect with coffee.`,
    image: `/pastry_images/${i + 1}.jpg`,
  })),
  ...Array.from({ length: 20 }, (_, i) => ({
    title: `Chocolate ${i + 1}`,
    description: `Smooth, handcrafted chocolate number ${i + 1} to sweeten your day.`,
    image: `/chocolate_images/${i + 1}.jpeg`,
  })),
];

const ITEMS_PER_PAGE = 9;

const Explore = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedItems = items.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <Box
      sx={{
        py: 6,
        backgroundImage: 'url("/background/2.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          fontWeight="bold"
          align="center"
          color="#000000"
          gutterBottom
          sx={{
            textShadow: '0 2px 6px rgba(0,0,0,0.4)',
          }}
        >
          Explore the Menu 🍰
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="#f3e5f5"
          sx={{
            mb: 5,
            maxWidth: 700,
            mx: 'auto',
            textShadow: '0 1px 4px rgba(0,0,0,0.3)',
          }}
        >
          Browse our delightful collection of cakes, pastries, and chocolates. Each treat is made with love and artistry to sweeten your day.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {paginatedItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                }}
                sx={{
                  height: '100%',
                  borderRadius: 5,
                  overflow: 'hidden',
                  backdropFilter: 'blur(12px)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#000000',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                    sx={{ objectFit: 'cover', filter: 'brightness(0.85)' }}
                    onError={(e) => {
                      if (e.target.src.endsWith('.jpg')) {
                        e.target.src = e.target.src.replace('.jpg', '.jpeg');
                      } else if (e.target.src.endsWith('.jpeg')) {
                        e.target.src = e.target.src.replace('.jpeg', '.jpg');
                      }
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05))',
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="#000000">
                    {item.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <Pagination
            count={Math.ceil(items.length / ITEMS_PER_PAGE)}
            page={page}
            onChange={handlePageChange}
            color="primary"
            shape="rounded"
            size="large"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Explore;
