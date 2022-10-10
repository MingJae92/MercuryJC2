import React from 'react'
import AcImage from '../ShopItemsBag/ac.jpg'
import { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import Comments  from '../routes/Comments';

//React simple image viewer package was used for the image viewer.


const Ac = () => {
  
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
//galleryImage then stores the imported art work for every image.
//Each image is then mapped out once the user clicks on the art work image. 
  const galleryImage = [
    AcImage
  ]
  
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div>
       <h1>Animal-Crossing-ACNH-Inspired-Leaf-Subscriber-Badges-Package</h1>
       {/* <img src={AcImage}/> */}
       {galleryImage.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          // width="300"
          // key={ index }
          
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ galleryImage}
          // width="400"
          // height="600"
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    <Comments/>
    </div>
  )
}

export default Ac
