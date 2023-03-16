import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}/>
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  )
}

export default App
