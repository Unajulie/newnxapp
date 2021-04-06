import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview';
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';

export default class ShafaatActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('ScienceteamActivity.Shafaat'),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                <View style={{ backgroundColor: '#0383DE' }}>
                    <View style={{ height: 120 }}></View>
                    <View style={{ backgroundColor: '#F0F0F0', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <View style={{ width: '90%', }}>
                            <Image style={{ height: 99, width: '100%', marginTop: -60, marginLeft: -60 }} resizeMode="contain" source={require("../image/icons/Shafaat-2.png")}></Image>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center', paddingTop: 20, paddingBottom: 20, borderStyle: "dashed", borderBottomWidth: 0.5 }}>
                            <Text style={{ fontSize: 18, lineHeight: 44, textAlign: 'left', color: '#0071bc', marginLeft: 20 }}>{I18n.t('ScienceteamActivity.Shafaat')}</Text>
                        </View>
                        <View style={{ height: 40 }}></View>
                        <View style={{ width: '100%' }}>
                            <View style={{ width: "90%", alignSelf: 'center', height: 300 }}>
                                <Text style={{  lineHeight: 40, alignSelf: 'center' }}>{I18n.t('ScienceteamActivity.Shafaatmsg')}</Text>
                            </View>
                        </View>

                        <View style={{height:60}}></View>
                        <Text style={{  fontSize: 12, textAlign: 'center' }}>{I18n.t('ZhiyuanActivity.reserved')}</Text>
                    </View>
                </View>
            </ScrollView >

        );
    }
}

