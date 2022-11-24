import React, {ChangeEvent, useState, MouseEvent} from "react";

type ButtonType ={
    name: string
    callback: ()=> void
}

export const Button = (props: ButtonType) => {

    // @ts-ignore
    const buttonClickHandler = () => {
        props.callback()
    }
    return (
        <button className={"button"} onClick={buttonClickHandler}> {props.name}</button>
    )
}