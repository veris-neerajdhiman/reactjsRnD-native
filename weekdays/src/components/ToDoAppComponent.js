import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,

} from 'react-native';
import ToDoList from './ToDoListComponent';
import AddTodoList from './ToDoComponent';

class ToDoAppComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todolist : []
        };

        this.done =this.done.bind(this);
    }

    done(todo){
           this.state.todolist.push(todo);

        this.setState({
           todolist: this.state.todolist
        });
    }

    render() {
        return (
            <View>
                <AddTodoList  done={this.done}/>
                <Text>ToDoList : </Text>
                <ToDoList todos={this.state.todolist}/>
            </View>
        );
    }
}


export default ToDoAppComponent;
