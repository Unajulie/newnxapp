import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ScrollView, TouchableOpacity, Button } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n';
import SleepStarChart from './SleepStarChart'
import data from '../appdata'
import { px2dp } from '../src/px2dp';
type Props = {};
export default class SleepChartMoodActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('LifeStyleChartActivity.affect'),
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
                <StatusBar animated={true}  hidden={true} translucent={true} barStyle={'light-content'} />
                <View style={{ width: "100%", height: px2dp(400), marginTop: px2dp(50), marginBottom: px2dp(20) }}>
                    <SleepStarChart
                        title={
                            <View style={{ width: "90%", height: px2dp(60) }}>
                                <View style={{ width: "100%", height: px2dp(10) }}></View>
                                <View style={{ alignItems: "center",marginTop:px2dp(10)}}>
                                    <Text style={{ fontSize: px2dp(18),fontFamily:'fantasy',color:'#000', }}>{I18n.t('SleepChartActivity.mood')}</Text>
                                </View>
                            </View>
                        }
                        count={4}
                        reviews={["None", "Little", "Somewhat", "Much"]}
                        yAxisLabelName={I18n.t('SleepChartActivity.score')}
                        yAxisLabelValue="affectmood"
                        column="affectmood"
                    />
                </View>
                <View style={{ height: 160 }}></View>
                <TouchableOpacity >
                    <Button title="save" onPress={onButtonPress} color="#d62e2d" />
                </TouchableOpacity>

                {/* <Text style={{ fontFamily: 'fantasy', fontSize: 12, textAlign: 'center' }}>@2021 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text> */}
            </ScrollView>

        );
    }
}

