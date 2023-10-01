import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {
    debugger
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends!"}/>

            Article 1
            <Rating value={3}/>
            <Accordion />
            <Accordion />
            Article 2
            <Rating value={4}/>
        </div>
    );
}

function PageTitle(props: any) {
    debugger
    return (
        <h1> {props.title} </h1>
    );
}

export default App;
