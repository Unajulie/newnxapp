import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Button, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import Session from '../storage/Session';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';
import { SwipeablePanel } from 'rn-swipeable-panel';
export default class CenterActivity extends Component {
    // static navigationOptions = ({ navigation, screenProps }) => {
    //     return ({
    //         header: null
    //     })
    // }
    constructor(props) {
        super(props);
        this.state = { user: null, swipeablePanelActive: false };

    }
    //因为Session.load方法异步的,所以可以给sate设置值，设置之后，页面渲染会根据sata中的值变化而变化
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
        });

    }


    render() {

        this.navigate = this.props.navigation;
        // const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            //borderColor:"grey",borderWidth:1
            //alignItems:'center' 左右居中
            <View style={{ flex: 1, backgroundColor: '#f6f7f8' }}>
                <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                <ScrollView >
                    <View style={{ flex: 1, backgroundColor: '#e5e6e7' }}>

                        <View style={{ backgroundColor: '#e5e6e7', width: '100%', height: px2dp(80), }}>
                            <Text style={{ textAlign: 'right', height: px2dp(80), marginTop: px2dp(60), marginRight: px2dp(20), color: '#000000', fontSize: px2dp(16), fontWeight: 'bold', fontFamily: 'fantasy' }}
                                onPress={() => { this.navigate.push("Setting") }}>Settings</Text>
                        </View>

                        <View style={{ height: px2dp(90), width: px2dp(90), marginLeft: px2dp(35), marginBottom: px2dp(-40), borderRadius: px2dp(15), borderColor: '#e5e6e7', borderWidth: px2dp(1.5), backgroundColor: '#feffff', zIndex: 999 }}>
                            <View style={{ height: px2dp(40), width: px2dp(40), alignSelf: 'center', justifyContent: 'center', marginTop: px2dp(20) }}>
                                {this.state.user == null ?
                                    <Image style={{ height: '100%', width: '100%' }} resizeMode='contain' source={require("../image/tab/ic1_tab_user.png")}></Image>
                                    :
                                    <Image style={{ height: '100%', width: '100%', borderRadius: px2dp(30) }} resizeMode="contain" source={require("../image/ic_login.png")}></Image>
                                }
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#f6f7f8', alignItems: 'center', borderTopLeftRadius: px2dp(30), borderTopRightRadius: px2dp(30) }}>
                            <View style={{ height: px2dp(80), width: '100%', marginTop: px2dp(20), }}>

                                {this.state.user == null ?
                                    <View style={{ height: px2dp(80), width: '80%', alignSelf: "center",marginTop:px2dp(50), flexDirection: 'row' }}>
                                        <TouchableOpacity style={{width:'40%'}} onPress={() => this.navigate.push("Login")}>
                                            <Text style={{ width: '100%', height: px2dp(40), fontSize: px2dp(18), color: "#000", textAlign: 'right', fontFamily: 'fantasy' }}>{I18n.t('TabCenterActivity.centerlogin')}
                                            </Text>
                                        </TouchableOpacity>
                                        <Text style={{width:'20%',textAlign:'center',fontSize:px2dp(20),fontWeight:'bold'}}>|</Text>
                                        <TouchableOpacity style={{width:'40%'}} onPress={() => this.navigate.push("Register")}>
                                            <Text style={{ width: '100%', height: px2dp(40), fontSize: px2dp(18), color: "#000",textAlign:'left', fontFamily: 'fantasy' }}>{I18n.t('TabCenterActivity.centerregis')}</Text>
                                        </TouchableOpacity>
                                    </View>

                                    :
                                    <View style={{ width: '80%', height: px2dp(80), marginTop: px2dp(30), alignSelf: 'center' }}>
                                        <Text style={{ color: "#000000", fontSize: px2dp(23), fontWeight: 'bold' }}>Hello, {this.state.user.nickname}</Text>
                                        <TouchableOpacity onPress={() => { this.navigate.push("RasEncryptionActivity") }}>
                                            <Text style={{ color: "#000000", fontSize: 18 }}>{I18n.t('TabCenterActivity.centerkey')}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                            </View>

                            <View style={{ width: '90%', marginTop: px2dp(60), alignSelf: 'center' }}>
                                {/* 我的报告 */}
                                <TouchableOpacity onPress={() => {
                                    this.state.user == null ?
                                        this.navigate.push("Login")
                                        :
                                        this.state.user.privatekey ?
                                            this.navigate.push("DnaReport")
                                            :
                                            this.navigate.push("RasEncryptionActivity")

                                }}>
                                    <View style={{ borderRadius: px2dp(15), height: px2dp(90), flexDirection: 'row', marginBottom: px2dp(20), borderWidth: px2dp(1.5), backgroundColor: '#ffffff', borderColor: '#b6b7b8', borderStyle: 'solid', }}>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height: px2dp(60), }} source={require('../image/icons/home1.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text
                                                style={{ fontSize: px2dp(18), textAlign: 'left', fontWeight: 'bold', color: '#000000', fontFamily: 'fantasy' }}>
                                                {I18n.t('TabHomeActivity.myreport')}</Text>
                                            <Text style={{ fontSize: px2dp(14), textAlign: 'left', fontWeight: '200', color: '#000000', fontFamily: 'fantasy' }}>{I18n.t('TabCenterActivity.kit')}</Text>

                                        </View>
                                        <View style={{ width: '10%', height: px2dp(90), justifyContent: 'center' }}>
                                            <Image style={{ height: px2dp(20), width: px2dp(20), marginLeft: px2dp(5) }} source={require('../image/right-arr.png')} resizeMode='contain' />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                {/* 问卷调查 */}
                                <TouchableOpacity onPress={() => this.setState({ swipeablePanelActive: true })}>
                                    <View style={{ borderRadius: px2dp(15), height: px2dp(90), flexDirection: 'row', marginBottom: px2dp(20), borderWidth: px2dp(1.5), backgroundColor: '#ffffff', borderColor: '#b6b7b8', borderStyle: 'solid' }}>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height: px2dp(60) }} source={require('../image/icons/home2.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text
                                                onPress={() => {
                                                    this.state.user == null ?
                                                        this.navigate.push("Login")
                                                        :
                                                        this.state.user.privatekey ?
                                                            this.navigate.push("LifeStyleChart")
                                                            :
                                                            this.navigate.push("RasEncryptionActivity")
                                                }}
                                                style={{ fontSize: px2dp(18), textAlign: 'left', fontWeight: 'bold', color: '#000000', fontFamily: 'fantasy' }}>{I18n.t('TabHomeActivity.questionnaires')}  </Text>
                                            <Text style={{ fontSize: px2dp(14), textAlign: 'left', fontWeight: '200', color: '#000000', fontFamily: 'fantasy' }}>{I18n.t('TabHomeActivity.Fill')} </Text>

                                        </View>
                                        <View style={{ width: '10%', height: px2dp(90), justifyContent: 'center' }}>
                                            <Image style={{ height: px2dp(20), width: px2dp(20), marginLeft: px2dp(5) }} source={require('../image/right-arr.png')} resizeMode='contain' />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                {/* 测试流程 */}
                                <TouchableOpacity onPress={() => this.navigate.push("Testprocess")}>
                                    <View style={{ borderRadius: px2dp(15), height: px2dp(90), flexDirection: 'row', marginBottom: px2dp(20), borderWidth: px2dp(1.5), backgroundColor: '#ffffff', borderColor: '#b6b7b8', borderStyle: 'solid' }}>
                                        <View style={{ width: '25%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height: px2dp(60) }} source={require('../image/icons/home3.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: px2dp(18), textAlign: 'left', fontWeight: 'bold', color: '#000000', fontFamily: 'fantasy' }}>{I18n.t('TabHomeActivity.testprocess')}{"\n"}
                                                <Text style={{ fontSize: px2dp(14), textAlign: 'left', fontWeight: '200', color: '#000000', fontFamily: 'fantasy' }}>{I18n.t('TabHomeActivity.Step')}</Text>
                                            </Text>
                                        </View>
                                        <View style={{ width: '10%', height: px2dp(90), justifyContent: 'center' }}>
                                            <Image style={{ height: px2dp(20), width: px2dp(20), marginLeft: px2dp(5) }} source={require('../image/right-arr.png')} resizeMode='contain' />
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>
                </ScrollView>
                <SwipeablePanel
                    fullWidth={true}
                    showCloseButton={true}
                    closeOnTouchOutside={true}
                    openLarge={true}
                    isActive={this.state.swipeablePanelActive}
                    onClose={() => { this.setState({ swipeablePanelActive: false }) }}
                    onPressCloseButton={() => { this.setState({ swipeablePanelActive: false }) }}
                >
                    <ScrollView>
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), marginBottom: px2dp(20) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(18), color: '#000', height: px2dp(45), fontWeight: 'bold' }}>{I18n.t('QuesnoteActivity.about')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(16), color: '#000', lineHeight: px2dp(20), marginBottom: px2dp(10) }}>{I18n.t('QuesnoteActivity.are')} <Text style={{ color: '#000', fontWeight: 'bold' }}>{I18n.t('QuesnoteActivity.optional')}</Text>{I18n.t('QuesnoteActivity.however')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(16), color: '#000', lineHeight: px2dp(20), marginBottom: px2dp(30) }}>{I18n.t('QuesnoteActivity.personalized')}</Text>
                            {/* <View style={{ width: '45%', borderRadius: 10 }}>
                                    <TouchableOpacity >
                                        <Button style={{ backgroundColor: "#2196f3" }}
                                            onPress={() => this.navigate.pop()}
                                            title={I18n.t('QuesnoteActivity.back')}
                                            color="#2196f3" />

                                    </TouchableOpacity>
                                </View> */}
                            <View style={{ width: '90%',height:px2dp(50),alignSelf:'center', borderRadius: px2dp(5) }}>
                                <TouchableOpacity >
                                    <Button style={{width:'100%',height:px2dp(50), backgroundColor: "#404bc2" }}
                                        onPress={() => this.navigate.push("Questionnaire")}
                                        title={I18n.t('QuesnoteActivity.ques')}
                                        fontFamily='fantasy'
                                        color="#404bc2"
                                        backgroundColor='#404bc2'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </SwipeablePanel>
            </View>
        );
    }
}

