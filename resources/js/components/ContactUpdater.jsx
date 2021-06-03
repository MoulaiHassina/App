import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Editor from './Contact';


class ContactUpdater extends Component {

    constructor(props) {
        super(props);
        
    };

    render() {
        return ( 
            <Editor mode="update" {...this.props}/>
        );
    }
}

export default ContactUpdater;

if (document.getElementById("editor")) {
    const propsContainer = document.getElementById("props");
    const props = Object.assign({}, propsContainer.dataset);
    ReactDOM.render( <ContactUpdater {...props}/> , document.getElementById("editor") );
}