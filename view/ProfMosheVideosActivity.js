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
export default class ProfMosheVideosActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('ProfMosheActivity.video'),
        })
    }
    constructor(props) {
        super(props);
    }
    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView style={{ flex: 1 }}>
                <StatusBar animated={true} hidden={true}  translucent={true} barStyle={'light-content'} />
                {/* 相关影片 */}
                <View style={{ paddingTop:px2dp(20) , paddingBottom:px2dp(20) , backgroundColor: '#f0f0f0' }}>
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        {/* <Text style={{ width: '90%', height:px2dp(67), fontFamily: 'fantasy', fontSize:px2dp(18), lineheight:px2dp(67), fontWeight: 'bold' }}>{I18n.t('ProfMosheActivity.video')}</Text> */}
                        <Text style={{ fontFamily: 'fantasy', fontSize:px2dp(16) }}>{I18n.t('ProfMosheActivity.o2o')}</Text>

                        <VideoPlayer
                            style={{ width: "100%", height:px2dp(250), }}
                            paused={true}
                            fullscreen={true}
                            poster={'https://app.beijingepidial.com/static/images/vid1.png'} //poster必须是url从互联网访问的形式
                            source={{ uri: 'https://app.beijingepidial.com/Healthtech_O2O_Summit_Dr_Moshe_Szyf_HKG_Epitherapeutics.mp4' }}
                            navigator={this.props.navigator}
                        />

                        <View style={{ height: px2dp(15) }}></View>
                        <Text style={{ fontFamily: 'fantasy', fontSize:px2dp(16) }}>{I18n.t('ProfMosheActivity.hope')}</Text>
                        <VideoPlayer
                            style={{ width: "100%", height:px2dp(250) }}
                            paused={true}
                            fullscreen={true}
                            poster={'https://app.beijingepidial.com/static/images/vid2.png'} //poster必须是url从互联网访问的形式
                            source={{ uri: 'https://app.beijingepidial.com/Keynote_Dr_Moshe_Szyf_Science_of_Hope_Conference_2017.mp4' }}
                            navigator={this.props.navigator}
                        />
                        <View style={{ height: px2dp(15) }}></View>
                        <Text style={{ fontFamily: 'fantasy', fontSize:px2dp(16) }}>{I18n.t('ProfMosheActivity.epigenetic')}</Text>
                        <VideoPlayer
                            style={{ width: "100%", height:px2dp(250) }}
                            paused={true}
                            fullscreen={true}
                            poster={'https://app.beijingepidial.com/static/images/vid3.png'} //poster必须是url从互联网访问的形式
                            source={{ uri: 'https://app.beijingepidial.com/What_is_epigenetic_and_why_knowing_it_will_change_your_life_Dr_Moshe_Szyf.mp4' }}
                            navigator={this.props.navigator}
                        />
                        <View style={{ height: px2dp(15) }}></View>
                        <Text style={{ fontFamily: 'fantasy', fontSize:px2dp(16) }}>{I18n.t('ProfMosheActivity.behavioral')}</Text>
                        <VideoPlayer
                            style={{ width: "100%", height:px2dp(250) }}
                            paused={true}
                            fullscreen={true}
                            poster={'https://app.beijingepidial.com/static/images/vid4.png'} //poster必须是url从互联网访问的形式
                            source={{ uri: 'https://app.beijingepidial.com/Moshe_Szyf_Behavioral_Epigenetics.mp4' }}
                            navigator={this.props.navigator}
                        />
                    </View>
                </View>



            </ScrollView>

        );
    }
}

