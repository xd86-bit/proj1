import React from 'react';
import "./stylesLineCom.css";

export default function Line({ height, url }) {
    const backgroundImageStyle = {
        backgroundImage: `url(${url})`,
        width: "100%",
        height: height,
        marginTop:"10px"
    };

    return (
        <div id="line1" style={backgroundImageStyle}>
         
        </div>
    );
}
