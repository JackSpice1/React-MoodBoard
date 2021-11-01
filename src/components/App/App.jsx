import React from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
import {useEffect, useState} from "react";


function App () {
// create place for images to be stored 
const [images, setImages] = useState( [] );


//useEffect displays things on DOM when the page loads
UseEffect ( ()=>{
  console.log('component loaded');
  getImages();
},[]);

getGallery = () => {
  console.log('getGallery running!');
  axios.get('/gallery')
  .then(response =>{
    console.log(response.data);
    setImages(response.data);
    }).catch(error=>{
      alert('error loading gallery!')
    })
  }

  //send like to server 
  addLike = (picture) => {
    let id = picture.id 
    console.log(id);
    axios.put(`/gallery/like/${id}`)
    .then(response => {
      this.getGallery();
    }).catch(error => {
      console.log(error);
    })
  } 

return (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Gallery of My Life</h1>
    </header>
    <GalleryForm addImage={this.addImage} />
    <GalleryList imagesSentToGalleryList={ images } getImagesFuctionToDeleteImage={ getGallery }/>
  </div>
);
}
 

export default App;
