import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css'


function GalleryList ( props ) {
    return(
        <div>
            <h1>ImageList</h1>
            <div className="galleryContainer">
                { props.galleryItems.map( imageItem=>(< GalleryItem imageToSend={imageItem} getImages={props.getImages}/>))}
            </div>
        </div>
    )
}

export default GalleryList;