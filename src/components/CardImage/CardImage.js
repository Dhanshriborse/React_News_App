import React from "react";
import "./CardImage.css";

export default function CardText({ image }) {
    return (
        <div id='imageContainer'>
            <img id='cardImage' src={image} alt=''></img>
        </div>
    );
}
