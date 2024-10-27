// React.createElement("elementName", {"attributs and props(like id, class, key, etc)"}, children's of the tag(we can create multiple childs of this element we are creating))

const greetingReact = React.createElement(
    "div",
    { id: 1, className: "greet" },
    [
        // keys
        // when we use key prop, this is a internal mechanism (internal React prop)
        // used for performance optimization and reconciliation of lists. it will not be displayed in the HTML output
        React.createElement("h1", {key:1}, "Hello from React"),
        React.createElement("h1", {key:2}, "Namaste from React")
    ]
    // React.createElement("h1", null, "Hello from React"),
    // React.createElement("h1", null, "Namaste from React")
    // when we create multiple childrens of a element they are stored as Array in 
    // the children property of the object(element we created)
);

// JSX(javascript XML) allows us to write HTML-like code within our javascript file.
// It makes it easier to create and visualize the structure of your React components. 
// JSX(javascript XML) is syntactic sugar for React.createElement, 
// The conversion from JSX to React.createElement is done by js compiler like Babel
// Babel is responsible for converting JSX syntax into React.createElement calls during the build process.
// under the hood it uses React.createElement to actually create the React elements
// Most React applications are set up using build tools like Webpack, Parcel, or Vite. 
// These tools integrate Babel into the build process, allowing you to write JSX in your source files, 
// and automatically transforming it during the build.


// when we create a new element using React.createElement it will return us a object(JS object) and this object we get in return is a React Element,
// which will be converted to HTML that browser understand when we render it using .render method
console.log(typeof greetingReact);
console.log(greetingReact);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(greetingReact);
// when we are rendering this greetingReact the .render(.render which is the part of ReactDOM) method will convert this object(which we got it from React.createElement)
// to a actual HTML elements and render them on the screen
// ReactDOM is the one that converts the Virtual DOM objects (React elements) into 
// actual HTML tags and renders them on the screen.
// ReactDOM enables React to create actual HTML elements from react Elements(which we got from React.createElement)
// When we do root.render and if there was something already present in that root(any childeren), then those
// children will be removed(replaced)
// When calling root.render(greetingReact), if there are any existing child elements within the root container, 
// React will unmount those elements and "replace" them with the new React element. This process involves 
// a reconciliation step, where React compares the current Virtual DOM representation with the new one and updates the DOM accordingly.





// React can be applied to small portion of our page (and the rest of the page will be working as it is(that's why react is called a library))
// React can be integrated into specific parts of a webpage, allowing those sections to leverage React's features and 
// capabilities while the rest of the page remains unaffected. This flexibility is one of the reasons React is 
// considered a library rather than a full-fledged framework. It can coexist with other JavaScript libraries and frameworks, 
// enabling developers to enhance existing applications incrementally without having to rewrite the entire codebase.
