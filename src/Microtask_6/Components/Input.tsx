import React, {ChangeEvent, useState, MouseEvent} from "react";
import "./input.css"


type inputPropsType = {
    title:string
    setTitle: (title:string)=>void
}
export const Input =(props:inputPropsType)=>{

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input  value={props.title} onChange={onChangeInputHandler}/>
    )
}
