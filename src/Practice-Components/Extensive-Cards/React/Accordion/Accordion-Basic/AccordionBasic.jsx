import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import html from "./html.js";
import style from "./style.js";
import script from "./script.js";

const AccordionBasic = () => {
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
              HTML Code
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            
              <div
                className="accordion-body  code-container "
                style={{ width: "100%", height: "350px", overflowY: "auto" }}
              >
                <SyntaxHighlighter language="javascript" style={solarizedLight}>
                  {html}
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
              CSS Code
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            
              <div
                className="accordion-body  code-container "
                style={{ width: "100%", height: "350px", overflowY: "auto" }}
              >
                <SyntaxHighlighter language="javascript" style={solarizedLight}>
                  {style}
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
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Script Code
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            
              <div
                className="accordion-body code-container "
                style={{ width: "100%", height: "350px", overflowY: "auto" }}
              >
                <SyntaxHighlighter language="javascript" style={solarizedLight}>
                  {script}
                </SyntaxHighlighter>
              </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionBasic;
