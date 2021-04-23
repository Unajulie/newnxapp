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
            <ScrollView style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#e5e6e7' }}>
                    <View style={{ height: 120 }}></View>
                    <View style={{ backgroundColor: '#f6f7f8', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <View style={{ width: '90%', }}>
                            <Image style={{ height: 99, width: '100%', marginTop: -60, marginLeft: -60 }} resizeMode="contain" source={require("../image/icons/Shafaat-2.png")}></Image>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center', paddingTop: 20, paddingBottom: 20, borderStyle: "dashed", borderBottomWidth: 0.5 }}>
                            <Text style={{ fontSize: 18, lineHeight: 44, textAlign: 'left', color: '#0071bc', marginLeft: 20 }}>{I18n.t('ScienceteamActivity.Shafaat')}</Text>
                        </View>
                        <View style={{ height: 40 }}></View>
                        <View style={{ width: '100%' }}>
                            <View style={{ width: "90%", alignSelf: 'center', height: 500 }}>
                                <Text style={{ lineHeight: 30, alignSelf: 'center' }}>{I18n.t('ScienceteamActivity.Shafaatmsg')}</Text>
                            </View>
                        </View>

                        <View style={{ height: 60 }}></View>
                    
                    </View>
                </View>
            </ScrollView >

        );
    }
}

