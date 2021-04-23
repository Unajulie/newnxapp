import React, { Component } from 'react';
import { StatusBar, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';
export default class CompanyActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("CompanyActivity.title"),
        })
    }

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                    <ImageBackground style={{ width: '100%', height: px2dp(256) }} imageStyle={{ width: '100%', }} source={require('../image/enpic/company.jpg')} resizeMode='cover'  >
                        <Text style={{ width: '90%', alignSelf: 'center', fontFamily: 'fantasy', marginTop: px2dp(30), fontSize: px2dp(30), lineHeight: px2dp(45), color: '#ffffff' }}>{I18n.t('CompanyActivity.team')}</Text>
                    </ImageBackground>
                    <View style={{ width: '100%',marginTop:px2dp(-30),height:px2dp(400),zIndex:999,backgroundColor:'#ffffff',borderTopLeftRadius:px2dp(30),borderTopRightRadius:px2dp(30) }}>
                        <View style={{ marginTop: px2dp(20) }}>
                            <Text style={{ width: '100%', height: px2dp(40), fontSize: px2dp(24), lineHeight: px2dp(40), fontFamily: 'fantasy', marginLeft: px2dp(15), color: '#000', fontWeight: '700' }}>{I18n.t('CompanyActivity.title')}</Text>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), marginBottom: px2dp(20), flexDirection: 'row', borderBottomColor: '#f0f0f0' }}>
                            <Image style={{ height: px2dp(29), width: '10%' }} resizeMode='contain' source={require("../image/enpic/comp1.png")}></Image>
                            <Text style={{ width: '90%', fontSize: px2dp(16), lineHeight: px2dp(18), fontFamily: 'fantasy', color: '#000', }}>{I18n.t('CompanyActivity.nextgeneration')}</Text>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(29), marginBottom: px2dp(20), flexDirection: 'row', borderBottomColor: '#f0f0f0' }}>
                            <Image style={{ height: px2dp(29), width: '10%' }} resizeMode='contain' source={require("../image/enpic/comp1.png")}></Image>
                            <Text style={{ width: '90%', fontSize: px2dp(16), lineHeight: px2dp(18), fontFamily: 'fantasy', color: '#000' }}>{I18n.t('CompanyActivity.ecosystem')}</Text>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(29), marginBottom: px2dp(20), flexDirection: 'row', borderBottomColor: '#f0f0f0' }}>
                            <Image style={{ height: px2dp(29), width: '10%' }} resizeMode='contain' source={require("../image/enpic/comp1.png")}></Image>
                            <Text style={{ width: '90%', fontSize: px2dp(16), lineHeight: px2dp(18), fontFamily: 'fantasy', color: '#000' }}>{I18n.t('CompanyActivity.ittechnology')}</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: px2dp(12), textAlign: 'center', marginBottom: px2dp(20), marginTop: px2dp(20), fontFamily: 'fantasy' }}>{I18n.t('TabHomeActivity.allright')}</Text>
                </ScrollView>
            </View>
        );
    }
}

