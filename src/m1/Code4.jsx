/**
 * Component Props
 * 
 * Components props are properties that a child components can receive from its parent.
 * Often times, you eill have data in one component and you want to pass it to another component.
 * 
 * In react, props to a component are passed as a single argument, even if they are multiple.
 * 
 * The props argument is always going to be an object containing all of the different properties that are passed 
 * from the parent component
 * 
 */

const ParentComponent = () => {
    return (
        <div>
            <p>I am the parent!</p>
            <ChildComponent name="John" age={25} />
        </div>
    )
}

const ChildComponent = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>            
        </div>
    )
}

// A common pattern is to destructure the props argument into its respective properties
// and use them directly. This way you don't have to write props.name or props.age.
const ChildComponent2 = ({ name, age }) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )
}

/**
 * In React , anytime any of the props of any component changes, the entire component will
 * be re-rendered and retrigger a browser repaint of the entire screen
 * 
 * This is important because it's part of the component lifecycle.
 */