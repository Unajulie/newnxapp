import React, { Component } from 'react';

import { Platform, StatusBar, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, navigate } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { px2dp } from '../src/px2dp';
import { I18n } from '../locales/i18n';
export default class TabAboutActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("TabAboutActivity.title"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                    {/* 公司简介  改版*/}
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(40) }}>
                        {/* company introduction */}
                        <TouchableOpacity onPress={() => this.navigate.push("Company")}>
                            <View style={{ borderRadius: px2dp(15), height: px2dp(90), flexDirection: 'row', marginBottom: px2dp(20), borderWidth: px2dp(1.5), backgroundColor: '#ffffff', borderColor: '#b6b7b8', borderStyle: 'solid', }}>
                                <View style={{ width: '25%', justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: px2dp(60), }} source={require('../image/icons/about1.png')} resizeMode='contain' />
                                </View>
                                <View style={{ width: '65%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: px2dp(18), textAlign: 'left', fontWeight: 'bold', color: '#000000', fontFamily: 'fantasy' }}>
                                        {I18n.t('TabAboutActivity.company1')}</Text>
                                    <Text style={{ fontSize: px2dp(14), textAlign: 'left', fontWeight: '200', color: '#000000', fontFamily: 'fantasy' }}>Guide personalized management of healthy life.</Text>

                                </View>
                                <View style={{ width: '10%', height: px2dp(90), justifyContent: 'center' }}>
                                    <Image style={{ height: px2dp(20), width: px2dp(20), marginLeft: px2dp(5) }} source={require('../image/right-arr.png')} resizeMode='contain' />
                                </View>
                            </View>
                        </TouchableOpacity>
                        {/* 科学团队 */}
                        <TouchableOpacity onPress={() => this.navigate.push("Scienceteam")}>
                            <View style={{ borderRadius: px2dp(15), height: px2dp(90), flexDirection: 'row', marginBottom: px2dp(20), borderWidth: px2dp(1.5), backgroundColor: '#ffffff', borderColor: '#b6b7b8', borderStyle: 'solid', }}>
                                <View style={{ width: '25%', justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: px2dp(60), }} source={require('../image/icons/about2.png')} resizeMode='contain' />
                                </View>
                                <View style={{ width: '65%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: px2dp(18), textAlign: 'left', fontWeight: 'bold', color: '#000000', fontFamily: 'fantasy' }}>
                                        {I18n.t('TabAboutActivity.science1')}</Text>
                                    <Text style={{ fontSize: px2dp(14), textAlign: 'left', fontWeight: '200', color: '#000000', fontFamily: 'fantasy' }}>We are the DNA methylation team</Text>

                                </View>
                                <View style={{ width: '10%', height: px2dp(90), justifyContent: 'center' }}>
                                    <Image style={{ height: px2dp(20), width: px2dp(20), marginLeft: px2dp(5) }} source={require('../image/right-arr.png')} resizeMode='contain' />
                                </View>
                            </View>
                        </TouchableOpacity>
                        {/* DNA甲基化 */}
                        <TouchableOpacity onPress={() => this.navigate.push("Methylation")}>
                            <View style={{ borderRadius: px2dp(15), height: px2dp(90), flexDirection: 'row', marginBottom: px2dp(20), borderWidth: px2dp(1.5), backgroundColor: '#ffffff', borderColor: '#b6b7b8', borderStyle: 'solid', }}>
                                <View style={{ width: '25%', justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: px2dp(60), }} source={require('../image/icons/about3.png')} resizeMode='contain' />
                                </View>
                                <View style={{ width: '65%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: px2dp(18), textAlign: 'left', fontWeight: 'bold', color: '#000000', fontFamily: 'fantasy' }}>
                                        {I18n.t('TabAboutActivity.dna1')}</Text>
                                    <Text style={{ fontSize: px2dp(14), textAlign: 'left', fontWeight: '200', color: '#000000', fontFamily: 'fantasy' }}>DNA methylation is a chemical mark on DNA</Text>

                                </View>
                                <View style={{ width: '10%', height: px2dp(90), justifyContent: 'center' }}>
                                    <Image style={{ height: px2dp(20), width: px2dp(20), marginLeft: px2dp(5) }} source={require('../image/right-arr.png')} resizeMode='contain' />
                                </View>
                            </View>
                        </TouchableOpacity>
                        {/* 生物学年龄检测 */}
                        <TouchableOpacity onPress={() => this.navigate.push("Biological")}>
                            <View style={{ borderRadius: px2dp(15), height: px2dp(90), flexDirection: 'row', marginBottom: px2dp(20), borderWidth: px2dp(1.5), backgroundColor: '#ffffff', borderColor: '#b6b7b8', borderStyle: 'solid', }}>
                                <View style={{ width: '25%', justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: px2dp(60), }} source={require('../image/icons/about4.png')} resizeMode='contain' />
                                </View>
                                <View style={{ width: '65%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: px2dp(18), textAlign: 'left', fontWeight: 'bold', color: '#000000', fontFamily: 'fantasy' }}>
                                        {I18n.t('TabAboutActivity.biological1')}</Text>
                                    <Text style={{ fontSize: px2dp(14), textAlign: 'left', fontWeight: '200', color: '#000000', fontFamily: 'fantasy' }}>The only age that counts is your biological age</Text>

                                </View>
                                <View style={{ width: '10%', height: px2dp(90), justifyContent: 'center' }}>
                                    <Image style={{ height: px2dp(20), width: px2dp(20), marginLeft: px2dp(5) }} source={require('../image/right-arr.png')} resizeMode='contain' />
                                </View>
                            </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => this.navigate.push("Biological")}>
                            <View style={{ borderRadius: 15, height: 100, flexDirection: 'row', marginBottom: 40, borderWidth: 0.5 }}>
                                <View style={{ width: '30%', justifyContent: 'center' }}>
                                    <Image style={{ width: '90%', height: 60 }} source={require('../image/icons/about4.png')} resizeMode='contain' />
                                </View>
                                <View style={{ width: '60%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, textAlign: 'left', fontWeight: '700', color: '#191A1B' }}>{I18n.t('TabAboutActivity.biological1')}{I18n.t('TabAboutActivity.age1')}
                                    </Text>
                                </View>
                                <View style={{ width: '10%', height: 80, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 24, fontWeight: '700', color: '#B6B7B8', textAlign: 'center' }}> &gt; </Text>
                                </View>
                            </View>
                        </TouchableOpacity> */}
                        {/* 客户资料同意书 */}
                        <TouchableOpacity onPress={() => this.navigate.push("Consent")}>
                            <View style={{ borderRadius: px2dp(15), height: px2dp(90), flexDirection: 'row', marginBottom: px2dp(20), borderWidth: px2dp(1.5), backgroundColor: '#ffffff', borderColor: '#b6b7b8', borderStyle: 'solid', }}>
                                <View style={{ width: '25%', justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: px2dp(60), }} source={require('../image/icons/about5.png')} resizeMode='contain' />
                                </View>
                                <View style={{ width: '65%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: px2dp(18), textAlign: 'left', fontWeight: 'bold', color: '#000000', fontFamily: 'fantasy' }}>
                                        {I18n.t('TabAboutActivity.consent1')}</Text>
                                    <Text style={{ fontSize: px2dp(14), textAlign: 'left', fontWeight: '200', color: '#000000', fontFamily: 'fantasy' }}>HKG epi THERAPEUTICS Ltd. User Consent Form</Text>

                                </View>
                                <View style={{ width: '10%', height: px2dp(90), justifyContent: 'center' }}>
                                    <Image style={{ height: px2dp(20), width: px2dp(20), marginLeft: px2dp(5) }} source={require('../image/right-arr.png')} resizeMode='contain' />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* 公司简介 */}
                    <Text style={{ fontSize: px2dp(12), textAlign: 'center', marginBottom: px2dp(20), marginTop: px2dp(20),fontFamily: 'fantasy'  }}>{I18n.t('TabHomeActivity.allright')}</Text>
                </ScrollView>
            </View>
        );
    }
}

