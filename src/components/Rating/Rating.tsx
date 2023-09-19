import React from "react";

export function Rating() {
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