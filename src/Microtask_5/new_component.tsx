import React from "react";
import {Banknotetype, FilterType, MoneyType} from "./Task_5";

type NewComponentType = {
    data: MoneyType
    filterHandler: (nameButton: FilterType) => void
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <ul>
                {props.data.map((objMoneyArr: Banknotetype, index: number) =>
                <li key={index}>
                    <span>{objMoneyArr.banknote}</span>
                    <span>{objMoneyArr.value}</span>
                    <span>{objMoneyArr.number}</span>
                </li>
                )}
            </ul>
            <div>
                <button onClick={() => props.filterHandler("all")} className={"button"}> All</button>
                <button onClick={() =>  props.filterHandler("Rubles")} className={"button"}> RUBLES</button>
                <button onClick={() =>  props.filterHandler ("Dollars")} className={"button"}> Dollars</button>
            </div>
        </div>
    )
}



