import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import imageBg from "../../../Practice-Components/Random-Image/BasicAplication/images/pexel-bg.jpg";
import { Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Masonry from "react-masonry-css";

import "./style.css"; // Importa el archivo de estilos CSS

const imagesPerRow = 3; // Define la cantidad de imágenes por fila

const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
  // ...otras opciones fetch
});

const RandomImageViews = () => {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [, setSearchError] = useState("");

  const searchPhotos = async (query) => {
    try {
      const { response } = await unsplash.search.getPhotos({
        query,
        page: 1,
        perPage: imagesPerRow * 15, // Asegura que obtienes suficientes imágenes para llenar múltiples filas.
      });
      setImages(response.results);
      setSearchError("");
    } catch (error) {
      console.error("Error searching photos from Unsplash", error);
      toast.error("Error al buscar fotos. Inténtalo de nuevo más tarde.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleSearch = () => {
    if (searchQuery.length < 3) {
      toast.error("La consulta debe tener al menos 3 caracteres", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      searchPhotos(searchQuery);
      setSearchQuery("");
    }
  };

  const fetchImages = async () => {
    try {
      const { response: newImages } = await unsplash.photos.getRandom({
        count: imagesPerRow * 15, // Obtén suficientes imágenes para llenar múltiples filas.
      });
      setImages(newImages);
    } catch (error) {
      console.error("Error fetching images from Unsplash", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleRefreshImages = () => {
    fetchImages();
  };

  const handleImageClick = (imageSrc) => {
    setShowModal(true);
    setSelectedImage(imageSrc);
  };

  function capitalize(str) {
    return str.replace(/\b\w/g, (l) => l.toUpperCase());
  }

  const handleImageDownload = (downloadLocation) => {
    fetch(downloadLocation)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al descargar la imagen");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Imagen descargada:", data.url);
      })
      .catch((error) => {
        console.error("Error al descargar la imagen:", error);
      });
  };

  return (
    <div
      className="container-page container-fluid p-0"
      style={{
        backgroundImage: `url(${imageBg})`,
        backgroundSize: "100% 100%", // Estirar verticalmente
        backgroundPosition: "center", // Asegura que la imagen esté centrada
        backgroundRepeat: "no-repeat", // Evita la repetición de la imagen
        minHeight: "100vh",
        opacity: "1",
      }}
    >
      <div className="container-title mb-3">
        <h1 className="title">
          Random <br /> Image
          <br />
          Gallery
        </h1>
        <div>
          <p className="description">
            Welcome to our{" "}
            <span className="highlight">Random Image Gallery</span>
            .<br /> Explore our extensive collection of carefully curated
            high-quality photographs to inspire and delight.
          </p>
          <div className="container-button d-flex justify-content-between align-items-center my-4">
            <div className="input-group">
              <input
                type="text"
                id="search-input"
                className="form-control"
                placeholder="Search for a photo"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                id="search-button"
                className="btn btn-primary"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <button
              id="refreshButton"
              className="btn btn-secondary"
              onClick={handleRefreshImages}
            >
              Refresh Images
            </button>
          </div>
        </div>
      </div>
      {/* React-Masonry */}
      <div className="container d-flex align-items-center justify-content-center flex-wrap p-4">
        <Masonry
          breakpointCols={{ default: 3, 800: 2, 500: 1 }}
          className="row row-cols-1 row-cols-md-3 my-masonry-grid"
        >
          {images.map((image) => (
            <div className="col-12 col-md-4 my-masonry-grid_column">
              <div className="image-container ">
                <img
                  src={image.urls.regular}
                  alt={image.alt_description}
                  className="img-fluid"
                  onClick={() => handleImageClick(image.urls.regular)}
                />
                <div className="user-overlay">
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
            </div>
          ))}
        </Masonry>
      </div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        backdrop={true}
        keyboard={false}
        dialogClassName="custom-modal"
        animation={false}
      >
        <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={selectedImage}
            alt="Ampliación de imagen"
            className="modal-image"
            style={{ width: "100%" }}
          />
        </Modal.Body>

        <div className="modal-info col" style={{ marginLeft: "20px" }}>
          <p>
            <button
              className="btn"
              style={{ backgroundColor: "#ca970a" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWidthExample"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
            >
              Photo Information
            </button>
          </p>
          <div style={{ minHeight: "120px" }}>
            <div
              className="collapse collapse-horizontal"
              id="collapseWidthExample"
            >
              <div
                className="card"
                style={{
                  width: "380px",

                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  color: "#ffffff",
                  boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 20px",
                }}
              >
                {images.map((image) => {
                  if (image.urls.regular === selectedImage) {
                    return (
                      <div key={image.id} className="artist-container p-3">
                        <div className="d-flex align-items-start">
                          <div className="artist-image">
                            <img
                              src={image.user.profile_image.large}
                              alt="Artist Profile"
                              className="rounded-circle"
                              style={{ width: "140px", height: "140px" }}
                            />
                          </div>
                          <div className="artist-details ms-3">
                            <h2
                              className="fw-bold"
                              style={{
                                color: "#ca970a",
                                textShadow: "2px 2px 2px #000000",
                              }}
                            >
                              {image.user.name}
                            </h2>
                            <p className="mb-1 fw-bold ">
                              @{image.user.username}
                            </p>
                            <p className="mb-3">
                              {image.location.city && image.location.country
                                ? `${image.location.city}, ${image.location.country}`
                                : "Location not specified"}
                            </p>
                            <div className="social-icons d-flex gap-3 mb-3 align-items-center justify-content-center">
                              {image.user.social.instagram_username && (
                                <a href={image.user.social.instagram_username}>
                                  <ion-icon
                                    name="logo-instagram"
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                      color: "#ca970a",
                                    }}
                                  ></ion-icon>
                                </a>
                              )}
                              {image.user.social.twitter_username && (
                                <a href={image.user.social.twitter_username}>
                                  <ion-icon
                                    name="logo-twitter"
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                      color: "#ca970a",
                                    }}
                                  ></ion-icon>
                                </a>
                              )}
                              {image.user.portfolio_url && (
                                <a href={image.user.portfolio_url}>
                                  <ion-icon
                                    name="briefcase-outline"
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                      color: "#ca970a",
                                    }}
                                  ></ion-icon>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="artist-description my-3">
                          <h4>
                            {image.description
                              ? image.description.toUpperCase()
                              : ""}
                          </h4>
                          <p className="mb-3 align-items-center">
                            {image.alt_description
                              ? capitalize(image.alt_description)
                              : ""}
                          </p>
                        </div>
                        <div className="image-properties mb-3 align-items-center justify-content-center">
                          <p
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                            }}
                          >
                            <span
                              style={{
                                marginRight: "5px",
                                fontWeight: "bold",
                              }}
                            >
                              Image Size:
                            </span>
                            <span
                              style={{
                                Color: "#ca970a",
                                fontWeight: "bold",
                                marginRight: "50px",
                              }}
                            >
                              {image.width} x {image.height}
                            </span>
                            <span
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <span
                                style={{
                                  marginRight: "10px",
                                  fontWeight: "bold",
                                }}
                              >
                                Color:
                              </span>
                              <span
                                style={{
                                  backgroundColor: image.color,
                                  width: "20px",
                                  height: "20px",
                                  borderRadius: "50%",
                                  display: "inline-block",
                                }}
                              ></span>
                            </span>
                          </p>
                        </div>
                        <div
                          className="image-stats mb-3 align-items-center justify-content-center"
                          style={{ display: "flex" }}
                        >
                          <div
                            style={{
                              marginRight: "30px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <ion-icon
                              name="thumbs-up-outline"
                              style={{
                                fontSize: "24px",
                                marginRight: "5px",
                                color: "#ca970a",
                              }}
                            ></ion-icon>
                            <p style={{ margin: 0 }}>{image.likes}</p>
                          </div>
                          <div
                            style={{
                              marginRight: "30px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <ion-icon
                              name="glasses-outline"
                              style={{
                                fontSize: "24px",
                                marginRight: "5px",
                                color: "#ca970a",
                              }}
                            ></ion-icon>
                            <p style={{ margin: 0 }}>{image.views}</p>
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <ion-icon
                              name="download-outline"
                              style={{
                                fontSize: "24px",
                                marginRight: "5px",
                                color: "#ca970a",
                              }}
                            ></ion-icon>
                            <p style={{ margin: 0 }}>{image.downloads}</p>
                          </div>
                        </div>

                        <div className="artist-buttons d-flex justify-content-between">
                          <a
                            className="btn-profile"
                            style={{
                              backgroundColor: "#ca970a",
                              border: "1px solid #ca970a",
                            }}
                            href={image.links.html}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Unsplash Profile
                          </a>

                          <a
                            className="btn"
                            style={{
                              backgroundColor: "#ca970a",
                              border: "1px solid #ca970a",
                            }}
                            href={image.links.download}
                            onClick={() =>
                              handleImageDownload(image.links.download_location)
                            }
                          >
                            <ion-icon name="cloud-download-outline"></ion-icon>
                          </a>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      Puedes aplicar propiedades de Bootstrap a tu footer de la siguiente
      manera: jsx Copy code
      <footer
        className="bg-dark text-white d-flex flex-column align-items-center p-4"
        style={{ width: "100%" }}
      >
        <div
          className="social-icons"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <a
            href="https://www.linkedin.com/in/armando-mart%C3%ADnez-zambrano"
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 10px" }}
          >
            <ion-icon
              name="logo-linkedin"
              style={{ fontSize: "32px", color: "#ca970a" }}
            ></ion-icon>
          </a>
          <a
            href="https://github.com/Alemar16"
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 10px" }}
          >
            <ion-icon
              name="logo-github"
              style={{ fontSize: "32px", color: "#ca970a" }}
            ></ion-icon>
          </a>
        </div>
        <p style={{ margin: 0, fontSize: "14px" }}>
          Created by Alemar16 - © 2023
        </p>
      </footer>
      <ToastContainer />
    </div>
  );
};

export default RandomImageViews;
