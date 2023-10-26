import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import imageBg from "../../../Practice-Components/Random-Image/BasicAplication/images/pexel-bg.jpg";

//import "./style.css"; // Importa el archivo de estilos CSS 

const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
  // ...otras opciones fetch
});

const RandomImageViews = () => {
  const [images, setImages] = useState([]);

 useEffect(() => {
    const fetchImages = async () => {
      try {
        const { response: images } = await unsplash.photos.getRandom({ count: 15 });
        setImages(images);
      } catch (error) {
        console.error("Error fetching images from Unsplash", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div
      className="container-page container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100 p-0"
      style={{
        backgroundImage: `url(${imageBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div
        className="container-title d-flex justify-content-between align-items-center  w-100 mb-0"
        style={{ background: "linear-gradient(to top, #14141425, #ffffff)" }}
      >
        {/* Resto del código */}
        <h1
          className="title"
          style={{
            fontFamily: "'Black Ops One', sans-serif",
            fontWeight: 600,
            fontSize: "60px",
            color: "#ca970a",
            textShadow: "2px 2px 2px #000000",
            letterSpacing: "8px",
          }}
        >
          Random <br /> Image
          <br />
          Gallery
        </h1>
        <div>
          <p
            className="description"
            style={{
              fontFamily: "'Indie Flower', sans-serif",
              fontWeight: "bold",
              fontSize: "30px",
              color: "#222121",
              maxWidth: "800px", 
              lineHeight: 1.6,
              flex: 1,
            }}
          >
            Welcome to our{" "}
            <span className="highlight"
              style={{
                color: "#ca970a",
                textShadow: "2px 2px 2px #000000",
                letterSpacing: "2px",
              }}
            >
              Random Image Gallery</span>.<br />{" "}
            Explore our extensive collection of carefully curated high-quality
            photographs to inspire and delight.
          </p>
          <div className="container-button">
            <a href="https://unsplash.com" target="_blank" rel="noreferrer">
              <img className="logo-unsplash"
                src="https://logowik.com/content/uploads/images/unsplash8609.jpg"
                alt="Logo de Unsplash"
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
            </a>
            <button id="refreshButton">Refresh Images</button>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "1100px",
          border: "#333 1px solid",
          borderRadius: "10px",
          padding: "20px",
          background: "rgba(255, 255, 255, 0.158)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          backdropFilter: "blur(16px) saturate(180%)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          WebkitBackdropFilter: "blur(4px)",
          backdropFilter: "blur(4px)",
          borderRadius: "12px",
          border: "1px rgba(255, 255, 213, 0.3209219) solid",
        }}
      >
        <div className="row row-cols-3">
          {images.map((image) => (
            <div className="col" key={image.id}>
              <img
                src={image.urls.regular}
                alt={image.alt_description}
                style={{
                  objectFit: "cover",
                  margin: "10px",
                  height: "300px",
                  width: "300px",
                  maxWidth: "100%",
                  borderRadius: "7%",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                }}
              />
              <p>{image.alt_description}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="modal" className="modal">
        <span className="close">
          <ion-icon name="exit-outline"></ion-icon>
        </span>
        <img id="modalImage" src="" alt="Ampliación de imagen" />
        <a id="imageLink" target="_blank">
          <span className="open-page">
            <ion-icon name="arrow-redo-outline"></ion-icon>Go to Unsplash
          </span>
        </a>
      </div>
      <footer>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/armando-mart%C3%ADnez-zambrano"
            target="_blank"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <p>Created by Alemar16 - © 2023</p>
          <a href="https://github.com/Alemar16" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default RandomImageViews;