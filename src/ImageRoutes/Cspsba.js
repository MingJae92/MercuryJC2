import React from 'react'
import CspsbaImage1 from '../ShopItemsBag/cspsba1.jpg'
import CspsbaImage2 from '../ShopItemsBag/cspsba2.jpg'
import { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import Comments  from '../routes/Comments';

//galleryImage then stores the imported art work for every image.
//Each image is then mapped out once the user clicks on the art work image. 

const Cspsba = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const galleryImage = [
    CspsbaImage1,
    CspsbaImage2
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
       <h1>Cat-Succulent-Planter-Subscriber-Badges-A</h1>
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

export default Cspsba
