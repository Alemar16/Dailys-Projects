import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
  // ...otras opciones fetch
});

const RandomImageViews = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await unsplash.photos.getRandom({ count: 15 });
        if (response.type === "success") {
          setImages(response.response);
        } else {
          console.error("Error fetching images from Unsplash");
        }
      } catch (error) {
        console.error("Error fetching images from Unsplash", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-3">
        {images.map((image, index) => (
          <div className="col" key={index}>
            <img
              src={image.urls.regular}
              alt={image.alt_description}
              className="img-fluid"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomImageViews;
