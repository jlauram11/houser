import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: []
        }
    }

    handleNameChange = (event, value) => {
        this.setState({
            name: event.target.value,
        })
    } 

    handleAddressChange = (event, value) => {
        this.setState({
            address: event.target.value,
        })
    }

    handleCityChange = (event, value) => {
        this.setState({
            city: event.target.value,
        })
    }

    handleStateChange = (event, value) => {
        this.setState({
            state: event.target.value,
        })
    }

    handleZipChange = (event, value) => {
        this.setState({
            zipcode: event.target.value,
        })
    }

    render () {
        return (
            <div>
                <input placeholder='Property Name' onChange={this.handleNameChange}/>
                <input placeholder='Address' onChange={this.handleAddressChange}/>
                <input placeholder='City' onChange={this.handleCityChange}/>
                <input placeholder='State' onChange={this.handleStateChange}/>
                <input placeholder='Zipcode' onChange={this.handleZipChange}/>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
            </div>
        )
    }
}

export default Wizard;