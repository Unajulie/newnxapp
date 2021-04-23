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
export default class ProfMosheCareerActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('ProfMosheActivity.Career'),
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
                    <Text style={{ height:px2dp(17), lineHeight:px2dp(19) , fontFamily: 'fantasy', fontSize:px2dp(20), fontWeight: '700' }}>Career</Text>
                </View>
                <View style={{ marginTop: 20, marginBottom: 20 }}>
                    {/* 2007-2018 */}
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius:px2dp(15), borderColor: '#B2B2B2', paddingBottom:px2dp(20), paddingTop:px2dp(20) }} >
                        <Text style={{ height:px2dp(20), lineheight:px2dp(20), fontFamily: 'fantasy', textAlign: 'center',  }}>2007-2018</Text>
                        <Text style={{ height:px2dp(20), lineheight:px2dp(18), fontFamily: 'fantasy', paddingLeft:px2dp(10), textAlign: 'center', fontWeight: '700', height:px2dp(16) }}>{I18n.t('ProfMosheActivity.pharmacology')}</Text>
                        <Text style={{ height:px2dp(20), lineheight:px2dp(18), fontFamily: 'fantasy', textAlign: 'center', height:px2dp(16) }}>{I18n.t('ProfMosheActivity.pharmacology2')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineheight:px2dp(45), textAlign: 'center', height:px2dp(16) }}>{I18n.t('ProfMosheActivity.chairman')}</Text>
                    </View>
                    {/* 2003-2018 */}
                    <View style={{ height:px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius:px2dp(15), borderColor: '#B2B2B2', paddingBottom:px2dp(20), paddingTop:px2dp(20) }} >
                        <Text style={{ height:px2dp(20), lineheight:px2dp(20), fontFamily: 'fantasy', textAlign: 'center',  }}>2003-2018</Text>
                        <Text style={{ height:px2dp(16), lineheight:px2dp(18), fontFamily: 'fantasy', paddingLeft:px2dp(10), textAlign: 'center', fontWeight: '700', height:px2dp(16) }}>{I18n.t('ProfMosheActivity.mcgill')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineheight:px2dp(45), textAlign: 'center', height:px2dp(16) }}>{I18n.t('ProfMosheActivity.professor2')}</Text>
                    </View>
                    {/* 2000-2021 */}
                    <View style={{ height:px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius:px2dp(15), borderColor: '#B2B2B2', paddingBottom:px2dp(20), paddingTop:px2dp(20) }} >
                        <Text style={{ height:px2dp(20), lineheight:px2dp(20), fontFamily: 'fantasy', textAlign: 'center',  }}>2000-2021</Text>
                        <Text style={{ height:px2dp(16), lineheight:px2dp(18), fontFamily: 'fantasy', paddingLeft:px2dp(10), textAlign: 'center', fontWeight: '700', height:px2dp(16) }}>{I18n.t('ProfMosheActivity.department')}{I18n.t('ProfMosheActivity.themcgill')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineheight:px2dp(45), textAlign: 'center', height:px2dp(16) }}>{I18n.t('ProfMosheActivity.professor2')}</Text>
                    </View>
                    {/* 1993-2000 */}
                    <View style={{ height:px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius:px2dp(15), borderColor: '#B2B2B2', paddingBottom:px2dp(20), paddingTop:px2dp(20) }} >
                        <Text style={{ height:px2dp(20), lineheight:px2dp(20), fontFamily: 'fantasy', textAlign: 'center',  }}>1993-2000</Text>
                        <Text style={{ height:px2dp(16), lineheight:px2dp(18), fontFamily: 'fantasy', paddingLeft:px2dp(10), textAlign: 'center', fontWeight: '700', height:px2dp(16) }}>{I18n.t('ProfMosheActivity.department')}{I18n.t('ProfMosheActivity.school')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineheight:px2dp(45), textAlign: 'center', height:px2dp(16) }}>{I18n.t('ProfMosheActivity.Associate')}</Text>
                    </View>
                    {/* 1989-1993 */}
                    <View style={{ height:px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius:px2dp(15), borderColor: '#B2B2B2', paddingBottom:px2dp(20), paddingTop:px2dp(20) }} >
                        <Text style={{ height:px2dp(20), lineheight:px2dp(20), fontFamily: 'fantasy', textAlign: 'center',  }}>1989-1993</Text>
                        <Text style={{ height:px2dp(16), lineheight:px2dp(18), fontFamily: 'fantasy', paddingLeft:px2dp(10), textAlign: 'center', fontWeight: '700', height:px2dp(16) }}>{I18n.t('ProfMosheActivity.department')}{I18n.t('ProfMosheActivity.school')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineheight:px2dp(45), textAlign: 'center', height:px2dp(16) }}>{I18n.t('ProfMosheActivity.Associate')}</Text>
                    </View>

                </View>

            

            </ScrollView>

        );
    }
}

