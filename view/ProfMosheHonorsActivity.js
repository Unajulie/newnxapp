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
export default class ProfMosheHonorsActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('ProfMosheActivity.Honors'),
        })
    }
    constructor(props) {
        super(props);
    }
    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView style={{ flex: 1 }}>
                <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                {/* <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', }}>
                    <Text style={{ height: px2dp(26), lineheight: px2dp(26), fontFamily: 'fantasy', fontSize: px2dp(20), fontWeight: '700' }}>{I18n.t('ProfMosheActivity.Honors')}</Text>
                </View> */}
                <View style={{ marginTop: px2dp(30), marginBottom: px2dp(30) }}>
                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: px2dp(30), lineheight: px2dp(30), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>2013</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(18), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.member')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: px2dp(30), lineheight: px2dp(30), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>2011</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(18), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.ccnp')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: px2dp(30), lineheight: px2dp(30), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>2009</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(18), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.radio')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: px2dp(30), lineheight: px2dp(30), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>2009</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(18), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.forum')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: px2dp(30), lineheight: px2dp(30), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>2007</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(18), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.pharma')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: px2dp(30), lineheight: px2dp(30), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>2003</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(18), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.honorary')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: px2dp(30), lineheight: px2dp(30), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>2001</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(18), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.list')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: px2dp(30), lineheight: px2dp(30), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>1999</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(18), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.carrie')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: px2dp(30), lineheight: px2dp(30), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>1999</Text>
                        <Text style={{ height: 60, lineheight: px2dp(30), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.foundation')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: px2dp(30), lineheight: px2dp(30), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>1989-1995</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(18), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.institute')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: px2dp(30), lineheight: px2dp(30), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>1987</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(18), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.scholarship')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: px2dp(30), lineheight: px2dp(30), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>1984</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(18), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.rothshiild')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: px2dp(30), lineheight: px2dp(30), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>1980</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(18), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.university')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: px2dp(15), borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: px2dp(30), lineheight: px2dp(30), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>1980</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(18), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ProfMosheActivity.masteer')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                </View>



            </ScrollView>

        );
    }
}

