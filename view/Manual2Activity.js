import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';
export default class Manual2Activity extends Component<Props> {
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
            <ScrollView style={{flex:1}}>
                <StatusBar animated={true}  hidden={true} translucent={true} barStyle={'light-content'} />

                <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), paddingBottom: px2dp(20), }}>
                    <Text style={{  textAlign: 'center', fontSize: px2dp(20),marginBottom:px2dp(20), fontFamily: 'fantasy',color:'#000', fontWeight: 'bold', textAlignVertical: 'center' }}>{I18n.t('Manual2Activity.title')}</Text>
                    <View style={{ flexDirection: 'row',marginBottom:18 }}>
                        <Text style={{  width: '7%', fontSize: px2dp(16), fontWeight: 'bold',fontFamily: 'fantasy',lineHeight:px2dp(28) }}>1.</Text>
                        <Text style={{  width: '95%', fontSize: px2dp(16),  fontFamily: 'fantasy', lineHeight:px2dp(28)  }}>{I18n.t('Manual2Activity.download')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row',marginBottom:18 }}>
                        <Text style={{  width: '7%', fontSize: px2dp(16), fontWeight: 'bold',fontFamily: 'fantasy' ,lineHeight:px2dp(28) }}>2.</Text>
                        <Text style={{  width: '95%', fontSize: px2dp(16),  fontFamily: 'fantasy', lineHeight:28 }}>{I18n.t('Manual2Activity.gocenter')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(400) }} source={require('../image/enpic/get1.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:23,marginBottom:18}}>
                        <Text style={{ width: '7%', fontSize: px2dp(16), fontWeight: 'bold',fontFamily: 'fantasy' ,lineHeight:px2dp(28)}}>3.</Text>
                        <Text style={{  width: '95%',fontSize: px2dp(16),  fontFamily: 'fantasy' , lineHeight:28  }}>{I18n.t('Manual2Activity.fillregis')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(370) }} source={require('../image/enpic/get2.png')} resizeMode='contain' />

                    {/*  */}
                    <View style={{ flexDirection: 'row',marginTop:23,marginBottom:7 }}>
                        <Text style={{  width: '7%',fontSize: px2dp(16), fontWeight: 'bold',fontFamily: 'fantasy', lineHeight:px2dp(28) }}>4.</Text>
                        <Text style={{ width: '95%', fontSize: px2dp(16), fontFamily: 'fantasy', lineHeight:28 }}>{I18n.t('Manual2Activity.mailbox')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(150) }} source={require('../image/enpic/get3.png')} resizeMode='contain' />

                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ width: '7%', fontSize: px2dp(16), fontWeight: 'bold',fontFamily: 'fantasy', lineHeight:px2dp(28) }}>5.</Text>
                        <Text style={{ width: '95%', fontSize: px2dp(16),fontFamily: 'fantasy', lineHeight:28}}>{I18n.t('Manual2Activity.accountlogin')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(400) }} source={require('../image/enpic/get4.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{  width: '7%', fontSize: px2dp(16), fontWeight: 'bold',fontFamily: 'fantasy', lineHeight:px2dp(28) }}>6.</Text>
                        <Text style={{  width: '95%', fontSize: px2dp(16), fontFamily: 'fantasy', lineHeight:28 }}>{I18n.t('Manual2Activity.setkey')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(400) }} source={require('../image/enpic/get5.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ width: '7%', fontSize: px2dp(16), fontWeight: 'bold' }}>☞ </Text>
                        <Text style={{ fontSize: 16, lineHeight:28}}>{I18n.t('Manual2Activity.sentmail')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(430) }} source={require('../image/enpic/get6.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:23, }}>
                        <Text style={{ width: '7%', fontSize: px2dp(16), fontWeight: 'bold',fontFamily: 'fantasy', lineHeight:px2dp(28) }}>7.</Text>
                        <Text style={{  width: '95%', fontSize: px2dp(16), fontFamily: 'fantasy', lineHeight:28 }}>{I18n.t('Manual2Activity.purchase')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(430) }} source={require('../image/enpic/get7.png')} resizeMode='contain' />
                </View>
                {/* <Text style={{ textAlign: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 12 }}>{I18n.t('TabHomeActivity.allright')}</Text> */}

            </ScrollView >
        );
    }
}

