import ElementSelector from './ElementSelector'
import React, { useState, useCallback } from 'react'

function Home() {
  const [clickedElement, setClickedElement] = useState("Select an element!!!")
  let currentElement;
  const handleClickElement = useCallback(val => {
    currentElement = val
    // console.log("current");
    // console.log(currentElement)
    // console.log("outer");
    // console.log(currentElement.innerHTML)
    setClickedElement(val.toString());
  }, [setClickedElement]);

  return (
    <div className="row">
      <ElementSelector setClickedElement={handleClickElement} />
      <div className="col-3">
        {clickedElement}
      </div>
    </div>
  );
}

export default Home;