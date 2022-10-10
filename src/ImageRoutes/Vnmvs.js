import React from 'react'
import VnmvsImage1 from '../ShopItemsBag/vnmvs1.jpg'
import VnmvsImage2 from '../ShopItemsBag/vnmvs2.jpg'
import VnmvsImage3 from '../ShopItemsBag/vnmvs3.jpg'
import VnmvsImage4 from '../ShopItemsBag/vnmvs4.jpg'
import VnmvsImage5 from '../ShopItemsBag/vnmvs5.jpg'
import { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import Comments  from '../routes/Comments';

//galleryImage then stores the imported art work for every image.
//Each image is then mapped out once the user clicks on the art work image. 

const Vnmvs = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const galleryImage = [
    VnmvsImage1,
    VnmvsImage2,
    VnmvsImage3,
    VnmvsImage4,
    VnmvsImage5
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
       <h1>Vitasoy-Neko-Matte-Vinyl-Stickers</h1>
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

export default Vnmvs
