import React, { Component } from 'react';
<<<<<<< HEAD
=======
import ReactDOM from 'react-dom';
>>>>>>> www: add a generic contact component
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
<<<<<<< HEAD
    ReactDOM.render( <ContactAdder {...props}/> , document.getElementById("home") );
=======
    ReactDOM.render( <ContactAdder/> , document.getElementById("home") );
>>>>>>> www: add a generic contact component
}
