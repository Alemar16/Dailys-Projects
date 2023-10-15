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
      <Link to="/" className="btn btn-primary m-5">
        Return
      </Link>
      <h1 className="title mt-2 mb-5 text-center fw-bold text-body-emphasis">
        Extensive Cards Model
      </h1>

      <div className="container mt-5 mb-5">
        <div
          className="panel active"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <h3>Explore The World</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <h3>Wild Forest</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')",
          }}
        >
          <h3>Sunny Beach</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')",
          }}
        >
          <h3>City on Winter</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <h3>Mountains - Clouds</h3>
        </div>
      </div>
      <div
        className="container row m-5 border"
        style={{ width: "100%", height: "400px" }}
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
              Dropend
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
            className="col-md-6 code-container mt-4 rounded rounded-3"
            style={{ width: "50%", height: "350px", overflowY: "auto" }}
          >
            <AccordionReact />
          </div>
        )}
        {isBasicApplicationOptionSelected && (
          <div
            className="col-md-6 code-container mt-4 rounded rounded-3"
            style={{ width: "50%", height: "350px", overflowY: "auto" }}
          >
            <AccordionBasic />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExtensiveCards;
