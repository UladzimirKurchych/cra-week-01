import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <AppTitle />
            <Rating/>
            <Accordion/>
            <Rating />
        </div>
    );
}

function AppTitle() {
    return <>This is App component</>
}

function sayHi() {
    alert("Hello!");
}

sayHi();

function Rating() {
    console.log("Rating rendered")
    return (
        <>
            <Star />
        </>
    );
}

function Star() {
    console.log("Star rendered")
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
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

export default App;
