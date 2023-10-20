import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import AccordionReact from "./Accordion/Accordion-React/AccordionReact";
import AccordionBasic from "./Accordion/Accordion-Basic/AccordionBasic";
import imageHtml from "../../../assets/icons/html.png";
import imageCss from "../../../assets/icons/css.png";
import imageJavaScript from "../../../assets/icons/js.png";
import imageReact from "../../../assets/icons/react.svg";

const ExtensiveCards = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [
    isBasicApplicationOptionSelected,
    setIsBasicApplicationOptionSelected,
  ] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsBasicApplicationOptionSelected(option === "Basic Application");
  };
  const isReactJSOptionSelected = selectedOption === "React JS";

  useEffect(() => {
    const panels = document.querySelectorAll(".panel");
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });

    const handleClick = (event) => {
      const panel = event.currentTarget;
      removeActiveClasses();
      panel.classList.add("active");
    };

    const removeActiveClasses = () => {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    };

    panels.forEach((panel) => {
      panel.addEventListener("click", handleClick);
    });

    // Función de retorno del useEffect
    return () => {
      panels.forEach((panel) => {
        panel.removeEventListener("click", handleClick);
      });

      // Eliminar todos los tooltips activos
      tooltipList.forEach((tooltip) => {
        tooltip.dispose();
      });
    };
  }, []);

  return (
    <div className="container-component">
      <div className="d-flex justify-content-end m-4">
        <Link
          to="/extensive-cards-views"
          className="btn btn-secondary m-2 "
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-original-title="View"
          data-bs-custom-class="custom-tooltip-class"
        >
          <i className="bi bi-eye"></i>
        </Link>
        <Link
          to="/"
          className="btn btn-secondary m-2 "
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-original-title="Return"
          data-bs-custom-class="custom-tooltip-class"
        >
          <i className="bi bi-arrow-return-left"></i>
        </Link>
      </div>

      <h1 className="title text-center fw-bold text-body-emphasis mb-4">
        Extensive Cards Model
      </h1>

      <div className="container  mt-2 mb-5 d-flex flex-wrap">
        <div
          className="panel active"
          style={{
            backgroundImage:
              "url('https://images7.alphacoders.com/133/thumbbig-1332876.webp')",
          }}
        >
          <h3>A cup of coffee</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images2.alphacoders.com/433/thumbbig-43350.webp')",
          }}
        >
          <h3>Chocolate and Roses</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images8.alphacoders.com/132/thumbbig-1325359.webp')",
          }}
        >
          <h3>Chocolate Chip Cookies</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images8.alphacoders.com/132/thumbbig-1326922.webp')",
          }}
        >
          <h3>Strawberry Cake</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images6.alphacoders.com/132/thumbbig-1323968.webp')",
          }}
        >
          <h3> Wine Grapes And Cheese</h3>
        </div>
      </div>
      <div
        className="container-code row d-flex justify-content-center align-items-center mb-5"
        style={{
          width: "95%",
          height:
            isReactJSOptionSelected || isBasicApplicationOptionSelected
              ? "auto"
              : "350px",
          margin: "0 2rem",
          padding: "1rem",
        }}
      >
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-start align-items-center">
            <div className="d-flex flex-column align-items-start">
              <h2 className="title text-left fw-bold">Description:</h2>
              <p className="">
                The React component ExtensiveCards implements a card design with
                smooth click transitions, managed through useEffect. It uses
                Bootstrap 5 to structure the layout and apply responsive styles.
                The cards feature images and titles, while the CSS style defines
                the visual presentation and size transitions. The use of the
                Montserrat Alternates font library from Google Fonts adds an
                elegant and distinctive typography to the component.
              </p>
            </div>

            <div className="d-flex align-items-center mt-2 gap-2">
              <img src={imageHtml} alt="Logo-html" width={40} height={40} />
              <img src={imageCss} alt="Logo-css" width={40} height={40} />
              <img src={imageJavaScript} alt="Logo-js" width={40} height={40} />
              <img src={imageReact} alt="Logo-react" width={40} height={40} />
            </div>
          </div>

          <div
            className="col-md-6 d-flex flex-column justify-content-start align-items-center  rounded shadow p-3 mt-3 mb-3 ms-auto"
            style={{
              width: "24em",
              background: "linear-gradient(90deg, #edc0bf 0, #c4caef 58%)",
            }}
          >
            <h2 className="title-code text-center fw-bold mt-4">
              Use Code <br />
              {"</> "}
            </h2>
            <div className="btn-group mt-2" style={{ position: "static" }}>
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleOptionSelect("React JS")}
                  >
                    React JS
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleOptionSelect("Basic Application")}
                  >
                    Basic Application
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {isReactJSOptionSelected && (
          <div
            className="col-md-6 code-container mt-5 shadow rounded p-2"
            style={{ width: "60%", height: "auto" }}
          >
            <AccordionReact />
          </div>
        )}
        {isBasicApplicationOptionSelected && (
          <div
            className="col-md-6 code-container mt-4 shadow rounded p-2"
            style={{ width: "60%", height: "auto" }}
          >
            <AccordionBasic />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExtensiveCards;
