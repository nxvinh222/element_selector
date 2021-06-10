import React from 'react'

import 'styles/iframe.css'
// import $ from 'jquery'

function ElementSelector({ setClickedElement }) {
  var previousElement;
  const handleClick = () => {
    var iframe = document.getElementsByTagName('iframe')[0],
      iDoc = iframe.contentWindow
        || iframe.contentDocument;
    if (iDoc.document) {
      iDoc = iDoc.document;
      iDoc.body.addEventListener('contextmenu', function (event) {
        event.preventDefault()
        if (previousElement != undefined) {
          console.log(previousElement)
          previousElement.style.outline = "white"
        }
        previousElement = event.target.parentNode.parentNode
        event.target.parentNode.parentNode.style.outline = "solid blue 1px";
        console.log(event.target.parentNode.parentNode);
        setClickedElement(event.target.parentElement)

      });
    };
  }


  return (
    <div className="col-8" >
      <iframe
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        // src="https://vneco nomy.vn/"
        src="/destination_page/vneconomy_tieudiem.html"
        width="400" height="200" frameborder="0" scrolling="auto" className="frame-area"
        id="myFrame"
        onLoad={handleClick}
      >
      </iframe>
    </div>

  )
}

export default ElementSelector;