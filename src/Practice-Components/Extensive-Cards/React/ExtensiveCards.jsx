import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import AccordionReact from "./Accordion/Accordion-React/AccordionReact";
import AccordionBasic from "./Accordion/Accordion-Basic/AccordionBasic";

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

    return () => {
      panels.forEach((panel) => {
        panel.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div className="container-component">
      <Link to="/" className="btn btn-secondary m-2 ">
        Return
      </Link>
      <h1 className="title text-center fw-bold text-body-emphasis">
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
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h2 className="title text-center fw-bold mt-3">Component Code</h2>
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

        {isReactJSOptionSelected && (
          <div
            className="col-md-6 code-container mt-5"
            style={{ width: "100%", height: "auto" }}
          >
            <AccordionReact />
          </div>
        )}
        {isBasicApplicationOptionSelected && (
          <div
            className="col-md-6 code-container mt-4"
            style={{ width: "100%", height: "auto" }}
          >
            <AccordionBasic />
          </div>
        )}
      </div>

      {/* <div
        className="container-code row d-flex justify-content-center align-items-center mb-5"
        style={{ width: "95%", height: "350px", margin: "0 2rem" }}
      >
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h2 className="title text-center fw-bold mt-3">Component Code</h2>
          <div className="btn-group mt-2">
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

        {isReactJSOptionSelected && (
          <div
            className="col-md-6 code-container mt-5 "
            style={{ width: "70%", height: "350px" }}
          >
            <AccordionReact />
          </div>
        )}
        {isBasicApplicationOptionSelected && (
          <div
            className="col-md-6 code-container mt-4 "
            style={{ width: "70%", height: "350px" }}
          >
            <AccordionBasic />
          </div>
        )}
      </div> */}
    </div>
  );
};

export default ExtensiveCards;
