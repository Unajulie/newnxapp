import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ScrollView, TouchableOpacity, Button } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n';
import SleepStarChart from './SleepStarChart'
import data from '../appdata'

type Props = {};
export default class SleepChartAbilityActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: 'Affect Ability',
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
                <View style={{ width: "100%", height: 435, marginTop: 23, marginBottom: 23 }}>
                    <SleepStarChart
                        title={
                            <View style={{ width: "90%", height: 80 }}>
                                <View style={{ width: "100%", height: 10 }}></View>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ fontSize: 18 }}>{I18n.t('SleepChartActivity.productivity')}</Text>
                                </View>
                            </View>
                        }
                        count={4}
                        reviews={["None", "Little", "Somewhat", "Much"]}
                        yAxisLabelName={I18n.t('SleepChartActivity.score')}
                        yAxisLabelValue="affectability"
                        column="affectability"
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

