import React from "react";
import data from "../assets/data.json";

const Gallery = () => {
  console.log(data);
  return (
    <div className="p-6 mt-20 whypadding">
      <div className="font-sans font-bold text-3xl text-amber-400 m-4">
        Gallery
      </div>
      <div className="gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Object.entries(data.gallery).map(([key, value]) => {
          console.log(value);
          return (
            <div
              key={key}
              className="gallery-item break-inside-avoid p-2 md:p-4 lg:p-6"
            >
              {value.endsWith(".jpg") ||
              value.endsWith(".png") ||
              value.endsWith(".jpeg") ? (
                <img
                  src={`/gallery/${value}`}
                  className="w-full h-full rounded-lg shadow-lg hover:scale-105 cursor-pointer"
                  alt={`Gallery Item ${value}`}
                />
              ) : value.endsWith(".mp4") ? (
                <video
                  controls
                  className="w-full h-full rounded-lg shadow-lg hover:scale-105 cursor-pointer"
                >
                  <source src={`/gallery/${value}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <p>Unsupported media type</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
