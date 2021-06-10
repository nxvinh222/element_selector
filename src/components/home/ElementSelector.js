import React, { useState, useEffect } from 'react'

import 'styles/iframe.css'

function ElementSelector(props) {

  const handleClick = () => {
    var iframe = document.getElementsByTagName('iframe')[0],
      iDoc = iframe.contentWindow
        || iframe.contentDocument;
    if (iDoc.document) {
      iDoc = iDoc.document;
      iDoc.body.addEventListener('contextmenu', function (event) {
        event.preventDefault()
        console.log(event.target);
      });
    };
  }


  return (
    <div>
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