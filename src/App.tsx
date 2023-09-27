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
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends!"}/>

            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu 1"}/>
            <Accordion titleValue={"Menu 2"}/>
            Article 2
            <Rating value={4}/>
        </div>
    );
}

function PageTitle(props: any) {
    console.log("PageTitle rendering")
    return (
        <h1> {props.title} </h1>
    );
}

export default App;
