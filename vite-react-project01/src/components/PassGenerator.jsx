// this is Password generator lesson which helps to learn 
// useEffect and useCallback concepts and how it is use 
// and also learnt how to copy text to the clipboard using useRef hooks
import React, { useCallback, useEffect, useRef, useState } from "react"

export default function PassGenerater() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const passwordRef = useRef(null); // using for the selections of text

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numAllowed) str += "1234567890";
        if (charAllowed) str += "%$@*%#^&_-";

        for (let i = 1; i <= length; i++) {
            pass += str.charAt(Math.floor(Math.random() * str.length + 1));
        }

        setPassword(pass);
    }, [length, numAllowed, charAllowed]);

    useEffect(() => {
        passwordGenerator();
    }, [length, numAllowed, charAllowed, passwordGenerator]);

    const copyPassword = useCallback(() => {
        passwordRef.current?.select();
        password.current?.setSelectionRange(0,length);
        // using for the highlights while copying texts 

        window.navigator.clipboard.writeText(password);
    },[password])
    return (
        <div className="password-cont container w-full h-40 flex flex-col justify-center items-center gap-8">
            <h1 className="text-3xl font-semibold">Password Generator</h1>
            <div className="w-6/12 flex flex-col items-center justify-center h-32 gap-2 text-xl">
                <div className="w-full flex justify-around">
                    <input
                        className="flex h-10 w-4/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Password"
                        readOnly
                        value={password}
                        ref={passwordRef}
                    ></input>
                    <button
                        onClick={copyPassword}
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Copy
                    </button>
                </div>
                <div className="w-11/12 flex justify-between items-center">
                    <div>
                        <input
                            type="range"
                            name="range"
                            min={6}
                            max={22}
                            className="cursor-pointer"
                            id="input"
                            value={length}
                            onChange={(e) => {
                                setLength(e.target.value);
                            }}
                        />
                        <label htmlFor="input">Length({length})</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="check"
                            className="cursor-pointer"
                            defaultChecked={numAllowed}
                            onChange={() => {
                                setNumAllowed((prev) => !prev);
                            }}
                        />
                        <label htmlFor="check">Numbers</label></div>
                    <div>
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="char"
                            className="cursor-pointer"
                            defaultChecked={charAllowed}
                            onChange={() => {
                                setCharAllowed((prev) => !prev);
                            }}
                        />
                        <label htmlFor="char">Characters</label>
                    </div>
                </div>
            </div>
        </div>
    )
}