import React, { useState } from "react";
import Display from "./components/Display";
import InputColor from "./components/InputColor";

function App() {
    const [color, setColor] = useState("");
    const [hexValue, setHexValue] = useState("");
    const [isDarkText, setIsDarkText] = useState(true);

    return (
        <>
            <Display
                color={color}
                hexValue={hexValue}
                isDarkText={isDarkText}
            />
            <InputColor
                color={color}
                setColor={setColor}
                setHexValue={setHexValue}
                isDarkText={isDarkText}
                setIsDarkText={setIsDarkText}
            />
        </>
    );
}

export default App;
