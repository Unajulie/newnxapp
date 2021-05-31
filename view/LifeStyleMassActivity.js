import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ScrollView, TouchableOpacity, Button } from 'react-native';
import { I18n } from '../locales/i18n';
import BMIChart from './BMIChart';
import { px2dp } from '../src/px2dp';

export default class LifeStyleMassActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('LifeStyleChartActivity.body'),
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
                    <View style={{ marginBottom: px2dp(30), marginTop: px2dp(30) }}>
                        <BMIChart
                            title={I18n.t('LifeStyleChartActivity.height')}
                            color={'#000'}
                            refTitle={I18n.t('LifeStyleChartActivity.source')}
                            refUrl="https://www.cdc.gov/healthyweight/index.html"
                            yAxisLabelValue={I18n.t('LifeStyleChartActivity.bmii')}
                            yAxisLabelName={I18n.t('LifeStyleChartActivity.bmii')}
                            yAxisLine="60@100"
                            max={240}
                            column={I18n.t('LifeStyleChartActivity.bmii')}
                            desc={
                                <View style={{ width: "90%", marginBottom: px2dp(30) }}>
                                    <Text style={{ fontSize: px2dp(12), fontFamily: 'fantasy' }}>
                                        <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                        <Text>{I18n.t('LifeStyleChartActivity.range')}</Text>
                                        <Text>{I18n.t('LifeStyleChartActivity.bmi')}</Text>
                                        <Text>{I18n.t('LifeStyleChartActivity.falls')}</Text>
                                        <Text>{I18n.t('LifeStyleChartActivity.your')}</Text>
                                    </Text>
                                </View>
                            }
                        />
                          <View style={{width:'100%',height:px2dp(80)}}></View>
                       <TouchableOpacity >
                            <View style={{ width: '90%', height: px2dp(40), backgroundColor: '#f7871e',borderRadius:px2dp(5), marginBottom: px2dp(20), alignSelf: 'center',justifyContent:'center' }}>
                                <Text style={{color:'#fff',textAlign:'center',}} onPress={onButtonPress}>SAVE</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        );
    }
}

