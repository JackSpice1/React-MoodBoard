import React, { Component } from 'react';
import './GalleryItem.css';
import Axios from "axios";
import {useState} from "react"; 
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


function GalleryItem (props) {
    // const[name, setName] =useState(initialValue)

    const[show, setShow] = UseState( true ); 

    const toggleImage = () =>{
        setShow(!show);
    }


    //create a function that will update the likes function 
    const updateLikes =()=>{
        setImage({
            ...image, likes: ++image.likes
        });
    }
    //create put route to request to store image and update db
    Axios.put(`/gallery/like/${props.imageToSend.id}`)
    .then(response=> {
        console.log(response);
        props.getImages();
    }).catch(error=>{
        console.log(error);
    })

    return(
      <div className="col-3 galleryCard">
          <div className="cardImage">
              {
                  show?
                 <h1 onClick={toggleImage}>{props.imageToSend.description}</h1>:
                 <img className="img" onClick={toggleImage} src={props.imageToSend.path}></img>
}
     </div>  
<div>
    <button onClick={updateLikes}>Like Image</button>
   <div> Total Likes: {props.imageToSend.likes} </div>
   </div>
    </div>
    )
}

export default GalleryItem;