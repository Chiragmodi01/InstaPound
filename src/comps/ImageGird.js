import React, { useEffect, useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import { projectFirestore } from '../firebase/config';
import{ motion } from 'framer-motion';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const ImageGrid = ({ setSelectedImg }) => {
  const {docs} = useFirestore('images');
  console.log(docs);


  const [Likes, setLikes] = useState(0);            // Likes

  const numlikes = () =>{
    setLikes(Likes+1);
  }
   
   
   const [ Comments, setComments ] = useState([]);         // Comments
   const [commentInput, setCommentInput] = useState("");

   useEffect (() => {
     getComments();
   }, []) // blank to run only on launch

   function getComments() {
    projectFirestore.collection("Comments").onSnapshot(function (querySnapshot) {
     setComments(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        comment: doc.data().comment,
      }))
     );
    });
   }

   function addComment(e){

     e.preventDefault();
     projectFirestore.collection("Comments").add({
       comment: commentInput, 
     });

    setCommentInput("");

   }

  return (
      <div className="img-grid">
          { docs && docs.map(doc => (
              <motion.div className="img-wrap" key={doc.id}
              layout 
              // whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 1}}
               
              >
                  <motion.img src={doc.url} alt="uploaded pic" 
                  onClick={() => setSelectedImg(doc.url)}
                  initial={{ opacity: 0}}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  />
                  <div className="socials">
                    <FavoriteBorderIcon onClick={numlikes} className="icon-like" fontSize="large" cursor="pointer"/>
                    <p className="likeNum" type="number" value="0">{Likes} Likes</p>
                    <ShareOutlinedIcon  className="icon-share" fontSize="large" cursor="pointer"/>
                    <SaveAltOutlinedIcon className="icon-save" fontSize="large" cursor="pointer"/>
                    <ChatBubbleOutlineOutlinedIcon className="icon-comment" fontSize="large" cursor="pointer"/>

                   <form>
                   <TextField className="boxx"
                       value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                    ></TextField>
                    <Button className="post-comment" type="submit"color="primary" onClick={addComment} style={{display:"none"}}>Post</Button>
                   </form>

                    <div className="comment-box">
                    {Comments.map((comment) =>(
                      <ul className="comment-list">{comment.comment}</ul>
                    ))}</div>
                  
                    
                  </div>
              </motion.div>
         ))}
      </div>
  )

}


export default ImageGrid;