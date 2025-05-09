
import React, {useEffect, useState} from "react";

export default function Horizontal({anzahl, min, max}) {
    const [length, setLength] = useState(anzahl);
    const [defaultString, setDefaultString] = useState('=');

    const inc = () => {
        if (defaultString.length < max) {
            setDefaultString (defaultString.concat('='));
            setLength(length + 1);
        }
    }

    const dec = () => {
        if (defaultString.length > min) {
            setLength(length - 1);
            setDefaultString (defaultString.substring(0, length));
        }

    }

    useEffect(() => {
        if (length != anzahl) {
            setDefaultString("=".repeat(anzahl));
        }
    }, []);

    return (
        <>
            <button type="button" 
                onClick={dec}
            >
                -
            </button>
                {defaultString}
           <button type="button" 
            onClick={inc}
            >
                +
            </button>

        </>
    )
}
