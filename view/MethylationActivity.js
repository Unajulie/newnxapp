import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
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
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <View style={{ backgroundColor: '#0071bc' }}>
                    <ImageBackground style={{ width: '100%', height: 265 }} source={require('../image/enpic/methylation.jpg')} resizeMode='cover'  >
                        {/* <Text style={{width:'90%',alignSelf: 'center', fontFamily: 'fantasy', marginTop: 34, fontSize: 34,lineHeight:45, color: '#ffffff' }}>{I18n.t('CompanyActivity.team')}</Text> */}
                    </ImageBackground>
                    <View style={{height:10,backgroundColor:'#0071bc'}}></View>
                    <View style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, backgroundColor: '#ffffff' }}>
                        <View style={{ height: 14 }}></View>
                        <Text style={{ width: '100%', fontSize: 24, lineHeight: 40, fontFamily: 'fantasy', marginLeft: 15, color: 'black', height: 40,fontWeight:'700' }}>{I18n.t("MethylationActivity.title")}</Text>
                    </View>
                    {/* dna methylation */}
                    <View style={{ width: '100%', backgroundColor: '#ffffff' }}>
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                            <Text style={{ fontFamily: 'fantasy', lineHeight: 30, fontSize: 24, color: '#000000',marginBottom: 8, }}>{I18n.t('MethylationActivity.mark')} </Text>
                            <Text style={{ fontSize: 16, marginBottom: 12, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('MethylationActivity.added')} </Text>
                            <Text style={{ fontSize: 16, marginBottom: 12, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('MethylationActivity.epigenetic')} </Text>
                            <Text style={{ fontSize: 16, marginBottom: 12, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('MethylationActivity.happens')}</Text>
                            <Text style={{ fontSize: 16, marginBottom: 14, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('MethylationActivity.expressed')}</Text>
                            <Image style={{ height: 189, width: '100%', borderRadius: 20, borderWidth: 1, borderColor: '#f0f0f0' }} resizeMode='contain' source={require("../image/icons/methy1.png")}></Image>
                        </View>

                        <Text style={{ width: '90%', alignSelf: 'center', fontFamily: 'fantasy', lineHeight: 30, fontSize: 24, color: '#000000', marginTop: 20, fontWeight:'700'}}>{I18n.t('MethylationActivity.software')}</Text>
                        <Image style={{ height: 189, width: '90%', alignSelf: 'center', borderRadius: 20 }} resizeMode='contain' source={require("../image/icons/methy4.jpg")}></Image>
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: 10, paddingBottom: 10, }}>
                            <Text style={{ fontSize: 18, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 24,color:'#6E707C',fontWeight:'700' }}>{I18n.t('MethylationActivity.minicomputer')}</Text>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', paddingBottom: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%', fontSize: 22, color: '#6A6A79' }}>★</Text>
                                <Text style={{ fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('MethylationActivity.Hardware')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%', fontSize: 22, color: '#6A6A79'  }}>★</Text>
                                <Text style={{ fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('MethylationActivity.Operating')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%', fontSize: 22, color: '#6A6A79'  }}>★</Text>
                                <Text style={{ fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('MethylationActivity.Softwre')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%', fontSize: 22, color: '#6A6A79' }}>★</Text>
                                <Text style={{ fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('MethylationActivity.specific')}</Text>
                            </View>
                        </View>
                        {/* 背景灰色 */}
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: 10, paddingBottom: 20, paddingTop: 20, backgroundColor: '#EBECED', borderRadius: 15 }}>
                            <View style={{ width: '90%', marginTop: 20, alignSelf: 'center', paddingBottom: 20 }}>
                                <Text style={{ fontSize: 16, fontFamily: 'fantasy', lineHeight: 18, color: '#4F575E' }}>{I18n.t('MethylationActivity.silent')}</Text>
                            </View>
                        </View>

                        <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                            <Image style={{ height: 189, width: '100%', borderRadius: 15, borderWidth: 1, borderColor: '#f0f0f0' }} resizeMode='contain' source={require("../image/icons/methy2.png")}></Image>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                            <Text style={{ alignSelf: 'center', fontFamily: 'fantasy', lineHeight: 26, fontSize: 24, color: '#000000', marginTop: 20, marginBottom: 23,fontWeight:'700' }}>{I18n.t('MethylationActivity.disease')}</Text>
                            <Text style={{ fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('MethylationActivity.tissue')}</Text>
                            <Text style={{ fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('MethylationActivity.cancer')} </Text>
                            <Text style={{ fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('MethylationActivity.methylation')}</Text>
                            <Text style={{ fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('MethylationActivity.studies')}</Text>
                            <Text style={{ fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('MethylationActivity.early')}</Text>
                        </View>
                        {/* 红细胞 */}
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20,  }}>
                            <Image style={{ height: 256, width: '100%', borderRadius: 20 }} resizeMode='contain' source={require("../image/icons/methy5.jpg")}></Image>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center',  }}>
                            <Text style={{ alignSelf: 'center', fontFamily: 'fantasy', lineHeight: 28, fontSize: 24, color: '#000000', marginBottom: 22,fontWeight:'700' }}>{I18n.t('MethylationActivity.environment')}</Text>
                            <Text style={{ fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('MethylationActivity.conditions')}</Text>
                            <Text style={{ fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('MethylationActivity.psychiatry')} </Text>
                            <Text style={{ fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('MethylationActivity.discoveries')}</Text>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                            <Image style={{ height: 256, width: '100%', borderRadius: 15 }} resizeMode='contain' source={require("../image/icons/methy6.jpg")}></Image>
                        </View>
                        {/* 背景灰色 */}
                        <View style={{ width: '90%', alignSelf: 'center', paddingBottom: 20, paddingTop: 20, marginBottom: 20, backgroundColor: '#EBECED', borderRadius: 15 }}>
                            <View style={{ width: '90%', alignSelf: 'center' }}>
                                <Text style={{ height: 70, width: '100%', alignSelf: 'center', fontFamily: 'fantasy', fontWeight: '700', color: '#51565D', lineHeight: 24, fontSize: 18 }}>{I18n.t('MethylationActivity.ventions')}</Text>
                            </View>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', paddingBottom: 20, borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%', fontSize: 22, color: '#6A6A79'}}>★</Text>
                                <Text style={{ width: '92%', fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('MethylationActivity.events')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%', fontSize: 22, color: '#6A6A79' }}>★</Text>
                                <Text style={{ width: '92%', fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('MethylationActivity.changes')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%', fontSize: 22, color: '#6A6A79' }}>★</Text>
                                <Text style={{ width: '92%', fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('MethylationActivity.reversible')}</Text>
                            </View>
                        </View>
                        {/* 背景颜色 */}
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 10,  paddingTop: 10, backgroundColor: '#EBECED', borderRadius: 15 }}>
                            <View style={{ width: '90%', alignSelf: 'center' }}>
                                <Text style={{ height: 70, width: '100%', alignSelf: 'center', fontFamily: 'fantasy', fontWeight: '700', color: '#51565D', lineHeight: 28, fontSize: 18 }}>{I18n.t('MethylationActivity.clock')}</Text>
                            </View>
                        </View>
                        <View style={{height:15}}></View>
                        <View style={{ width: '90%', alignSelf: 'center', paddingBottom: 20, }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%', fontSize: 22, color: '#6A6A79' }}>★</Text>
                                <Text style={{ width: '92%', fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('MethylationActivity.paradigm')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%',fontSize: 22, color: '#6A6A79' }}>★</Text>
                                <Text style={{ width: '92%', fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('MethylationActivity.discovered')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%', fontSize: 22, color: '#6A6A79' }}>★</Text>
                                <Text style={{ width: '92%', fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('MethylationActivity.measuring')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%', fontSize: 22, color: '#6A6A79'}}>★</Text>
                                <Text style={{ width: '92%', fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('MethylationActivity.biological')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%', fontSize: 22, color: '#6A6A79'}}>★</Text>
                                <Text style={{ width: '92%', fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('MethylationActivity.acceleration')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '8%', fontSize: 22, color: '#6A6A79'}}>★</Text>
                                <Text style={{ width: '92%', fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('MethylationActivity.bydietary')}</Text>
                            </View>
                        </View>

                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: 20 }}>{I18n.t('MethylationActivity.epi')}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

