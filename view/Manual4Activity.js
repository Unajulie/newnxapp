import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Image, ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';
export default class Manual4Activity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("Manual4Activity.title"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                 <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), paddingBottom: px2dp(20), }}>
                    <Text style={{ textAlign: 'center', fontSize: px2dp(20),marginBottom:px2dp(20),color:'#000', fontFamily: 'fantasy', fontWeight: 'bold', textAlignVertical: 'center' }}>{I18n.t('Manual4Activity.calculate')}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{  width: '7%', fontSize: px2dp(16), fontWeight: 'bold',lineHeight:px2dp(20),color:'#000',fontFamily:'fantasy' }}>1.</Text>
                        <Text style={{  width: '95%', fontSize: px2dp(16), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20),color:'#000', }}>{I18n.t('Manual4Activity.slider')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(230) }} source={require('../image/enpic/diet.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{  width: '7%', fontSize: px2dp(16), fontWeight: 'bold',lineHeight:px2dp(20),color:'#000',fontFamily:'fantasy' }}>2.</Text>
                        <Text style={{  width: '95%', fontSize: px2dp(16), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20),color:'#000', }}>{I18n.t('Manual4Activity.calfood')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(230) }} source={require('../image/enpic/diet1.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{  width: '7%', fontSize: px2dp(16), fontWeight: 'bold',lineHeight:px2dp(20),color:'#000',fontFamily:'fantasy' }}>3.</Text>
                        <Text style={{  width: '95%', fontSize: px2dp(16), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20),color:'#000', }}>{I18n.t('Manual4Activity.entering')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(230) }} source={require('../image/enpic/diet2.png')} resizeMode='contain' />
                </View>
            </ScrollView >
        );
    }
}

