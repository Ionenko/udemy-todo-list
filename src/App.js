import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';

import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import SearchPanel from './components/SearchPanel/SearchPanel';
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from "./components/ItemAddForm/ItemAddForm";

class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
            this.createTodoItem('Drink vodka')
        ],
        term: '',
        filter: 'all'
    };

    createTodoItem(label){
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        console.log('add item', text);

        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArray
            }
        })
    };

    toogleProperty(arr, id, propName){
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };

        return  [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToogleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toogleProperty(todoData, id, 'important')
            }
        });
    };

    onToogleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toogleProperty(todoData, id, 'done')
            }
        });
    };

    search(items, term){
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    filter(items, filter){
        switch(filter){
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    onSearchChange = (term) => {
        this.setState({
            term
        });
    };

    onFilterChange = (filter) => {
        this.setState({
            filter
        });
    };

    render() {

        const {todoData, term, filter} = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter);

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <div className="todo-app">
                    <AppHeader toDo={todoCount} done={doneCount}/>

                    <div className="top-panel d-flex">
                        <SearchPanel onSearchChange={this.onSearchChange}/>
                        <ItemStatusFilter onFilterChange={this.onFilterChange} filter={filter}/>
                    </div>
                    <TodoList
                        todos = {visibleItems}
                        onDeleted={this.deleteItem}
                        onToogleImportant={this.onToogleImportant}
                        onToogleDone={this.onToogleDone}
                    />
                    <ItemAddForm addItem={this.addItem}/>
                </div>
            </div>
        );
    }
}

export default App;
