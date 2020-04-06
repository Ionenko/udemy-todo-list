import React, {Component} from 'react';
import "./ItemAddForm.scss";

class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
           label:  event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
           label: ''
        });
    };

    render(){
        const {addItem} = this.props;

        return (
            <form className="ItemAddForm d-flex" onSubmit={this.onSubmit}>
                <input type="text" className="form-control" value={this.state.label} onChange={this.onLabelChange} placeholder="What needs to be done ?"/>
                <button className="btn btn-outline-secondary"> Add Item </button>
            </form>
        );
    }
}

export default ItemAddForm;