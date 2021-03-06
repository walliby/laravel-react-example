import React, { useState } from "react";
import ReactDOM from "react-dom";

function ExampleComponentTwo() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <h2>
                I'm another React component built locally in this laravel
                project
            </h2>
            <button onClick={toggle}>Toggle react modal</button>

            {isOpen ? (
                <div style={myModal}>
                    <strong>Now you see this great modal!</strong>
                    <p>Isn't it great</p>
                    <button onClick={toggle}>x close</button>
                </div>
            ) : null}
        </>
    );
}

const myModal = {
    width: "300px",
    margin: "0px auto",
    padding: "20px 30px",
    backgroundColor: "pink",
    borderRadius: "2px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.33)",
};

export default ExampleComponentTwo;

if (document.getElementById("react-example-two")) {
    ReactDOM.render(
        <ExampleComponentTwo />,
        document.getElementById("react-example-two")
    );
}
