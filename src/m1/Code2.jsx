
/**
 * JSX Iteration and Conditional Rendering 
 * 
 * The `key` property is required for each element in a list 
 * to help React identify which items have changed, are added, or are removed.
 * 
 * Passing a unique key property to our individual items will let React know
 * which elements have changed from one render to the next.
 * 
 * If we delete item 3, the virtual DOM will know to remove it from the DOM.
 * If we didn't have a key, React would have to re-render the entire list,
 * 
 * No two elements in the same list can have the same key.
 */
const myList = () => {
    const items = ['item1', 'item2', 'item3'];

    return (
        <ul>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

/**
 * Conditional Rendering
 * 
 * 
 */

const myComponent = () => {
    const isLoggedIn = false;

    return isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>;
};

const myComponent2 = () => {
    const isLoggedIn = false;

    return (
        <div>
            {isLoggedIn && <p>Welcome back!</p>}
        </div>
    );
};

const myComponent3 = () => {
    const isLoggedIn = false;

    if (isLoggedIn) {
        return <p>Welcome back!</p>;
    } else {
        return <p>Please log in</p>;
    }
};
