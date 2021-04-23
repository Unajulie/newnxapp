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
export default class ProfMosheExperiencesActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('ProfMosheActivity.experiences'),
        })
    }
    constructor(props) {
        super(props);
    }
    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView style={{flex:1}}>
                 <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                {/* 专业履历 */}
                <View style={{ paddingBottom: 20 }}>
                    <View>
                        <Text style={{ width: '90%', height:px2dp(67) , alignSelf: 'center', fontFamily: 'fantasy', fontSize:px2dp(28), lineHeight:px2dp(67) , fontWeight: 'bold' }}>{I18n.t('ProfMosheActivity.experiences')}</Text>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>{I18n.t('ProfMosheActivity.pioneer')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize:px2dp(16), }}>{I18n.t('ProfMosheActivity.inventor')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>{I18n.t('ProfMosheActivity.patent')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>{I18n.t('ProfMosheActivity.founder')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>{I18n.t('ProfMosheActivity.thought')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>{I18n.t('ProfMosheActivity.fellow')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>{I18n.t('ProfMosheActivity.canadian')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>{I18n.t('ProfMosheActivity.professor')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>{I18n.t('ProfMosheActivity.resident')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize:px2dp(16) }}>{I18n.t('ProfMosheActivity.director')}</Text>
                        </View>
                    </View>
                </View>
               
        
               
            </ScrollView>

        );
    }
}

