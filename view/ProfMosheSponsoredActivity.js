import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview'
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';
import VideoPlayer from 'react-native-video-controls'
import data from '../appdata'
import { px2dp } from '../src/px2dp';

type Props = {};
export default class ProfMosheSponsoredActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('ProfMosheActivity.Sponsored'),
        })
    }
    constructor(props) {
        super(props);
    }
    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView style={{ flex: 1 }}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <View style={{ height:px2dp(40) }}></View>
                <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', }}>
                    <Text style={{ height:px2dp(30), lineheight:px2dp(30), fontFamily: 'fantasy', fontSize:px2dp(20), fontWeight: '700' }}>{I18n.t('ProfMosheActivity.Sponsored')}</Text>
                </View>
                <View style={{ marginTop: 20, marginBottom: 20 }}>

                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius:px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height:px2dp(22), lineheight:px2dp(22), fontFamily: 'fantasy', textAlign: 'center', fontSize:px2dp(14) }}>2010-2013</Text>
                        <Text style={{ height:px2dp(30), lineheight:px2dp(30), fontFamily: 'fantasy', paddingLeft: 10, textAlign: 'center', fontWeight: '700', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.halth')}</Text>
                        <Text style={{ height:px2dp(40), lineheight:px2dp(20), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.team')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineheight:px2dp(45), textAlign: 'center', fontSize: px2dp(16) }}>C$166,666</Text>
                    </View>
                    <View style={{ height:px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius:px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height:px2dp(22), lineheight:px2dp(22), fontFamily: 'fantasy', textAlign: 'center', fontSize:px2dp(14) }}>2007-2012</Text>
                        <Text style={{ height:px2dp(36), lineheight:px2dp(30), fontFamily: 'fantasy', paddingLeft: 10, textAlign: 'center', fontWeight: '700', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.cancer')}{I18n.t('ProfMosheActivity.analysis')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineheight:px2dp(45), textAlign: 'center', fontSize: px2dp(16) }}>C$141,000</Text>
                    </View>
                    <View style={{ height:px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius:px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height:px2dp(22), lineheight:px2dp(22), fontFamily: 'fantasy', textAlign: 'center', fontSize:px2dp(14) }}>2005-2010</Text>
                        <Text style={{ height: 60, lineheight:px2dp(30), fontFamily: 'fantasy', paddingLeft: 10, textAlign: 'center', fontWeight: '700', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.health')}{I18n.t('ProfMosheActivity.prospect')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineheight:px2dp(45), textAlign: 'center', fontSize: px2dp(16) }}>C$168,158</Text>
                    </View>
                    <View style={{ height:px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius:px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height:px2dp(22), lineheight:px2dp(22), fontFamily: 'fantasy', textAlign: 'center', fontSize:px2dp(14) }}>1997-2000</Text>
                        <Text style={{ height:px2dp(36), lineheight:px2dp(30), fontFamily: 'fantasy', paddingLeft: 10, textAlign: 'center', fontWeight: '700', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.natural')}{I18n.t('ProfMosheActivity.science')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineheight:px2dp(45), textAlign: 'center', fontSize: px2dp(16) }}>C$145,500</Text>
                    </View>
                    <View style={{ height:px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius:px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height:px2dp(22), lineheight:px2dp(22), fontFamily: 'fantasy', textAlign: 'center', fontSize:px2dp(14) }}>1989-1992</Text>
                        <Text style={{ height:px2dp(36), lineheight:px2dp(30), fontFamily: 'fantasy', paddingLeft: 10, textAlign: 'center', fontWeight: '700', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.inst')}{I18n.t('ProfMosheActivity.school')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineheight:px2dp(45), textAlign: 'center', fontSize: px2dp(16) }}>C$74,592/year</Text>
                    </View>
                    <View style={{ height:px2dp(20) }}></View>

                </View>



            </ScrollView>

        );
    }
}

