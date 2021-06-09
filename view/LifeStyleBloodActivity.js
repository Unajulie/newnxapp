import React, { Component } from 'react';
import { StatusBar, Text, View, Alert, ScrollView, TouchableOpacity, Button } from 'react-native';
import { I18n } from '../locales/i18n';
import SliderLineChart from './SliderLineChart';
import { px2dp } from '../src/px2dp';
export default class LifeStyleBloodActivity extends Component<Props> {
    static navigationOptions = () => {
        return ({
            title: I18n.t('LifeStyleChartActivity.pressure'),
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
                    <SliderLineChart
                        index={2}
                        title={I18n.t('LifeStyleChartActivity.systolic')}
                        refTitle={I18n.t('LifeStyleChartActivity.american')}
                        refUrl="https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings"
                        max={240}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="systolicBP"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.mmhg')}
                        yAxisLine="60@100"
                        column="systolicBP"
                        gradient={[["50%", "green", "120"], ["4.2%", "yellow", ""], ["4.2%", "#FFB233", ""], ["17%", "#CD5C5C", "180"], ["24.6%", "red", "240"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: px2dp(12), fontFamily: 'fantasy' }}>
                                    <Text style={{ fontWeight: "bold", fontFamily: 'fantasy' }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.bloods')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: px2dp(10), backgroundColor: "#efefef" }}></View>
                <View style={{ width: "100%", height: px2dp(400), marginTop: px2dp(20), marginBottom: px2dp(20) }}>
                    <View style={{ height: px2dp(30), width: '100%' }}></View>
                    <SliderLineChart
                        index={2}
                        title={I18n.t('LifeStyleChartActivity.diastolic')}
                        max={px2dp(160)}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="diastolicBP"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.mmhg')}
                        yAxisLine="80@180"
                        column="diastolicBP"
                        gradient={[["50%", "green", "80"], ["6.2%", "yellow", ""], ["6.2%", "#FFB233", ""], ["12.4%", "#CD5C5C", "120"], ["25.2%", "red", "160"]]}

                    />
                </View>
                <View style={{ width: '100%', height: px2dp(60) }}></View>
                <TouchableOpacity >
                    <View style={{ width: '90%', height: px2dp(40), backgroundColor: '#f7871e', borderRadius: px2dp(5), marginBottom: px2dp(20), alignSelf: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', textAlign: 'center', }} onPress={onButtonPress}>SAVE</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

        );
    }
}

