import React, { useState } from 'react';
import ScrollTop from './comps/ScrollTop';
import ImageGrid from './comps/ImageGird';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Navbar from './comps/Navbar';
import DarkMode from "./comps/darkMode";


function App() {
   const [ selectedImg, setSelectedImg ] = useState(null);

  return (
    <div className="App">
      <Navbar/>
      <div className="Switch">
      <DarkMode />
      </div>
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    
    < ScrollTop showBelow={250}/>
    </div>
  );
}

export default App;
