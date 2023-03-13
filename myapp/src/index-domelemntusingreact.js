import React from 'react';
import ReactDOM from 'react-dom/client';


//create react element
const Heading = <h1>Hello React!</h1>

//attach that react element with existing tree 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Heading)
