import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {
    //debugger
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends!"}/>

            <Rating value={3}/>
            <Accordion titleValue={"Menu"}/>
            <Accordion titleValue={"Users"}/>

            <Rating value={4}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: String,
}
function PageTitle(props: PageTitlePropsType) {
    // debugger
    return (
        <h1> {props.title} </h1>
    );
}

export default App;
