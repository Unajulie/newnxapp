import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ScrollView, TouchableOpacity, Button } from 'react-native';
import { I18n } from '../locales/i18n';
import SliderLineChart from './SliderLineChart';
import { px2dp } from '../src/px2dp';

export default class LifeStyleHeartActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('LifeStyleChartActivity.hearts'),
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
                    <View style={{ width: "100%", marginTop: px2dp(30), marginBottom: px2dp(30) }}>
                        <SliderLineChart
                        index={1}
                            title={I18n.t('LifeStyleChartActivity.heart')}
                            refTitle={I18n.t('LifeStyleChartActivity.american')}
                            refUrl="https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/all-about-heart-rate-pulse"
                            min={0}
                            max={240}
                            sliderDefualtValue={60}
                            yAxisLabelValue="heartrate"
                            yAxisLabelName={I18n.t('LifeStyleChartActivity.beats')}
                            yAxisLine="60@100"
                            column="heartrate"
                            gradient={[["30%", "green", "72"], ["30%", "#FFB233", "144"], ["40%", "red", "240"]]}
                            desc={
                                <View style={{ width: "90%", }}>
                                    <Text style={{ fontSize: px2dp(12), fontFamily: 'fantasy' }}>
                                        <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                        {I18n.t('LifeStyleChartActivity.resting')}
                                        {I18n.t('LifeStyleChartActivity.ill')}
                                        {I18n.t('LifeStyleChartActivity.hearting')}
                                    </Text>
                                </View>
                            }
                        />
                </View>
                <View style={{width:'100%',height:px2dp(100)}}></View>
                        <TouchableOpacity >
                            <View style={{ width: '90%', height: px2dp(40), backgroundColor: '#f7871e',borderRadius:px2dp(5), marginBottom: px2dp(20),  alignSelf: 'center',justifyContent:'center' }}>
                                <Text style={{color:'#fff',textAlign:'center',}} onPress={onButtonPress}>SAVE</Text>
                            </View>
                        </TouchableOpacity>
                </ScrollView>
        );
    }
}

