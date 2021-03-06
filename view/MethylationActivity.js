import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';

export default class MethylationActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("MethylationActivity.title"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ScrollView>
                <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                <View style={{ backgroundColor: '#404bc2' }}>
                    <ImageBackground style={{ width: '100%', height: px2dp(230) }} source={require('../image/enpic/methylation.jpg')} resizeMode='cover'  >
                        {/* <Text style={{width:'90%',alignSelf: 'center', fontFamily: 'fantasy', marginTop: 34, fontSize: 34,lineHeight:45, color: '#ffffff' }}>{I18n.t('CompanyActivity.team')}</Text> */}
                    </ImageBackground>
                    {/* <View style={{ borderTopRightRadius: px2dp(20), borderTopLeftRadius: px2dp(20), backgroundColor: '#ffffff' }}>
                        <Text style={{ width: '100%', fontSize: px2dp(22), lineHeight: p, fontFamily: 'fantasy', marginLeft: 15, color: 'black', height: 40, fontWeight: '700' }}>{I18n.t("MethylationActivity.title")}</Text>
                    </View> */}
                    {/* dna methylation */}
                    <View style={{ width: '100%', backgroundColor: '#ffffff',marginTop:px2dp(-30), paddingBottom: px2dp(20),borderTopLeftRadius:px2dp(30),borderTopRightRadius:px2dp(30)  }}>
                        <View style={{ width: '90%', alignSelf: 'center'}}>
                            <Text style={{ fontFamily: 'fantasy', lineHeight: px2dp(30), fontSize: px2dp(22),fontWeight:'bold', marginTop:px2dp(20), color: '#000000', marginBottom: px2dp(10), }}>{I18n.t('MethylationActivity.mark')} </Text>
                            <Text style={{ fontSize: px2dp(16), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('MethylationActivity.added')} </Text>
                            <Text style={{ fontSize: px2dp(16), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('MethylationActivity.epigenetic')} </Text>
                            <Text style={{ fontSize: px2dp(16), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('MethylationActivity.happens')}</Text>
                            <Text style={{ fontSize: px2dp(16), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('MethylationActivity.expressed')}</Text>
                            <Image style={{ height: px2dp(190), width: '100%', borderRadius: px2dp(20), borderWidth: 1, borderColor: '#f0f0f0' }} resizeMode='contain' source={require("../image/icons/methy1.png")}></Image>
                        </View>

                        <Text style={{ width: '90%', alignSelf: 'center', fontFamily: 'fantasy', lineHeight: px2dp(30), fontSize: px2dp(22), color: '#000000', marginTop: px2dp(20), fontWeight: '700' }}>{I18n.t('MethylationActivity.software')}</Text>
                        <Image style={{ height: 189, width: '90%', alignSelf: 'center', borderRadius: 20 }} resizeMode='contain' source={require("../image/icons/methy4.jpg")}></Image>
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: 10, paddingBottom: 10, }}>
                            <Text style={{ fontSize: 18, mamarginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 24, color: '#6E707C', fontWeight: '700' }}>{I18n.t('MethylationActivity.minicomputer')}</Text>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', paddingBottom: px2dp(20) }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%', fontSize: px2dp(20), color: '#6A6A79' }}>★</Text>
                                <Text style={{ marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('MethylationActivity.Hardware')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%', fontSize: px2dp(20), color: '#6A6A79' }}>★</Text>
                                <Text style={{ marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('MethylationActivity.Operating')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%', fontSize: px2dp(20), color: '#6A6A79' }}>★</Text>
                                <Text style={{ marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('MethylationActivity.Softwre')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%', fontSize: px2dp(20), color: '#6A6A79' }}>★</Text>
                                <Text style={{ marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('MethylationActivity.specific')}</Text>
                            </View>
                        </View>
                        {/* 背景灰色 */}
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: 10, paddingBottom: px2dp(20), paddingTop: px2dp(20), backgroundColor: '#EBECED', borderRadius: px2dp(15) }}>
                            <View style={{ width: '90%', marginTop: px2dp(20), alignSelf: 'center', paddingBottom: px2dp(20) }}>
                                <Text style={{ marginTfontSize: px2dp(16), fontFamily: 'fantasy', lineHeight: px2dp(18), color: '#4F575E' }}>{I18n.t('MethylationActivity.silent')}</Text>
                            </View>
                        </View>

                        <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), paddingBottom: px2dp(20), borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                            <Image style={{ height: 189, width: '100%', borderRadius: px2dp(15), borderWidth: 1, borderColor: '#f0f0f0' }} resizeMode='contain' source={require("../image/icons/methy2.png")}></Image>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), }}>
                            <Text style={{ alignSelf: 'center', fontFamily: 'fantasy',lineHeight: px2dp(30), fontSize: px2dp(22),  color: '#000000', marginTop: px2dp(20), marginBottom: 23, fontWeight: '700' }}>{I18n.t('MethylationActivity.disease')}</Text>
                            <Text style={{ marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('MethylationActivity.tissue')}</Text>
                            <Text style={{ marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('MethylationActivity.cancer')} </Text>
                            <Text style={{ marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('MethylationActivity.methylation')}</Text>
                            <Text style={{ marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('MethylationActivity.studies')}</Text>
                            <Text style={{ marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('MethylationActivity.early')}</Text>
                        </View>
                        {/* 红细胞 */}
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), paddingBottom: px2dp(20), }}>
                            <Image style={{ height: 256, width: '100%', borderRadius: 20 }} resizeMode='contain' source={require("../image/icons/methy5.jpg")}></Image>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', }}>
                            <Text style={{ alignSelf: 'center', fontFamily: 'fantasy', lineHeight: px2dp(30), fontSize: px2dp(22), color: '#000000', marginBottom: 22, fontWeight: '700' }}>{I18n.t('MethylationActivity.environment')}</Text>
                            <Text style={{ marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('MethylationActivity.conditions')}</Text>
                            <Text style={{ marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('MethylationActivity.psychiatry')} </Text>
                            <Text style={{ marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('MethylationActivity.discoveries')}</Text>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), paddingBottom: px2dp(20), }}>
                            <Image style={{ height: 256, width: '100%', borderRadius: px2dp(15) }} resizeMode='contain' source={require("../image/icons/methy6.jpg")}></Image>
                        </View>
                        {/* 背景灰色 */}
                        <View style={{ width: '90%', alignSelf: 'center', paddingBottom: px2dp(20), paddingTop: px2dp(20), marginBottom: px2dp(20), backgroundColor: '#EBECED', borderRadius: px2dp(15) }}>
                            <View style={{ width: '90%', alignSelf: 'center' }}>
                                <Text style={{ height: 70, width: '100%', alignSelf: 'center', fontFamily: 'fantasy', fontWeight: '700', color: '#51565D', lineHeight: 24, fontSize: 18 }}>{I18n.t('MethylationActivity.ventions')}</Text>
                            </View>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', paddingBottom: px2dp(20), borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                            <View style={{ flexDirection: 'row',marginTop:px2dp(10) }}>
                                <Text style={{ width: '8%', fontSize: px2dp(20), color: '#6A6A79' }}>★</Text>
                                <Text style={{ width: '92%', marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', borlineHeight: px2dp(21) }}>{I18n.t('MethylationActivity.events')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginTop:px2dp(10)}}>
                                <Text style={{ width: '8%', fontSize: px2dp(20), color: '#6A6A79' }}>★</Text>
                                <Text style={{ width: '92%', marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', borlineHeight: px2dp(21) }}>{I18n.t('MethylationActivity.changes')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginTop:px2dp(10) }}>
                                <Text style={{ width: '8%', fontSize: px2dp(20), color: '#6A6A79' }}>★</Text>
                                <Text style={{ width: '92%', marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', borlineHeight: px2dp(21) }}>{I18n.t('MethylationActivity.reversible')}</Text>
                            </View>
                        </View>
                        {/* 背景颜色 */}
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), paddingBottom: 10, paddingTop: 10, backgroundColor: '#EBECED', borderRadius: px2dp(15) }}>
                            <View style={{ width: '90%', alignSelf: 'center' }}>
                                <Text style={{ height: 70, width: '100%', alignSelf: 'center', fontFamily: 'fantasy', fontWeight: '700', color: '#51565D', lineHeight: 28, fontSize: 18 }}>{I18n.t('MethylationActivity.clock')}</Text>
                            </View>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', paddingBottom: px2dp(20),marginTop:px2dp(20) }}>
                            <View style={{ flexDirection: 'row',marginTop:px2dp(10) }}>
                                <Text style={{ width: '8%', fontSize: px2dp(20), color: '#6A6A79' }}>★</Text>
                                <Text style={{ width: '92%', marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', borlineHeight: px2dp(21) }}>{I18n.t('MethylationActivity.paradigm')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginTop:px2dp(10)  }}>
                                <Text style={{ width: '8%', fontSize: px2dp(20), color: '#6A6A79' }}>★</Text>
                                <Text style={{ width: '92%', marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', borlineHeight: px2dp(21) }}>{I18n.t('MethylationActivity.discovered')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginTop:px2dp(10) }}>
                                <Text style={{ width: '8%', fontSize: px2dp(20), color: '#6A6A79' }}>★</Text>
                                <Text style={{ width: '92%', marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', borlineHeight: px2dp(21) }}>{I18n.t('MethylationActivity.measuring')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginTop:px2dp(10) }}>
                                <Text style={{ width: '8%', fontSize: px2dp(20), color: '#6A6A79' }}>★</Text>
                                <Text style={{ width: '92%', marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', borlineHeight: px2dp(21) }}>{I18n.t('MethylationActivity.biological')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginTop:px2dp(10) }}>
                                <Text style={{ width: '8%', fontSize: px2dp(20), color: '#6A6A79' }}>★</Text>
                                <Text style={{ width: '92%', marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', borlineHeight: px2dp(21) }}>{I18n.t('MethylationActivity.acceleration')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginTop:px2dp(10)}}>
                                <Text style={{ width: '8%', fontSize: px2dp(20), color: '#6A6A79' }}>★</Text>
                                <Text style={{ width: '92%', marginTfontSize: px2dp(16), mamarginBottom: px2dp(10), fontFamily: 'fantasy', borlineHeight: px2dp(21) }}>{I18n.t('MethylationActivity.bydietary')}</Text>
                            </View>
                        </View>

                        {/* <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: px2dp(20) }}>{I18n.t('MethylationActivity.epi')}</Text> */}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

