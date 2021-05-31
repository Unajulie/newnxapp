import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, } from 'react-native';
import { I18n } from '../locales/i18n';
import Session from '../storage/Session';
import { px2dp } from '../src/px2dp';
export default class TestprocessActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("TestprocessActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = { user: null }
    }
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
        });
    }
    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView style={{flex:1}}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <ImageBackground style={{ width: '100%', height: 223 }}
                    source={require('../image/icons/tp1.png')} resizeMode='cover'>
                    <Text style={{ marginLeft: 19, marginTop: 99, fontSize: 34, color: '#ffffff' }}>{I18n.t('TestprocessActivity.testprocess')}</Text>
                </ImageBackground>
                <View style={{ width: '100%', height: px2dp(100), borderTopRightRadius: px2dp(30), borderTopLeftRadius: px2dp(30), marginTop: px2dp(-30), backgroundColor: '#ffffff' }}>
                    {/* 下载程序 */}
                    <View style={{ height: px2dp(30) }}></View>
                    <TouchableOpacity>
                        <ImageBackground style={{ width: '100%', }} source={require('../image/icons/tps1.png')} resizeMode='cover'>
                            <Text style={{ fontSize: px2dp(16), height: px2dp(70),lineHeight:px2dp(70),color:'#000', marginLeft: '30%',marginRight:'20%',fontFamily:'fantasy' }}>{I18n.t('TestprocessActivity.downloadapp')}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{ height: px2dp(20) }}></View>
                {/* 购买产品 */}
                <TouchableOpacity onPress={() => this.navigate.push("Mall")}>
                    <ImageBackground style={{ width: '100%', }} source={require('../image/icons/tps2.png')} resizeMode='cover'>
                        <Text style={{ fontSize: px2dp(16), height: px2dp(70),lineHeight:px2dp(25),color:'#000', marginLeft: '30%',marginRight:'20%', fontFamily:'fantasy',paddingTop:px2dp(10) }}>{I18n.t('TestprocessActivity.purchasekit')}</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={{ height: 30 }}></View>
                {/* 问卷调查 */}
                <TouchableOpacity onPress={() => this.navigate.push("Quesnote")}>
                    <ImageBackground style={{ width: '100%', }} source={require('../image/icons/tps3.png')} resizeMode='cover'>
                        <Text style={{ fontSize: px2dp(16), height: px2dp(70),lineHeight:px2dp(25),color:'#000', marginLeft: '30%',marginRight:'20%',fontFamily:'fantasy',paddingTop:px2dp(10) }}>{I18n.t('TestprocessActivity.fillques')}{"\n"}
                            <Text style={{ fontSize: 16, textAlign: 'left', }}>{I18n.t('TestprocessActivity.fillques2')}</Text></Text>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={{ height: 30 }}></View>
                {/* 收集您的唾液样本 */}
                <TouchableOpacity>
                    <ImageBackground style={{ width: '100%', }} source={require('../image/icons/tps4.png')} resizeMode='cover'>
                        <Text style={{ fontSize: px2dp(16), height: px2dp(70),lineHeight:px2dp(25),color:'#000', marginLeft: '30%',marginRight:'20%',fontFamily:'fantasy',paddingTop:px2dp(10) }}>{I18n.t('TestprocessActivity.collect')}{"\n"}
                            <Text style={{ fontSize: 16, textAlign: 'left', }}>{I18n.t('TestprocessActivity.collect2')}</Text></Text>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={{ height: 30 }}></View>
                {/* 寄回樣本 */}
                <TouchableOpacity>
                    <ImageBackground style={{ width: '100%', }} source={require('../image/icons/tps5.png')} resizeMode='cover'>
                        <Text style={{ fontSize: px2dp(16), height: px2dp(70),lineHeight:px2dp(25),color:'#000', marginLeft: '30%',marginRight:'20%',fontFamily:'fantasy',paddingTop:px2dp(10) }}>{I18n.t('TestprocessActivity.sample')}{"\n"}
                            <Text style={{ fontSize: 16, textAlign: 'left', }}>{I18n.t('TestprocessActivity.back')}</Text></Text>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={{ height: 30 }}></View>
                {/* DNA 提取和分析 */}
                <TouchableOpacity>
                    <ImageBackground style={{ width: '100%', }} source={require('../image/icons/tps6.png')} resizeMode='cover'>
                        <Text style={{ fontSize: px2dp(16), height: px2dp(70),lineHeight:px2dp(25),color:'#000', marginLeft: '30%',marginRight:'20%',fontFamily:'fantasy',paddingTop:px2dp(10)  }}>{I18n.t('TestprocessActivity.extraction')}{"\n"}
                            <Text style={{ fontSize: 16, textAlign: 'left', }}>{I18n.t('TestprocessActivity.extraction2')}</Text></Text>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={{ height: 30 }}></View>
                {/* DNA 發出報告 */}
                <TouchableOpacity onPress={() => { this.state.user == null ? this.navigate.push("Login") : this.navigate.push("DnaReport") }}>
                    <ImageBackground style={{ width: '100%', }} source={require('../image/icons/tps7.png')} resizeMode='cover'>
                        <Text style={{ fontSize: px2dp(16), height: px2dp(70),lineHeight:px2dp(25),color:'#000', marginLeft: '30%',marginRight:'20%',fontFamily:'fantasy',paddingTop:px2dp(10) }}>{I18n.t('TestprocessActivity.report')}{"\n"}
                            <Text style={{ fontSize: 16, textAlign: 'left', }}>{I18n.t('TestprocessActivity.report2')}</Text></Text>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={{ height: 30 }}></View>
            </ScrollView>
        );
    }
}

