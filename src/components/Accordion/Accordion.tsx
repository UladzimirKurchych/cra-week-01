import React from "react";


type AccordionPropsType = {
    titleValue: String,
}
function Accordion(props: AccordionPropsType) {
    debugger
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>

    );
}


type AccordionTitlePropsType = {
    title: String,
}
function AccordionTitle(props: AccordionTitlePropsType) {
    debugger
    return (
        <h3>{props.title}</h3>
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

export default Accordion;