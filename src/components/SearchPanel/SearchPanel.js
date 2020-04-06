import React, {Component} from 'react';
import './SearchPanel.scss';

class SearchPanel extends Component {
    state = {
        term: ''
    };

    onSearchChange = (event) => {
        const term = event.target.value;
        this.setState({
            term
        });

        this.props.onSearchChange(term);
    };

    render(){
        return <input type="text"
                      onChange={this.onSearchChange}
                      value={this.state.term}
                      className="form-control search-input"
                      placeholder="search"/>
    }
}

export default SearchPanel;