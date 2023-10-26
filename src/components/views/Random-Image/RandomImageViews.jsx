import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import imageBg from "../../../Practice-Components/Random-Image/BasicAplication/images/pexel-bg.jpg";

import "./style.css"; // Importa el archivo de estilos CSS

const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
  // ...otras opciones fetch
});

const RandomImageViews = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { response: images } = await unsplash.photos.getRandom({
          count: 15,
        });
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
            <span
              className="highlight"
              style={{
                color: "#ca970a",
                textShadow: "2px 2px 2px #000000",
                letterSpacing: "2px",
              }}
            >
              Random Image Gallery
            </span>
            .<br /> Explore our extensive collection of carefully curated
            high-quality photographs to inspire and delight.
          </p>
          <div className="container-button">
            <a href="https://unsplash.com" target="_blank" rel="noreferrer">
              <img
                className="logo-unsplash"
                src="https://logowik.com/content/uploads/images/unsplash8609.jpg"
                alt="Logo de Unsplash"
              />
            </a>
            <button id="refreshButton">Refresh Images</button>
          </div>
        </div>
      </div>

      <div className="container d-flex align-items-center justify-content-center justify-content-center flex-wrap p-4">
        <div className="row row-cols-3">
          {images.map((image) => (
            <div
              className="col"
              key={image.id}
              style={{ position: "relative", overflow: "hidden" }}
            >
              <img
                src={image.urls.regular}
                alt={image.alt_description}
                style={{
                  objectFit: "cover",
                  margin: "10px",
                  height: "300px",
                  width: "300px",
                  maxWidth: "100%",
                  borderRadius: "7px",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                }}
              />
              <div className="user-overlay ">
                <a
                  href={image.user.links.html}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#ca970a",
                  }}
                >
                  {image.user.name}
                </a>
              </div>
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
            rel="noreferrer"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <p>Created by Alemar16 - © 2023</p>
          <a
            href="https://github.com/Alemar16"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default RandomImageViews;
