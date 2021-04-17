import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';
export default class Manual1Activity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("QAActivity.title"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
              <StatusBar animated={true}  hidden={true} translucent={true} barStyle={'light-content'} />

                <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), paddingBottom: px2dp(20), }}>
                    <Text style={{ textAlign: 'center', fontSize: px2dp(20),marginBottom:px2dp(32), fontFamily: 'fantasy', color:'#000',fontWeight: 'bold', textAlignVertical: 'center' }}>{I18n.t('Manual1Activity.getmy')}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{  width: '7%', fontSize: px2dp(16), fontWeight: 'bold' , fontFamily: 'fantasy',lineHeight:px2dp(20)}}>1.</Text>
                        <Text style={{  width: '95%', fontSize: px2dp(16), marginBottom: 8, fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('Manual1Activity.login')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(400) }} source={require('../image/enpic/man6.png')} resizeMode='contain' />

                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{  width: '7%', fontSize: px2dp(16), fontWeight: 'bold' , fontFamily: 'fantasy',lineHeight:px2dp(20)}}>☞ </Text>
                        <Text style={{ fontSize: 16, }}>{I18n.t('Manual1Activity.username')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(400) }} source={require('../image/enpic/man7.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ width: '7%', fontSize: px2dp(16), fontWeight: 'bold', fontFamily: 'fantasy',lineHeight:px2dp(20) }}>2.</Text>
                        <Text style={{width: '95%', fontSize: px2dp(16), marginBottom: 8, fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('Manual1Activity.gohome')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(400) }} source={require('../image/enpic/man0.png')} resizeMode='contain' />

                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ width: '7%', fontSize: px2dp(16), fontWeight: 'bold' , fontFamily: 'fantasy',lineHeight:px2dp(20)}}>3.</Text>
                        <Text style={{  width: '95%', fontSize: px2dp(16), marginBottom: 8, fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('Manual1Activity.barcode')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(400) }} source={require('../image/enpic/man2.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:34 }}>
                        <Text style={{  width: '7%', fontSize: px2dp(16), fontWeight: 'bold', fontFamily: 'fantasy',lineHeight:px2dp(20) }}>4.</Text>
                        <Text style={{  width: '95%', fontSize: px2dp(16), marginBottom: 8, fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('Manual1Activity.icon')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(400) }} source={require('../image/enpic/man3.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:34 }}>
                        <Text style={{  width: '7%', fontSize: px2dp(16), fontWeight: 'bold', fontFamily: 'fantasy',lineHeight:px2dp(20) }}>5.</Text>
                        <Text style={{ width: '95%', fontSize: px2dp(16), marginBottom: 8, fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('Manual1Activity.result')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(400) }} source={require('../image/enpic/man5.png')} resizeMode='contain' />
                </View>
                {/* <Text style={{ textAlign: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 12 }}>{I18n.t('TabHomeActivity.allright')}</Text> */}

            </ScrollView >
        );
    }
}

