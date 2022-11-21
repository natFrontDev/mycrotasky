import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";
import React from "react";

export const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]
export type ModelPropsType = {
    manufacturer: string,
    model: string
}

export const Task2 = () => {
    return <>
        <Header title={"NEW TITLE"}/>
        <Body titleForBody={"NEW BODY"} cars={topCars}/>
        <Footer titleForFooter={"NEW FOOTER"}/>
    </>
}
