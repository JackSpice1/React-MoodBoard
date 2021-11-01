import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {

    state = {
        isPhoto: true
    }

    //toggles between photo and description
    flipView = () => {
        this.setState({
            isPhoto: !this.state.isPhoto
        })
    }

    render() {
        return (
            <div className='gallery-block'>
                {this.state.isPhoto ?
                    <img src={this.props.picture.path} onClick={this.flipView} alt={this.props.picture.description} />
                    : <div className='photoDesc' onClick={this.flipView}>
                        <p className='descText'>{this.props.picture.description}</p></div>}
                <p>This photo has {this.props.picture.likes} likes.</p>
                <Button variant="contained" color="primary" size="small" disableElevation
                    onClick={() => this.props.addLike(this.props.picture)}>Like</Button>

                <IconButton aria-label="delete" onClick={() => this.props.deleteImage(this.props.picture.id)}>
                    <DeleteIcon />
                </IconButton>
                <br />
            </div>
        );
    }
}

export default GalleryItem;