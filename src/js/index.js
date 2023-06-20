//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

var digito = 0;

setInterval(function(){
    digito++;
    //render your react application
    ReactDOM.render(<Home seconds={digito}/>, document.querySelector("#app"));
},1000)


