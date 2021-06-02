import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class ContactEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            city : '',
            country: '',
            jobtitle : '',
        }
        this.firstName = this.firstName.bind(this);
        this.lastName = this.lastName.bind(this);
        this.takeEmail = this.takeEmail.bind(this);
        this.takeCity = this.takeCity.bind(this);
        this.takeJobtitle = this.takeJobtitle.bind(this);
        this.takeCountry = this.takeCountry.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    };

    firstName(event){
        this.setState({firstname : event.target.value})
    }
    lastName(event){
        this.setState({lastname : event.target.value})
    }
    takeCountry(event){
        this.setState({country : event.target.value})
    }
    takeEmail(event){
        this.setState({email : event.target.value})
    }
    takeCity(event){
        this.setState({city : event.target.value})
    }
    takeJobtitle(event){
        this.setState({jobtitle : event.target.value})
    }
    

    async handleSubmit() {
        const contact = {
            first_name:  this.state.firstname,
            last_name: this.state.lastname,
            email: this.state.email,
            job_title: this.state.jobtitle,
            country: this.state.country,
            city: this.state.city,
        };
        await axios.post('/contacts', contact)
            .then(
                response => alert(JSON.stringify(response.data))
                
                )
            .catch(error => {
                console.log("ERROR:: ",error.response.data);
                return;
            });
		alert('Contact Added');

    }

    render() {
        return ( 
        <div className="contact-editor">  
            <h1 class="display-3">Add a contact</h1>
            <div>
            <div className="form-group">
                <label htmlFor="first_name">First Name:</label>
                <input type="text" className="form-control" name="first_name" onChange={this.firstName}/>
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Last Name:</label>
                <input type="text" className="form-control" name="last_name" onChange={this.lastName}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" className="form-control" name="email" onChange={this.takeEmail} />
            </div>
            <div className="form-group">
                <label htmlFor="city">City:</label>
                <input type="text" className="form-control" name="city" onChange={this.takeCity}/>
            </div>
            <div className="form-group">
                <label htmlFor="country">Country:</label>
                <input type="text" className="form-control" name="country" onChange={this.takeCountry} />
            </div>
            <div className="form-group">
                <label htmlFor="job_title">Job Title:</label>
                <input type="text" className="form-control" name="job_title" onChange={this.takeJobtitle}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} >Add contact</button>
            </div>
        </div>  
        );
    }
}

export default ContactEditor;

if (document.getElementById("home")) {
    ReactDOM.render( <ContactEditor></ContactEditor> , document.getElementById("home") );
}