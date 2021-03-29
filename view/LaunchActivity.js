import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Button } from "native-base";
import { I18n } from '../locales/i18n';
import Session from '../storage/Session'
import Swiper from 'react-native-swiper'
import { px2dp } from '../src/px2dp'
import { ImageBackground } from 'react-native';

export default class LaunchActivity extends Component {


    constructor(props) {
        super(props);
        Session.save("launchershow", true);

        this.state = {
            user: null,
            animating: false,
            disabled: true,
            dispaly: true,
        };
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
            this.setState({ dispaly: false })
        });
    }
    render() {
        this.navigate = this.props.navigation;

        return (

            <View style={{ flex: 1, flexDirection: "column" }}>
                <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                <View style={{ width: "100%", height: 440, zIndex: 0 }}>
                    <View style={{ width: "100%", height: 440 }}>
                        <Swiper
                            height={px2dp(400)}//组件高度
                            horizontal={true}//水平轮播
                            showsPagination={true}//底部圆点
                            showsButtons={false}
                            dot={<View style={{ width: px2dp(13), margin: px2dp(3), height: px2dp(3), borderRadius: px2dp(30), backgroundColor: '#cdcdcd', marginBottom: px2dp(20) }}></View>}
                            activeDot={<View style={{ width: px2dp(20), margin: px2dp(3), height: px2dp(3), borderRadius: px2dp(30), backgroundColor: '#ffffff', marginBottom: px2dp(20) }}></View>}
                            loop={true}
                            autoplay={false}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <ImageBackground style={{ width: '100%', height: '100%', position: 'relative' }} source={require('../image/enpic/swiper1.jpg')} resizeMode='cover'>
                                    <View style={{ flex: 1, width: px2dp(80), height: px2dp(80), borderRadius: px2dp(50), margin: px2dp(20), marginTop: px2dp(60), backgroundColor: "#ffffff", position: "absolute" }}>
                                        <Image style={{ width: '100%', height: px2dp(80), borderRadius: px2dp(50) }} source={require('../image/icons/logo.png')} resizeMode="contain" />
                                    </View>
                                    <Text style={{ flex: 1, zIndex: 33, marginTop: px2dp(160), margin: px2dp(20), color: '#ffffff', fontSize: px2dp(40), fontWeight: '600' }}>Stop Counting your Age!</Text>
                                    <View style={{ flex: 1.2, height: px2dp(100), width: '100%', borderTopLeftRadius: px2dp(30), borderTopRightRadius: px2dp(30), backgroundColor: 'rgba(125, 125, 125, 0.6)' }}>
                                        <Text style={{ color: '#ffffff', fontSize: px2dp(15),fontWeight:'300', margin: px2dp(20), lineHeight: px2dp(19) }}>By birthdays or candles on the cake, wrinkles, crow's feet or the frown lines on your face — those are only numbers.</Text>
                                    </View>
                                </ImageBackground>

                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <ImageBackground style={{ width: '100%', height: '100%', position: 'relative' }} source={require('../image/enpic/swiper2.jpg')} resizeMode='cover'>
                                    <View style={{ flex: 1, width: px2dp(80), height: px2dp(80), borderRadius: px2dp(50), margin: px2dp(20), marginTop: px2dp(60), backgroundColor: "#ffffff", position: "absolute" }}>
                                        <Image style={{ width: '100%', height: px2dp(80), borderRadius: px2dp(50) }} source={require('../image/icons/logo.png')} resizeMode="contain" />
                                    </View>
                                    <Text style={{ flex: 1, zIndex: 33, marginTop: px2dp(160), margin: px2dp(20), color: '#ffffff', fontSize: px2dp(40), fontWeight: '600' }}>How Old Are You, Really?</Text>
                                    <View style={{ flex: 1.2, height: px2dp(100), width: '100%', borderTopLeftRadius: px2dp(30), borderTopRightRadius: px2dp(30), backgroundColor: 'rgba(125, 125, 125, 0.6)' }}>
                                        <Text style={{ color: '#ffffff', fontSize: px2dp(15),fontWeight:'300', margin: px2dp(20), lineHeight: px2dp(19) }}>The only age that counts is your biological DNA age.</Text>
                                    </View>
                                </ImageBackground>

                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <ImageBackground style={{ width: '100%', height: '100%', position: 'relative' }} source={require('../image/enpic/swiper3.jpg')} resizeMode='cover'>
                                    <View style={{ flex: 1, width: px2dp(80), height: px2dp(80), borderRadius: px2dp(50), margin: px2dp(20), marginTop: px2dp(60), backgroundColor: "#ffffff", position: "absolute" }}>
                                        <Image style={{ width: '100%', height: px2dp(80), borderRadius: px2dp(50) }} source={require('../image/icons/logo.png')} resizeMode="contain" />
                                    </View>
                                    <Text style={{ flex: 1, zIndex: 33, marginTop: px2dp(160), margin: px2dp(20), color: '#ffffff', fontSize: px2dp(40), fontWeight: '600' }}>Discover Your Biological Age</Text>
                                    <View style={{ flex: 1.2, height: px2dp(100), width: '100%', borderTopLeftRadius: px2dp(30), borderTopRightRadius: px2dp(30), backgroundColor: 'rgba(125, 125, 125, 0.6)' }}>
                                        <Text style={{ color: '#ffffff', fontSize: px2dp(15),fontWeight:'300', margin: px2dp(20), lineHeight: px2dp(19) }}>Biological age can be measured with Only 2ml saliva sample</Text>
                                    </View>
                                </ImageBackground>

                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <ImageBackground style={{ width: '100%', height: '100%', position: 'relative' }} source={require('../image/enpic/swiper4.jpg')} resizeMode='cover'>
                                    <View style={{ flex: 1, width: px2dp(80), height: px2dp(80), borderRadius: px2dp(50), margin: px2dp(20), marginTop: px2dp(60), backgroundColor: "#ffffff", position: "absolute" }}>
                                        <Image style={{ width: '100%', height: px2dp(80), borderRadius: px2dp(50) }} source={require('../image/icons/logo.png')} resizeMode="contain" />
                                    </View>
                                    <Text style={{ flex: 1, zIndex: 33, marginTop: px2dp(160), margin: px2dp(20), color: '#ffffff', fontSize: px2dp(40), fontWeight: '600' }}>Reverse Your Age</Text>
                                    <View style={{ flex: 1.2, height: px2dp(100), width: '100%', borderTopLeftRadius: px2dp(30), borderTopRightRadius: px2dp(30), backgroundColor: 'rgba(125, 125, 125, 0.6)' }}>
                                        <Text style={{ color: '#ffffff', fontSize: px2dp(15),fontWeight:'300', margin: px2dp(20), lineHeight: px2dp(19) }}>Importantly "epigenetics" in different from  "genetics" is potentially reversible by dietary interventions and life style changes.</Text>
                                    </View>
                                </ImageBackground>

                            </View>
                        </Swiper>
                    </View>
                </View>
                <View style={{ width: '100%', alignSelf: 'center', marginTop: px2dp(-30), borderTopLeftRadius: px2dp(30), borderTopRightRadius: px2dp(30), backgroundColor: '#ffffff', zIndex: 999 }}>
                    <View style={{ width: "100%", height: px2dp(40), marginTop: px2dp(30), justifyContent: "space-between", marginBottom: 30 }} >
                        <View style={{ width: "90%", height: px2dp(40),alignSelf:"center", marginBottom:px2dp(20),}}>
                            <TouchableOpacity >
                                <Button style={{ width: "100%", height: px2dp(40), borderRadius: px2dp(30), backgroundColor: "#007ad7" }}
                                    ref={ref => this.reportPage = ref}
                                    onPress={() => this.state.user == null ?
                                        this.navigate.push("Register")
                                        :
                                        this.state.user.privatekey ?
                                            this.navigate.push("DnaReport")
                                            :
                                            this.navigate.push("RasEncryptionActivity")}
                                >
                                    <Text style={{ width: "100%", height: 40, lineHeight: 40, color: "#ffffff", textAlign: "center", textAlignVertical: "center", fontWeight: "700" }}>{this.state.user == null ? I18n.t("LaunchActivity.registerkit") : I18n.t("LaunchActivity.myreport")} </Text>
                                </Button>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "90%", height: px2dp(40),alignSelf:"center",  marginBottom:px2dp(20),  }}>
                            <TouchableOpacity >
                                <Button style={{ width: "100%", height: px2dp(40),backgroundColor: "#f0ffff",borderWidth:px2dp(1),borderColor:'#007ad7', borderRadius: px2dp(30), }}
                                    onPress={() => this.navigate.push("Mall")}>
                                    <Text style={{ width: "100%", height: 40, color: "#007ad7", lineHeight: 40, textAlign: "center", textAlignVertical: "center" }}>{I18n.t("LaunchActivity.buykit")}</Text>
                                </Button>
                            </TouchableOpacity>
                        </View>


                        {this.state.dispaly == true ?
                            <View style={{ width: "90%", height: px2dp(40),alignSelf:'center',marginBottom:px2dp(20) }}>
                                <Button style={{ width: "100%", height: px2dp(40), borderRadius: px2dp(30), backgroundColor: "#ffdead",borderWidth:px2dp(1), borderColor:'#d08037' }}
                                    onPress={() => this.navigate.push('Login')}>
                                    <Text style={{ width: "100%", height: px2dp(40), color: "#e35a24", lineHeight: 40, textAlign: "center", textAlignVertical: "center" }}>{I18n.t("LaunchActivity.signin")}</Text>
                                </Button>
                            </View>
                            : null}
                            <View style={{ width: "100%", height: 40,marginTop: 20}} onPress={() => this.navigate.push('Main')}>
                                <Text style={{ width: "100%", height: 40, lineHeight: 40, color: "#007ad7",fontWeight: "700",textDecorationLine:'underline', textAlign: "center", textAlignVertical: "center" }}>{I18n.t("LaunchActivity.readmore")}</Text>
                            </View>
                    </View>
                </View>
            </View>
        );
    }
}

