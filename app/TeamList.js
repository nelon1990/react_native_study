/**
 * Created by nelon on 17-4-28.
 */
//noinspection JSUnresolvedVariable
import React, {
    Component
} from 'react';

//noinspection JSUnresolvedVariable
import {
    View,
    Text,
    ListView
} from 'react-native'

import TeamItem from './TeamItem';

const url = 'http://platform.sina.com.cn/sports_all/client_api?app_key=3571367214&_sport_t_=football&_sport_s_=opta&_sport_a_=teamOrder&type=213&season=2017&format=json';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class TeamList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            year: props.year,
            dataSource: ds.cloneWithRows([...''])
        };

        console.log(props.year);
    }



    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        const url = 'http://platform.sina.com.cn/sports_all/client_api?app_key=3571367214&_sport_t_=football&_sport_s_=opta&_sport_a_=teamOrder&type=213&season=' + this.state.year + '&format=json';
        console.log("this.state.year >>>>>>>>>>>>>>>> " + this.state.year);
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState((prev) => {
                    return {
                        dataSource: prev.dataSource.cloneWithRows(json.result.data)
                    }
                });
            })
            .catch(err => {
                console.error(err)
            })
            .done()
    }

    _renderRow = (rowData) => {
        return (
            <TeamItem
                teamLogo={rowData.logo}
                teamCNName={rowData.team_cn}
                teamOrder={rowData.team_order}
                teamWin={rowData.win}
                teamLose={rowData.lose}/>
        )
    };

    _renderSeparator(sectionID, rowID) {
        return (
            <View style={{
                height: 1,
                backgroundColor: 'darkgray'
            }}/>
        )
    }

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <ListView dataSource={this.state.dataSource}
                          renderRow={(rowData) => {
                              return this._renderRow(rowData)
                          }}
                          renderSeparator={(sectionID, rowID) => {
                              return this._renderSeparator(sectionID, rowID);
                          }}
                          enableEmptySections={true}/>
            </View>
        )
    }


}

export default TeamList;