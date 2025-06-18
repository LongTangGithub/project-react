import React, { Component } from 'react';

/**
 * Components are the building blocks of any React application.
 * They are responsible for rendering the UI and managing the state of the application.
 * They are reusable and can be composed to create more complex UIs.
 * 
 * There are two types of components:
 * 1. Functional Components (standard): They are the newer way to create components.
 * 2. Class Components: They are the older way to create components.
 * 
 * `props` are short for properties. They can be any data type and are passed to the component as an argument.
 */


// Functional Component: Simple JS function that receives props and returns a JSX element.
const MyComponent = (props) => {
    return <p>Hello, {props.name}!</p>;
};

// Class Component
class MyComponent2 extends React.Component {
    render() {
        return <p>Hello, {this.props.name}!</p>;
    }
}

/**
 * Components composibility 
 * 
 * One of the most powerful features of React is the ability to compose components 
 * to create more complex UIs.
 * 
 * 
 */
const ParentComponent = () => {
    return (
        <div>
            <p>I am the parent!</p>
            <ChildComponent />
        </div>
    )
}

const ChildComponent = () => {
    return <div>I am a child!</div>
}