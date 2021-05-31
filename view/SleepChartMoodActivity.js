import React, { Component } from 'react';
import { StatusBar, Text, View, Alert, ScrollView, TouchableOpacity, Button } from 'react-native';
import { I18n } from '../locales/i18n';
import SleepStarChart from './SleepStarChart'
import { px2dp } from '../src/px2dp';
export default class SleepChartMoodActivity extends Component<Props> {
    static navigationOptions = () => {
        return ({
            title: I18n.t('SleepChartActivity.affect'),
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
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                    <View style={{ width: "100%", height: px2dp(400), marginTop: px2dp(20), marginBottom: px2dp(20) }}>
                        <SleepStarChart
                            title={
                                <View style={{ width: "90%", marginTop: px2dp(20), marginBottom: px2dp(20) }}>
                                    <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', color: '#000', }}>{I18n.t('SleepChartActivity.mood')}</Text>
                                </View>
                            }
                            reviews={["None", "Little", "Somewhat", "Much"]}
                            yAxisLabelName={I18n.t('SleepChartActivity.score')}
                            yAxisLabelValue="affectmood"
                            column="affectmood"
                        />
                    </View>
                    <View style={{ width: '100%', height: px2dp(80) }}></View>
                    <TouchableOpacity >
                        <View style={{ width: '90%', height: px2dp(40), backgroundColor: '#d62e2d', borderRadius: px2dp(5), marginBottom: px2dp(20), alignSelf: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#fff', textAlign: 'center', }} onPress={onButtonPress}>SAVE</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

