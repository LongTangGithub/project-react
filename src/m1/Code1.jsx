// JSX element
const element = <h1>Hello, world!</h1>;

// Embedding JS into "HTML"
const firstName = "Long";
const greeting = <p>Hello, {firstName}!</p>;

// JSX attributes
const image = <img src="example.jpg" alt="example" />;

// Classes
const element2 = <div className="myClass">Yeur</div>

// Adding styles within JSX
const element3 = (
    <div style={{ color: 'blue', fontSize: '16px', marginRight: 10 }}>
        Styled JSX
    </div>
);

// Attributes names must follow camelCase (onChange, onMouseOver, etc.)
// JSX also requires all tags to be self-closed unlike HTML
const element4 = <input type='text' title='title' placeholder='placeholder' onChange={() => {}}/>

// Adding comments within JSX
const element5 = (
    <div>
        {/* This is a comment */}
        <p>This is a paragraph</p>
    </div>
);

