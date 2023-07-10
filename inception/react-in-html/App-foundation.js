import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactElement-Js Object => HTMLElement(render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

// JSX - HTML-like or XML-like syntax

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement-Js Object => HTMLElement(render)

//React Element
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX🚀
  </h1>
);
//console.log(jsxHeading);

//React Components
//Class Based Components - OLD
//Function Based Components - NEW

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX🚀
  </h1>
);

//React Functional Component
//Component Composition
//React Fragments - behaves like an empty tag.  <></> or <React.Fragment></React.Fragment>
const HeadingComponent = () => (
  <>
    <div id="container">
      {Title()}
      <Title />
      <Title></Title>
      <h1>Namaste React Functional Component</h1>;
    </div>
    <div id="container2"></div>
  </>
);

// const HeadingComponent2 = () => <h1>Namaste React Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
