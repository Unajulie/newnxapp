import React, { Component } from 'react';
import { StatusBar, Text, View, Alert, ScrollView, TouchableOpacity, Button } from 'react-native';
import { I18n } from '../locales/i18n';
import McGillChart from "./McGillChart"
import { px2dp } from '../src/px2dp';

export default class McGillChartBurningActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('McGillChartActivity.hotburning'),
        })
    }
    constructor(props) {
        super(props);
    }
    render() {
        const onButtonPress = () => {
            Alert.alert(I18n.t('LifeStyleChartActivity.savedata'));
        };
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
               <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                <View style={{ width: "100%", height: px2dp(400), marginTop: px2dp(20), marginBottom: px2dp(20) }}>
                    <McGillChart
                        title={I18n.t('McGillChartActivity.hotburning')}
                        yAxisLabelName={I18n.t('McGillChartActivity.score')}
                        yAxisLabelValue="burning"
                        column="burning"
                    />
                </View>
                <View style={{width:'100%',height:px2dp(80)}}></View>
                <TouchableOpacity >
                    <View style={{ width: '90%', height: px2dp(40), backgroundColor: '#d62e2d', borderRadius: px2dp(5), marginBottom: px2dp(20), alignSelf: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', textAlign: 'center', }} onPress={onButtonPress}>SAVE</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

        );
    }
}

