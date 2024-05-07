import React, { Component } from "react";
 import SemiCircleProgressBar from "react-progressbar-semicircle";

export default function Progressbar(props) {

    
    return (
      <SemiCircleProgressBar percentage={props.q*10} strokeWidth={5} diameter={70}/>
    )
}
