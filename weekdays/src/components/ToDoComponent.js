import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight

} from 'react-native';

const style = StyleSheet.create({
   button : {
       backgroundColor: "#0d9ca9",
       height: 20
   },
    buttonText: {
       color : "#000"
    }
});

class ToDoComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            newToDo : '',
        };

        this.TempStoreNewToDo = this.TempStoreNewToDo.bind(this);
        this.SaveTodo = this.SaveTodo.bind(this);

    }

    TempStoreNewToDo(text){
        this.setState({
                newToDo : text
            });
    }

    SaveTodo(){
        this.props.done(this.state.newToDo);
        this.setState({
            newToDo : ''
        });
    }

    render() {
        return (
            <View>
                <TextInput  value={this.state.newToDo} onChangeText={this.TempStoreNewToDo}/>
                <TouchableHighlight style={style.button} onPress={this.SaveTodo}>
                    <Text>Add ToDo</Text>
                </TouchableHighlight>
            </View>
        );
    }
}


export default ToDoComponent;
