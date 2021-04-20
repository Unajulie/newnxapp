import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Image, Alert, TouchableOpacity, Button, ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';
import McGillChart from "./McGillChart"
import { px2dp } from '../src/px2dp';

type Props = {};
export default class McGillChartActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("McGillChartActivity.title"),
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
                <View style={{ backgroundColor: '#F6F7F8' }}>
                    <View style={{ width: "100%", height: 60, justifyContent: "center" }}><Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>{I18n.t('McGillChartActivity.pain')}</Text></View>
                    {/* <View style={{ width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#efefef" }}>
                        <View style={{ width: "92%",marginTop:23,marginBottom:23 }}>
                            <Text style={{}}>
                                {I18n.t('McGillChartActivity.wideused')}
                                {I18n.t('McGillChartActivity.provides')}
                                {I18n.t('McGillChartActivity.several')}
                                {I18n.t('McGillChartActivity.research')}
                            </Text>
                            <View style={{ width: "100%", height: 10 }}></View>
                        </View>
                    </View> */}
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: "90%", backgroundColor:'#EBECED',borderRadius:20  }}>
                            <View style={{ width: "90%", marginTop: 24, marginBottom: 24,alignSelf:'center' }}>
                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>{I18n.t('McGillChartActivity.feel')}</Text>
                                <Text style={{ fontSize: 14 }}>{I18n.t('McGillChartActivity.following')}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height:px2dp(40)}}></View>
                    <View style={{ backgroundColor: '#F6F7F8' }}>
                        <View style={{ width: '90%', height: px2dp(1510), alignSelf: 'center' }}>
                            {/* 1 throbbing */}
                            <TouchableOpacity onPress={() => this.navigate.push("McGillChartThrobbing")}
                                style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/life-66.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('McGillChartActivity.throbbing')}
                                             </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/* shooting */}
                            <TouchableOpacity onPress={() => this.navigate.push("McGillChartShooting")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/life-66.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('McGillChartActivity.shooting')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: 80, justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/* 3 stabbing */}
                            <TouchableOpacity onPress={() => this.navigate.push("McGillChartStabbing")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/life-66.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('McGillChartActivity.stabbing')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/* 4 sharp */}
                            <TouchableOpacity onPress={() => this.navigate.push("McGillChartSharp")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/life-66.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('McGillChartActivity.sharp')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: 20 }}></View>
                            {/* 5 cramping   */}
                            <TouchableOpacity onPress={() => this.navigate.push("McGillChartCramping")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/life-66.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('McGillChartActivity.cramping')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*6  gnawing  */}
                            <TouchableOpacity onPress={() => this.navigate.push("McGillChartGnawing")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/life-66.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('McGillChartActivity.gnawing')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*7  burning  */}
                            <TouchableOpacity onPress={() => this.navigate.push("McGillChartBurning")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/life-66.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('McGillChartActivity.hotburning')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*8  aching  */}
                            <TouchableOpacity onPress={() => this.navigate.push("McGillChartAching")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/life-66.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('McGillChartActivity.aching')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*9  heavy  */}
                            <TouchableOpacity onPress={() => this.navigate.push("McGillChartHeavy")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/life-66.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('McGillChartActivity.heavy')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*10  tender  */}
                            <TouchableOpacity onPress={() => this.navigate.push("McGillChartTender")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/life-66.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('McGillChartActivity.tender')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*11  split  */}
                            <TouchableOpacity onPress={() => this.navigate.push("McGillChartSplit")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/life-66.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('McGillChartActivity.Split')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*12  exhausting  */}
                            <TouchableOpacity onPress={() => this.navigate.push("McGillChartExhausting")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/life-66.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('McGillChartActivity.exhausting')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*13  sickening  */}
                            <TouchableOpacity onPress={() => this.navigate.push("McGillChartSickening")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/life-66.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('McGillChartActivity.sickening')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*14  fearful */}
                            <TouchableOpacity onPress={() => this.navigate.push("McGillChartFearful")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/life-66.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('McGillChartActivity.fearful')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                        </View>
                    </View>





                    {/* <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.throbbing')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="throbbing"
                            column="throbbing"
                        />
                    </View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.shooting')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="shooting"
                            column="shooting"
                        />
                    </View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.stabbing')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="stabbing"
                            column="stabbing"
                        />
                    </View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.sharp')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="sharp"
                            column="sharp"
                        />
                    </View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.cramping')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="cramping"
                            column="cramping"
                        />
                    </View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.gnawing')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="gnawing"
                            column="gnawing"
                        />
                    </View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.hotburning')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="burning"
                            column="burning"
                        />
                    </View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.aching')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="aching"
                            column="aching"
                        />
                    </View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.heavy')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="heavy"
                            column="heavy"
                        />
                    </View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.tender')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="tender"
                            column="tender"
                        />
                    </View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.splitting')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="split"
                            column="split"
                        />
                    </View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.exhausting')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="exhausting"
                            column="exhausting"
                        />
                    </View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.sickening')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="sickening"
                            column="sickening"
                        />
                    </View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.fearful')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="fearful"
                            column="fearful"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                </View>
                {/* <TouchableOpacity >
                    <Button title="save" onPress={onButtonPress} color="#d62e2d" />
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