import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
// always return jsx

// JSX rules
// return single element
// div / section / article or Fragment
// use camelCase for html of class
// className instead of class
// close every element
// formatting

// Nested Components

function Greeting() {
    return (
        <div>
            <Person />
            <Message />
        </div>);
}

// implicit return
const Person = () => <h2>john doe</h2>;

// explicit return
const Message = () => {
    return <p>this is my message</p>
}

/*const Greeting = () => {
    return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'));
}*/

ReactDom.render(<Greeting/>, document.getElementById('root'));