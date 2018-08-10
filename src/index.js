//create a new component
// this compnent should produce some html
//this link line is key
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY="AIzaSyCO-SyOtAEnbiSNq-Uvsd9AMJ7RSpGgFYw";
const App=function()
{
return (<div><SearchBar></SearchBar></div>);
}

//take the generated html of this component and put it on the page
//first wrong way-react is not defined
//to tell react where to put the rendering this document selector is key
ReactDOM.render(<App></App>,document.activeElement.querySelector('.container'));