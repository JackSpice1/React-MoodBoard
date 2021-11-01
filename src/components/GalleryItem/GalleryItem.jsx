import React, { Component } from 'react';
import './GalleryItem.css';
import Axios from "axios";
import {useState} from "react"; 
import '../App/App.css'
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


function GalleryItem (props) {
    // const[name, setName] =useState(initialValue)

    const[show, setShow] = useState( true ); 

    const toggleImage = () =>{
        setShow(!show);
    }


    //create a function that will update the likes function 
    const updateLikes =()=>{
       console.log('in updateLikes');
    Axios.put(`/gallery/like/${props.imageToSend.id}`)
    .then((response)=> {
        console.log(response.data);
        props.getImages();
    }).catch(error=>{
        console.log(error);
    })
}

    return(
      <div className="col-3 galleryCard">
          <div className="cardImage">
              {
                  show?
                 <img className="img" onClick={toggleImage} src={props.imageToSend.path}></img>:
                 <p onClick={toggleImage}>{props.imageToSend.description}</p>
          
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