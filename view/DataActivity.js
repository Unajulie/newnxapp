import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';

export default class DataActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("DataActivity.title"),
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
                <View style={{ backgroundColor: '#f6f8f9' }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), paddingBottom: px2dp(20), }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: px2dp(80), width: '70%',fontSize:px2dp(18), color:'#000000', fontWeight: "bold", fontFamily: 'fantasy', paddingTop: px2dp(15), lineHeight: px2dp(25), }}>{I18n.t('DataActivity.filling')}</Text>
                            <Image style={{ height: px2dp(70), width: '30%', marginBottom: px2dp(20) }} resizeMode='contain' source={require("../image/icons/ques1.png")}></Image>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: px2dp(10),color:'#000', fontFamily: 'fantasy', lineHeight: px2dp(21) }}>{I18n.t('DataActivity.epiage')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: px2dp(10),color:'#000', fontFamily: 'fantasy', lineHeight: px2dp(21) }}>{I18n.t('DataActivity.personalized')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: px2dp(10),color:'#000', fontFamily: 'fantasy', lineHeight: px2dp(21) }}>{I18n.t('DataActivity.update')}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), paddingBottom: px2dp(20), }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 77, width: '30%', marginBottom: px2dp(20) }} resizeMode='contain' source={require("../image/icons/ques2.png")}></Image>
                        <Text style={{ height: 77, width: '70%', fontSize:px2dp(18), color:'#000000', fontWeight: "bold", fontFamily: 'fantasy', paddingTop: 13, lineHeight: px2dp(22), }}>{I18n.t('DataActivity.how')}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: px2dp(10), color:'#000',fontFamily: 'fantasy', lineHeight: px2dp(21) }}>{I18n.t('DataActivity.test')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: px2dp(10), color:'#000',fontFamily: 'fantasy', lineHeight: px2dp(21) }}>{I18n.t('DataActivity.analysis')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: px2dp(10),color:'#000', fontFamily: 'fantasy', lineHeight: px2dp(21) }}>{I18n.t('DataActivity.data')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: px2dp(10), color:'#000',fontFamily: 'fantasy', lineHeight: px2dp(21) }}>{I18n.t('DataActivity.access')}</Text>
                    </View>
                </View>
                {/* <View style={{ backgroundColor: '#f6f8f9' }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 77, width: '70%', fontSize: 19, fontFamily: 'fantasy', paddingTop: 13, lineHeight: 22, }}>{I18n.t('DataActivity.how')}?</Text>
                            <Image style={{ height: 77, width: '30%', marginBottom: 20 }} resizeMode='contain' source={require("../image/icons/ques3.png")}></Image>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: 8, fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('DataActivity.results')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: 8, fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('DataActivity.routes')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: 8, fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('DataActivity.datain')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: 8, fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('DataActivity.allowed')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: 8, fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('DataActivity.general')}</Text>
                        </View>
                    </View>
                </View> */}
                <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), paddingBottom: px2dp(20), }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: px2dp(80), width: '70%',fontSize:px2dp(18), color:'#000000', fontWeight: "bold", fontFamily: 'fantasy', paddingTop: 13, lineHeight: px2dp(22), }}>{I18n.t('DataActivity.information')}</Text>
                        <Image style={{ height: px2dp(80), width: '30%', marginBottom: 20 }} resizeMode='contain' source={require("../image/icons/ques4.png")}></Image>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: 8,color:'#000', fontFamily: 'fantasy', lineHeight: px2dp(21) }}>{I18n.t('DataActivity.privacy')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: 8,color:'#000', fontFamily: 'fantasy', lineHeight: px2dp(21) }}>{I18n.t('DataActivity.without')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: 8,color:'#000', fontFamily: 'fantasy', lineHeight: px2dp(21) }}>{I18n.t('DataActivity.will')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: 8,color:'#000', fontFamily: 'fantasy', lineHeight: px2dp(21) }}>{I18n.t('DataActivity.unless')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: px2dp(14), marginBottom: 8,color:'#000', fontFamily: 'fantasy', lineHeight: px2dp(21) }}>{I18n.t('DataActivity.learn')}</Text>
                    </View>
                    <View style={{ width: '96%', alignSelf: 'center',marginTop:px2dp(10) }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>☞</Text>
                            <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10),color:'#000', fontFamily: 'fantasy', lineHeight: px2dp(21) }}>{I18n.t('DataActivity.logged')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>☞</Text>
                            <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10),color:'#000', fontFamily: 'fantasy', lineHeight: px2dp(21) }}>{I18n.t('DataActivity.not')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>☞</Text>
                            <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10),color:'#000', fontFamily: 'fantasy', lineHeight: px2dp(21) }}>{I18n.t('DataActivity.lost')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: px2dp(14), color: '#404bc2' }}>☞</Text>
                            <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10),color:'#000', fontFamily: 'fantasy', lineHeight: px2dp(21) }}>{I18n.t('DataActivity.save')}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView >
        );
    }
}

