import React, {Component} from 'react';
import './ItemStatusFilter.scss';

class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'ALL'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    render() {

        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const buttonClass = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    key={name}
                    onClick={() => onFilterChange(name)}
                    type="button"
                    className={`btn ${buttonClass}`}
                >
                    {label}
                </button>
            );
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

export default ItemStatusFilter;