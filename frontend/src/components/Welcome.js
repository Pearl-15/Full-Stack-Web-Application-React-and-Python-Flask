import React from 'react';
import { Button} from 'react-bootstrap';

const Welcome = () => (
    <div class="jumbotron border border-warning rounded bg-light p-4">
        <h1>Images Gallery</h1>
        <p>
            This is simple application that retrieves photos using unsplash API. 
            In order to start enter any search term in the input field.
        </p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">Learn More</Button>
    </div>
);


export default Welcome;