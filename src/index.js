import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    React.createElement("div", 
        { className: "container text-center mt-5" }, 
        React.createElement("h1", null, "Welcome to the skills app!")
    )
);

