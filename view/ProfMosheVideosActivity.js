import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview'
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';
import VideoPlayer from 'react-native-video-controls'
import data from '../appdata'

type Props = {};
export default class ProfMosheVideosActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: 'Related Videos',
        })
    }
    constructor(props) {
        super(props);
    }
    render() {
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
                
                {/* 相关影片 */}
                <View style={{ height: 20 }}></View>
                <View style={{ paddingTop: 20, paddingBottom: 20, backgroundColor: '#f0f0f0' }}>
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <Text style={{ width: '90%', height: 67, fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 67, fontWeight: 'bold' }}>{I18n.t('ProfMosheActivity.video')}</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>{I18n.t('ProfMosheActivity.o2o')}</Text>
                     
                        <VideoPlayer
                            style={{ width: "100%", height: 250, }}
                            paused={true}
                            fullscreen={true}
                            poster={'https://app.beijingepidial.com/static/images/vid1.png'} //poster必须是url从互联网访问的形式
                            source={{ uri: 'https://app.beijingepidial.com/Healthtech_O2O_Summit_Dr_Moshe_Szyf_HKG_Epitherapeutics.mp4' }}
                            navigator={this.props.navigator}
                        />
                     
                        <View style={{ height: 15 }}></View>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>{I18n.t('ProfMosheActivity.hope')}</Text>
                        <VideoPlayer
                            style={{ width: "100%", height: 250 }}
                            paused={true}
                            fullscreen={true}
                            poster={'https://app.beijingepidial.com/static/images/vid2.png'} //poster必须是url从互联网访问的形式
                            source={{ uri: 'https://app.beijingepidial.com/Keynote_Dr_Moshe_Szyf_Science_of_Hope_Conference_2017.mp4' }}
                            navigator={this.props.navigator}
                        />
                        <View style={{ height: 15 }}></View>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>{I18n.t('ProfMosheActivity.epigenetic')}</Text>
                        <VideoPlayer
                            style={{ width: "100%", height: 250 }}
                            paused={true}
                            fullscreen={true}
                            poster={'https://app.beijingepidial.com/static/images/vid3.png'} //poster必须是url从互联网访问的形式
                            source={{ uri: 'https://app.beijingepidial.com/What_is_epigenetic_and_why_knowing_it_will_change_your_life_Dr_Moshe_Szyf.mp4' }}
                            navigator={this.props.navigator}
                        />
                        <View style={{ height: 15 }}></View>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>{I18n.t('ProfMosheActivity.behavioral')}</Text>
                        <VideoPlayer
                            style={{ width: "100%", height: 250 }}
                            paused={true}
                            fullscreen={true}
                            poster={'https://app.beijingepidial.com/static/images/vid4.png'} //poster必须是url从互联网访问的形式
                            source={{ uri: 'https://app.beijingepidial.com/Moshe_Szyf_Behavioral_Epigenetics.mp4' }}
                            navigator={this.props.navigator}
                        />
                    </View>
                </View>

        
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>@2021 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView>

        );
    }
}

