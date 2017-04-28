/**
 * Created by nelon on 17-4-28.
 */

import React, {
    Component
} from 'react'

import {
    View,
    Text,
    Image,
    Dimensions
} from 'react-native'

class TeamItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            teamLogo: props.teamLogo,
            teamCNName: props.teamCNName,
            teamOrder: props.teamOrder,
            teamWin: props.teamWin,
            teamLose: props.teamLose,
        }
    }

    render() {
        return (
            <View style={{
                width: Dimensions.get('window').width,
                height: 100,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <Image source={{uri: this.state.teamLogo}} style={{
                    width: 80,
                    height: 80
                }}/>
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Text>{this.state.teamCNName + "   " + "排名: " + this.state.teamOrder}</Text>
                    <Text>{"胜: " + this.state.teamWin + "   " + "败: " + this.state.teamLose}</Text>
                </View>
            </View>
        );
    }
}

export default TeamItem;