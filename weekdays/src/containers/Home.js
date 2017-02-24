import React, {Component} from 'react';
import { connect } from 'react-redux';


import {
    ScrollView,
    View,
    TextInput,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);

        // this.searchPressed = this.searchPressed.bind(this);
    }

    searchPressed(){
        this.props.actions.fetchRecipes("champagne, ginger, ice, vodka");
    }

    render() {
        return (
            <View>
                <View>
                    <TouchableHighlight onPress={() => this.searchPressed()}>
                        <Text> Fetch recipes</Text>
                    </TouchableHighlight>
                    <ScrollView>

                    </ScrollView>
                </View>
            </View>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        searchedRecipes: state.searchedRecipes
    };
}

export default connect(mapStateToProps)(Home);
