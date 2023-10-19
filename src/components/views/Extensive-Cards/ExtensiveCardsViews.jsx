import { useEffect } from "react";
import "./style.css";

const ExtensiveCardsViews = () => {
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

  const handleReturn = () => {
    window.history.back();
  };

  return (
    <div className="container-component">
      <div className="d-flex justify-content-end m-4">
        <button
          className="btn-return"
          onClick={handleReturn}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Return"
          data-bs-custom-class="custom-tooltip-class"
        >
          <i className="bi bi-arrow-return-left"></i>
        </button>
      </div>

      <div className="container  mt-5 mb-5 d-flex flex-wrap">
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
    </div>
  );
};

export default ExtensiveCardsViews;
