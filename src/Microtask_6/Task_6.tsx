import React from "react"
import {useState} from "react";
import {FullInput} from "./Components/fullInput";
import {Input} from "./Components/Input";
import {Button} from "./Components/button";





export const Task6 = () => {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let [title, setTitle] = useState("")

    const onClickButtonHandler = (title:string) => {
        let newMessage = {message:title}
        let newMessages = [newMessage,...message]
        setMessage(newMessages)
    }

    const callBackButtonHandler = ( )=>{
        onClickButtonHandler (title)
        setTitle('')
    }


return (
    <div>
        {/*<div>
        <input/>
        <button> ok </button>
    </div>*/}
        <Input title = {title} setTitle = {setTitle}/>
        <Button name={"+"} callback={callBackButtonHandler}/>
        {message.map((el: { message: string }, index) => {
            return (
                <div key={index}>{el.message}</div>)
        })}
    </div>);
};
