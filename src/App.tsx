import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function sayHi() {
    alert("Hello!");
}

sayHi();

function App() {
    console.log("App rendering")
    return (
        <div>

            <input/>
            <input type="date"/>

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

export default App;
