import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@evertrue/et-components'

function ExampleComponent({...props}) {
    return (
        <div>
            <h3>These are buttons from the et component library</h3>
            <Button type="action">Action Button</Button>
            <Button type="secondary">Secondary Button</Button>
            <Button type="destroy">Destructive Button</Button>
        </div>
    );
}

export default ExampleComponent;

if (document.getElementById('example-one')) {
    ReactDOM.render(<ExampleComponent />, document.getElementById('example-one'));
}