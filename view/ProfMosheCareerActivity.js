import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview'
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';
import VideoPlayer from 'react-native-video-controls'
import data from '../appdata'

type Props = {};
export default class ProfMosheCareerActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: 'Career',
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
                <View style={{height:40}}></View>
                <View style={{ width: '90%', justifyContent:'center',alignSelf:'center',}}>
                    <Text style={{  height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light',fontSize:20,fontWeight:'700' }}>Career</Text>  
                </View>
                <View style={{ marginTop: 20, marginBottom: 20 }}>
                    {/* 2007-2018 */}
                    <View style={{ width: '90%', justifyContent:'center',alignSelf:'center',borderWidth:1,borderRadius:15,borderColor:'#B2B2B2',paddingBottom:20,paddingTop:20 }} >
                        <Text style={{  height: 22, lineHeight: 22, fontFamily: 'NotoSansHans-Light', textAlign: 'center',fontSize:14 }}>2007-2018</Text>  
                        <Text style={{  height: 20, lineHeight: 18, fontFamily: 'NotoSansHans-Light', paddingLeft: 10, textAlign: 'center',fontWeight:'700',fontSize:16  }}>{I18n.t('ProfMosheActivity.pharmacology')}</Text>
                        <Text style={{ height:20,lineHeight: 18, fontFamily: 'NotoSansHans-Light', textAlign: 'center',fontSize:16  }}>{I18n.t('ProfMosheActivity.pharmacology2')}</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#676A74', lineHeight: 45,textAlign: 'center',fontSize:16  }}>{I18n.t('ProfMosheActivity.chairman')}</Text>
                    </View>
                    {/* 2003-2018 */}
                    <View style={{height:20}}></View>
                    <View style={{ width: '90%', justifyContent:'center',alignSelf:'center',borderWidth:1,borderRadius:15,borderColor:'#B2B2B2',paddingBottom:20,paddingTop:20 }} >
                        <Text style={{  height: 22, lineHeight: 22, fontFamily: 'NotoSansHans-Light', textAlign: 'center',fontSize:14 }}>2003-2018</Text>  
                        <Text style={{  height: 16, lineHeight: 18, fontFamily: 'NotoSansHans-Light', paddingLeft: 10, textAlign: 'center',fontWeight:'700',fontSize:16  }}>{I18n.t('ProfMosheActivity.mcgill')}</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#676A74', lineHeight: 45,textAlign: 'center',fontSize:16  }}>{I18n.t('ProfMosheActivity.professor2')}</Text>
                    </View>
                    {/* 2000-2021 */}
                    <View style={{height:20}}></View>
                    <View style={{ width: '90%', justifyContent:'center',alignSelf:'center',borderWidth:1,borderRadius:15,borderColor:'#B2B2B2',paddingBottom:20,paddingTop:20 }} >
                        <Text style={{  height: 22, lineHeight: 22, fontFamily: 'NotoSansHans-Light', textAlign: 'center',fontSize:14 }}>2000-2021</Text>  
                        <Text style={{  height: 16, lineHeight: 18, fontFamily: 'NotoSansHans-Light', paddingLeft: 10, textAlign: 'center',fontWeight:'700',fontSize:16  }}>{I18n.t('ProfMosheActivity.department')}{I18n.t('ProfMosheActivity.themcgill')}</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#676A74', lineHeight: 45,textAlign: 'center',fontSize:16  }}>{I18n.t('ProfMosheActivity.professor2')}</Text>
                    </View>
                     {/* 1993-2000 */}
                     <View style={{height:20}}></View>
                    <View style={{ width: '90%', justifyContent:'center',alignSelf:'center',borderWidth:1,borderRadius:15,borderColor:'#B2B2B2',paddingBottom:20,paddingTop:20 }} >
                        <Text style={{  height: 22, lineHeight: 22, fontFamily: 'NotoSansHans-Light', textAlign: 'center',fontSize:14 }}>1993-2000</Text>  
                        <Text style={{  height: 16, lineHeight: 18, fontFamily: 'NotoSansHans-Light', paddingLeft: 10, textAlign: 'center',fontWeight:'700',fontSize:16  }}>{I18n.t('ProfMosheActivity.department')}{I18n.t('ProfMosheActivity.school')}</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#676A74', lineHeight: 45,textAlign: 'center',fontSize:16  }}>{I18n.t('ProfMosheActivity.Associate')}</Text>
                    </View>
                     {/* 1989-1993 */}
                    <View style={{height:20}}></View>
                    <View style={{ width: '90%', justifyContent:'center',alignSelf:'center',borderWidth:1,borderRadius:15,borderColor:'#B2B2B2',paddingBottom:20,paddingTop:20 }} >
                        <Text style={{  height: 22, lineHeight: 22, fontFamily: 'NotoSansHans-Light', textAlign: 'center',fontSize:14 }}>1989-1993</Text>  
                        <Text style={{  height: 16, lineHeight: 18, fontFamily: 'NotoSansHans-Light', paddingLeft: 10, textAlign: 'center',fontWeight:'700',fontSize:16  }}>{I18n.t('ProfMosheActivity.department')}{I18n.t('ProfMosheActivity.school')}</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#676A74', lineHeight: 45,textAlign: 'center',fontSize:16  }}>{I18n.t('ProfMosheActivity.Associate')}</Text>
                    </View>
         
                </View>

                {/* 三个页面切换TabView */}
                {/* <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: FirstRoute,
                        second: SecondRoute,
                        Third: ThirddRoute,
                    })}
                    onIndexChange={index => this.setState({ index })}

                    initialLayout={{ width: Dimensions.get('window').width }}
                    style={{ height: 667, }}
                /> */}

                {/* 荣誉 */}

                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>@2021 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView>

        );
    }
}

