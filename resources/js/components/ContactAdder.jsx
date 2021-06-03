import React, { Component } from 'react';
import Editor from './Contact';


class ContactAdder extends Component {

    constructor(props) {
        super(props);
        
    };

    render() {
        return ( 
            <Editor/>
        );
    }
}

export default ContactAdder;

if (document.getElementById("home")) {
    ReactDOM.render( <ContactAdder {...props}/> , document.getElementById("home") );
}
