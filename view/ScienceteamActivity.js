import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Image, ScrollView, TouchableOpacity, navigate } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';
type Props = {};
export default class ScienceteamActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ScienceteamActivity.title"),
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
                <View style={{ marginTop: px2dp(20), marginBottom: px2dp(20) }}>
                    <Text style={{ height: px2dp(40), width: '100%', fontSize: px2dp(20), lineHeight: px2dp(40), fontWeight: 'bold', fontFamily: 'fantasy', marginLeft: px2dp(15), color: '#000', }}>Seience Team
                    </Text>
                </View>
                {/* moshe */}
                <TouchableOpacity onPress={() => this.navigate.push("Moshe")} >
                    <View style={{ width: '90%', height: px2dp(100),marginBottom:px2dp(20), alignSelf: 'center', flexDirection: 'row', borderRadius: px2dp(15), borderWidth: px2dp(1.5), borderColor: '#e5e6e7' }}>
                        <View style={{ width: '30%', justifyContent: 'center' }}>
                            <Image style={{ height: px2dp(80), width: '100%', margin: px2dp(3), borderRadius: px2dp(15) }} resizeMode='contain' source={require("../image/icons/prof1.png")}></Image>
                        </View>
                        <View style={{ width: '60%', fontFamily: 'fantasy', marginLeft: '3%', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', width: "100%", }}>
                                <Text style={{ height: px2dp(30),height:px2dp(30),lineHeight:px2dp(30),fontWeight:'bold', fontFamily: 'fantasy', fontSize: px2dp(16), color: '#000' }}>{I18n.t('ScienceteamActivity.moshe')}</Text>
                                <View style={{ width:'25%',height:px2dp(20),marginTop:px2dp(2), marginLeft:px2dp(5), borderRadius: px2dp(5), backgroundColor: '#edeeef',alignSelf:'center' }}>
                                    <Text style={{textAlign:'center'}}>Prof</Text>
                                </View>
                            </View>
                            <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(14),color:'#000' }}>{I18n.t('ScienceteamActivity.ceo')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(12), fontStyle: 'italic' }}>{I18n.t('ScienceteamActivity.hkg')}</Text>
                        </View>
                        <View style={{ width: '10%', height: px2dp(100), justifyContent: 'center' }}>
                            <Image style={{ height: px2dp(15), width: px2dp(15), }} source={require('../image/right-arr.png')} resizeMode='contain' />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigate.push("David")} >
                    <View style={{ width: '90%', height: px2dp(100),marginBottom:px2dp(20), alignSelf: 'center', flexDirection: 'row', borderRadius: px2dp(15), borderWidth: px2dp(1.5), borderColor: '#e5e6e7' }}>
                        <View style={{ width: '30%', justifyContent: 'center' }}>
                            <Image style={{ height: px2dp(80), width: '100%', margin: px2dp(3), borderRadius: px2dp(15) }} resizeMode='contain' source={require("../image/icons/david1.png")}></Image>
                        </View>
                        <View style={{ width: '60%', fontFamily: 'fantasy', marginLeft: '3%', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', width: "100%", }}>
                                <Text style={{ height: px2dp(30),height:px2dp(30),lineHeight:px2dp(30),fontWeight:'bold', fontFamily: 'fantasy', fontSize: px2dp(16), color: '#000' }}>{I18n.t('ScienceteamActivity.david')}</Text>
                                <View style={{ width:'25%',height:px2dp(20),marginTop:px2dp(2), marginLeft:px2dp(5), borderRadius: px2dp(5), backgroundColor: '#edeeef',alignSelf:'center' }}>
                                    <Text style={{textAlign:'center'}}>Ph.D.</Text>
                                </View>
                            </View>
                            <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(14),color:'#000' }}>{I18n.t('ScienceteamActivity.davidtitle')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(12), fontStyle: 'italic' }}>{I18n.t('ScienceteamActivity.hkg')}</Text>
                        </View>
                        <View style={{ width: '10%', height: px2dp(100), justifyContent: 'center' }}>
                            <Image style={{ height: px2dp(15), width: px2dp(15), }} source={require('../image/right-arr.png')} resizeMode='contain' />
                        </View>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => this.navigate.push("Chifat")} >
                    <View style={{ width: '90%', height: px2dp(100),marginBottom:px2dp(20), alignSelf: 'center', flexDirection: 'row', borderRadius: px2dp(15), borderWidth: px2dp(1.5), borderColor: '#e5e6e7' }}>
                        <View style={{ width: '30%', justifyContent: 'center' }}>
                            <Image style={{ height: px2dp(80), width: '100%', margin: px2dp(3), borderRadius: px2dp(15) }} resizeMode='contain' source={require("../image/icons/chifat1.png")}></Image>
                        </View>
                        <View style={{ width: '60%', fontFamily: 'fantasy', marginLeft: '3%', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', width: "100%", }}>
                                <Text style={{ height: px2dp(30),height:px2dp(30),lineHeight:px2dp(30),fontWeight:'bold', fontFamily: 'fantasy', fontSize: px2dp(16), color: '#000' }}>{I18n.t('ScienceteamActivity.chifat')}</Text>
                                <View style={{ width:'25%',height:px2dp(20),marginTop:px2dp(2), marginLeft:px2dp(5), borderRadius: px2dp(5), backgroundColor: '#edeeef',alignSelf:'center' }}>
                                    <Text style={{textAlign:'center'}}>Ph.D.</Text>
                                </View>
                            </View>
                            <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(14),color:'#000' }}>{I18n.t('ScienceteamActivity.chifattitle')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(12), fontStyle: 'italic' }}>{I18n.t('ScienceteamActivity.hkg')}</Text>
                        </View>
                        <View style={{ width: '10%', height: px2dp(100), justifyContent: 'center' }}>
                            <Image style={{ height: px2dp(15), width: px2dp(15), }} source={require('../image/right-arr.png')} resizeMode='contain' />
                        </View>
                    </View>
                </TouchableOpacity> */}
                {/* <TouchableOpacity onPress={() => this.navigate.push("Zhiyuan")} >
                    <View style={{ width: '90%', height: px2dp(100),marginBottom:px2dp(20), alignSelf: 'center', flexDirection: 'row', borderRadius: px2dp(15), borderWidth: px2dp(1.5), borderColor: '#e5e6e7' }}>
                        <View style={{ width: '30%', justifyContent: 'center',borderRadius: px2dp(15)  }}>
                            <Image style={{ height: px2dp(80), width: '100%', margin: px2dp(3), borderRadius: px2dp(15) }} resizeMode='contain' source={require("../image/icons/jason1.png")}></Image>
                        </View>
                        <View style={{ width: '60%', fontFamily: 'fantasy', marginLeft: '3%', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', width: "100%", }}>
                                <Text style={{ height: px2dp(30),height:px2dp(30),lineHeight:px2dp(30),fontWeight:'bold', fontFamily: 'fantasy', fontSize: px2dp(16), color: '#000' }}>{I18n.t('ScienceteamActivity.zhiyuan')}</Text>
                                <View style={{ width:'25%',height:px2dp(20),marginTop:px2dp(2), marginLeft:px2dp(5), borderRadius: px2dp(5), backgroundColor: '#edeeef',alignSelf:'center' }}>
                                    <Text style={{textAlign:'center'}}>Ph.D.</Text>
                                </View>
                            </View>
                            <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(14),color:'#000' }}>{I18n.t('ScienceteamActivity.zhiyuantitle')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(12), fontStyle: 'italic' }}>{I18n.t('ScienceteamActivity.hkg')}</Text>
                        </View>
                        <View style={{ width: '10%', height: px2dp(100), justifyContent: 'center' }}>
                            <Image style={{ height: px2dp(15), width: px2dp(15), }} source={require('../image/right-arr.png')} resizeMode='contain' />
                        </View>
                    </View>
                </TouchableOpacity> */}
                <View style={{ height: px2dp(40), marginTop: px2dp(10), width: '90%', alignSelf: 'center' }}>
                    <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(16),color:'#000', fontWeight: 'bold' }}>Scientific Advisory Board</Text>
                </View>
                <TouchableOpacity onPress={() => this.navigate.push("ShafaatActivity")} >
                    <View style={{ width: '90%', height: px2dp(100),marginBottom:px2dp(20), alignSelf: 'center', flexDirection: 'row', borderRadius: px2dp(15), borderWidth: px2dp(1.5), borderColor: '#e5e6e7' }}>
                        <View style={{ width: '30%', justifyContent: 'center' }}>
                            <Image style={{ height: px2dp(80), width: '100%', margin: px2dp(3), borderRadius: px2dp(15) }} resizeMode='contain' source={require("../image/icons/Shafaat-1.jpg")}></Image>
                        </View>
                        <View style={{ width: '60%', fontFamily: 'fantasy', marginLeft: '3%', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', width: "100%", }}>
                                <Text style={{ height: px2dp(30),height:px2dp(30),lineHeight:px2dp(30),fontWeight:'bold', fontFamily: 'fantasy', fontSize: px2dp(16), color: '#000' }}>{I18n.t('ScienceteamActivity.Shafaat')}</Text>
                                <View style={{ width:'25%',height:px2dp(20),marginTop:px2dp(2), marginLeft:px2dp(5), borderRadius: px2dp(5), backgroundColor: '#edeeef',alignSelf:'center' }}>
                                    <Text style={{textAlign:'center'}}>Prof</Text>
                                </View>
                            </View>
                            <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(14),color:'#000' }}>{I18n.t('ScienceteamActivity.Shafaat')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(12), fontStyle: 'italic' }}>{I18n.t('ScienceteamActivity.hkg')}</Text>
                        </View>
                        <View style={{ width: '10%', height: px2dp(100), justifyContent: 'center' }}>
                            <Image style={{ height: px2dp(15), width: px2dp(15), }} source={require('../image/right-arr.png')} resizeMode='contain' />
                        </View>
                    </View>
                </TouchableOpacity>
                <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(12),marginTop:px2dp(20),marginBottom:px2dp(20), textAlign: 'center' }}>{I18n.t('TabHomeActivity.allright')}</Text>
            </ScrollView>
        );
    }
}

