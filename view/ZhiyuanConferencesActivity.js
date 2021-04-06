import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview';
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';

// const FirstRoute = () => (

// );

// const SecondRoute = () => (

// );
// const styles = StyleSheet.create({
//     scene: {
//         flex: 1,
//     },
// });
type Props = {};
export default class ZhiyuanConferencesActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ZhiyuanActivity.conferences"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>

                <View>
                    <Text style={{ width: '90%', height: 67, alignSelf: 'center', fontFamily: 'fantasy', fontSize: 28, lineHeight: 67, fontWeight: 'bold' }}>{I18n.t('ZhiyuanActivity.conferences')}</Text>
                </View>

                {/* conferences */}
                <View style={{ marginTop: 20, marginBottom: 20 }}>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: 16 }}>●</Text><Text style={{ width: '76%', fontFamily: 'FontAwesome', lineHeight: 21, marginBottom: 18 }}>{I18n.t('ZhiyuanActivity.society')}
                                <Text style={{ width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.newusa')}</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: 16 }}>●</Text><Text style={{ width: '76%', fontFamily: 'FontAwesome', lineHeight: 21, marginBottom: 18 }}>{I18n.t('ZhiyuanActivity.third')}
                                <Text style={{ width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.atlanta')}</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: 16 }}>●</Text><Text style={{ width: '76%', fontFamily: 'FontAwesome', lineHeight: 21, marginBottom: 18 }}>{I18n.t('ZhiyuanActivity.seminar')}
                                <Text style={{ width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.atlanta')}</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: 16 }}>●</Text><Text style={{ width: '76%', fontFamily: 'FontAwesome', lineHeight: 21, marginBottom: 18 }}>{I18n.t('ZhiyuanActivity.georgina')}
                                <Text style={{ width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.atlanta')}</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: 16 }}>●</Text><Text style={{ width: '76%', fontFamily: 'FontAwesome', lineHeight: 21, marginBottom: 18 }}>{I18n.t('ZhiyuanActivity.symposium')}
                                <Text style={{ width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.china')}</Text></Text>
                        </View>
                    </View>


                </View>

                <View style={{ height: 60 }}></View>
                <Text style={{ fontFamily: 'fantasy', fontSize: 12, textAlign: 'center' }}>{I18n.t('ZhiyuanActivity.reserved')}</Text>
            </ScrollView >

        );
    }
}

