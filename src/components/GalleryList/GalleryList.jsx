import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css'


function GalleryList ( props ) {
    return(
        <div>
            <div className="galleryContainer">
                { props.images.map( imageItem=>(< GalleryItem imageToSend={imageItem} getImages={props.getImages}/>))}
            </div>
        </div>
    )
}

export default GalleryList;