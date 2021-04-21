import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview'
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';
import VideoPlayer from 'react-native-video-controls'
import data from '../appdata'

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
            <ScrollView>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>

                <View style={{ height: 40 }}></View>
                <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', }}>
                    <Text style={{ height: 17, lineHeight: 19, fontFamily: 'fantasy', fontSize: 20, fontWeight: '700' }}>{I18n.t('ProfMosheActivity.Honors')}</Text>
                </View>
                <View style={{ marginTop: 20, marginBottom: 20 }}>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14 }}>2013</Text>
                        <Text style={{ height: 20, lineHeight: 18, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('ProfMosheActivity.member')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14 }}>2011</Text>
                        <Text style={{ height: 20, lineHeight: 18, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('ProfMosheActivity.ccnp')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14 }}>2009</Text>
                        <Text style={{ height: 20, lineHeight: 18, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('ProfMosheActivity.radio')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14 }}>2009</Text>
                        <Text style={{ height: 20, lineHeight: 18, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('ProfMosheActivity.forum')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14 }}>2007</Text>
                        <Text style={{ height: 20, lineHeight: 18, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('ProfMosheActivity.pharma')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14 }}>2003</Text>
                        <Text style={{ height: 20, lineHeight: 18, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('ProfMosheActivity.honorary')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14 }}>2001</Text>
                        <Text style={{ height: 20, lineHeight: 18, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('ProfMosheActivity.list')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14 }}>1999</Text>
                        <Text style={{ height: 20, lineHeight: 18, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('ProfMosheActivity.carrie')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14 }}>1999</Text>
                        <Text style={{ height: 60, lineHeight: 30, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('ProfMosheActivity.foundation')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14 }}>1989-1995</Text>
                        <Text style={{ height: 20, lineHeight: 18, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('ProfMosheActivity.institute')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14 }}>1987</Text>
                        <Text style={{ height: 20, lineHeight: 18, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('ProfMosheActivity.scholarship')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14 }}>1984</Text>
                        <Text style={{ height: 20, lineHeight: 18, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('ProfMosheActivity.rothshiild')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14 }}>1980</Text>
                        <Text style={{ height: 20, lineHeight: 18, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('ProfMosheActivity.university')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14 }}>1980</Text>
                        <Text style={{ height: 20, lineHeight: 18, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('ProfMosheActivity.masteer')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                </View>


                <Text style={{ fontFamily: 'fantasy', fontSize: 12, textAlign: 'center' }}>@2021 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView>

        );
    }
}

