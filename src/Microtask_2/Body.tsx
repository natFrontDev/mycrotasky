import React from "react";
import style from "./body.module.css"
import {ModelPropsType} from "./Task_2";



type BodyType = {
    titleForBody: string
    cars: Array <ModelPropsType>
}

export const Body = (props:BodyType)=>{
    return <div>
        {props.titleForBody}
            <table className={style.carsForm}>
                <tr>
                    <th>N/0</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {props.cars.map((car:ModelPropsType, index) =>
                <tr key={car.manufacturer}>
                    <td>{index+1}</td>
                    <td>{car.manufacturer}</td>
                    <td>{car.model}</td>
                </tr>)}
            </table>
    </div>;
}