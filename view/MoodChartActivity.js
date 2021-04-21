import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';
import MoodChart from "./MoodChart";
import { px2dp } from '../src/px2dp';

type Props = {};
export default class MoodChartActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("MoodChartActivity.title"),
        })
    }

    constructor(props) {
        super(props);
    }

    render() {
        const onButtonPress = () => {
            Alert.alert(I18n.t('LifeStyleChartActivity.savedata'));
        };
        this.navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <ScrollView>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <View>
                    <View style={{ width: "100%", height: px2dp(30), backgroundColor: '#F6F7F8' }}></View>
                    <View style={{ width: "100%", height: px2dp(60), backgroundColor: '#F6F7F8', lineHeight: px2dp(60) }}>
                        <View style={{ width: '90%', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 24, fontWeight: "bold", color: '#0A0A0A' }}>{I18n.t('MoodChartActivity.assessment')}</Text>
                        </View>
                    </View>

                    {/* 改新mood页面 */}

                    <View style={{ backgroundColor: '#F6F7F8' }}>
                        <View style={{ width: '90%', height: px2dp(1600), alignSelf: 'center' }}>
                            {/* 1 pleasure */}
                            <TouchableOpacity onPress={() => this.navigate.push("MoodChartPleasure")}
                                style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-77.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('MoodChartActivity.Pleasure')}
                                             </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/* 2、Depressed */}
                            <TouchableOpacity onPress={() => this.navigate.push("MoodChartDepressed")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-78.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('MoodChartActivity.Depressed')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: 80, justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/* 3 asleep */}
                            <TouchableOpacity onPress={() => this.navigate.push("MoodChartAsleep")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-79.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('MoodChartActivity.Asleep')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/* 4 energy */}
                            <TouchableOpacity onPress={() => this.navigate.push("MoodChartEnergy")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-80.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('MoodChartActivity.Energy')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: 20 }}></View>
                            {/* 5 overeating  */}
                            <TouchableOpacity onPress={() => this.navigate.push("MoodChartOverEating")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-81.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('MoodChartActivity.Eating')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*6  failure */}
                            <TouchableOpacity onPress={() => this.navigate.push("MoodChartFailure")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-82.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('MoodChartActivity.Failure')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*7  focus */}
                            <TouchableOpacity onPress={() => this.navigate.push("MoodChartFocus")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-83.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('MoodChartActivity.Focus')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*8  slow */}
                            <TouchableOpacity onPress={() => this.navigate.push("MoodChartSlow")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-84.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('MoodChartActivity.Slow')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*9  anxiety */}
                            <TouchableOpacity onPress={() => this.navigate.push("MoodChartAnxiety")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-85.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('MoodChartActivity.Anxiety')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*10  nervous */}
                            <TouchableOpacity onPress={() => this.navigate.push("MoodChartNervous")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-86.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('MoodChartActivity.Nervous')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*11  losecontrol */}
                            <TouchableOpacity onPress={() => this.navigate.push("MoodChartLoseControl")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-87.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('MoodChartActivity.Control')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*12  worry */}
                            <TouchableOpacity onPress={() => this.navigate.push("MoodChartWorry")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-88.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('MoodChartActivity.Worry')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*13  loserelax */}
                            <TouchableOpacity onPress={() => this.navigate.push("MoodChartLoseRelax")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-89.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('MoodChartActivity.Relax')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*14  restless */}
                            <TouchableOpacity onPress={() => this.navigate.push("MoodChartRestLess")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-90.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('MoodChartActivity.Less')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*15  irritable */}
                            <TouchableOpacity onPress={() => this.navigate.push("MoodChartIrritable")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-91.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('MoodChartActivity.Irritable')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>



                    {/* <View style={{ width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#efefef" }}>
                        <View style={{ width: "90%", marginTop: 23, marginBottom: 23 }}>
                            <Text style={{ marginBottom: 12 }}>
                                {I18n.t('MoodChartActivity.emotions')}
                            </Text>
                            <Text style={{ marginBottom: 12 }}>
                                {I18n.t('MoodChartActivity.short')}
                            </Text>
                            <Text style={{ marginBottom: 12 }}>
                                {I18n.t('MoodChartActivity.fortnight')}
                            </Text>
                            <Text style={{ marginBottom: 12 }}>
                                {I18n.t('MoodChartActivity.advice')}
                            </Text>
                        </View>
                    </View> */}


                    {/* <View style={{ width: "100%", height: 400, marginTop: 23, marginBottom: 23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.things')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="pleasure"
                            column="pleasure"
                        />
                    </View> */}
                    {/* <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400, marginTop: 23, marginBottom: 23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.hopeless')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="depressed"
                            column="depressed"
                        />
                    </View> */}
                    {/* <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400, marginTop: 23, marginBottom: 23 }}>

                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.asleep')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="asleep"
                            column="asleep"
                        />
                    </View> */}
                    {/* <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400, marginTop: 23, marginBottom: 23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.energy')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="energy"
                            column="energy"
                        />
                    </View> */}
                    {/* <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400, marginTop: 23, marginBottom: 23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.appetite')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="overeating"
                            column="overeating"
                        />
                    </View> */}
                    {/* <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 450, marginTop: 23, marginBottom: 23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 85 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.family')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="failure"
                            column="failure"
                        />
                    </View> */}
                    {/* <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 450, marginTop: 23, marginBottom: 23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 80 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.reading')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="focus"
                            column="focus"
                        />
                    </View> */}
                    {/* <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 500, marginTop: 23, marginBottom: 23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 125 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.usual')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="slow"
                            column="slow"
                        />
                    </View> */}
                    {/* <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400, marginTop: 23, marginBottom: 23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.attack')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="anxiety"
                            column="anxiety"
                        />
                    </View> */}
                    {/* <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400, marginTop: 23, marginBottom: 23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.anxious')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="nervous"
                            column="nervous"
                        />
                    </View> */}
                    {/* <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400, marginTop: 23, marginBottom: 23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.worrying')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="losecontrol"
                            column="losecontrol"
                        />
                    </View> */}
                    {/* <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400, marginTop: 23, marginBottom: 23 }}>

                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.different')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="worry"
                            column="worry"
                        />
                    </View> */}
                    {/* <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400, marginTop: 23, marginBottom: 23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.relaxing')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="loserelax"
                            column="loserelax"
                        />
                    </View> */}
                    {/* <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400, marginTop: 23, marginBottom: 23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.still')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="restless"
                            column="restless"
                        />
                    </View> */}
                    {/* <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400, marginTop: 23, marginBottom: 23 }}>

                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.irritable')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="irritable"
                            column="irritable"
                        />
                    </View> */}
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                </View>

                {/* <TouchableOpacity >
                    <Button title="save" onPress={onButtonPress} color="#685cf2" />
                </TouchableOpacity> */}
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    videoContainer: {
        margin: 10
    }
})