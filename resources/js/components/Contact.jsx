import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Editor extends Component {

    constructor(props) {
        super(props);
		/* parse function doesn't accept spaces, comma etc
		   some restrictions need to be done on db attributes
		   to be able to parse correctly the contact object 
		*/
		let contact = {
            first_name:  '',
            last_name: '',
            email: '',
            job_title: '',
            country: '',
            city: '',
        };

		if (props?.contact) {
			contact = JSON.parse(props?.contact);
		}
	
        this.state = {
            firstname : contact.first_name,
            lastname : contact.last_name,
            email : contact.email,
            city : contact.city,
            country: contact.country,
            jobtitle : contact.job_title,
        }
		this.mode = props?.mode;
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
		if (this.mode) {
			this.handleUpdateSubmit();
		} else {
			this.handleAddSubmit();
		}
	}

	setTitle() {
		if (this.mode) {
			return 'Update contact';
		} else {
			return 'Add new contact';
		}
	}

	async handleAddSubmit() {
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

    async handleUpdateSubmit() {
        const contact = {
            first_name:  this.state.firstname,
            last_name: this.state.lastname,
            email: this.state.email,
            job_title: this.state.jobtitle,
            country: this.state.country,
            city: this.state.city,
        };

        await axios.put('/contacts/' + JSON.parse(this.props.contact).id, contact
            )
                .then(
                    response => alert(JSON.stringify(response.data))
                
                    )
                .catch(error => {
                    console.log("ERROR:: ",error.response.data);
                    return;
                });
        alert('Contact Updated');


    }

    render() {
        return ( 
        <div className="contact-editor">
            <h1 className="display-3">
                <div><a href="/contacts">Go back</a></div>
                {this.setTitle()}
            </h1>
            <div>
            <div className="form-group">
                <label htmlFor="first_name">First Name:</label>
                <input type="text" className="form-control" name="first_name" value={this.state.firstname} onChange={this.firstName}/>
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Last Name:</label>
                <input type="text" className="form-control" name="last_name" value={this.state.lastname} onChange={this.lastName}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.takeEmail} />
            </div>
            <div className="form-group">
                <label htmlFor="city">City:</label>
                <input type="text" className="form-control" name="city" value={this.state.city} onChange={this.takeCity}/>
            </div>
            <div className="form-group">
                <label htmlFor="country">Country:</label>
                <input type="text" className="form-control" name="country" value={this.state.country} onChange={this.takeCountry} />
            </div>
            <div className="form-group">
                <label htmlFor="job_title">Job Title:</label>
                <input type="text" className="form-control" name="job_title" value={this.state.jobtitle} onChange={this.takeJobtitle}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>{this.setTitle()}</button>
            </div>
    </div>
        );
    }
}

export default Editor;
