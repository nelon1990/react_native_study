/**
 * Created by nelon on 17-4-25.
 */

import React, {Component} from 'react'

import {
    View,
    Text,
    TextInput
} from 'react-native'

class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: '--------------'
        }
    }

    render() {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'stretch'
            }}>
                <Text style={{
                    alignSelf: 'center'
                }}>{this.state.input}</Text>
                <TextInput
                    onChangeText={text => {
                        this.handleTextChange(text)
                    }}
                    placeholder='type sth'
                />
            </View>
        )
    }

    handleTextChange(text) {
        this.setState({
            input: text
        });
    }
}


export default Input