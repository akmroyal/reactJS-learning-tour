// Here this background changer component,where i learnt why onclick method always want a function tyep and without parameter 
// or if you want to pass parameter then u have to create f/c

import React, { useState } from "react";
import PassGenerator from "./PassGenerator";
import CurrencyConverter from "./Currency Converter/CurrencyConverter";

export default function Bgchanger() {
    const [color, setColor] = useState("#e6e6e6");
    return (
        <>
            <div className="w-screen h-screen py-3" style={{ backgroundColor: color }}>
                <div className="nav-bar container w-full flex gap-4 justify-around bg-gray-700 p-4">
                    <button onClick={() => setColor("#FF8A08")}>Gold #FF8A08</button>
                    <button onClick={() => setColor("#153448")}>Vintage #153448</button>
                    <button onClick={() => setColor("#FF0080")}>Pink #FF0080</button>
                    <button onClick={() => setColor("#8B0000")}>DARK RED #8B0000</button>
                    <button onClick={() => setColor("#FDEFB2")}>BUTTERMILK #FDEFB2</button>
                    <button onClick={() => setColor("#0B6623")}>FOREST GREEN #0B6623</button>
                    <button onClick={() => setColor("#1F456E")}>AEGEAN #1F456E</button>
                    <button onClick={() => setColor("#4F97A3")}>TURKISH BLUE #4F97A3</button>
                </div>
                <h1 className="font-relect text-3xl font-semibold w-screen flex justify-center relative my-4 about-text">This is {color} background theme : Thank You !!</h1>
                {/* Now I add here Password Generator project*/}
                <PassGenerator />
                {/* Now i add here Currency Generator Project */}
                <CurrencyConverter/>
            </div>
        </>
    )
}