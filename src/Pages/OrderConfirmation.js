import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 6, background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)', minHeight: '100vh' }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" color="#4a148c" gutterBottom>
          Order Confirmed! 🎉
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Thank you for your order! We'll get your goodies to you as soon as possible. 😊
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
          sx={{ mt: 4 }}
        >
          Go Back to Home
        </Button>
      </Container>
    </Box>
  );
};

export default OrderConfirmation;
