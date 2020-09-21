import React from "react";
import "tachyons";
import logo from "./logo.jpg"

const ImageCard = ({text})=>{
    return(
        <div class="pa2">
        <div class="card grow bg-light">
                <img class="card-img-top" height="40px" src={logo} alt="Card image cap" />
            <div class="card-body f3">
               {text}
            </div>
        </div>
        </div>
    )
}

export const TextCard = ({text})=>{
    return(
        <div class="pt2">
        <div class="card bg-light">
            <div class="card-body f3">
               {text}
            </div>
        </div>
        </div>
    )
}

export default TextCard;