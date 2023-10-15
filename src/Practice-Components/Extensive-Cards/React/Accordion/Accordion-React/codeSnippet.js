const codeSnippet = `
import { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

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
              "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?
              ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <h3>Explore The World</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?
              ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <h3>Wild Forest</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?
              ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')",
          }}
        >
          <h3>Sunny Beach</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?
              ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')",
          }}
        >
          <h3>City on Winter</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?
              ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <h3>Mountains - Clouds</h3>
        </div>
      </div>
    </div>
  );
};

export default ExtensiveCards;
  `;
export default codeSnippet;