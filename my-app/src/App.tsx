import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button/Button';
import { DarkTheme } from './colorPalette';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Transition } from 'react-transition-group';
import { useRef } from 'react';
import { Box, Zoom } from '@mui/material';
import Home from './components/Home';

function App() {

  const [loader, setloader] = useState(false);

  const duration = 300;

  return (
    <ThemeProvider theme={ DarkTheme }>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"/>
      <div className="App">
      <main role="main">
        <Home />
      </main>
      </div>
    </ThemeProvider >
  );
}

export default App;
