import React from 'react';
import ReactDOM from 'react-dom';

function ExampleComponent() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">I'm an example React component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExampleComponent;

if (document.getElementById('example')) {
    ReactDOM.render(<ExampleComponent />, document.getElementById('example'));
}
