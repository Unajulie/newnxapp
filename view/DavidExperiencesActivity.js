import React, { Component } from 'react';
import {StyleSheet, StatusBar, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { WebView } from 'react-native-webview';
import {TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';


export default class DavidExperiencesActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title:  I18n.t('DavidActivity.professional'),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView style={{flex:1}}>
                <StatusBar animated={true} hidden={true}  translucent={true} barStyle={'light-content'} />
                {/* <View>
                    <Text style={{ width: '90%', height:px2dp(67) , alignSelf: 'center', fontFamily: 'fantasy', fontSize:px2dp(28) , lineheight:px2dp(67) , fontWeight: 'bold' }}>{I18n.t('DavidActivity.professional')}</Text>
                </View> */}
                <View style={{ marginTop: px2dp(30), marginBottom:px2dp(30)  }}>
                     {/* 2017-now */}
                     <View style={{ width: '90%', justifyContent:'center',alignSelf:'center',borderWidth:1,borderRadius:15,borderColor:'#B2B2B2',paddingBottom:20,paddingTop:20 }} >
                        <Text style={{  height:px2dp(22) , lineheight:px2dp(22) , fontFamily: 'fantasy', textAlign: 'center',fontSize:px2dp(14) }}>2017-now</Text>  
                        <Text style={{  height:px2dp(20) , lineheight:px2dp(20) , fontFamily: 'fantasy', paddingLeft: 10, textAlign: 'center',fontWeight:'700',fontSize:px2dp(16)  }}>{I18n.t('DavidActivity.hong')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineheight:px2dp(45) ,textAlign: 'center',fontSize:px2dp(16)  }}>{I18n.t('DavidActivity.senior')}</Text>
                    </View>
                    <View style={{ height:px2dp(20)  }}></View>
                    {/* 2016-now */}
                    <View style={{ width: '90%', justifyContent:'center',alignSelf:'center',borderWidth:1,borderRadius:15,borderColor:'#B2B2B2',paddingBottom:20,paddingTop:20 }} >
                        <Text style={{  height:px2dp(22) , lineheight:px2dp(22) , fontFamily: 'fantasy', textAlign: 'center',fontSize:px2dp(14) }}>2016-now</Text>  
                        <Text style={{  height:px2dp(20) , lineheight:px2dp(18) , fontFamily: 'fantasy', paddingLeft: 10, textAlign: 'center',fontWeight:'700',fontSize:px2dp(16)  }}>{I18n.t('DavidActivity.montreal')}</Text>
                        <Text style={{ height:px2dp(20),lineheight:px2dp(18) , fontFamily: 'fantasy', textAlign: 'center',fontSize:px2dp(16)  }}>{I18n.t('DavidActivity.canada')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineheight:px2dp(45) ,textAlign: 'center',fontSize:px2dp(16)  }}>{I18n.t('DavidActivity.founder')}</Text>
                    </View>
                    <View style={{ height:px2dp(20)  }}></View>
                    {/* 2016-2017 */}
                    <View style={{ width: '90%', justifyContent:'center',alignSelf:'center',borderWidth:1,borderRadius:15,borderColor:'#B2B2B2',paddingBottom:20,paddingTop:20 }} >
                        <Text style={{  height:px2dp(22) , lineheight:px2dp(22) , fontFamily: 'fantasy', textAlign: 'center',fontSize:px2dp(14) }}>2016-2017</Text>  
                        <Text style={{  height:px2dp(20) , lineheight:px2dp(18) , fontFamily: 'fantasy', paddingLeft: 10, textAlign: 'center',fontWeight:'700',fontSize:px2dp(16)  }}>{I18n.t('DavidActivity.department')}</Text>
                        <Text style={{ height:px2dp(20),lineheight:px2dp(18) , fontFamily: 'fantasy', textAlign: 'center',fontSize:px2dp(16)  }}>{I18n.t('DavidActivity.mcgill')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineheight:px2dp(45) ,textAlign: 'center',fontSize:px2dp(16)  }}>{I18n.t('DavidActivity.research')}</Text>
                    </View>
                    <View style={{ height:px2dp(20)  }}></View>
                     {/* 2011-2016 */}
                     <View style={{ width: '90%', justifyContent:'center',alignSelf:'center',borderWidth:1,borderRadius:15,borderColor:'#B2B2B2',paddingBottom:20,paddingTop:20 }} >
                        <Text style={{  height:px2dp(22) , lineheight:px2dp(22) , fontFamily: 'fantasy', textAlign: 'center',fontSize:px2dp(14) }}>2011-2016</Text>  
                        <Text style={{  height:px2dp(20) , lineheight:px2dp(18) , fontFamily: 'fantasy', paddingLeft: 10, textAlign: 'center',fontWeight:'700',fontSize:px2dp(16)  }}>{I18n.t('DavidActivity.department')}</Text>
                        <Text style={{ height:px2dp(20),lineheight:px2dp(18) , fontFamily: 'fantasy', textAlign: 'center',fontSize:px2dp(16)  }}>{I18n.t('DavidActivity.university')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineheight:px2dp(45) ,textAlign: 'center',fontSize:px2dp(16)  }}>{I18n.t('DavidActivity.fellowed')}</Text>
                    </View>
                    <View style={{ height:px2dp(20)  }}></View>
                    {/* 2011-2016 */}
                    <View style={{ width: '90%', justifyContent:'center',alignSelf:'center',borderWidth:1,borderRadius:15,borderColor:'#B2B2B2',paddingBottom:20,paddingTop:20 }} >
                        <Text style={{  height:px2dp(22) , lineheight:px2dp(22) , fontFamily: 'fantasy', textAlign: 'center',fontSize:px2dp(14) }}>2004-2011</Text>  
                        <Text style={{  height:px2dp(20) , lineheight:px2dp(18) , fontFamily: 'fantasy', paddingLeft: 10, textAlign: 'center',fontWeight:'700',fontSize:px2dp(16)  }}>{I18n.t('DavidActivity.hebrew')}</Text>
                        <Text style={{ height:px2dp(20),lineheight:px2dp(18) , fontFamily: 'fantasy', textAlign: 'center',fontSize:px2dp(16)  }}>{I18n.t('DavidActivity.school')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineheight:px2dp(45) ,textAlign: 'center',fontSize:px2dp(16)  }}>{I18n.t('DavidActivity.assistant')}</Text>
                    </View>
                    <View style={{ height:px2dp(20)  }}></View>
                </View>

                
                
            </ScrollView >

        );
    }
}

