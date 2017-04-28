/**
 * Created by nelon on 17-4-28.
 */
//http://platform.sina.com.cn/sports_all/client_api?app_key=3571367214&_sport_t_=football&_sport_s_=opta&_sport_a_=teamOrder&type=213&season=2014&format=json

import React, {
    Component
} from 'react';
import {
    View,
    Button,
    TouchableHighlight,
    ToastAndroid,
    StyleSheet, Text
} from 'react-native'
import TeamList from "./TeamList";

const style = StyleSheet.create({
    mainStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {year: 2017}
    }

    _onButtonPress(year) {
        ToastAndroid.show(year, ToastAndroid.SHORT);
        console.log("year =>>>>>>>>>>>>>> " + year);
        this.setState((prev) => {
            return {
                year: year
            }
        });
    };

    render() {
        return (
            <View style={style.mainStyle}>
                <Text style={
                    {
                        backgroundColor: 'skyblue'
                    }
                }>
                    中超排名
                </Text>
                <TeamList year={this.state.year}/>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'stretch'
                }}>
                    <Button
                        style={{
                            flex: 1
                        }}
                        title="2015"
                        onPress={this._onButtonPress.bind(this, '2015')}/>
                    <Button
                        style={{
                            flex: 1
                        }}
                        title="2016"
                        onPress={this._onButtonPress.bind(this, '2016')}/>
                    <Button
                        style={{
                            flex: 1
                        }}
                        title="2017"
                        onPress={this._onButtonPress.bind(this, '2017')}/>
                </View>
            </View>
        );
    }
}

export default Main;