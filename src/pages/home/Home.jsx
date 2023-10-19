import { useNavigate } from "react-router-dom";
import image1 from "../../assets/images/bootstrap-themes.png";
import imageCard1 from "../../assets/images/images-practice/image1.png";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleGoToExtensiveCards = () => {
    navigate("/extensive-cards");
  }

  const handleGoToExtensiveCardsView = () => {
    navigate("/extensive-cards-views");
  };
  return (
    <div>
      <h1 className="visually-hidden">Heroes examples</h1>

      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={image1}
          alt=""
          width="300"
          height="200"
        />
        <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </button>
          </div>
        </div>

        <div className="album row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5">
          
          <div className="col p-0 mt-0 rounded">
            <div className="card shadow-sm ">
              <img
                className="bd-placeholder-img card-img-top rounded-top"
                src={imageCard1}
                width="100%"
                height="100%"
              />

              <div className="card-body">
                <h4 className="card-title fw-bold shadow py-2 rounded">
                  Extensive Cards
                </h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={handleGoToExtensiveCards}
                    >
                      Info
                    </button>

                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={handleGoToExtensiveCardsView}
                    >
                      View
                    </button>
                  </div>
                  <small className="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col p-0 mt-0 rounded">
            <div className="card shadow-sm ">
              <img
                className="bd-placeholder-img card-img-top rounded-top"
                src={imageCard1}
                width="100%"
                height="100%"
              />

              <div className="card-body">
                <h4 className="card-title fw-bold shadow py-2 rounded">
                  Extensive Cards
                </h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={handleGoToExtensiveCards}
                    >
                      View
                    </button>

                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small className="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col p-0 mt-0 rounded">
            <div className="card shadow-sm ">
              <img
                className="bd-placeholder-img card-img-top rounded-top"
                src={imageCard1}
                width="100%"
                height="100%"
              />

              <div className="card-body">
                <h4 className="card-title fw-bold shadow py-2 rounded">
                  Extensive Cards
                </h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={handleGoToExtensiveCards}
                    >
                      View
                    </button>

                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small className="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
