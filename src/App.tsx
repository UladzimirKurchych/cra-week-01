import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function sum(a: number, b: number) {
    alert(a + b);
}

sum(2, 3);

function App() {
    console.log("App rendering")
    return (
        <div>
            <AppTitle/>

            Article 1
            <Rating/>
            <Accordion/>

            Article 2
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return (
        <div>This is App component</div>
    );
}

export default App;
