import { Component } from 'react';

import './SearchPanel.css'

class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return(
            <div className="search-panel">
                <span>looking for</span>
                <input type="text" 
                    placeholder="start typing here"
                    value={this.state.term}
                    onChange={this.onUpdateSearch} />
            </div>
        )
    }

}

export default SearchPanel;