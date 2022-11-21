import React from "react"
import {useState} from "react";
import "../Microtask_3/button.css"
import {NewComponent} from "./new_component";


export type MoneyType = Banknotetype []

export type Banknotetype = {
    banknote: string,
    value: number,
    number: string
}

export type FilterType = 'all' | 'Dollars'| "Rubles"


export const Task5 = () => {

    const [money, setMoney] = useState<MoneyType>([
        {banknote: 'Dollars', value: 100, number: ' a1234567890'},
        {banknote: 'Dollars', value: 50, number: ' z1234567890'},
        {banknote: 'RUBLES', value: 100, number: ' w1234567890'},
        {banknote: 'Dollars', value: 100, number: ' e1234567890'},
        {banknote: 'Dollars', value: 50, number: ' c1234567890'},
        {banknote: 'RUBLES', value: 100, number: ' r1234567890'},
        {banknote: 'Dollars', value: 50, number: ' x1234567890'},
        {banknote: 'RUBLES', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>("all")


    let currentMoney = money

    if (filter === "Dollars") {
        currentMoney = money.filter(objFromMoney => objFromMoney.banknote === "Dollars")
    }

    if (filter === "Rubles") {
        currentMoney = money.filter(objFromMoney => objFromMoney.banknote === "RUBLES")
    }

    const filterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <NewComponent filterHandler = {filterHandler} data = {currentMoney}/>
    )

};