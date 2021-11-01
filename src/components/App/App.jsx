import React, { useEffect, useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';
import axios from 'axios';

function App () {
// create place for images to be stored 
const [images, setImages] = useState( [] );


//useEffect displays things on DOM when the page loads
useEffect ( ()=>{
  console.log('component loaded');
  getImages();
},[]);

const getImages = () => {
  console.log('getImages running!');
  axios.get('/gallery')
  .then(response =>{
    console.log(response.data);
    setImages(response.data);
    }).catch(error=>{
      alert('GET error')
    })
  }




return (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Gallery of My Life</h1>
    </header>
    <GalleryList galleryItems={galleryItems} getImages={getImages}/>
  </div>
);
}
 

export default App;
