import React, { Component } from 'react';
import { StatusBar, Text, View, Alert, ScrollView, TouchableOpacity, Button } from 'react-native';
import { I18n } from '../locales/i18n';
import SliderLineChart from './SliderLineChart';
import { px2dp } from '../src/px2dp';
export default class LifeStyleCholesterolActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('LifeStyleChartActivity.Cholesterol'),
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
                <View style={{ width: "100%", height: px2dp(400), marginTop: px2dp(20), marginBottom: px2dp(50) }}>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.cholesterol')}
                        refTitle={I18n.t('LifeStyleChartActivity.american')}
                        refUrl="https://www.heart.org/en/health-topics/cholesterol/about-cholesterol/what-your-cholesterol-levels-mean"
                        max={400}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="cholesterol"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.mg')}
                        column="cholesterol"
                        gradient={[["50%", "green", "200"], ["10%", "#FFB233", "240"], ["40%", "red", "400"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: px2dp(12),fontFamily:'fantasy' }}>
                                    <Text style={{ fontWeight: "bold",fontFamily:'fantasy' }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.adults')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%",  height: px2dp(400), marginTop: px2dp(20), marginBottom: px2dp(20) }}>
                    <View style={{ width: "100%", height: px2dp(10),marginBottom:px2dp(30), backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                    index={3}
                        title={I18n.t('LifeStyleChartActivity.resveratrol')}
                        refTitle={I18n.t('LifeStyleChartActivity.drug')}
                        refUrl="https://www.drugs.com/npp/resveratrol.html"
                        max={5000}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="resveratrol"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.mg1')}
                        column="resveratrol"
                        yAxisLine="70@450"
                        gradient={[["100%", "green", "5000"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: px2dp(12),fontFamily:'fantasy' }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.resveraltrol-recommon')}
                                </Text>
                            </View>
                        }
                    />
                    </View>
                    <View style={{width:'100%',height:px2dp(160)}}></View>
                <TouchableOpacity >
                            <View style={{ width: '90%', height: px2dp(40), backgroundColor: '#f7871e',borderRadius:px2dp(5), marginBottom: px2dp(20), alignSelf: 'center',justifyContent:'center' }}>
                                <Text style={{color:'#fff',textAlign:'center',}} onPress={onButtonPress}>SAVE</Text>
                            </View>
                        </TouchableOpacity>
            </ScrollView>
            </View>
        );
    }
}

