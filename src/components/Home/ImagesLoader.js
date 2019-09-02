import React from "react";

export default function ImagesLoader({ images }) {
  return (
    <>
      {images.map(image => (
        <img key={image} src={image} style={{ display: "none" }} alt={image} />
      ))}
    </>
  );
}
