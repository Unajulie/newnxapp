import React, { Component } from 'react';
import { StyleSheet, StatusBar, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { WebView } from 'react-native-webview';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';

// 荣誉honor
// const FirstRoute = () => (
//     <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
//         <View style={{ height:px2dp() 30 }}></View>
//         <Text style={{ fontStyle: 'italic', lineheight:px2dp() 28, fontWeight: '700' }}>{I18n.t('DavidActivity.us')}</Text>
//         <Text style={{ fontFamily: 'fantasy', lineheight:px2dp() 21, }}>
//             {I18n.t('DavidActivity.cancer')}</Text>

//         <View style={{ height:px2dp() 30 }}></View>
//         <Text style={{ fontStyle: 'italic', lineheight:px2dp() 28, fontWeight: '700' }}>{I18n.t('DavidActivity.uspa')}</Text>
//         <Text style={{ fontFamily: 'fantasy', lineheight:px2dp() 21, }}>
//             {I18n.t('DavidActivity.dna')}</Text>
//         <View style={{ height:px2dp() 45 }}></View>
//         <Text style={{ fontFamily: 'fantasy', lineheight:px2dp() 21,marginBottom:18 }}>2011-- <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.fellow')}</Text>{I18n.t('DavidActivity.israel')}</Text>
//         <Text style={{ fontFamily: 'fantasy', lineheight:px2dp() 21,marginBottom:18 }}>2010--{I18n.t('DavidActivity.alumni')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}> {I18n.t('DavidActivity.award')}</Text></Text>
//         <Text style={{ fontFamily: 'fantasy', lineheight:px2dp() 21,marginBottom:18 }}>2009--{I18n.t('DavidActivity.medical')}<Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}> {I18n.t('DavidActivity.award')}</Text></Text>
//     </View>
// );

// 學術會議
// const SecondRoute = () => (
//     <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
//         <Text style={{ fontFamily: 'fantasy', lineheight:px2dp() 21,marginBottom:18 }}>{I18n.t('DavidActivity.forum')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.india')}</Text></Text>
//         <Text style={{ fontFamily: 'fantasy', lineheight:px2dp() 21,marginBottom:18 }}>{I18n.t('DavidActivity.diseases')} <Text style={{ fontWeight: '700', fontStyle: 'italic', }}>{I18n.t('DavidActivity.canadaa')}</Text></Text>
//         <Text style={{ fontFamily: 'fantasy', lineheight:px2dp() 21,marginBottom:18 }}>{I18n.t('DavidActivity.conference')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.newyork')}</Text></Text>
//         <Text style={{ fontFamily: 'fantasy', lineheight:px2dp() 21,marginBottom:18 }}>{I18n.t('DavidActivity.first')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.erat')}</Text></Text>
//         <Text style={{ fontFamily: 'fantasy', lineheight:px2dp() 21,marginBottom:18 }}>{I18n.t('DavidActivity.reseach')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.oslo')}</Text></Text>
//         <Text style={{ fontFamily: 'fantasy', lineheight:px2dp() 21,marginBottom:18 }}>{I18n.t('DavidActivity.cell')}  <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.france')}</Text></Text>
//         <Text style={{ fontFamily: 'fantasy', lineheight:px2dp() 21,marginBottom:18 }}>{I18n.t('DavidActivity.basic')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.newyork')}</Text></Text>
//         <Text style={{ fontFamily: 'fantasy', lineheight:px2dp() 21,marginBottom:18 }}>{I18n.t('DavidActivity.health')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.london')} </Text></Text>
//     </View>
// );
// const styles = StyleSheet.create({
//     scene: {
//         flex: 1,
//     },
// });
type Props = {};
export default class DavidActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("DavidActivity.title"),
        })
    }
    constructor(props) {
        super(props);
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         display: false,
    //         index: 0,
    //         routes: [
    //             { key: 'first', title: I18n.t('DavidActivity.honor') },
    //             { key: 'second', title: I18n.t('DavidActivity.conferences') },
    //         ],
    //     }
    // }
    // _handleIndexChange = index => this.setState({ index });

    // _renderHeader = props => <TabBar {...props} />;

    // _renderScene = SceneMap({
    //     first: FirstRoute,
    //     second: SecondRoute,
    // });
    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView style={{ flex: 1 }}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                {/* {this.state.display == true ?
                    <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                        <WebView startInLoadingState={true} ref={(ref) => { this.brower = ref }} source={{ uri: this.state.url }} />
                        <View style={{ width: "100%", height:px2dp() 35, backgroundColor: "#0071BC" }}>
                            <TouchableOpacity style={{ width: "100%", height:px2dp() "100%" }}>
                                <Button style={{ width: "100%", height:px2dp() "100%", backgroundColor: "#0071BC" }} title="close" onPress={() => { { this.setState({ display: false }) } }} />
                            </TouchableOpacity>
                        </View>
                    </Modal> : null
                } */}
                <View style={{ backgroundColor: '#e5e6e7' }}>
                    <View style={{ height:px2dp(120)  }}></View>
                    <View style={{ backgroundColor: '#f6f7f8', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <View style={{ width: '90%', }}>
                            <Image style={{ height:px2dp(99) , width: '100%', marginTop: -60, marginLeft:px2dp(-60)}} resizeMode="contain" source={require("../image/icons/david.png")}></Image>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center', marginBottom: 20, marginTop: 23, paddingBottom: 20, borderStyle: "dashed", borderBottomWidth: 0.5 }}>
                            <Text style={{ fontSize:px2dp(18) , lineheight:px2dp(44) , textAlign: 'left', marginLeft:px2dp(20) , color: '#0071bc' }}>{I18n.t("DavidActivity.title")}</Text>
                            <Text style={{ fontSize:px2dp(16) , lineheight:px2dp(18) , textAlign: 'left', marginLeft:px2dp(20) , }}>{I18n.t("DavidActivity.senior")}</Text>
                            <Text style={{ fontSize:px2dp(14) , lineheight:px2dp(18) , textAlign: 'left', marginLeft:px2dp(20) , fontStyle: 'italic' }}>{I18n.t("DavidActivity.hkg")}</Text>
                        </View>
                        {/* 專業履歷 */}
                        {/* <View style={{ marginBottom: 20, backgroundColor: '#f0f0f0' }}>
                    <Text style={{ width: '90%', height:px2dp() 67, alignSelf: 'center', fontFamily: 'fantasy', fontSize:px2dp() 18, lineheight:px2dp() 67, fontWeight: 'bold' }}>{I18n.t('DavidActivity.professional')}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: '28%', height:px2dp() 48, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1 }}></Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height:px2dp() 17, lineheight:px2dp() 19, fontFamily: 'fantasy', textAlign: 'center' }}>2017-now
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height:px2dp() 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height:px2dp() 16, lineheight:px2dp() 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('DavidActivity.hong')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height:px2dp() 56, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <Text style={{ width: '70%', height:px2dp() 56, lineheight:px2dp() 18, fontFamily: 'fantasy', paddingLeft: 19 }}><Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineheight:px2dp() 27 }}>{I18n.t("DavidActivity.senior")}</Text> </Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height:px2dp() 17, lineheight:px2dp() 19, fontFamily: 'fantasy', textAlign: 'center' }}>2016-now
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height:px2dp() 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height:px2dp() 16, lineheight:px2dp() 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('DavidActivity.montreal')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height:px2dp() 68, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height:px2dp() 68, paddingLeft: 19 }} >
                        <Text style={{ lineheight:px2dp() 18, fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.canada')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineheight:px2dp() 34, }}>{I18n.t('DavidActivity.founder')}</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height:px2dp() 17, lineheight:px2dp() 19, fontFamily: 'fantasy', textAlign: 'center' }}>2016-2017
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height:px2dp() 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height:px2dp() 16, lineheight:px2dp() 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('DavidActivity.department')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height:px2dp() 68, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}></Text>

                    <View style={{ width: '70%', height:px2dp() 68, paddingLeft: 19 }} >
                        <Text style={{ lineheight:px2dp() 18, fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.mcgill')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineheight:px2dp() 34, }}>{I18n.t('DavidActivity.research')}</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height:px2dp() 17, lineheight:px2dp() 19, fontFamily: 'fantasy', textAlign: 'center' }}>2011-2016
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height:px2dp() 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height:px2dp() 16, lineheight:px2dp() 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('DavidActivity.department')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height:px2dp() 68, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height:px2dp() 68, paddingLeft: 19 }} >
                        <Text style={{ lineheight:px2dp() 18, fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.university')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineheight:px2dp() 45, }}>{I18n.t('DavidActivity.fellowed')}</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height:px2dp() 17, lineheight:px2dp() 19, fontFamily: 'fantasy', textAlign: 'center' }}>2004-2011
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height:px2dp() 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height:px2dp() 16, lineheight:px2dp() 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('DavidActivity.hebrew')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height:px2dp() 68, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height:px2dp() 68, paddingLeft: 19 }} >
                        <Text style={{ lineheight:px2dp() 18, fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.school')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineheight:px2dp() 45, }}>{I18n.t('DavidActivity.assistant')}</Text>
                    </View>
                </View> */}

                        <View style={{ height:px2dp(20)  }}></View>
                        {/* 左右滑块 */}
                        {/* <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: FirstRoute,
                        second: SecondRoute,
                    })}
                    onIndexChange={index => this.setState({ index })}

                    initialLayout={{ width: Dimensions.get('window').width }}
                    style={{ height:px2dp() 678, }}
                /> */}
                        {/* 发表论文 */}
                        {/* <View style={{ backgroundColor: '#f0f0f0' }}>
                    <Text style={{ width: '90%', height:px2dp() 56, alignSelf: 'center', fontFamily: 'fantasy', fontSize:px2dp() 18, fontWeight: 'bold', lineheight:px2dp() 56 }} >{I18n.t('DavidActivity.publshed')}</Text>
                </View>
                <View style={{ backgroundColor: '#1f96f4', paddingTop: 20, paddingBottom: 20 }}>
                    <View style={{ width: '90%', height:px2dp() 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/29924424" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Identification of an Epigenetic Signature of Osteoporosis in Blood DNA of Postmenopausal Women. JBMR. 2018;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://bmccancer.biomedcentral.com/articles/10.1186/s12885-018-4482-7" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>DNA methylation signatures of breast cancer in peripheral T-cells. BMC  Cancer.2018;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://clinicalepigeneticsjournal.biomedcentral.com/articles/10.1186/s13148-017-0436-1" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>The signature of liver cancer in immune cells DNA methylation. Clin Epigenetics.2018;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.onlinelibrary.wiley.com/doi/full/10.1002/mnfr.201701008" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Personalized cardio-metabolic responses to an anti-inflammatory nutrition intervention in obese adolescents: a randomized controlled crossover trial.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.sciencedirect.com/science/article/abs/pii/S1094695016301780" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Genetic polymorphisms in ESR1 and VDR genes do not correlate with osteoporosis with familial dysautonomia.  J Clin Densitom.2018;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.greenmedinfo.health/article/methyl-donor-s-adenosylmethionine-sam-supplementation-attenuates-breast-cancer" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Methyl donor S-adenosylmethionine (SAM) supplementation attenuates breast cancer growth, invasion, and metastasis in vivo; therapeutic and chemopreventive applications.Oncotarget. 2017;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://academic.oup.com/nar/article/45/22/12681/4259028" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Epigenetic mechanisms underlie the crosstalk between growth factors and a steroid hormone.Nucleic Acids Res. 2017;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.researchgate.net/publication/316689941_DNA_methylation_controls_unmethylated_transcription_start_sites_in_the_genome_in_trans" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}> DNA methylation controls unmethylated transcription start sites in the genome in trans”. Epigenomics . 2017;</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
                        <View style={{ marginTop: 40 }}>
                            <View style={{ width: '90%', height:px2dp(540) , alignSelf: 'center' }}>
                                {/* experiences 经历*/}
                                <TouchableOpacity onPress={() => this.navigate.push("DavidExperiences")}>
                                    <View style={{ borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', height:px2dp(80) , flexDirection: 'row', backgroundColor: '#ffffff', }}>
                                        <View style={{ width: '20%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height:px2dp(45)  }} source={require('../image/icons/pro1.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize:px2dp(18) , textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('DavidActivity.professional')}
                                    </Text>
                                        </View>
                                        <View style={{ width: '15%', height:px2dp(80) , justifyContent: 'center' }}>
                                            <Text style={{ fontSize:px2dp(20) , fontFamily: 'fantasy', color: '#898989', textAlign: 'center', fontWeight: '700' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height:px2dp(20)  }}></View>
                                {/* Conferences */}
                                <TouchableOpacity onPress={() => this.navigate.push("DavidConferences")}>
                                    <View style={{ borderColor: '#D6D7D8', borderRadius: 15, borderWidth: 1, height:px2dp(80) , flexDirection: 'row', backgroundColor: '#ffffff', }}>
                                        <View style={{ width: '20%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height:px2dp(45)  }} source={require('../image/icons/pro3.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize:px2dp(18) , textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('DavidActivity.conferences')}
                                    </Text>
                                        </View>
                                        <View style={{ width: '15%', height:px2dp(80) , justifyContent: 'center' }}>
                                            <Text style={{ fontSize:px2dp(20) , fontFamily: 'fantasy', color: '#898989', textAlign: 'center', fontWeight: '700' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height:px2dp(20)  }}></View>
                                {/* Honors 荣誉*/}
                                <TouchableOpacity onPress={() => this.navigate.push("DavidHonor")}>
                                    <View style={{ borderColor: '#D6D7D8', borderRadius: 15, borderWidth: 1, height:px2dp(80) , flexDirection: 'row', backgroundColor: '#ffffff', }}>
                                        <View style={{ width: '20%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height:px2dp(45)  }} source={require('../image/icons/pro4.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize:px2dp(18) , textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('DavidActivity.honor')}
                                    </Text>
                                        </View>
                                        <View style={{ width: '15%', height:px2dp(80) , justifyContent: 'center' }}>
                                            <Text style={{ fontSize:px2dp(20) , fontFamily: 'fantasy', color: '#898989', textAlign: 'center', fontWeight: '700' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height:px2dp(20)  }}></View>
                                {/* published 发表*/}
                                <TouchableOpacity onPress={() => this.navigate.push("DavidPublished")}>
                                    <View style={{ borderColor: '#D6D7D8', borderRadius: 15, borderWidth: 1, height:px2dp(80) , flexDirection: 'row', backgroundColor: '#ffffff', }}>
                                        <View style={{ width: '20%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height:px2dp(45)  }} source={require('../image/icons/pro6.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize:px2dp(18) , textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('DavidActivity.publshed')} 
                                    </Text>
                                        </View>
                                        <View style={{ width: '15%', height:px2dp(80) , justifyContent: 'center' }}>
                                            <Text style={{ fontSize:px2dp(20) , fontFamily: 'fantasy', color: '#898989', textAlign: 'center', fontWeight: '700' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </View>
                </View>
            </ScrollView >

        );
    }
}

