import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Pages/Home';
import About from './Pages/About';
import Cake from './Pages/Cake';
import Cards from './Pages/P&C';
import Cart from './Pages/Cart';
import Checkout from './Pages/CheckOut';
import OrderConfirmation from './Pages/OrderConfirmation';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cake" element={<Cake />} />
            <Route path="/p&c" element={<Cards />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
