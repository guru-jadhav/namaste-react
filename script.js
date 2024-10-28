import React from "react";
import ReactDOM from "react-dom/client";
import React, { Component } from "react";

// React Element using React.createElement
const heading = React.createElement("div", {}, [
  React.createElement("h1", {}, "Namaste from React"),
  React.createElement("h1", {}, "Hello from React"),
]);
// console.log(heading);

// React Element using JSX
const headingJSX = (
  <div>
    <h1 id="1" className="heading1" tabIndex={2}>
      Namaste from React
    </h1>
    <h1 id="2" className="heading2" tabIndex={3}>
      Hello from React
    </h1>
  </div>
);
// console.log(headingJSX);



// React components are of two types:
// 1 - Class Based components - OLD
// 2 - Functional components - NEW

// CLASS COMPONENT
// This is class based component
// class based component extends React.Component class
// we have to use render() method that returns the component's UI
class Myclass extends Component {
  render() {
    return <h1>Hello from class component !</h1>;
  }
}


// FUNCTION COMPONENT
// This is function based component
const HeadingFunction = () => {
  return <h1>Hello from function component</h1>;
};

// This is function based component
function HeadingFunction2(props) {
  return <h1>Hello from {props.name} function</h1>;
}

// This is function based component
// what is functional component: It is a normal Javascript function which return some peace of JSX code or ReactElement
// It can take props as its parameter(input)
// Function based component should start with capital letter in it's function name

function App() {
  let name = "Guru";
  return (
    <div id="container">
      <HeadingFunction />
      {/* inside this curly braces we can write any javascript code and it will be executed when this component will be rendered */}
      {HeadingFunction()}
      {/* As functional components are normal javascript function we can directly call this function instead of rendering them with JSX tags like <HeadingFunction />  */}
      <HeadingFunction2 name={name} />
      <h1>Hello from app component</h1>
      <Myclass />
    </div>
  );
}

// Component composition: Displaying a component inside another component is called as component compostion
// This is helpfull for building complex UI

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
