import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Image, ImageBackground, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { I18n } from '../locales/i18n';
import FitImage from 'react-native-fit-image';
import { WebView } from 'react-native-webview';
import { px2dp } from '../src/px2dp';
export default class BiologicalActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("BiologicalActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = { display: false }
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                    {this.state.display == true ?
                        <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                            <WebView startInLoadingState={true} ref={(ref) => { this.brower = ref }} source={{ uri: this.state.url }} />
                            <View style={{ width: "100%", height: px2dp(35), backgroundColor: "#404bc2" }}>
                                <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                                    <Button style={{ width: "100%", height: "100%", backgroundColor: "#404bc2" }} title="close" onPress={() => { { this.setState({ display: false }) } }} />
                                </TouchableOpacity>
                            </View>
                        </Modal> : null
                    }
                    <View>
                        <View style={{ width: '100%', }}>
                            <ImageBackground style={{ width: '100%', height: px2dp(230) }} resizeMode='cover' source={require("../image/enpic/bio1.jpg")} >
                                <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'column' }}>
                                    <Text style={{ fontSize: px2dp(26), color: '#ffffff', fontWeight: "bold", fontFamily: 'fantasy', marginTop: px2dp(30) }}>{I18n.t('TabHomeActivity.old')}</Text>
                                    <Text style={{ fontSize: px2dp(26), color: '#ffffff', fontWeight: "bold", fontFamily: 'fantasy', }}>{I18n.t('TabHomeActivity.you')}</Text>
                                    <Text style={{ fontSize: px2dp(14), fontFamily: 'fantasy', color: '#ffffff', marginTop: px2dp(20) }}>{I18n.t('BiologicalActivity.counts')}</Text>
                                    <Text style={{ fontSize: px2dp(14), fontFamily: 'fantasy', color: '#ffffff', }}>{I18n.t('BiologicalActivity.danage')}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        {/* <View style={{ backgroundColor: '#404bc2', height: px2dp(45), flexDirection: 'row', }}>
                        <View style={{ width: '80%', height: px2dp(45), justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#ffffff' }}>
                            <Text style={{ fontSize: px2dp(14), textAlign: 'center', color: '#ffffff' }}>{I18n.t('BiologicalActivity.biological')}</Text>
                        </View>
                        <View style={{ width: '20%', height: px2dp(45), justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => { this.setState({ url: "https://epi-age.com/product/epiage/" }); this.setState({ display: true }) }}>
                                <Image style={{ width: '100%', height: 34 }} source={require('../image/icons/cart.png')} resizeMode="contain" />
                            </TouchableOpacity>
                        </View>
                    </View> */}

                        {/* 圆弧 */}

                        <View style={{ borderTopRightRadius: px2dp(30), borderTopLeftRadius: px2dp(30), marginTop: px2dp(-30), backgroundColor: '#ffffff' }}>
                            <Text style={{ width: '90%', fontSize: px2dp(18),marginTop:px2dp(20), lineHeight: px2dp(30), fontFamily: 'fantasy', alignSelf:'center', color: 'black', height: px2dp(40), fontWeight: '700' }}>{I18n.t('BiologicalActivity.title')}
                           </Text>
                        </View>
                        <View style={{ width: '100%', backgroundColor: '#ffffff' }}>
                            <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(10), marginBottom: px2dp(20), }}>
                                <Text style={{ fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.wrinkles')}</Text>
                                <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', lineHeight: 34, color: '#000000', textAlignVertical: 'center', marginTop: px2dp(20), fontWeight: '700' }}>{I18n.t('BiologicalActivity.old')}</Text>
                                <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', lineHeight: 34, color: '#000000', fontWeight: '700' }}>{I18n.t('BiologicalActivity.importment')}</Text>
                                <Image style={{ height: px2dp(290), width: '100%', borderRadius: px2dp(30) }} resizeMode='contain' source={require("../image/enpic/bio2.jpg")}></Image>
                                <Text style={{ fontSize: px2dp(14), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.different')}</Text>
                            </View>
                            {/* 背景 */}
                            <View style={{ width: '90%', alignSelf: 'center', marginBottom: px2dp(20), marginTop: px2dp(20), backgroundColor: '#EBECED', borderRadius: 15, }}>
                                <View style={{ width: '90%', alignSelf: 'center',padding:px2dp(10)}}>
                                    <Text style={{ fontSize: px2dp(14),fontWeight:'bold', fontFamily: 'fantasy', lineHeight: px2dp(18), color: '#000' }}>{I18n.t('BiologicalActivity.better')}</Text>
                                </View>
                            </View>
                            <View style={{ height: 20 }}></View>
                            {/* Dna is the hardware */}
                            <View style={{ width: '90%', alignSelf: 'center', marginBottom: px2dp(20), borderBottomColor: '#f0f0f0', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.hardware')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.paradigm')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.suggest')}</Text>
                                </View>
                            </View>


                            <View style={{ width: '90%', alignSelf: 'center', backgroundColor: '#ffffff' }}>
                                <Image style={{ height: 289, width: '100%', borderRadius: px2dp(20) }} resizeMode='contain' source={require("../image/enpic/bio3.jpg")}></Image>
                            </View>
                            <View style={{ width: '90%', alignSelf: 'center', marginBottom: px2dp(20), borderBottomColor: '#f0f0f0', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.epigenetics')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.studies')}</Text>
                                </View>
                            </View>
                            {/* 沙拉图片 */}
                            <View style={{ width: '90%', alignSelf: 'center', backgroundColor: '#ffffff' }}>
                                <Image style={{ height: 289, width: '100%', marginBottom: px2dp(30), borderRadius: px2dp(20) }} resizeMode='contain' source={require("../image/enpic/bio4.jpg")}></Image>
                            </View>
                            <View style={{ width: '90%', alignSelf: 'center', marginBottom: px2dp(20), borderBottomColor: '#f0f0f0', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.including')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.learn')}</Text>
                                </View>
                            </View>


                            {/* source */}
                            <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(30), backgroundColor: '#ffffff' }}>
                                <Text style={{ fontSize: px2dp(16), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20), fontWeight: '700' }}>Source</Text>
                                <Text onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/?term=epigenetic+clock+disease" }); this.setState({ display: true }) }}
                                    style={{ fontStyle: 'italic', color: '#404bc2', fontSize: px2dp(14) }}>https://www.ncbi.nlm.nih.gov/pubmed/?term=epigenetic+clock+disease</Text>
                                <Text onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/30350398" }); this.setState({ display: true }) }} style={{ fontStyle: 'italic', color: '#404bc2', fontSize: px2dp(16) }}>https://www.ncbi.nlm.nih.gov/pubmed/30350398</Text>
                            </View>
                            {/* epiage test */}
                            <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, backgroundColor: '#ffffff' }}>
                                <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', lineHeight: 34, color: '#000000', textAlignVertical: 'center', fontWeight: '700' }}>{I18n.t('BiologicalActivity.epiage')}</Text>
                                <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', lineHeight: 34, color: '#000000', fontWeight: '700' }}>{I18n.t('BiologicalActivity.mean')}</Text>
                                <Image style={{ height: 289, width: '100%', marginBottom: 34, borderRadius: px2dp(20) }} resizeMode='contain' source={require("../image/enpic/bio5.jpg")}></Image>
                            </View>
                            <View style={{ width: '90%', alignSelf: 'center', marginBottom: px2dp(20), borderBottomColor: '#f0f0f0', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.extensive')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.decelerate')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.consider')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.red')}</Text>
                                </View>
                            </View>
                            {/* 女人拿手机 */}
                            <View style={{ width: '90%', alignSelf: 'center', backgroundColor: '#ffffff' }}>
                                <Image style={{ height: 289, width: '100%', marginBottom: 15, borderRadius: px2dp(20) }} resizeMode='contain' source={require("../image/enpic/bio6.jpg")}></Image>
                            </View>
                            <View style={{ width: '90%', alignSelf: 'center', marginBottom: px2dp(20), borderBottomColor: '#f0f0f0', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.information')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.update')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.report')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.administer')}</Text>
                                </View>
                            </View>
                            {/* 问卷 */}
                            <View>
                                <View style={{ width: '90%', alignSelf: 'center', backgroundColor: '#ffffff' }}>
                                    <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', lineHeight: 34, color: '#000000', textAlignVertical: 'center', fontWeight: '700' }}>{I18n.t('BiologicalActivity.app')}</Text>
                                    <Image style={{ height: 289, width: '100%', marginBottom: 15, borderRadius: px2dp(20) }} resizeMode='contain' source={require("../image/enpic/bio7.jpg")}></Image>
                                </View>
                            </View>
                            <View style={{ width: '90%', alignSelf: 'center', marginBottom: px2dp(20), borderBottomColor: '#f0f0f0', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.sense')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.personalized')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '8%', fontSize: px2dp(18), color: '#6A6A79' }}>★</Text>
                                    <Text style={{ width: '92%', fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.health')}</Text>
                                </View>
                            </View>
                            {/* everyone has a dna */}
                            <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, backgroundColor: '#ffffff' }}>
                                <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', lineHeight: 34, marginBottom: 20, textAlignVertical: 'center', color: '#000000', fontWeight: '700' }}>{I18n.t('BiologicalActivity.clock')}</Text>
                                <Text style={{ fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('BiologicalActivity.chronological')}</Text>
                                <FitImage style={{ height: px2dp(390), width: '100%', marginBottom: 20 }} resizeMode='contain' source={require("../image/enpic/bio8.png")} />
                            </View>

                            {/* 背景our epigenetic */}
                            <View style={{ width: '90%', alignSelf: 'center', marginBottom: px2dp(20), marginTop: px2dp(20), backgroundColor: '#EBECED', borderRadius: 15, }}>
                                <View style={{ width: '90%', alignSelf: 'center',padding:px2dp(10) }}>
                                    <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', lineHeight: px2dp(20), color: '#4F575E' }}>{I18n.t('BiologicalActivity.life')}</Text>
                                </View>
                            </View>
                            {/* our epigenetic */}
                            <View style={{ height: 15 }}></View>
                            <View style={{ width: '90%', alignSelf: 'center', }}>
                                <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', fontWeight: '700', lineHeight: 24, color: '#000000', }}>{I18n.t('BiologicalActivity.know')}</Text>
                                <View style={{ height: 15 }}></View>
                                <Text style={{ fontSize: px2dp(14), marginBottom: 22, fontFamily: 'fantasy', lineHeight: px2dp(18), }}>{I18n.t('BiologicalActivity.identifying')}</Text>
                            </View>
                            <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), }}>
                                <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', lineHeight: 26, color: '#000000', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.longevity')}</Text>
                                <Image style={{ height: 289, width: '100%', marginBottom: 20 }} resizeMode='contain' source={require("../image/enpic/bio9.png")}></Image>
                            </View>

                            {/* epigenetic age Detection Method */}
                            <View style={{ width: '90%', alignSelf: 'center', backgroundColor: '#ffffff' }}>
                                <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', lineHeight: 27, color: '#000000', textAlignVertical: 'center', fontWeight: '700' }}>{I18n.t('BiologicalActivity.method')}</Text>
                            </View>
                            <View style={{ height: 20, width: 100 }}></View>
                            {/* 底部bio10小三图 */}
                            <View style={{ width: '90%', alignSelf: 'center', backgroundColor: '#ffffff' }}>
                                <View style={{ backgroundColor: '#f0f0f0', borderRadius: 10, flexDirection: 'row', marginBottom: 20, paddingTop: px2dp(20), paddingBottom: 25 }}>
                                    <View style={{ width: '30%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(70) }} source={require('../image/enpic/bio10.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '70%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', textAlign: 'left', textAlignVertical: 'center', color: '#7E934E', textAlignVertical: 'center', lineHeight: 20, fontWeight: '700' }}>{I18n.t('BiologicalActivity.length')}</Text>
                                        <Text style={{ fontSize: px2dp(14), fontFamily: 'fantasy', textAlign: 'left', textAlignVertical: 'center', lineHeight: 20, }}>{I18n.t('BiologicalActivity.correlation')}</Text>
                                        <Text style={{ fontSize: px2dp(14), fontFamily: 'fantasy', textAlign: 'left', textAlignVertical: 'center', lineHeight: 20, }}>{I18n.t('BiologicalActivity.requirements')}</Text>
                                        <Text style={{ fontSize: px2dp(14), fontFamily: 'fantasy', textAlign: 'left', textAlignVertical: 'center', lineHeight: 20, }}>{I18n.t('BiologicalActivity.small')}</Text>
                                        <Text style={{ fontSize: px2dp(14), fontFamily: 'fantasy', textAlign: 'left', textAlignVertical: 'center', lineHeight: 20, }}>{I18n.t('BiologicalActivity.results')}</Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#f0f0f0', borderRadius: 10, flexDirection: 'row', marginBottom: 40, paddingTop: px2dp(20), paddingBottom: 25 }}>
                                    <View style={{ width: '30%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(70) }} source={require('../image/enpic/bio11.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '70%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', textAlign: 'left', textAlignVertical: 'center', color: '#7E934E', textAlignVertical: 'center', lineHeight: 20, fontWeight: '700' }}>{I18n.t('BiologicalActivity.scores')}</Text>
                                        <Text style={{ fontSize: px2dp(14), fontFamily: 'fantasy', textAlign: 'left', textAlignVertical: 'center', lineHeight: 20, }}>{I18n.t('BiologicalActivity.sampling')}</Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#f0f0f0', borderRadius: 10, flexDirection: 'row', marginBottom: 40, paddingTop: px2dp(20), paddingBottom: 25 }}>
                                    <View style={{ width: '30%', justifyContent: 'center' }}>
                                        <Image style={{ width: '100%', height: px2dp(70) }} source={require('../image/enpic/bio12.png')} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '70%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', textAlign: 'left', textAlignVertical: 'center', color: '#7E934E', textAlignVertical: 'center', lineHeight: 20, fontWeight: '700' }}>{I18n.t('BiologicalActivity.epigenetic')}</Text>
                                        <Text style={{ fontSize: px2dp(14), fontFamily: 'fantasy', textAlign: 'left', textAlignVertical: 'center', lineHeight: 20, }}>{I18n.t('BiologicalActivity.closely')}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, marginBottom: 12, backgroundColor: '#ffffff' }}>
                                <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', color: '#000000', textAlignVertical: 'center', lineheight: px2dp(45), fontWeight: '700' }}>{I18n.t('BiologicalActivity.epiages')}</Text>
                                <Text style={{ fontSize: px2dp(14), fontFamily: 'fantasy', textAlignVertical: 'center', lineHeight: 26, }}>{I18n.t('BiologicalActivity.methylation')}</Text>
                                <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', color: '#000000', textAlignVertical: 'center', lineHeight: 56, fontWeight: '700' }}>{I18n.t('BiologicalActivity.hkepi')}</Text>
                                <Text style={{ fontSize: px2dp(14), fontFamily: 'fantasy', textAlignVertical: 'center', lineHeight: 26, }}>{I18n.t('BiologicalActivity.already')}</Text>
                            </View>


                            {/* 4小图 */}
                            <View style={{ height: px2dp(240), width: '90%', alignSelf: 'center', justifyContent: 'space-around', backgroundColor: '#ffffff' }}>
                                <View style={{ height: px2dp(123), justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <View style={{ width: '42%', borderRadius: px2dp(20), backgroundColor: '#f0f0f0' }}>
                                        <Image style={{ width: '100%', height: px2dp(45), marginTop: 5, marginBottom: px2dp(5) }} source={require('../image/icons/bio1.png')} resizeMode='contain' />
                                        <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(12), textAlign: 'center', color: '#808080' }}>{I18n.t('BiologicalActivity.slow')}</Text>
                                    </View>
                                    <View style={{ width: '42%', borderRadius: px2dp(20), backgroundColor: '#f0f0f0' }}>
                                        <Image style={{ width: '100%', height: px2dp(45), marginTop: 5, marginBottom: px2dp(5) }} source={require('../image/icons/bio2.png')} resizeMode='contain' />
                                        <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(12), textAlign: 'center', color: '#808080' }}>{I18n.t('BiologicalActivity.onset')}</Text>
                                    </View>
                                </View>
                                <View style={{ height: px2dp(123), justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <View style={{ width: '42%', borderRadius: px2dp(20), backgroundColor: '#f0f0f0' }}>
                                        <Image style={{ width: '100%', height: px2dp(45), marginTop: 5, marginBottom: px2dp(5) }} source={require('../image/icons/sun.png')} resizeMode='contain' />
                                        <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(12), textAlign: 'center', color: '#808080' }}>{I18n.t('BiologicalActivity.quality')}</Text>
                                    </View>
                                    <View style={{ width: '42%', borderRadius: px2dp(20), backgroundColor: '#f0f0f0' }}>
                                        <Image style={{ width: '100%', height: px2dp(45), marginTop: 5, marginBottom: px2dp(5) }} source={require('../image/icons/bio4.png')} resizeMode='contain' />
                                        <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(12), textAlign: 'center', color: '#808080' }}>{I18n.t('BiologicalActivity.extend')}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ backgroundColor: '#f0f0f0', marginTop: px2dp(20), marginBottom: px2dp(20), backgroundColor: '#ffffff' }}>
                                <View style={{ width: '90%', marginTop: px2dp(30), alignSelf: 'center', }}>
                                    <Text style={{ fontSize: px2dp(18), fontFamily: 'fantasy', textAlignVertical: 'center', color: '#000000', fontWeight: '700',marginBottom:px2dp(20) }}>{I18n.t('BiologicalActivity.making')}</Text>
                                    <Text style={{ fontSize: px2dp(18), fontWeight: '800', marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(23),color:'#000',fontWeight:'bold'}}>{I18n.t('BiologicalActivity.fast')}</Text>
                                    <Text style={{ fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('BiologicalActivity.chronologicaled')}</Text>
                                    <Text style={{ fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('BiologicalActivity.possibly')}</Text>
                                    <Text style={{ fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('BiologicalActivity.really')}</Text>
                                    <Image style={{ height: 289, width: '100%' }} resizeMode='cover' source={require("../image/enpic/bio9.png")}></Image>
                                </View>
                            </View>
                            <View style={{ width: '90%', alignSelf: 'center', marginTop: 23, backgroundColor: '#ffffff' }}>
                                <Text style={{ fontSize: px2dp(20), lineHeight: px2dp(50), marginBottom: px2dp(20), fontFamily: 'fantasy',fontSize:px2dp(18), color: '#000000', textAlignVertical: 'center', fontWeight: '700' }}>{I18n.t('BiologicalActivity.test')}</Text>
                                <Text style={{ fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(18) }}>{I18n.t('BiologicalActivity.developed')}</Text>
                                <Text style={{ fontSize: px2dp(14), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: 23 }}>{I18n.t('BiologicalActivity.epitherapeutics')}</Text>
                                <Text style={{ fontSize: px2dp(18), lineHeight: px2dp(23), fontFamily: 'fantasy', color: '#000000', textAlignVertical: 'center', marginTop: px2dp(20), marginBottom: px2dp(20), fontWeight: '700' }}>{I18n.t('BiologicalActivity.steps')}</Text>
                            </View>
                            <View style={{ width: '90%', alignSelf: 'center', backgroundColor: '#ffffff' }}>
                                <View style={{ borderWidth: 1,  borderRadius: 10, backgroundColor: '#ebfaff' }}>
                                    <View style={{ flexDirection: 'row', marginTop: px2dp(10) }}>
                                        <Text style={{ width: '70%', textAlignVertical: 'center',fontFamily: 'fantasy',color:'#000', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('BiologicalActivity.download')}</Text>
                                        <Image style={{ height: 67, width: '30%' }} resizeMode='contain' source={require("../image/icons/bio5.png")}></Image>
                                    </View>
                                    <Text style={{ margin: px2dp(10), fontSize: px2dp(14), fontFamily: 'fantasy',color:'#000', lineHeight: px2dp(20) }}>{I18n.t('BiologicalActivity.register')}</Text>
                                </View>
                                <View style={{ marginTop: px2dp(24), borderWidth: 1, borderRadius: 10, backgroundColor: '#ebfaff' }}>
                                    <View style={{ flexDirection: 'row', marginTop: px2dp(10) }}>
                                        <Text style={{ width: '70%', textAlignVertical: 'center', textAlign: 'center',color:'#000',fontFamily: 'fantasy', fontSize: px2dp(16) }}>{I18n.t('BiologicalActivity.step2')}</Text>
                                        <Image style={{ height: 67, width: '30%' }} resizeMode='contain' source={require("../image/icons/bio6.png")}></Image>
                                    </View>
                                    <Text style={{ margin: px2dp(10), fontSize: px2dp(14), fontFamily: 'fantasy',color:'#000', lineHeight: px2dp(20) }}>{I18n.t('BiologicalActivity.saliva')}</Text>
                                </View>
                                <View style={{ marginTop: px2dp(24), borderWidth: 1, borderRadius: 10, backgroundColor: '#ebfaff' }}>
                                    <View style={{ flexDirection: 'row', marginTop: px2dp(10) }}>
                                        <Text style={{ width: '70%', textAlignVertical: 'center', textAlign: 'center',color:'#000',fontFamily: 'fantasy', fontSize: px2dp(16) }}>{I18n.t('BiologicalActivity.step3')}</Text>
                                        <Image style={{ height: 67, width: '30%' }} resizeMode='contain' source={require("../image/icons/bio7.png")}></Image>
                                    </View>
                                    <Text style={{ margin: px2dp(10), fontSize: px2dp(14), fontFamily: 'fantasy',color:'#000', lineHeight: px2dp(20) }}>{I18n.t('BiologicalActivity.questionnaire')}</Text>
                                </View>
                                <View style={{ marginTop: px2dp(24), borderWidth: 1, borderRadius: 10, backgroundColor: '#ebfaff' }}>
                                    <View style={{ flexDirection: 'row', marginTop: px2dp(10) }}>
                                        <Text style={{ width: '70%', textAlignVertical: 'center', textAlign: 'center',color:'#000',fontFamily: 'fantasy', fontSize: px2dp(16) }}>{I18n.t('BiologicalActivity.step4')}</Text>
                                        <Image style={{ height: 67, width: '30%' }} resizeMode='contain' source={require("../image/icons/bio8.png")}></Image>
                                    </View>
                                    <Text style={{ margin: px2dp(10), fontSize: px2dp(14), fontFamily: 'fantasy',color:'#000', lineHeight: px2dp(20),fontFamily: 'fantasy', }}>{I18n.t('BiologicalActivity.analyze')}</Text>
                                </View>
                                <View style={{ marginTop: px2dp(24), borderWidth: 1,  borderRadius: 10, backgroundColor: '#ebfaff' }}>
                                    <View style={{ flexDirection: 'row', marginTop: px2dp(10) }}>
                                        <Text style={{ width: '70%', textAlignVertical: 'center', textAlign: 'center',color:'#000', fontFamily: 'fantasy', fontSize: px2dp(16) }}>{I18n.t('BiologicalActivity.step5')}</Text>
                                        <Image style={{ height: 67, width: '30%' }} resizeMode='contain' source={require("../image/icons/bio9.png")}></Image>
                                    </View>
                                    <Text style={{ margin: px2dp(10), fontSize: px2dp(14), fontFamily: 'fantasy',color:'#000', lineHeight: px2dp(20) }}>{I18n.t('BiologicalActivity.lifestyle')}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView >
            </View>
        );
    }
}

