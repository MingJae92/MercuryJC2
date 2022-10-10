import React from 'react'
import SbspbImage1 from '../ShopItemsBag/sbspb1.jpg'
import SbspbImage2 from '../ShopItemsBag/sbspb2.jpg'
import SbspbImage3 from '../ShopItemsBag/sbspb3.jpg'
import { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import Comments  from '../routes/Comments';


//galleryImage then stores the imported art work for every image.
//Each image is then mapped out once the user clicks on the art work image. 

const Sbspb = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const galleryImage = [
    SbspbImage1,
    SbspbImage2,
    SbspbImage3
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
       <h1>Sakura-Blossom-Stream-Package-B</h1>
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

export default Sbspb
