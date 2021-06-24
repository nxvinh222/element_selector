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
    <div className="mr-0" >
      <div className="h3">Element Selector</div>
      <iframe
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        // src="/destination_page/vneconomy_tieudiem.html"
        src="/destination_page/des.html"
        // src="public\vneconomy\site folder\vneconomy.vn\d235bda9__tieu-diem.html"
        width="80vh" height="200" frameBorder="0" scrolling="auto" className="frame-area"
        id="myFrame"
        onLoad={handleClick}
      >
      </iframe>
    </div>

  )
}

export default ElementSelector;