import { ThemeProvider, CssBaseline, createMuiTheme, Switch } from '@material-ui/core';
import React, { useState } from 'react';
import ScrollTop from './comps/ScrollTop';
import ImageGrid from './comps/ImageGird';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Navbar from './comps/Navbar';


function App() {
   const [ selectedImg, setSelectedImg ] = useState(null);
   const [ darkMode, setDarkMode ] = useState(false);

   const theme = createMuiTheme({
     palette:{
       type: darkMode ? 'dark' : 'light',
   }
   })

   const handleDarkMode = () => {
     setDarkMode(!darkMode);
   }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
    <div className="App">
      <Navbar/>
      <div className="Switch">
      <Switch onChange={handleDarkMode} value={darkMode}/>
      </div>
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
    < ScrollTop showBelow={250}/>
    </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
