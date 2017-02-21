
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
    TouchableHighlight,
    TextInput,

} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    toolbar:{
        alignSelf:'stretch',
        height: 50,
        backgroundColor: 'silver',
    },
    button:{
        height:30,
        margin: 5,
        borderRadius: 3,
        backgroundColor:'#5fa38d'
    },
    buttonText:{
        fontSize: 20,
        color : '#9c225c'
    }
});

class CounterComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            value: 0
        };

        this.onIncrement = this.onIncrement.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onIncrement(){
        this.setState({
           value : this.state.value + 1
        });
    }

    onChange(text){
        this.setState({
            value : parseInt(text)
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <ToolbarAndroid style={styles.toolbar}
                    title="Counter demo"/>
                <Text>{this.state.value}</Text>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.onIncrement}>
                    <Text style={styles.buttonText}>Increment</Text>
                </TouchableHighlight>
                <TextInput value={this.state.value.toString()} onChangeText={this.onChange}/>
            </View>
        )
    };
}

export default CounterComponent;