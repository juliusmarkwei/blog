import React from "react";
import colorNames from "colornames";

function InputColor({
    color,
    setColor,
    setHexValue,
    isDarkText,
    setIsDarkText,
}) {
    const styles = {
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        color: "white",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        border: "3px solid #000",
        width: "400px",
        height: "30px",
        fontSize: "2rem",
    };
    return (
        <>
            <input
                required
                autoFocus
                style={styles}
                type="text"
                value={color}
                placeholder="Add color name"
                onChange={(e) => {
                    setColor(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />
            <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
                Toggle Test Color
            </button>
        </>
    );
}

export default InputColor;
