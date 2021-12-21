import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity, DeviceEventEmitter, ProgressBarAndroid } from 'react-native';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';
import Session from '../storage/Session';
import qsession from '../storage/QSession';
export default class QuestionnaireActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("QuestionnaireActivity.title")
        })
    }

    constructor(props) {
        super(props);
        this.state = { user: null }

    }

    async componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
        });
        (async () => {
            //mcgill问卷记录
            let mcgillbox = await qsession.load("mcgillbox") ? await qsession.load("mcgillbox") : await qsession.save("mcgillbox", new Array(14).fill(0))
            let mgcounts = (mcgillbox, value) => mcgillbox.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
            console.log('mcgillbox数组counts中1出现的次数是：' + mgcounts(mcgillbox, 1));
            let totalcount = mgcounts(mcgillbox, 1)
            let mcgillRate = parseInt((totalcount / mcgillbox.length) * 100)
            let mcprogRate = mcgillRate * 0.01
            this.setState({ mcgillRate: mcgillRate })
            this.setState({ mcprogRate: mcprogRate })

        })();
        (async () => {
            //lifestyle问卷记录
            let lifestylebox = await qsession.load("lifestylebox") ? await qsession.load("lifestylebox") : await qsession.save("lifestylebox", new Array(10).fill(0))
            let lfcounts = (lifestylebox, value) => lifestylebox.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
            console.log('lifestylebox数组counts中1出现的次数是：' + lfcounts(lifestylebox, 1));
            let lftotalcount = lfcounts(lifestylebox, 1)
            let lifestyleRate = parseInt((lftotalcount / lifestylebox.length) * 100)
            let lfprogRate = lifestyleRate * 0.01
            this.setState({ lifestyleRate: lifestyleRate })
            this.setState({ lfprogRate: lfprogRate })
            console.info("lf" + lifestyleRate)
        })();
    }
    render() {
        this.navigate = this.props.navigation;

        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
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
                            } style={{ borderRadius: px2dp(20), borderColor: '#b6b7b8', borderWidth: px2dp(1), backgroundColor: '#FEFFFF', paddingTop: px2dp(20), paddingBottom: px2dp(20) }}>
                                <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80) }}>
                                    <View style={{ width: '94%', height: px2dp(80) }}>
                                        <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', borderBottomWidth: px2dp(1), borderColor: '#b6b7b8', borderStyle: 'dotted' }}>
                                            <Image style={{ height: px2dp(30), width: '16%',marginTop:px2dp(20) }} resizeMode='contain' source={require("../image/icons/life-64.png")}></Image>
                                            <Text style={{ height: px2dp(80), width: '83%', fontFamily: 'fantasy', fontSize: px2dp(16), lineHeight: px2dp(80), color: '#0D0D0D', fontWeight: '700' }}>{I18n.t('QuestionnaireActivity.lifestyle')}</Text>
                                        </View>
                                        {/* <View style={{ width: '90%', alignSelf: 'center' }}>
                                            <Text style={{ height: px2dp(24), width: '100%', fontFamily: 'fantasy', fontSize: px2dp(14), lineHeight: px2dp(22), }}><Text style={{ color: '#000', fontWeight: 'bold' }}>{this.state.lifestyleRate}0%</Text> of 100% lifestyle information</Text>
                                            <ProgressBarAndroid color="#7f8081" styleAttr="Horizontal" progress={this.state.lfprogRate} indeterminate={false} style={{ marginTop: px2dp(1), borderRadius: px2dp(50) }} />
                                        </View> */}
                                    </View>
                                    <View style={{ width: '8%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(80), width: '100%', }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
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
                            } style={{ borderRadius: px2dp(20), borderWidth: px2dp(1), borderColor: '#b6b7b8', backgroundColor: '#FEFFFF', paddingTop: px2dp(20), paddingBottom: px2dp(20) }}>
                                <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80) }}>
                                    <View style={{ width: '92%', height: px2dp(80) }}>
                                        <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', borderBottomWidth: px2dp(1), borderColor: '#b6b7b8', borderStyle: 'dotted' }}>
                                            <Image style={{ height: px2dp(30), width: '16%',marginTop:px2dp(20) }} resizeMode='contain' source={require("../image/icons/life-65.png")}></Image>
                                            <Text style={{ height: px2dp(80), width: '83%', fontFamily: 'fantasy', fontSize: px2dp(16), lineHeight: px2dp(80), color: '#000', fontWeight: '700' }}>{I18n.t('QuestionnaireActivity.mood')}</Text>
                                        </View>
                                        {/* <View style={{ width: '90%', alignSelf: 'center' }}>
                                            <Text style={{ height: px2dp(24), width: '100%', fontFamily: 'fantasy', fontSize: px2dp(14), lineHeight: px2dp(22), }}><Text style={{ color: '#000', fontWeight: 'bold' }}>0%</Text> of 100% lifestyle information</Text>
                                            <ProgressBarAndroid color="#7f8081" styleAttr="Horizontal" progress={0} indeterminate={false} style={{ marginTop: 1 }} />
                                        </View> */}
                                    </View>
                                    <View style={{ width: '8%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(80), width: '100%', }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
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
                                        this.navigate.push("McGillChart", {
                                            refresh: () => {
                                                this._refresh();
                                            }
                                        })
                                        :
                                        this.navigate.push("RasEncryptionActivity")

                            }
                            } style={{ borderRadius: px2dp(20), borderWidth: px2dp(1), borderColor: '#b6b7b8', backgroundColor: '#FEFFFF', paddingTop: px2dp(20), paddingBottom: px2dp(20) }}>
                                <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80) }}>
                                    <View style={{ width: '92%', height: px2dp(80) }}>
                                        <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', borderBottomWidth: px2dp(1), borderColor: '#b6b7b8', borderStyle: 'dotted' }}>
                                            <Image style={{ height: px2dp(30), width: '16%',marginTop:px2dp(20) }} resizeMode='contain' source={require("../image/icons/life-66.png")}></Image>
                                            <Text style={{ height: px2dp(80), width: '83%', fontFamily: 'fantasy', fontSize: px2dp(14), lineHeight: px2dp(80), color: '#0D0D0D', fontWeight: '700' }}>{I18n.t('QuestionnaireActivity.mcgill')}</Text>
                                        </View>
                                        {/* <View style={{ width: '90%', alignSelf: 'center' }}>
                                            <Text style={{ height: px2dp(24), width: '100%', fontFamily: 'fantasy', fontSize: 14, lineHeight: px2dp(22), }}><Text style={{ color: '#000', fontWeight: 'bold' }}>{this.state.mcgillRate}0%</Text> of 100% lifestyle information</Text>
                                            <ProgressBarAndroid color="#7f8081" styleAttr="Horizontal" progress={this.state.mcprogRate} indeterminate={false} style={{ marginTop: 1, borderRadius: px2dp(10) }} />
                                        </View> */}
                                    </View>
                                    <View style={{ width: '8%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(80), width: '100%', }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>

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
                            } style={{ borderRadius: px2dp(20), borderWidth: px2dp(1), borderColor: '#b6b7b8', backgroundColor: '#FEFFFF', paddingTop: px2dp(20), paddingBottom: px2dp(20) }}>
                                <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80) }}>
                                    <View style={{ width: '92%', height: px2dp(80) }}>
                                        <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', borderBottomWidth: px2dp(1), borderColor: '#b6b7b8', borderStyle: 'dotted' }}>
                                            <Image style={{ height: px2dp(26), width: '16%',marginTop:px2dp(20) }} resizeMode='contain' source={require("../image/icons/life-67.png")}></Image>
                                            <Text style={{ height: px2dp(40), width: '1%' }}></Text>
                                            <Text style={{ height: px2dp(80), width: '83%', fontFamily: 'fantasy', fontSize: px2dp(16), lineHeight: px2dp(80), color: '#0D0D0D', fontWeight: '700' }}>{I18n.t('QuestionnaireActivity.sleep')}</Text>
                                        </View>
                                        {/* <View style={{ width: '90%', alignSelf: 'center' }}>
                                            <Text style={{ height: px2dp(24), width: '100%', fontFamily: 'fantasy', fontSize: px2dp(14), lineHeight: px2dp(22), }}><Text style={{ color: '#000', fontWeight: 'bold' }}>0%</Text> of 100% lifestyle information</Text>
                                            <ProgressBarAndroid color="#7f8081" styleAttr="Horizontal" progress={0} indeterminate={false} style={{ marginTop: 1 }} />
                                        </View> */}
                                    </View>
                                    <View style={{ width: '8%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(80), width: '100%', }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
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
                            } style={{ borderRadius: px2dp(20), borderWidth: px2dp(1), borderColor: '#b6b7b8', backgroundColor: '#FEFFFF', paddingTop: px2dp(20), paddingBottom: px2dp(20) }}>
                                <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80) }}>
                                    <View style={{ width: '92%', height: px2dp(80) }}>
                                        <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', borderBottomWidth: px2dp(1), borderColor: '#b6b7b8', borderStyle: 'dotted' }}>
                                            <Image style={{ height: px2dp(30), width: '16%',marginTop:px2dp(20) }} resizeMode='contain' source={require("../image/icons/life-68.png")}></Image>
                                            <Text style={{ height: px2dp(80), width: '83%', fontFamily: 'fantasy', fontSize: 16, lineHeight: px2dp(80), color: '#0D0D0D', fontWeight: '700' }}>{I18n.t('QuestionnaireActivity.diet')}</Text>
                                        </View>
                                        {/* <View style={{ width: '90%', alignSelf: 'center' }}>
                                            <Text style={{ height: px2dp(24), width: '100%', fontFamily: 'fantasy', fontSize: 14, lineHeight: px2dp(22), }}><Text style={{ color: '#000', fontWeight: 'bold' }}>0%</Text> of 100% lifestyle information</Text>
                                            <ProgressBarAndroid color="#7f8081" styleAttr="Horizontal" progress={0} indeterminate={false} style={{ marginTop: 1 }} />
                                        </View> */}
                                    </View>
                                    <View style={{ width: '8%', alignSelf: 'center', flexDirection: 'row', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(80), width: '100%', }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={() => { this.navigate.push("Manual3") }}>
                                <View style={{ width: '100%', alignSelf: 'center', }}>
                                    <Text style={{ height: px2dp(45), lineHeight: px2dp(45), paddingTop: 12, width: '100%', textAlign: 'center', fontFamily: 'fantasy', fontSize: 14, textDecorationLine: "underline" }}>{I18n.t('QuestionnaireActivity.how')} &gt;</Text>
                                </View>
                            </TouchableOpacity> */}
                        </View>

                    </View>
                </ScrollView >
            </View>
        );
    }
}

