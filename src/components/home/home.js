import ElementSelector from './ElementSelector'
import React, { useState, useEffect, useCallback } from 'react'
import { Helmet } from "react-helmet";
import { html, beautify } from 'js-beautify'
// import { tidy_html5 } from './tidy'

function Home() {
  const [clickedElement, setClickedElement] = useState("Select an element!!!")
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "http://lovasoa.github.io/tidy-html5/tidy.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  // const 
  let currentElement;
  const handleClickElement = useCallback(val => {
    currentElement = val
    setClickedElement(val.outerHTML);
  }, [setClickedElement]);

  function beautifycode(htmlstr) {
    htmlstr = htmlstr.split(/\>[ ]?\</).join(">\n<");
    htmlstr = htmlstr.split(/([*]?\{|\}[*]?\{|\}[*]?)/).join("\n");
    htmlstr = htmlstr.split(/[*]?\;/).join("\;\n    ");
    return htmlstr;
  }

  return (
    <div className="row">
      <ElementSelector setClickedElement={handleClickElement} />
      <div className="mt-7" >
        <div className="h3">HTML</div>
        <pre style={{ height: "500px" }}>
          <code>{html(clickedElement, { indent_size: 4, space_in_empty_paren: true })}</code>
        </pre>
      </div>
    </div>
  );
}

export default Home;