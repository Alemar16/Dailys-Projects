import { useState, useEffect } from "react";

// import "./RandomImage.css";

const RandomImage = () => {
  const [imageUrls, setImageUrls] = useState([]);

  const unsplashURL = "https://source.unsplash.com/random/";
  const rows = 5;

  useEffect(() => {
    generateImages();
  }, []);

  const generateImages = () => {
    let urls = [];
    for (let i = 0; i < rows * 3; i++) {
      const randomSize = `${getRandomNr()}x${getRandomNr()}`;
      const imageUrl = `${unsplashURL}${randomSize}`;
      urls.push(imageUrl);
    }
    setImageUrls(urls);
  };

  const getRandomNr = () => {
    return Math.floor(Math.random() * 10) + 300;
  };

  const openModal = (imageUrl) => {
    // Implement your modal opening logic here
    console.log("Modal opened for", imageUrl);
  };

  return (
    <div className="container">
      <div className="container-title">
        <h1 className="title">Random Image Gallery</h1>
        <div>
          <p className="description">
            Welcome to our{" "}
            <span className="highlight">Random Image Gallery</span>. Explore our
            extensive collection of carefully curated high-quality photographs
            to inspire and delight.
          </p>
          <div className="container-button">
            <a href="https://unsplash.com" target="_blank" rel="noreferrer">
              <img
                src="https://logowik.com/content/uploads/images/unsplash8609.jpg"
                alt="Logo de Unsplash"
              />
            </a>
            <button className="btn btn-primary" onClick={generateImages}>
              Refresh Images
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="col-md-4 col-sm-6">
            <div className="image-container">
              <img
                className="img-fluid"
                src={imageUrl}
                alt={`Random Image ${index}`}
                onClick={() => openModal(imageUrl)}
              />
            </div>
          </div>
        ))}
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
          <a href="https://github.com/Alemar16" target="_blank" rel="noreferrer">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default RandomImage;
