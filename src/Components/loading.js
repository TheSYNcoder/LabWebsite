import React from "react"
import "tachyons"
import "./loading.css";

const Loading = ()=>{
    return(
        <div class="d-flex justify-content-center pa6">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading;