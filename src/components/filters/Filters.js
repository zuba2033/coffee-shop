import { Component } from 'react';

import './Filters.css'

class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterValue: ''
        }
    }

    onUpdateFilter = (e) => {
        let filterValue = e.target.dataset.filter;
        this.setState({filterValue});
        this.props.onUpdateFilter(filterValue);
    }


    render() { 

        const buttonsData = [
            { name: 'all', label: 'All'},
            { name: 'brazil', label: 'Brazil'},
            { name: 'kenya', label: 'Kenya'},
            { name: 'colombia', label: 'Colombia'}
        ]
       
        const buttons = buttonsData.map(({name, label}) => {
            const active = this.props.filterValue === name;
            return (
                <button onClick={this.onUpdateFilter}
                        data-filter={name}
                        className={active ? 'filters-item filters-item_active' : 'filters-item '}
                        type="button" >
                {label}
                </button>
            )
        })

        
        return (
            <div  className="filters">
                <span>or filter</span>
                {buttons}
            </div>
        );
    }

}

export default Filters;