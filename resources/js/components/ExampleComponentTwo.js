import React from "react";
import ReactDOM from "react-dom";

function ExampleComponentTwo() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            I'm another React component built locally in this
                            laravel project
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExampleComponentTwo;

if (document.getElementById("react-example-two")) {
    ReactDOM.render(
        <ExampleComponentTwo />,
        document.getElementById("react-example-two")
    );
}
