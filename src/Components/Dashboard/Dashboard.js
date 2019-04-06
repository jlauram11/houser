import React, {Component} from 'react';
import axios from 'axios';
import House from '../House/House';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor () {
        super();

        this.state = {
            houses: []
        }
    }

    componentDidMount(props) {
        this.getHouses();
    }

    getHouses = () => {
        axios.get('/api/houses').then(response => {
            this.setState({
                houses: response.data,
            })
        })
    }
    
    render () {
        const mappedHouses = this.state.houses.map((house, id) => (
                <House />
        ))

        return (
            <div>
                <p>Dashboard</p>
                {mappedHouses}
                <Link to="/wizard">
                    <button>Add New Property</button>
                </Link>
            </div>
        )
    }
}

export default Dashboard;