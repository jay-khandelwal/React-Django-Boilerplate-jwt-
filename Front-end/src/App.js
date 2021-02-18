import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import BaseRouter from './Routes';

const theme = createMuiTheme({
    breakpoints:{
        values:{
            xs:0,
            sm:600,
            md:768,
            lg:1280,
            xl:1920,
        }
    },
})

function App() {
  
  return (
    <>
        <ThemeProvider theme={theme}>
        <BaseRouter/>
        </ThemeProvider>
    </>
  );
}

export default App;