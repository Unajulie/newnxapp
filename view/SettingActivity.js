import React, { Component } from 'react';
import { Text, View, Image, StatusBar, fontFamil, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import Session from '../storage/Session';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';
import { SwipeablePanel } from 'rn-swipeable-panel';

export default class CenterActivity extends Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: "Settings",
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            swipeablePanelActive: false,
            display: false,
            regionValue: "",
            regionBox: [
                { key: 1, langCode: 'en', value: 'English', imgPath: require("../image/tab/usa-flag.png") },
                { key: 2, langCode: 'fr', value: 'French', imgPath: require("../image/tab/fr-flag.png") },
                { key: 3, langCode: 'sp', value: 'Spanish', imgPath: require("../image/tab/sp-flag.jpg") },
                { key: 4, langCode: 'ru', value: 'Russian', imgPath: require("../image/tab/ru-flag.png") },
                { key: 5, langCode: 'por', value: 'Portuguese', imgPath: require("../image/tab/por-flag.jpg") },
                { key: 6, langCode: 'zh-TW', value: 'Chinese(HK)', imgPath: require("../image/tab/cn-flag.png") }

            ],

        };

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
            <View style={{ flex: 1 ,backgroundColor: '#f6f7f8'}}>
                <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                <ScrollView >
                    <View style={{ backgroundColor: '#e5e6e7' }}>
                        <View style={{ backgroundColor: '#e5e6e7', width: '90%', alignSelf: 'center', height: px2dp(50), }}>
                            <Text style={{ height: px2dp(50), lineHeight: px2dp(50), color: '#000000', fontSize: px2dp(16), fontWeight: 'bold', fontFamily: 'fantasy' }}>ACCOUNT</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.setState({ swipeablePanelActive: true })}>
                            <View style={{ backgroundColor: '#f6f7f8', height: px2dp(70), alignItems: 'center', borderBottomColor: '#e5e6e7', borderBottomWidth: px2dp(1.5) }}>
                                <View style={{ width: '90%', alignSelf: 'center', height: px2dp(70), flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ lineHeight: px2dp(70), fontSize: px2dp(16), fontFamily: 'fantasy', color: '#000000' }}>Language</Text>
                                    <Text style={{ lineHeight: px2dp(70), fontSize: px2dp(16), fontFamily: 'fantasy', }}>{this.state.regionValue}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        {/* <View style={{ backgroundColor: '#f6f7f8', height: px2dp(70), alignItems: 'center', borderBottomColor: '#e5e6e7', borderBottomWidth: px2dp(1.5) }}>
                            <View style={{ width: '90%', alignSelf: 'center', height: px2dp(70), flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ lineHeight: px2dp(70), fontSize: px2dp(16), fontFamily: 'fantasy', color: '#000000' }}>Edit Profile</Text>
                                <Image style={{ height: px2dp(20), width: px2dp(20), marginTop: px2dp(25) }} resizeMode="contain" source={require("../image/right-arr.png")}></Image>
                            </View>
                        </View> */}
                        <TouchableOpacity onPress={() => this.navigate.push("RasEncryptionActivity")}>
                            <View style={{ backgroundColor: '#f6f7f8', height: px2dp(70), alignItems: 'center', borderBottomColor: '#e5e6e7', borderBottomWidth: px2dp(1.5) }}>
                                <View style={{ width: '90%', alignSelf: 'center', height: px2dp(70), flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ lineHeight: px2dp(70), fontSize: px2dp(16), fontFamily: 'fantasy', color: '#000000' }}>Private Key</Text>
                                    <Image style={{ height: px2dp(20), width: px2dp(20), marginTop: px2dp(25) }} resizeMode="contain" source={require("../image/right-arr.png")}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#e5e6e7', width: '90%', alignSelf: 'center', height: px2dp(50), }}>
                            <Text style={{ height: px2dp(50), lineHeight: px2dp(50), color: '#000000', fontSize: px2dp(16), fontWeight: 'bold', fontFamily: 'fantasy' }}>ABOUT</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.navigate.push("QA")}>
                            <View style={{ backgroundColor: '#f6f7f8', height: px2dp(70), alignItems: 'center', borderBottomColor: '#e5e6e7', borderBottomWidth: px2dp(1.5) }}>
                                <View style={{ width: '90%', alignSelf: 'center', height: px2dp(70), flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ lineHeight: px2dp(70), fontSize: px2dp(16), fontFamily: 'fantasy', color: '#000000' }}>Q&A</Text>
                                    <Image style={{ height: px2dp(20), width: px2dp(20), marginTop: px2dp(25) }} resizeMode="contain" source={require("../image/right-arr.png")}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.navigate.push("DataSecurity")}>
                            <View style={{ backgroundColor: '#f6f7f8', height: px2dp(70), alignItems: 'center', borderBottomColor: '#e5e6e7', borderBottomWidth: px2dp(1.5) }}>
                                <View style={{ width: '90%', alignSelf: 'center', height: px2dp(70), flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ lineHeight: px2dp(70), fontSize: px2dp(16), fontFamily: 'fantasy', color: '#000000' }}>Data Security</Text>
                                    <Image style={{ height: px2dp(20), width: px2dp(20), marginTop: px2dp(25) }} resizeMode="contain" source={require("../image/right-arr.png")}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        {/* consent form */}
                        <TouchableOpacity onPress={() => this.navigate.push("Consent")}>
                            <View style={{ backgroundColor: '#f6f7f8', height: px2dp(70), alignItems: 'center', borderBottomColor: '#e5e6e7', borderBottomWidth: px2dp(1.5) }}>
                                <View style={{ width: '90%', alignSelf: 'center', height: px2dp(70), flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ lineHeight: px2dp(70), fontSize: px2dp(16), fontFamily: 'fantasy', color: '#000000' }}>Terms of Service</Text>
                                    <Image style={{ height: px2dp(20), width: px2dp(20), marginTop: px2dp(25) }} resizeMode="contain" source={require("../image/right-arr.png")}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        {/* contact us */}
                        <TouchableOpacity onPress={() => this.navigate.push("Contact")}>
                            <View style={{ backgroundColor: '#f6f7f8', height: px2dp(70), alignItems: 'center', borderBottomColor: '#e5e6e7', borderBottomWidth: px2dp(1.5) }}>
                                <View style={{ width: '90%', alignSelf: 'center', height: px2dp(70), flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ lineHeight: px2dp(70), fontSize: px2dp(16), fontFamily: 'fantasy', color: '#000000' }}>Contact Us</Text>
                                    <Image style={{ height: px2dp(20), width: px2dp(20), marginTop: px2dp(25) }} resizeMode="contain" source={require("../image/right-arr.png")}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* logout part start*/}
                        {this.state.user != null ?
                            <TouchableOpacity
                                onPress={() => {
                                    Session.logout();
                                    const resetAction = StackActions.reset({
                                        index: 0,
                                        actions: [NavigationActions.navigate({ routeName: 'Main' })],
                                    });
                                    this.props.navigation.dispatch(resetAction);
                                }
                                }>
                                <View style={{ width: '100%', height: px2dp(100), }}>
                                    <View style={{ width: '90%', height: px2dp(40), alignSelf: 'center', justifyContent: 'center', marginTop: px2dp(30), borderWidth: px2dp(1.5), borderColor: '#f04727', borderRadius: px2dp(5), flexDirection: 'row' }}>
                                        <Image style={{ height: px2dp(20), width: px2dp(20), marginTop: px2dp(10) }} resizeMode="contain" source={require("../image/logout.png")}></Image>
                                        <Text style={{ color: '#f04727', fontFamily: 'fantasy', fontSize: px2dp(16), lineHeight: px2dp(40), marginLeft: px2dp(5), textAlign: 'center' }}>Log Out</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            : null}
                        {/* logout part end */}

                        {/* <View style={{ backgroundColor: '#f6f7f8', height: px2dp(180), alignItems: 'center', }}>
                            <View style={{ height: px2dp(60), width: '100%', marginTop: px2dp(20), }}>

                                {this.state.user == null ?
                                    <View style={{ alignSelf: "center", flexDirection: 'row' }}>
                                        <View style={{ width: '30%', height: 25, justifyContent: 'center', alignSelf: 'center' }}>
                                            <TouchableOpacity onPress={() => this.navigate.push("Login")}><Text style={{ fontSize: 18, color: "#000000", textAlign: "right", fontFamily: 'fantasy' }}>{I18n.t('TabCenterActivity.centerlogin')}</Text></TouchableOpacity>
                                        </View>
                                        <View style={{ width: '10%', height: 25, justifyContent: 'center', alignSelf: 'center', }}>
                                            <Text style={{ color: '#fff', textAlign: 'center' }}>|</Text></View>
                                        <View style={{ width: '30%', height: 25, justifyContent: 'center', alignSelf: 'center' }}>
                                            <TouchableOpacity onPress={() => this.navigate.push("Register")}><Text style={{ fontSize: 18, color: "#000000", textAlign: "left", fontFamily: 'fantasy' }}>{I18n.t('TabCenterActivity.centerregis')}</Text></TouchableOpacity>
                                        </View>
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
                        </View> */}




                        {/* {this.state.user != null ?
                            <TouchableOpacity onPress={() => this.navigate.push("Quesnote")}>
                                <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                                    <View style={{ width: "100%", height: 20 }}></View>
                                    <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                        <View style={{ height: 40, width: '25%', justifyContent: "center" }}>
                                            <Image style={{ height: '100%', width: '100%' }} resizeMode="contain" source={require("../image/icons/uc3.png")}></Image>
                                        </View>
                                        <View style={{ width: '50%', }}>
                                            <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'fantasy' }}>{I18n.t('TabCenterActivity.Questionnaire')} </Text>
                                        </View>
                                        <View style={{ width: '20%', }}>
                                            <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'fantasy' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity> : null} */}
                        {/* {this.state.user != null ?
                            <TouchableOpacity onPress={() => this.navigate.push("DnaReport")}>
                                <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                                    <View style={{ width: "100%", height: 20 }}></View>
                                    <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                        <View style={{ height: 40, width: '25%', }}>
                                            <Image style={{ height: '100%', width: '100%' }} resizeMode="contain" source={require("../image/icons/uc4.png")}></Image>
                                        </View>
                                        <View style={{ width: '50%' }}>
                                            <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}>{I18n.t('TabCenterActivity.centerreport')}</Text>
                                        </View>
                                        <View style={{ width: '20%' }}>
                                            <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            : null} */}
                        {/* {this.state.user != null ?
                        <TouchableOpacity onPress={() => navigate.push("Contact")}>
                            <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", justifyContent: 'center', borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                                <View style={{ width: "100%", height: 20 }}></View>
                                <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                    <View style={{ height: 40, width: '25%', }}>
                                        <Image style={{ height: '100%', width: '100%' }} resizeMode="contain" source={require("../image/icons/uc5.png")}></Image>
                                    </View>
                                    <View style={{ height: 20, width: '50%' }}>
                                        <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}>Order Record</Text>
                                    </View>
                                    <View style={{ height: 20, width: '20%' }}>
                                        <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt; </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity> : null} */}

                        {/* <TouchableOpacity onPress={() => this.navigate.push("QA")}>
                            <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", justifyContent: 'center', borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                                <View style={{ width: "100%", height: 20 }}></View>
                                <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                    <View style={{ height: 40, width: '25%', }}>
                                        <Image style={{ height: '100%', width: '100%' }} resizeMode="contain" source={require("../image/icons/uc1.png")}></Image>
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}> {I18n.t('TabCenterActivity.centerqa')}</Text>
                                    </View>
                                    <View style={{ width: '20%' }}>
                                        <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt;</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity> */}
                        {/* <TouchableOpacity onPress={() => this.navigate.push("Contact")}>
                            <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", justifyContent: 'center', borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                                <View style={{ width: "100%", height: 20 }}></View>
                                <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                    <View style={{ height: 40, width: '25%', }}>
                                        <Image style={{ height: '100%', width: '100%' }} resizeMode="contain" source={require("../image/icons/uc6.png")}></Image>
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}>{I18n.t('TabCenterActivity.centerus')}</Text>
                                    </View>
                                    <View style={{ width: '20%' }}>
                                        <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt;</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity> */}
                        {/* {this.state.user != null ?
                            <TouchableOpacity
                                onPress={() => {
                                    Session.logout();
                                    const resetAction = StackActions.reset({
                                        index: 0,
                                        actions: [NavigationActions.navigate({ routeName: 'Main' })],
                                    });
                                    this.props.navigation.dispatch(resetAction);
                                }
                                }>
                                <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", justifyContent: 'center', borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                                    <View style={{ width: "100%", height: 20 }}></View>
                                    <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                        <View style={{ height: 40, width: '25%', }}>
                                            <Image style={{ height: '100%', width: '100%' }} resizeMode="contain" source={require("../image/icons/uc7.png")}></Image>
                                        </View>
                                        <View style={{ width: '50%' }}>
                                            <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}>{I18n.t('TabCenterActivity.centerout')}</Text>
                                        </View>
                                        <View style={{ width: '20%' }}>
                                            <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            : null
                        } */}
                    </View>
                </ScrollView>
                <SwipeablePanel
                    fullWidth={true}
                    showCloseButton={true}
                    closeOnTouchOutside={true}
                    isActive={this.state.swipeablePanelActive}
                    onClose={() => { this.setState({ swipeablePanelActive: false }) }}
                    onPressCloseButton={() => { this.setState({ swipeablePanelActive: false }) }}
                >
                    <ScrollView style={{ flex: 1 }}>
                        <View style={{ width: '100%', }}>
                            <Text style={{ height: px2dp(70), lineHeight: px2dp(70), textAlign: 'center', fontSize: px2dp(16), fontWeight: '700', fontFamily: 'fantasy' }}>Choose Language</Text>
                            <View>
                                {this.state.regionBox.map((region, index) => {
                                    return (
                                        <TouchableOpacity onPress={() => {
                                            I18n.locale = region.langCode
                                            this.setState({ display: true })
                                            this.setState({ regionValue: region.value })
                                            this.navigate.dispatch(StackActions.reset({
                                                index: 0,
                                                actions: [NavigationActions.navigate({ routeName: "Main" })],
                                            }));
                                        }}>
                                            <View style={{ height: px2dp(70), width: '100%', borderColor: "#e5e6e7", borderBottomWidth: px2dp(1.5), }}>
                                                <View style={{ width: '80%', height: px2dp(70), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <View style={{ flexDirection: 'row', height: px2dp(70), width: '70%' }}>

                                                        <Image style={{ width: px2dp(30), marginTop: px2dp(20), height: px2dp(30), borderRadius: px2dp(30) }} resizeMode='cover' source={region.imgPath}></Image>
                                                        <Text style={{ marginLeft: px2dp(20), lineHeight: px2dp(70), height: px2dp(70), fontSize: px2dp(16), fontWeight: '700', fontFamily: 'fantasy', }}>{region.value}</Text>
                                                    </View>

                                                    {this.state.display ?
                                                        <Image style={{ width: px2dp(25), marginTop: px2dp(25), height: px2dp(25), borderRadius: px2dp(50) }} resizeMode='contain' source={require("../image/tick.jpg")}></Image>
                                                        :
                                                        null
                                                    }
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })}


                                {/* <TouchableOpacity onPress={() => {
                                    this.setState({ display: true })
                                    I18n.locale = 'fr'
                                    this.navigate.dispatch(StackActions.reset({
                                        index: 0,
                                        actions: [NavigationActions.navigate({ routeName: "Setting" })],
                                    }));
                                }}>
                                    <View style={{ height: px2dp(70), width: '100%', borderColor: "#e5e6e7", borderBottomWidth: px2dp(1.5), }}>
                                        <View style={{ width: '80%', height: px2dp(70), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row', height: px2dp(70), width: '70%' }}>

                                                <Image style={{ width: px2dp(30), marginTop: px2dp(20), height: px2dp(30), borderRadius: px2dp(30) }} resizeMode='cover' source={require("../image/tab/fr-flag.png")}></Image>
                                                <Text style={{ marginLeft: px2dp(20), lineHeight: px2dp(70), height: px2dp(70), fontSize: px2dp(16), fontWeight: '700', fontFamily: 'fantasy', }}>{I18n.t("LangActivity.French")}</Text>
                                            </View>
                                            {this.state.display ?
                                                <Image style={{ width: px2dp(25), marginTop: px2dp(25), height: px2dp(25), borderRadius: px2dp(50) }} resizeMode='contain' source={require("../image/tick.jpg")}></Image>
                                                :
                                                null
                                            }
                                        </View>
                                    </View>
                                </TouchableOpacity> */}
                                {/* 
                                <TouchableOpacity
                                    onPress={() => {
                                        I18n.locale = 'fr'
                                        this.props.navigation.dispatch(StackActions.reset({
                                            index: 0,
                                            actions: [NavigationActions.navigate({ routeName: "Main" })],
                                        }));
                                    }}>
                                    <View style={{ width: '90%', height: 55, alignSelf: 'center', padding: 10, marginTop: 11, borderRadius: 10, backgroundColor: '#f0f0f0', borderColor: "#ffffff", borderWidth: 1, flexDirection: 'row', }}>
                                        <Image style={{ width: '27%', height: 34, borderRadius: 10, marginLeft: -18 }} resizeMode='contain' source={require("../image/tab/fr-flag.png")}></Image>
                                        <Text style={{ width: '77%', textAlignVertical: "center", lineHeight: 30, fontSize: 16, fontFamily: 'FontAwesome', }}>{I18n.t("LangActivity.French")}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        I18n.locale = 'es'
                                        this.props.navigation.dispatch(StackActions.reset({
                                            index: 0,
                                            actions: [NavigationActions.navigate({ routeName: "Main" })],
                                        }));
                                    }}><View style={{ width: '90%', height: 55, alignSelf: 'center', padding: 10, marginTop: 11, borderRadius: 10, backgroundColor: '#f0f0f0', borderColor: "#ffffff", borderWidth: 1, flexDirection: 'row', }}>
                                        <Image style={{ width: '27%', height: 34, borderRadius: 10, marginLeft: -18 }} resizeMode='contain' source={require("../image/tab/sp-flag.jpg")}></Image>
                                        <Text style={{ width: '77%', textAlignVertical: "center", lineHeight: 30, fontSize: 16, fontFamily: 'FontAwesome', }}>{I18n.t("LangActivity.Spanish")}</Text></View></TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        I18n.locale = 'ru'
                                        this.props.navigation.dispatch(StackActions.reset({
                                            index: 0,
                                            actions: [NavigationActions.navigate({ routeName: "Main" })],
                                        }));
                                    }}>
                                    <View style={{ width: '90%', height: 55, alignSelf: 'center', padding: 10, marginTop: 11, borderRadius: 10, backgroundColor: '#f0f0f0', borderColor: "#ffffff", borderWidth: 1, flexDirection: 'row', }}>
                                        <Image style={{ width: '27%', height: 34, borderRadius: 10, marginLeft: -18 }} resizeMode='contain' source={require("../image/tab/ru-flag.png")}></Image>
                                        <Text style={{ width: '77%', textAlignVertical: "center", lineHeight: 30, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 34 }}>{I18n.t("LangActivity.Russian")}</Text></View></TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        I18n.locale = 'pt'
                                        this.props.navigation.dispatch(StackActions.reset({
                                            index: 0,
                                            actions: [NavigationActions.navigate({ routeName: "Main" })],
                                        }))
                                    }}>
                                    <View style={{ width: '90%', height: 55, alignSelf: 'center', padding: 10, marginTop: 11, borderRadius: 10, backgroundColor: '#f0f0f0', borderColor: "#ffffff", borderWidth: 1, flexDirection: 'row', }}>
                                        <Image style={{ width: '27%', height: 34, alignItems: 'center', borderRadius: 10, marginLeft: -18 }} resizeMode='contain' source={require("../image/tab/por-flag.jpg")}></Image>
                                        <Text style={{ width: '77%', height: 36, textAlignVertical: "center", lineHeight: 30, fontSize: 16, fontFamily: 'FontAwesome', }}>{I18n.t("LangActivity.Portuguese")}</Text></View></TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        I18n.locale = 'zh-TW'
                                        this.props.navigation.dispatch(StackActions.reset({
                                            index: 0,
                                            actions: [NavigationActions.navigate({ routeName: "Main" })],
                                        }));
                                    }}>
                                    <View style={{ width: '90%', height: 55, alignSelf: 'center', padding: 10, marginTop: 11, borderRadius: 10, backgroundColor: '#f0f0f0', borderColor: "#ffffff", borderWidth: 1, flexDirection: 'row', }}>
                                        <Image style={{ width: '27%', height: 34, borderRadius: 10, marginLeft: -18 }} resizeMode='contain' source={require("../image/tab/hk-flag.png")}></Image>
                                        <Text style={{ width: '77%', textAlignVertical: "center", lineHeight: 30, fontSize: 16, fontFamily: 'FontAwesome', }}>{I18n.t("LangActivity.Chinese")}</Text></View></TouchableOpacity>
                           */}
                            </View>
                        </View>
                    </ScrollView>
                </SwipeablePanel>
            </View>
        );
    }
}

