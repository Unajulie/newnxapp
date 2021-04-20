import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ScrollView, TouchableOpacity, Button } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n';
import SliderLineChart from './SliderLineChart';
import data from '../appdata'

type Props = {};
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
            <ScrollView>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <View style={{ height: 40 }}></View>
                <View style={{ width: "100%", height: 465, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
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
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.adults')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 512, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
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
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.resveraltrol-recommon')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ height: 80 }}></View>
                <TouchableOpacity >
                    <Button title="save" onPress={onButtonPress} color="#f7871e" />
                </TouchableOpacity>

                {/* <Text style={{ fontFamily: 'fantasy', fontSize: 12, textAlign: 'center' }}>@2021 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text> */}
            </ScrollView>

        );
    }
}

