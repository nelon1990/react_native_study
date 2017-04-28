/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import Root from "./app/root";

export default class react_native_study extends Component {
    render() {
        return (
            <Root/>
        );
    }
}

AppRegistry.registerComponent('react_native_study', () => react_native_study);
