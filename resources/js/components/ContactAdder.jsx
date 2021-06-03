import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    ReactDOM.render( <ContactAdder/> , document.getElementById("home") );
}
