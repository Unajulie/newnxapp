import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Image, ImageBackground, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { I18n } from '../locales/i18n';
import FitImage from 'react-native-fit-image';
import { WebView } from 'react-native-webview';
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
            <ScrollView>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                />
                {this.state.display == true ?
                    <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                        <WebView startInLoadingState={true} ref={(ref) => { this.brower = ref }} source={{ uri: this.state.url }} />
                        <View style={{ width: "100%", height: 35, backgroundColor: "#0071BC" }}>
                            <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                                <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="close" onPress={() => { { this.setState({ display: false }) } }} />
                            </TouchableOpacity>
                        </View>
                    </Modal> : null
                }
                <View style={{ width: '100%', }}>
                    <ImageBackground style={{ width: '100%', height: 213 }} resizeMode='cover' source={require("../image/enpic/bio1.jpg")} >
                        <View style={{ height: 27 }}></View>
                        <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'column' }}>
                            <Text style={{ fontSize: 34, color: '#ffffff', fontWeight: "bold" }}>{I18n.t('TabHomeActivity.old')}</Text>
                            <Text style={{ fontSize: 34, color: '#ffffff', fontWeight: "bold" }}>{I18n.t('TabHomeActivity.you')}</Text>
                            <View style={{ height: 15 }}></View>
                            <Text style={{ fontSize: 14, fontFamily: 'fantasy', color: '#ffffff', lineHeight: 19 }}>{I18n.t('BiologicalActivity.counts')}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'fantasy', color: '#ffffff', lineHeight: 19 }}>{I18n.t('BiologicalActivity.danage')}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ backgroundColor: '#0071bc', height: 45, flexDirection: 'row', }}>
                    <View style={{ width: '80%', height: 45, justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#ffffff' }}>
                        <Text style={{ fontSize: 14, textAlign: 'center', color: '#ffffff' }}>{I18n.t('BiologicalActivity.biological')}</Text>
                    </View>
                    <View style={{ width: '20%', height: 45, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://epi-age.com/product/epiage/" }); this.setState({ display: true }) }}>
                            <Image style={{ width: '100%', height: 34 }} source={require('../image/icons/cart.png')} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={{ width: '100%', fontSize: 20, lineHeight: 40, fontFamily: 'fantasy', marginLeft: 15, color: 'black', height: 40 }}>epigenetic Age
                    </Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 10, paddingBottom: 34 }}>
                    <Text style={{ fontSize: 16, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.wrinkles')}</Text>
                    <Text style={{ fontSize: 22, fontFamily: 'fantasy', lineHeight: 34, color: '#0071bc', textAlignVertical: 'center', paddingTop: 34 }}>{I18n.t('BiologicalActivity.old')}</Text>
                    <Text style={{ fontSize: 22, fontFamily: 'fantasy', lineHeight: 34, color: '#0071bc' }}>{I18n.t('BiologicalActivity.importment')}</Text>
                    <Image style={{ height: 289, width: '100%', borderRadius: 20 }} resizeMode='contain' source={require("../image/enpic/bio2.jpg")}></Image>
                    <Text style={{ fontSize: 14, fontFamily: 'fantasy', lineHeight: 21 }}>{I18n.t('BiologicalActivity.different')}</Text>
                </View>
                {/* 背景 */}
                <View style={{ width: '90%', alignSelf: 'center', paddingBottom: 20, paddingTop: 20, backgroundColor: '#EBECED', borderRadius: 15 }}>
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'fantasy', lineHeight: 18, color: '#4F575E' }}>{I18n.t('BiologicalActivity.better')}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                        <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18, }}>{I18n.t('BiologicalActivity.hardware')}</Text>
                        <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.paradigm')}</Text>
                        <Text style={{ fontSize: 14, marginBottom: 15, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.suggest')}
                            {I18n.t('BiologicalActivity.still')}</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                    <Image style={{ height: 289, width: '100%', borderRadius: 20 }} resizeMode='contain' source={require("../image/enpic/bio3.jpg")}></Image>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.epigenetics')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.studies')}
                    </Text>
                    <Image style={{ height: 289, width: '100%', marginBottom: 34, borderRadius: 20 }} resizeMode='contain' source={require("../image/enpic/bio4.jpg")}></Image>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.including')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.learn')} </Text>
                </View>
                {/* source */}
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                    <Text style={{ fontSize: 18, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>Source</Text>
                    <Text onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/?term=epigenetic+clock+disease" }); this.setState({ display: true }) }}
                        style={{ fontStyle: 'italic', color: '#0071bc' }}>https://www.ncbi.nlm.nih.gov/pubmed/?term=epigenetic+clock+disease</Text>

                    <Text onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/30350398" }); this.setState({ display: true }) }} style={{ fontStyle: 'italic', color: '#0071bc' }}>https://www.ncbi.nlm.nih.gov/pubmed/30350398</Text>
                </View>
                {/* epiage test */}
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                    <Text style={{ fontSize: 22, fontFamily: 'fantasy', lineHeight: 34, color: '#0071bc', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.epiage')}</Text>
                    <Text style={{ fontSize: 22, fontFamily: 'fantasy', lineHeight: 34, color: '#0071bc' }}>{I18n.t('BiologicalActivity.mean')}</Text>
                    <Image style={{ height: 289, width: '100%', marginBottom: 34, borderRadius: 20 }} resizeMode='contain' source={require("../image/enpic/bio5.jpg")}></Image>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18, }}>{I18n.t('BiologicalActivity.extensive')} </Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.decelerate')} </Text>
                    <Text style={{ fontSize: 14, marginBottom: 15, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.consider')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 15, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.red')}</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                    <Image style={{ height: 289, width: '100%', marginBottom: 34, borderRadius: 20 }} resizeMode='contain' source={require("../image/enpic/bio6.jpg")}></Image>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.information')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.update')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.report')} </Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.administer')} </Text>
                </View>
                {/* 问卷 */}
                <View>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                        <Text style={{ fontSize: 22, fontFamily: 'fantasy', lineHeight: 34, color: '#0071bc', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.app')}</Text>
                        <Image style={{ height: 289, width: '100%', marginBottom: 34, borderRadius: 20 }} resizeMode='contain' source={require("../image/enpic/bio7.jpg")}></Image>
                        <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18, }}>{I18n.t('BiologicalActivity.sense')}</Text>
                        <Text style={{ fontSize: 14, marginBottom: 15, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.personalized')}</Text>
                        <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18, }}>{I18n.t('BiologicalActivity.health')}</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                    <Text style={{ fontSize: 22, fontFamily: 'fantasy', lineHeight: 34, marginBottom: 34, textAlignVertical: 'center', color: '#0071bc' }}>{I18n.t('BiologicalActivity.clock')}</Text>
                    {/* <Text style={{ fontSize: 16, fontFamily: 'fantasy', fontWeight: '700', lineHeight: 34 }}>{I18n.t('BiologicalActivity.clock')}</Text> */}
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.chronological')}</Text>
                    <FitImage style={{ height: 389, width: '100%', marginBottom: 34 }} resizeMode='contain' source={require("../image/enpic/bio8.png")} />
                </View>

                <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, backgroundColor: '#f0f0f0', borderRadius: 20 }}>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop: 10, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 22, fontFamily: 'fantasy', lineHeight: 34, marginBottom: 23, color: '#0071bc', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.life')}</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'fantasy', fontWeight: '700', lineHeight: 34 }}>{I18n.t('BiologicalActivity.know')}</Text>
                        <Text style={{ fontSize: 14, marginBottom: 23, fontFamily: 'fantasy', lineHeight: 18, }}>{I18n.t('BiologicalActivity.identifying')}</Text>
                    </View>
                </View>

                <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>

                    <Text style={{ fontSize: 22, fontFamily: 'fantasy', lineHeight: 27, color: '#0071bc', textAlign: 'center', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.longevity')}</Text>
                    <Image style={{ height: 289, width: '100%', marginBottom: 34 }} resizeMode='contain' source={require("../image/enpic/bio9.png")}></Image>
                </View>

                {/* epigenetic age Detection Method */}
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ fontSize: 22, fontFamily: 'fantasy', lineHeight: 27, color: '#0071bc', textAlign: 'center', textAlignVertical: 'center', }}>epigenetic Age Detection Method</Text>
                </View>
                <View style={{ height: 20, width: 100 }}></View>
                {/* 底部bio10小三图 */}
                <View style={{ width: '90%',  alignSelf: 'center' }}>
                    <View style={{ backgroundColor: '#f0f0f0', borderRadius: 10,flexDirection: 'row', marginBottom: 40,paddingTop:25,paddingBottom:25 }}>
                        <View style={{ width: '30%', justifyContent: 'center' }}>
                            <Image style={{ width: '100%', height: 70 }} source={require('../image/enpic/bio10.png')} resizeMode='contain' />
                        </View>
                        <View style={{ width: '70%', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'fantasy', textAlign: 'center', textAlignVertical: 'center', color: '#7E934E', textAlignVertical: 'center', lineHeight: 20, fontWeight: '700' }}>{I18n.t('BiologicalActivity.length')}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'fantasy', textAlign: 'center', textAlignVertical: 'center', lineHeight: 20, }}>{I18n.t('BiologicalActivity.correlation')}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'fantasy', textAlign: 'center', textAlignVertical: 'center', lineHeight: 20, }}>{I18n.t('BiologicalActivity.requirements')}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'fantasy', textAlign: 'center', textAlignVertical: 'center', lineHeight: 20, }}>{I18n.t('BiologicalActivity.small')}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'fantasy', textAlign: 'center', textAlignVertical: 'center', lineHeight: 20, }}>{I18n.t('BiologicalActivity.results')}</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#f0f0f0', borderRadius: 10,  flexDirection: 'row', marginBottom: 40,paddingTop:25,paddingBottom:25 }}>
                        <View style={{ width: '30%', justifyContent: 'center' }}>
                            <Image style={{ width: '100%', height: 70 }} source={require('../image/enpic/bio11.png')} resizeMode='contain' />
                        </View>
                        <View style={{ width: '70%', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'fantasy', textAlign: 'center', textAlignVertical: 'center', color: '#7E934E', textAlignVertical: 'center', lineHeight: 20, fontWeight: '700' }}>{I18n.t('BiologicalActivity.scores')}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'fantasy', textAlign: 'center', textAlignVertical: 'center', lineHeight: 20, }}>{I18n.t('BiologicalActivity.sampling')}</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#f0f0f0', borderRadius: 10,  flexDirection: 'row', marginBottom: 40,paddingTop:25,paddingBottom:25 }}>
                        <View style={{ width: '30%', justifyContent: 'center' }}>
                            <Image style={{ width: '100%', height: 70 }} source={require('../image/enpic/bio12.png')} resizeMode='contain' />
                        </View>
                        <View style={{ width: '70%', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'fantasy', textAlign: 'center', textAlignVertical: 'center', color: '#7E934E', textAlignVertical: 'center', lineHeight: 20, fontWeight: '700' }}>{I18n.t('BiologicalActivity.epigenetic')}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'fantasy', textAlign: 'center', textAlignVertical: 'center', lineHeight: 20, }}>{I18n.t('BiologicalActivity.closely')}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, marginBottom: 12 }}>
                    <Text style={{ fontSize: 22, fontFamily: 'fantasy', color: '#0071bc', textAlignVertical: 'center', lineHeight: 45, }}>{I18n.t('BiologicalActivity.epiages')}</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'fantasy', textAlignVertical: 'center', lineHeight: 27, }}>{I18n.t('BiologicalActivity.methylation')}</Text>
                    <Text style={{ fontSize: 22, fontFamily: 'fantasy', color: '#0071bc', textAlignVertical: 'center', lineHeight: 56, }}>{I18n.t('BiologicalActivity.hkepi')}</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'fantasy', textAlignVertical: 'center', lineHeight: 25, }}>{I18n.t('BiologicalActivity.already')}</Text>
                </View>
                {/* 4小图 */}
                <View style={{ height: 250, width: '90%', alignSelf: 'center', justifyContent: 'space-around' }}>
                    <View style={{ heigh: 123, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ width: '42%', borderRadius: 20, backgroundColor: '#f0f0f0' }}>
                            <Image style={{ width: '100%', height: 45, justifyContent: 'center', marginTop: 5, marginBottom: 5 }} source={require('../image/icons/bio1.png')} resizeMode='contain' />
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', color: '#808080' }}>{I18n.t('BiologicalActivity.slow')}</Text>
                        </View>
                        <View style={{ width: '42%', borderRadius: 20, backgroundColor: '#f0f0f0' }}>
                            <Image style={{ width: '100%', height: 45, justifyContent: 'center', marginTop: 5, marginBottom: 5 }} source={require('../image/icons/bio2.png')} resizeMode='contain' />
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', color: '#808080' }}>{I18n.t('BiologicalActivity.onset')}</Text>
                        </View>
                    </View>
                    <View style={{ height: 123, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ width: '42%', borderRadius: 20, backgroundColor: '#f0f0f0' }}>
                            <Image style={{ width: '100%', height: 45, justifyContent: 'center', marginTop: 5, marginBottom: 5 }} source={require('../image/icons/sun.png')} resizeMode='contain' />
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', color: '#808080' }}>{I18n.t('BiologicalActivity.quality')}</Text>
                        </View>
                        <View style={{ width: '42%', borderRadius: 20, backgroundColor: '#f0f0f0' }}>
                            <Image style={{ width: '100%', height: 45, justifyContent: 'center', marginTop: 5, marginBottom: 5 }} source={require('../image/icons/bio4.png')} resizeMode='contain' />
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', color: '#808080' }}>{I18n.t('BiologicalActivity.extend')}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', marginTop: 34, marginBottom: 34 }}>
                    <View style={{ width: '90%', marginTop: 34, alignSelf: 'center', }}>
                        <Text style={{ fontSize: 22, fontFamily: 'fantasy', textAlignVertical: 'center', color: '#0071bc', lineHeight: 45 }}>{I18n.t('BiologicalActivity.making')}</Text>
                        <Text style={{ fontSize: 16, fontWeight: '800', marginBottom: 8, fontFamily: 'fantasy', lineHeight: 23, }}>{I18n.t('BiologicalActivity.fast')}</Text>
                        <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.chronologicaled')}</Text>
                        <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.possibly')}</Text>
                        <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.really')}</Text>
                        <Image style={{ height: 289, width: '100%' }} resizeMode='cover' source={require("../image/enpic/bio9.png")}></Image>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 23, }}>
                    <Text style={{ fontSize: 22, lineHeight: 56, marginBottom: 23, fontFamily: 'fantasy', color: '#0071bc', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.test')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 18 }}>{I18n.t('BiologicalActivity.developed')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'fantasy', lineHeight: 23 }}>{I18n.t('BiologicalActivity.epitherapeutics')}</Text>
                    <Text style={{ fontSize: 22, lineHeight: 28, fontFamily: 'fantasy', color: '#0071bc', textAlignVertical: 'center', marginTop: 34, marginBottom: 23 }}>{I18n.t('BiologicalActivity.steps')}</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <View style={{ borderWidth: 1, borderColor: '#0071bc', borderRadius: 10, backgroundColor: '#ebfaff' }}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ width: '70%', textAlignVertical: 'center', textAlign: 'center', fontSize: 18 }}>{I18n.t('BiologicalActivity.download')}</Text>
                            <Image style={{ height: 67, width: '30%' }} resizeMode='contain' source={require("../image/icons/bio5.png")}></Image>
                        </View>
                        <Text style={{ margin: 10, fontSize: 16, fontFamily: 'fantasy', lineHeight: 22 }}>{I18n.t('BiologicalActivity.register')}</Text>
                    </View>
                    <View style={{ marginTop: 24, borderWidth: 1, borderColor: '#0071bc', borderRadius: 10, backgroundColor: '#ebfaff' }}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ width: '70%', textAlignVertical: 'center', textAlign: 'center', fontSize: 18 }}>{I18n.t('BiologicalActivity.step2')}</Text>
                            <Image style={{ height: 67, width: '30%' }} resizeMode='contain' source={require("../image/icons/bio6.png")}></Image>
                        </View>
                        <Text style={{ margin: 10, fontSize: 16, fontFamily: 'fantasy', lineHeight: 22 }}>{I18n.t('BiologicalActivity.saliva')}</Text>
                    </View>
                    <View style={{ marginTop: 24, borderWidth: 1, borderColor: '#0071bc', borderRadius: 10, backgroundColor: '#ebfaff' }}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ width: '70%', textAlignVertical: 'center', textAlign: 'center', fontSize: 18 }}>{I18n.t('BiologicalActivity.step3')}</Text>
                            <Image style={{ height: 67, width: '30%' }} resizeMode='contain' source={require("../image/icons/bio7.png")}></Image>
                        </View>
                        <Text style={{ margin: 10, fontSize: 16, fontFamily: 'fantasy', lineHeight: 22 }}>{I18n.t('BiologicalActivity.questionnaire')}</Text>
                    </View>
                    <View style={{ marginTop: 24, borderWidth: 1, borderColor: '#0071bc', borderRadius: 10, backgroundColor: '#ebfaff' }}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ width: '70%', textAlignVertical: 'center', textAlign: 'center', fontSize: 18 }}>{I18n.t('BiologicalActivity.step4')}</Text>
                            <Image style={{ height: 67, width: '30%' }} resizeMode='contain' source={require("../image/icons/bio8.png")}></Image>
                        </View>
                        <Text style={{ margin: 10, fontSize: 16, fontFamily: 'fantasy', lineHeight: 22 }}>{I18n.t('BiologicalActivity.analyze')}</Text>
                    </View>
                    <View style={{ marginTop: 24, borderWidth: 1, borderColor: '#0071bc', borderRadius: 10, backgroundColor: '#ebfaff' }}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ width: '70%', textAlignVertical: 'center', textAlign: 'center', fontSize: 18 }}>{I18n.t('BiologicalActivity.step5')}</Text>
                            <Image style={{ height: 67, width: '30%' }} resizeMode='contain' source={require("../image/icons/bio9.png")}></Image>
                        </View>
                        <Text style={{ margin: 10, fontSize: 16, fontFamily: 'fantasy', lineHeight: 22 }}>{I18n.t('BiologicalActivity.lifestyle')}</Text>
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: 20 }}>{I18n.t('BiologicalActivity.foot')}</Text>
            </ScrollView >
        );
    }
}

