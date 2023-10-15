import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import codeSnippet from "./codeSnippet";
import style from "./style.js";

const AccordionReact = () => {
  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Component Code (.jsx)
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
              <div
                className="accordion-body code-container"
                style={{ width: "100%", height: "350px", overflowY: "auto" }}
              >
                <SyntaxHighlighter language="javascript" style={solarizedLight}>
                  {codeSnippet}
                </SyntaxHighlighter>
              </div>

            
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Style Code (.css)
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            
              <div
                className="accordion-body code-container "
                style={{ width: "100%", height: "350px", overflowY: "auto" }}
              >
                <SyntaxHighlighter language="javascript" style={solarizedLight}>
                  {style}
                </SyntaxHighlighter>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionReact;
