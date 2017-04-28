/**
 * Created by nelon on 17-4-25.
 */


import React, {
    Component
} from "react";

import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";
import Input from "./Input";
import List from "./List";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    }
});


class Greet extends Component {
    render() {
        return (
            <Text style={{
                backgroundColor: 'skyblue'
            }}>{this.props.name}</Text>
        )
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text style={{backgroundColor: 'powderblue'}}>{display}</Text>
        );
    }
}

class Root extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        const innerStyle = StyleSheet.create({
            image: {
                height: 110,
                backgroundColor: 'slateblue'
            }
        });

        return (
            <View style={styles.root}>
                <Image source={pic} style={innerStyle.image}/>
                <Greet name="apple"/>
                <Blink text='I love to blink'/>
                <Input/>
                <List/>
            </View>
        )
    }
}

export default Root;