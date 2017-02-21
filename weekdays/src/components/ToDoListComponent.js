import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView

} from 'react-native';

class ToDoListComponent extends React.Component {
    constructor(props) {

        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    }

    render() {
        // debugger;

        return (
            <View>
                <Text>{this.props.todos}</Text>
                <Text>----</Text>
                <ListView
                    dataSource={this.ds.cloneWithRows(this.props.todos)}
                    renderRow={(rowData) => <Text>{rowData}</Text>}/>
            </View>
        );
    }
}


export default ToDoListComponent;
