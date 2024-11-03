import React from 'react';
import ReactDOM from 'react-dom/client';
import kiwi from "./images/kiwi.jpg";
import cherry from "./images/cherry.jpg";
import apple from "./images/apple.jpg";

function App() {
  return(
    <React.Fragment>
      <img src={kiwi} width={300} height={300}/>
      <img src={cherry}  width={300} height={300}/>
      <img src={apple}  width={300} height={300}/>

    </React.Fragment>
  )
}


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>)