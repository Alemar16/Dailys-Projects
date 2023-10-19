const codeSnippet = `
import { useEffect } from "react";
import "./style.css";

const ExtensiveCards = () => {
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
      
      <h1 className="title mt-2 mb-5 text-center fw-bold text-body-emphasis">
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
  );
};

export default ExtensiveCards;
  `;
export default codeSnippet;