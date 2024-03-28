import React from "react";

function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth', 
    });
  }
  
 
  
  export default scrollToBottom;