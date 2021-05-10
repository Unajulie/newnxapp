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
//     <View style={{ width: '90%', alignSelf: 'center', marginTop:px2dp() 20, marginBottom:px2dp() 20 }}>
//         <View style={{ height:px2dp() 20 }}></View>
//         <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 67, lineheight:px2dp() 21 }}>
//         {I18n.t('ZhiyuanActivity.society')}
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.newusa')}</Text>
//         </Text>
//         <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 88, lineheight:px2dp() 21 }}>
//         {I18n.t('ZhiyuanActivity.third')}
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.atlanta')}</Text>
//         </Text>
//         <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 67, lineheight:px2dp() 21 }}>
//         {I18n.t('ZhiyuanActivity.seminar')}
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.atlanta')}</Text>
//         </Text>
//         <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 67, lineheight:px2dp() 21 }}>
//         {I18n.t('ZhiyuanActivity.georgina')}
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.atlanta')}</Text>
//         </Text>
//         <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 67, lineheight:px2dp() 21 }}>
//         {I18n.t('ZhiyuanActivity.symposium')}
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.china')}</Text>
//         </Text>
//     </View>
// );
// const styles = StyleSheet.create({
//     scene: {
//         flex: 1,
//     },
// });
export default class ZhiyuanHonorsActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ZhiyuanActivity.honors"),
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
                    <Text style={{ width: '90%', height:px2dp(67) , alignSelf: 'center', fontFamily: 'fantasy', fontSize:px2dp(28) , lineheight:px2dp(67) , fontWeight: 'bold' }}>{I18n.t('ZhiyuanActivity.honors')}</Text>
                </View> */}

                {/* honors */}
                <View style={{ marginTop:px2dp(30) , marginBottom:px2dp(30)  }}>

                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth:px2dp(1) , borderRadius:px2dp(15) , borderColor: '#B2B2B2', paddingBottom:px2dp(20) , paddingTop:px2dp(20) }} >
                        <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontStyle: 'italic', fontFamily: 'FontAwesome' ,textAlign: 'center', fontSize:px2dp(14) ,fontWeight: '700', }}>{I18n.t('ZhiyuanActivity.trainee')}</Text>
                        <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontFamily: 'fantasy', textAlign: 'center', fontSize:px2dp(16)  }}>{I18n.t('ZhiyuanActivity.american')}</Text>
                    </View>
                    
                    <View style={{ height:px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth:px2dp(1) , borderRadius:px2dp(15) , borderColor: '#B2B2B2', paddingBottom:px2dp(20) , paddingTop:px2dp(20)}} >
                        <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontStyle: 'italic', fontFamily: 'FontAwesome' ,textAlign: 'center', fontSize:px2dp(14) ,fontWeight: '700', }}>{I18n.t('ZhiyuanActivity.scholarship')}</Text>
                        <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontFamily: 'fantasy', textAlign: 'center', fontSize:px2dp(16)  }}>{I18n.t('ZhiyuanActivity.council')}</Text>
                    </View>
                    <View style={{ height:px2dp(20)  }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth:px2dp(1) , borderRadius:px2dp(15) , borderColor: '#B2B2B2', paddingBottom:px2dp(20) , paddingTop:px2dp(20) }} >
                        <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontStyle: 'italic', fontFamily: 'FontAwesome' ,textAlign: 'center', fontSize:px2dp(14) ,fontWeight: '700', }}>{I18n.t('ZhiyuanActivity.journals')}</Text>
                        <Text style={{ height:px2dp(30) , lineheight:px2dp(30) , fontFamily: 'fantasy', textAlign: 'center', fontSize:px2dp(16)  }}>{I18n.t('ZhiyuanActivity.biochemistry')}</Text>
                        <Text style={{ height:px2dp(30) , lineheight:px2dp(30) , fontFamily: 'fantasy', textAlign: 'center', fontSize:px2dp(16) }}>{I18n.t('ZhiyuanActivity.annuals')}</Text>
                        <Text style={{ height:px2dp(30) , lineheight:px2dp(30) , fontFamily: 'fantasy', textAlign: 'center', fontSize:px2dp(16)  }}>{I18n.t('ZhiyuanActivity.cellular')}</Text>
                        <Text style={{ height:px2dp(60) , lineheight:px2dp(30) , fontFamily: 'fantasy', textAlign: 'center', fontSize:px2dp(16)  }}>{I18n.t('ZhiyuanActivity.journal')}</Text>
                    </View>
                    <View style={{ height:px2dp(20)  }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth:px2dp(1) , borderRadius:px2dp(15) , borderColor: '#B2B2B2', paddingBottom:px2dp(20) , paddingTop:px2dp(20) }} >
                        <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontStyle: 'italic', fontFamily: 'FontAwesome' ,textAlign: 'center', fontSize:px2dp(14) ,fontWeight: '700', }}>{I18n.t('ZhiyuanActivity.board')}</Text>
                        <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontFamily: 'fantasy', textAlign: 'center', fontSize:px2dp(16)  }}>{I18n.t('ZhiyuanActivity.journal')}</Text>
                    </View>
  
                </View>

                <View style={{ height:px2dp(20)  }}></View>
               
            </ScrollView >

        );
    }
}

