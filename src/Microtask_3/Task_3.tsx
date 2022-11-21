import React from "react";
import {Button} from "./buttons";




export const Task3 = () => {

    const Button1foo = (name:string) => {
        alert("Cмотри консоль")
        console.log(name)
    }
    const Button2foo = (name:string, age:number) => {
        alert("Cмотри консоль")
        console.log(name, age)
    }

    const Button3foo = () => {
        alert("Cмотри консоль")
        console.log("Im a stupid button")
    }

    return <>
        <Button name = {"YouTubeChannel-1"} callback={() =>Button1foo ("Vasya")}/>
        <Button name = {"YouTubeChannel-2"} callback={() => Button2foo ("Ivan", 21)}/>
        <Button name = {"Stupid button"} callback={Button3foo}/>
    </>
}
