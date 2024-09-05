import React from 'react';
import "./stylesLineCom.css";

export default function Line({ height, url }) {
    const ImageStyle = {
        width: "100%",
        height: height,
        marginTop:"10px"
    };
/*
    const backgroundImageStyle = {
        backgroundImage: `url(${url})`,
        width: "100%",
        height: height,
        marginTop:"10px",
        backgroundRepeat: 'no-repeat'
    };*/

    return (
        <img id="line1" style={ImageStyle} src={url}  />
    );
}
