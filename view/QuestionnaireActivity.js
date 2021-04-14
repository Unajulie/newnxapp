import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity, navigate, ProgressBarAndroid } from 'react-native';
import { I18n } from '../locales/i18n';
import Session from '../storage/Session';
import { px2dp } from '../src/px2dp';
type Props = {};
export default class QuestionnaireActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("QuestionnaireActivity.title")
        })
    }

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
        });
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
                <View style={{ backgroundColor: '#F6F7F8' }}>
                    <View style={{ height: px2dp(10) }}></View>
                    <View style={{ width: '90%', height: px2dp(760), marginTop: px2dp(25), alignSelf: 'center' }}>
                        {/* lifestyle */}
                        <TouchableOpacity onPress={() => {
                            this.state.user == null ?
                                this.navigate.push("Login")
                                :
                                this.state.user.privatekey ?
                                    this.navigate.push("LifeStyleChart")
                                    :
                                    this.navigate.push("RasEncryptionActivity")
                        }
                        } style={{ borderRadius: px2dp(20), borderWidth: px2dp(0.5), backgroundColor: '#FEFFFF', paddingTop: px2dp(20), paddingBottom: px2dp(20) }}>
                            <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80) }}>
                                <View style={{ width: '94%', height: px2dp(80) }}>
                                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', borderBottomWidth: 0.5, borderStyle: 'dotted' }}>
                                        <Image style={{ height: px2dp(30), width: '16%', lineHeight: px2dp(40) }} resizeMode='contain' source={require("../image/icons/life-64.png")}></Image>
                                        <Text style={{ height: px2dp(40), width: '83%', fontFamily: 'fantasy', fontSize: 16, lineHeight: px2dp(30), color: '#0D0D0D', fontWeight: '700' }}>{I18n.t('QuestionnaireActivity.lifestyle')}</Text>
                                    </View>
                                    <View style={{ width: '90%', alignSelf: 'center' }}>
                                        <Text style={{ height: px2dp(24), width: '100%', fontFamily: 'fantasy', fontSize: 14, lineHeight: px2dp(22), }}><Text style={{ color: '#000000' }}>85%</Text> of 100% lifestyle information</Text>
                                        <ProgressBarAndroid color="black" styleAttr="Horizontal" progress={0.85} indeterminate={false} style={{ marginTop: 1 }} />
                                    </View>
                                </View>
                                <View style={{ width: '8%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80), justifyContent: 'center' }}>
                                    <Image style={{ height: px2dp(80), width: '100%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{ height: px2dp(15) }}></View>
                        {/* mood self Assessment */}
                        <TouchableOpacity onPress={() => {
                            this.state.user == null ?
                                this.navigate.push("Login")
                                :
                                this.state.user.privatekey ?
                                    this.navigate.push("MoodChart")
                                    :
                                    this.navigate.push("RasEncryptionActivity")
                        }
                        } style={{ borderRadius: px2dp(20), borderWidth: px2dp(0.5), backgroundColor: '#FEFFFF', paddingTop: px2dp(20), paddingBottom: px2dp(20) }}>
                            <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80) }}>
                                <View style={{ width: '92%', height: px2dp(80) }}>
                                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', borderBottomWidth: 0.5, borderStyle: 'dotted' }}>
                                        <Image style={{ height: px2dp(30), width: '16%', lineHeight: px2dp(40) }} resizeMode='contain' source={require("../image/icons/life-65.png")}></Image>
                                        <Text style={{ height: px2dp(40), width: '83%', fontFamily: 'fantasy', fontSize: 16, lineHeight: px2dp(30), color: '#0D0D0D', fontWeight: '700' }}>{I18n.t('QuestionnaireActivity.mood')}</Text>
                                    </View>
                                    <View style={{ width: '90%', alignSelf: 'center' }}>
                                        <Text style={{ height: px2dp(24), width: '100%', fontFamily: 'fantasy', fontSize: 14, lineHeight: px2dp(22), }}><Text style={{ color: '#000000' }}>50%</Text> of 100% lifestyle information</Text>
                                        <ProgressBarAndroid color="black" styleAttr="Horizontal" progress={0.5} indeterminate={false} style={{ marginTop: 1 }} />
                                    </View>
                                </View>
                                <View style={{ width: '8%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80), justifyContent: 'center' }}>
                                    <Image style={{ height: px2dp(80), width: '100%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{ height: px2dp(15) }}></View>
                        {/* McGill pain Questionnaire */}
                        <TouchableOpacity onPress={() => {
                            this.state.user == null ?
                                this.navigate.push("Login")
                                :
                                this.state.user.privatekey ?
                                    this.navigate.push("McGillChart")
                                    :
                                    this.navigate.push("RasEncryptionActivity")
                        }
                        } style={{ borderRadius: px2dp(20), borderWidth: px2dp(0.5), backgroundColor: '#FEFFFF', paddingTop: px2dp(20), paddingBottom: px2dp(20) }}>
                            <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80) }}>
                                <View style={{ width: '92%', height: px2dp(80) }}>
                                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', borderBottomWidth: 0.5, borderStyle: 'dotted' }}>
                                        <Image style={{ height: px2dp(30), width: '16%', lineHeight: px2dp(40) }} resizeMode='contain' source={require("../image/icons/life-66.png")}></Image>
                                        <Text style={{ height: px2dp(40), width: '83%', fontFamily: 'fantasy', fontSize: 16, lineHeight: px2dp(20), color: '#0D0D0D', fontWeight: '700' }}>{I18n.t('QuestionnaireActivity.mcgill')}</Text>
                                    </View>
                                    <View style={{ width: '90%', alignSelf: 'center' }}>
                                        <Text style={{ height: px2dp(24), width: '100%', fontFamily: 'fantasy', fontSize: 14, lineHeight: px2dp(22), }}><Text style={{ color: '#000000' }}>50%</Text> of 100% lifestyle information</Text>
                                        <ProgressBarAndroid color="black" styleAttr="Horizontal" progress={0.5} indeterminate={false} style={{ marginTop: 1 }} />
                                    </View>
                                </View>
                                <View style={{ width: '8%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80), justifyContent: 'center' }}>
                                    <Image style={{ height: px2dp(80), width: '100%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>

                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{ height: px2dp(15) }}></View>
                        {/* sleep */}
                        <TouchableOpacity onPress={() => {
                            this.state.user == null ?
                                this.navigate.push("Login")
                                :
                                this.state.user.privatekey ?
                                    this.navigate.push("SleepChart")
                                    :
                                    this.navigate.push("RasEncryptionActivity")
                        }
                        } style={{ borderRadius: px2dp(20), borderWidth: px2dp(0.5), backgroundColor: '#FEFFFF', paddingTop: px2dp(20), paddingBottom: px2dp(20) }}>
                            <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80) }}>
                                <View style={{ width: '92%', height: px2dp(80) }}>
                                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', borderBottomWidth: 0.5, borderStyle: 'dotted' }}>
                                        <Image style={{ height: px2dp(26), width: '16%', lineHeight: px2dp(40) }} resizeMode='contain' source={require("../image/icons/life-67.png")}></Image>
                                        <Text style={{ height: px2dp(40), width: '1%' }}></Text>
                                        <Text style={{ height: px2dp(40), width: '83%', fontFamily: 'fantasy', fontSize: 16, lineHeight: px2dp(30), color: '#0D0D0D', fontWeight: '700' }}>{I18n.t('QuestionnaireActivity.sleep')}</Text>
                                    </View>
                                    <View style={{ width: '90%', alignSelf: 'center' }}>
                                        <Text style={{ height: px2dp(24), width: '100%', fontFamily: 'fantasy', fontSize: 14, lineHeight: px2dp(22), }}><Text style={{ color: '#000000' }}>100%</Text> of 100% lifestyle information</Text>
                                        <ProgressBarAndroid color="black" styleAttr="Horizontal" progress={1} indeterminate={false} style={{ marginTop: 1 }} />
                                    </View>
                                </View>
                                <View style={{ width: '8%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80), justifyContent: 'center' }}>
                                    <Image style={{ height: px2dp(80), width: '100%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{ height: px2dp(15) }}></View>
                        {/* Diet Recommendation */}
                        <TouchableOpacity onPress={() => {
                            this.state.user == null ?
                                this.navigate.push("Login")
                                :
                                this.state.user.privatekey ?
                                    this.navigate.push("DietChart")
                                    :
                                    this.navigate.push("RasEncryptionActivity")
                        }
                        } style={{ borderRadius: px2dp(20), borderWidth: px2dp(0.5), backgroundColor: '#FEFFFF', paddingTop: px2dp(20), paddingBottom: px2dp(20) }}>
                            <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80) }}>
                                <View style={{ width: '92%', height: px2dp(80) }}>
                                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', borderBottomWidth: 0.5, borderStyle: 'dotted' }}>
                                        <Image style={{ height: px2dp(30), width: '16%', lineHeight: px2dp(40) }} resizeMode='contain' source={require("../image/icons/life-68.png")}></Image>
                                        <Text style={{ height: px2dp(40), width: '83%', fontFamily: 'fantasy', fontSize: 16, lineHeight: px2dp(30), color: '#0D0D0D', fontWeight: '700' }}>{I18n.t('QuestionnaireActivity.diet')}</Text>
                                    </View>
                                    <View style={{ width: '90%', alignSelf: 'center' }}>
                                        <Text style={{ height: px2dp(24), width: '100%', fontFamily: 'fantasy', fontSize: 14, lineHeight: px2dp(22), }}><Text style={{ color: '#000000' }}>100%</Text> of 100% lifestyle information</Text>
                                        <ProgressBarAndroid color="black" styleAttr="Horizontal" progress={1} indeterminate={false} style={{ marginTop: 1 }} />
                                    </View>
                                </View>
                                <View style={{ width: '8%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80), justifyContent: 'center' }}>
                                    <Image style={{ height: px2dp(80), width: '100%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.navigate.push("Manual3") }}>
                            <View style={{ width: '100%', alignSelf: 'center', }}>
                                <Text style={{ height: 45, lineHeight: 45, paddingTop: 12, width: '100%', textAlign: 'center', fontFamily: 'fantasy', fontSize: 14, textDecorationLine: "underline" }}>{I18n.t('QuestionnaireActivity.how')} &gt;</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontFamily: 'fantasy', fontSize: 12, marginTop: 20, textAlign: 'center' }}>{I18n.t('QuestionnaireActivity.eip')}</Text>

                </View>
            </ScrollView >
        );
    }
}

