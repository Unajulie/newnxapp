import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview';
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';

// const FirstRoute = () => (

// );

// const SecondRoute = () => (

// );
// const styles = StyleSheet.create({
//     scene: {
//         flex: 1,
//     },
// });
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
            <ScrollView style={{flex:1}}>
                {/* <View>
                    <Text style={{ width: '90%', height:px2dp(67) , alignSelf: 'center', fontFamily: 'fantasy', fontSize:px2dp(28) , lineheight:px2dp(67) , fontWeight: 'bold' }}>{I18n.t('ZhiyuanActivity.conferences')}</Text>
                </View> */}

                {/* conferences */}
                <View style={{ marginTop:px2dp(30) , marginBottom:px2dp(30)  }}>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop:px2dp(20) , justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16)  }}>●</Text><Text style={{ width: '76%', fontFamily: 'FontAwesome', lineheight:px2dp(21) , marginBottom:px2dp(18) }}>{I18n.t('ZhiyuanActivity.society')}
                                <Text style={{ width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.newusa')}</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop:px2dp(20) , justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16)  }}>●</Text><Text style={{ width: '76%', fontFamily: 'FontAwesome', lineheight:px2dp(21) , marginBottom:px2dp(18)  }}>{I18n.t('ZhiyuanActivity.third')}
                                <Text style={{ width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.atlanta')}</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop:px2dp(20) , justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16)  }}>●</Text><Text style={{ width: '76%', fontFamily: 'FontAwesome', lineheight:px2dp(21) , marginBottom:px2dp(18)  }}>{I18n.t('ZhiyuanActivity.seminar')}
                                <Text style={{ width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.atlanta')}</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop:px2dp(20) , justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16)  }}>●</Text><Text style={{ width: '76%', fontFamily: 'FontAwesome', lineheight:px2dp(21) , marginBottom:px2dp(18)  }}>{I18n.t('ZhiyuanActivity.georgina')}
                                <Text style={{ width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.atlanta')}</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop:px2dp(20) , justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16)  }}>●</Text><Text style={{ width: '76%', fontFamily: 'FontAwesome', lineheight:px2dp(21) , marginBottom:px2dp(18)  }}>{I18n.t('ZhiyuanActivity.symposium')}
                                <Text style={{ width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.china')}</Text></Text>
                        </View>
                    </View>


                </View>

                <View style={{ height:px2dp(60)  }}></View>
            </ScrollView >

        );
    }
}

