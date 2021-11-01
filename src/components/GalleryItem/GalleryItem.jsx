import React, { Component } from 'react';
import './GalleryItem.css';
import Axios from "axios";
import {useState} from "react"; 
import '../App/App.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';


function GalleryItem (props) {
    // const[name, setName] =useState(initialValue)

   //store db items here
    const[show, setShow] = useState(true);

    const toggleImage = () =>{
        setShow(!show);
    }

    const[image, setImage] = useState({
        id: props.imageToSend.id,
        path: props.imageToSend.path,
        description: props.imageToSend.description,
        likes: props.imageToSend.likes
    });

    //create a function that will update the likes function 
    const updateLikes =()=>{
        //use spread to update likes
        setImage({
            ...image, likes: ++image.likes
        });
     
        //run axios put request to the URL to send to db 
    Axios.put(`/gallery/like/${image.id}`, image)
    .then((response)=> {
        console.log(response.data);
        props.getImages();
    }).catch(error=>{
        console.log(error);
    });
}

const deleteImg = ()=>{
    console.log("in deleteImg");
    Axios.delete(`/gallery/delete/${image.id}`,{
        data:{
            id: image.id
        }
    }).then(response=>{
        props.getImagesFuctionDeleteImg();
        console.log(response);
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
<div className="likeAndDeleteImgs">
    <FavoriteIcon className="emptyHeartIcon" onClick={updateLikes}/>:
    <FavoriteIcon className="fullHeartIcon" onClick={updateLikes}/>
    
   <div> <h4 className="totalLikes">Total Likes: {image.likes} </h4></div>
   <div className="deleteIcon">
       <DeleteIcon onClick={deleteImg}/>
   </div>
   </div>
    </div>
    )
}

export default GalleryItem;