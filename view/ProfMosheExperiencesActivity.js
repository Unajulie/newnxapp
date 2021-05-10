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
            <ScrollView style={{ flex: 1 }}>
                <StatusBar animated={true} hidden={true}  translucent={true} barStyle={'light-content'} />
                {/* 专业履历 */}
                <View style={{ paddingBottom: px2dp(30), marginTop: px2dp(30) }}>
                    {/* <View>
                        <Text style={{ width: '90%', height: px2dp(50), alignSelf: 'center', fontFamily: 'fantasy', fontSize: px2dp(22), fontWeight: 'bold' }}>{I18n.t('ProfMosheActivity.experiences')}</Text>
                    </View> */}
                    <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', marginTop: px2dp(10), marginBottom: px2dp(10) }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.pioneer')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: px2dp(10), marginBottom: px2dp(10) }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: px2dp(16), }}>{I18n.t('ProfMosheActivity.inventor')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: px2dp(10), marginBottom: px2dp(10) }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.patent')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: px2dp(10), marginBottom: px2dp(10) }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.founder')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: px2dp(10), marginBottom: px2dp(10) }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.thought')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: px2dp(10), marginBottom: px2dp(10) }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.fellow')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: px2dp(10), marginBottom: px2dp(10) }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.canadian')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: px2dp(10), marginBottom: px2dp(10) }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.professor')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: px2dp(10), marginBottom: px2dp(10) }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.resident')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: px2dp(10), marginBottom: px2dp(10) }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>●</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.director')}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }
}

