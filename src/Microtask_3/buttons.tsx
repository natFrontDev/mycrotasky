import React from "react";
import './button.css'

(
)
type ButtonType ={
    name: string
    callback: ()=> void
}

export const Button = (props: ButtonType) => {
    return (
        <button className={"button"} onClick={props.callback}> {props.name}</button>
    )
}