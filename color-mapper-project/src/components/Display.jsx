function Display({ color, hexValue, isDarkText }) {
    const styles = {
        backgroundColor: color,
        color: isDarkText ? "white" : "black",
        padding: "10px",
        margin: "10px",
        borderRadius: "50px",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        border: "3px solid #000",
        width: "400px",
        height: "300px",
        fontSize: "2rem",
    };

    return (
        <>
            <div className="display-container" style={styles}>
                <h4>{color !== "" ? color : "Empty Value"}</h4>
                <h4>{hexValue !== "" ? hexValue : null}</h4>
            </div>
        </>
    );
}

Display.defau = {
    color: "Empty Value",
};

export default Display;
