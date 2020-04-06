import React, {Component} from 'react';
import './TodoListItem.scss';

class TodoListItem extends Component {

    // state = {
    //     done: false,
    //     important: false
    // };

    // onLabelClick = () => {
    //     this.setState(({done}) => {
    //         return {
    //             done: !done
    //         }
    //     });
    // };
    //
    // onMarkImportant = () => {
    //     this.setState((state) => {
    //         return {
    //             important: !state.important
    //         }
    //     });
    // };

    render(){

        const {label, onDeleted, onToogleImportant, onToogleDone, done, important} = this.props;

        let classNames = 'todo-list-item';

        if(done){
            classNames += ' done';
        }

        if(important){
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span onClick={ onToogleDone } className="todo-list-item-label">
                    {label}
                </span>
                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToogleImportant}
                >
                    <i className="fa fa-exclamation"/>
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}
                >
                    <i className="fas fa-trash"/>
                </button>
            </span>
        );
    };

}

export default TodoListItem;