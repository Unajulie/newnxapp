import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ScrollView, TouchableOpacity, Button } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n';
import SliderLineChart from './SliderLineChart';
import data from '../appdata'

type Props = {};
export default class LifeStyleMeditationActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('LifeStyleChartActivity.Meditation'),
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
                <View style={{ width: "100%", height: 480, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10,}}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.meditation')}
                        refTitle={I18n.t('LifeStyleChartActivity.mayo')}
                        refUrl="https://www.mayoclinic.org/tests-procedures/meditation/in-depth/meditation/art-20045858"
                        max={16}
                        min={0}
                        sliderDefualtValue={5}
                        yAxisLabelValue="meditation"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.unit')}
                        column="meditation"
                        gradient={[["50%", "green", "8"], ["25%", "#FFB233", "12"], ["25%", "red", "16"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.most')}
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

