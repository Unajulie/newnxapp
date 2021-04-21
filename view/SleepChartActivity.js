import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, StatusBar, Button, ScrollView, TouchableOpacity,Image } from 'react-native'
import { I18n } from '../locales/i18n'
import SleepStarChart from './SleepStarChart'
import SleepSpinnerChart from './SleepSpinnerChart'
import { px2dp } from '../src/px2dp';

export default class SleepChartActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("SleepChartActivity.title"),
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
                    <View style={{ width: "100%", height: 60, justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: "90%", height: 60, justifyContent: "center" }}>
                            <Text style={{ textAlign: 'left', fontSize: 24, fontWeight: "bold" }}>{I18n.t('SleepChartActivity.assessment')}</Text>
                        </View>
                    </View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: "90%", backgroundColor: '#EBECED', borderRadius: 20 }}>
                            <View style={{ width: "90%", marginTop: 24, marginBottom: 24, alignSelf: 'center' }}>
                                <Text style={{ marginBottom: 12 }}>
                                    {I18n.t('SleepChartActivity.people')}
                                </Text>
                                <Text style={{ marginBottom: 12 }}>
                                    {I18n.t('SleepChartActivity.include')}
                                </Text>

                            </View>
                        </View>
                    </View>

                    <View style={{ height: px2dp(40) }}></View>
                    <View style={{ backgroundColor: '#F6F7F8' }}>
                        <View style={{ width: '90%', height: px2dp(800), alignSelf: 'center' }}>
                            {/* 1 awake */}
                            <TouchableOpacity onPress={() => this.navigate.push("SleepChartAwake")}
                                style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-79.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('SleepChartActivity.Awake')}
                                             </Text>
                                    </View>
                                    <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*2 fallasleep */}
                            <TouchableOpacity onPress={() => this.navigate.push("SleepChartFall")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-79.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('SleepChartActivity.Fall')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: 80, justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*3 sleepquality  */}
                            <TouchableOpacity onPress={() => this.navigate.push("SleepChartQuality")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-79.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('SleepChartActivity.Quality')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: 80, justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*4 affectmood  */}
                            <TouchableOpacity onPress={() => this.navigate.push("SleepChartMood")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-79.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('SleepChartActivity.affect')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: 80, justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*5 affectability  */}
                            <TouchableOpacity onPress={() => this.navigate.push("SleepChartAbility")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-79.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('SleepChartActivity.Ability')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: 80, justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*6 troubleyou  */}
                            <TouchableOpacity onPress={() => this.navigate.push("SleepChartTrouble")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-79.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('SleepChartActivity.Trouble')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: 80, justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: px2dp(20) }}></View>
                            {/*7 wheneffect  */}
                            <TouchableOpacity onPress={() => this.navigate.push("SleepChartEffect")} style={{ backgroundColor: '#FEFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', }}>
                                <View style={{ height: px2dp(80), flexDirection: 'row', }}>
                                    <View style={{ width: '20%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/mood-79.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '65%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('SleepChartActivity.When')}
                                    </Text>
                                    </View>
                                    <View style={{ width: '15%', height: 80, justifyContent: 'center' }}>
                                        <Image style={{ height: px2dp(50), width: '46%', lineHeight: px2dp(80) }} resizeMode='contain' source={require("../image/icons/left-1.png")}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

{/* 
                    <View style={{ width: "100%", height: 410, marginTop: 23, marginBottom: 23 }}>
                        <SleepSpinnerChart
                            title={
                                <View style={{ width: "90%", height: 75 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('SleepChartActivity.total')}</Text>
                                    </View>
                                </View>
                            }
                            unit={I18n.t('SleepChartActivity.util')}
                            yAxisLabelName={I18n.t('SleepChartActivity.util')}
                            yAxisLabelValue="awake"
                            column="awake"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 410, marginTop: 23, marginBottom: 23 }}>
                        <SleepSpinnerChart
                            title={
                                <View style={{ width: "90%", height: 75 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('SleepChartActivity.asleep')}</Text>
                                    </View>
                                </View>
                            }
                            unit={I18n.t('SleepChartActivity.night')}
                            yAxisLabelName={I18n.t('SleepChartActivity.night')}
                            yAxisLabelValue="fallasleep"
                            column="fallasleep"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 400, marginTop: 23, marginBottom: 23 }}>
                        <SleepStarChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('SleepChartActivity.quality')}</Text>
                                    </View>
                                </View>
                            }
                            count={3}
                            reviews={["Good", "Average", "Poor"]}
                            yAxisLabelName={I18n.t('SleepChartActivity.score')}
                            yAxisLabelValue="sleepquality"
                            column="sleepquality"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 415, marginTop: 23, marginBottom: 23 }}>
                        <SleepStarChart
                            title={
                                <View style={{ width: "90%", height: 60 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('SleepChartActivity.mood')}</Text>
                                    </View>
                                </View>
                            }
                            count={4}
                            reviews={["None", "Little", "Somewhat", "Much"]}
                            yAxisLabelName={I18n.t('SleepChartActivity.score')}
                            yAxisLabelValue="affectmood"
                            column="affectmood"
                        />
                    </View> */}
                    {/* <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 435, marginTop: 23, marginBottom: 23 }}>
                        <SleepStarChart
                            title={
                                <View style={{ width: "90%", height: 80 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('SleepChartActivity.productivity')}</Text>
                                    </View>
                                </View>
                            }
                            count={4}
                            reviews={["None", "Little", "Somewhat", "Much"]}
                            yAxisLabelName={I18n.t('SleepChartActivity.score')}
                            yAxisLabelValue="affectability"
                            column="affectability"
                        />
                    </View> */}
                    {/* <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 420, marginTop: 23, marginBottom: 23 }}>
                        <SleepStarChart
                            title={
                                <View style={{ width: "90%", height: 60 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('SleepChartActivity.general')}</Text>
                                    </View>
                                </View>
                            }
                            count={4}
                            reviews={["None", "Little", "Somewhat", "Much"]}
                            yAxisLabelName={I18n.t('SleepChartActivity.score')}
                            yAxisLabelValue="troubleyou"
                            column="troubleyou"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View> */}
                    {/* <View style={{ width: "100%", height: 410, marginTop: 23, marginBottom: 23 }}>
                        <SleepSpinnerChart
                            title={
                                <View style={{ width: "90%", height: 75 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('SleepChartActivity.problem')}</Text>
                                    </View>
                                </View>
                            }
                            unit={I18n.t('SleepChartActivity.month')}
                            yAxisLabelName={I18n.t('SleepChartActivity.month')}
                            yAxisLabelValue="wheneffect"
                            column="wheneffect"
                        />
                    </View>
                    <TouchableOpacity >
                        <Button title="save" onPress={onButtonPress} color="#ff7668" />
                    </TouchableOpacity> */}
                </View>
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