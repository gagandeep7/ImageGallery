import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard';
const ImageList = props => {



    // get array of image list
    const imgList = props.images.map( image => {
        return <ImageCard image = {image} key={image.id}  />;
    });

    return <div className = "image-list">{imgList}</div>;

};

export default ImageList;