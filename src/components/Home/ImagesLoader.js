import React from "react";

export default function ImagesLoader({ images }) {
  return (
    <>
      {images.forEach(image => (
        <img key={images} src={image} style={{ display: "none" }} alt={image} />
      ))}
    </>
  );
}
