import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { motion } from 'framer-motion';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    
 const changeHandler = (e) => {
     let selected = e.target.files[0];
     
     if (selected && types.includes(selected.type)) {
         setFile(selected);
         setError('');
     } else {
         setFile(null);
         setError('please selected an image file (png or jpeg)')
     }
 }

    return(
        <form>
            <motion.label 
             whileHover={{ scale: 1.5, rotate: 90, borderRadius: "100%" }}
             whileTap={{
               scale: 0.8,
               rotate: -90,
               borderRadius: "25%"}}
            >
            <input type="file" onChange={changeHandler} />
            <span>+</span>
            </motion.label>
            <div className="output">
                { error && <div className="error">{ error }</div> }
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )

}

export default UploadForm;