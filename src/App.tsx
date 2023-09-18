import React from 'react';
import logo from './logo.svg';
import './App.css';

function sayHi() {
    alert("Hello!");
}

sayHi();

function App() {
    console.log("App rendering")
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return (
        <>This is App component</>
    );
}


function Rating() {
    console.log("Rating rendering")
    return (
        <>
            <Star/>
        </>
    );
}

function Star() {
    console.log("Star rendering")
    return (
        <>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </>
    );
}

function Accordion() {
    console.log("Accordion rendering")
    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>
        </>

    );
}

function AccordionTitle() {
    console.log("AccordionTitle rendering")
    return (
        <h3>Menu</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default App;
