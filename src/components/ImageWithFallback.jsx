import React, { useState } from 'react'

const ImageWithFallback = ({ src, fallback, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallback);
  };

  return <img src={imgSrc} alt={alt} onError={handleError} {...props} />;
};

export default ImageWithFallback