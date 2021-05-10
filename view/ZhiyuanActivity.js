import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview';
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';

// const FirstRoute = () => (
//     <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
//         <View style={{ height:px2dp() 20 }}></View>
//         <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 67, lineheight:px2dp() 21 }}>
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.trainee')}</Text>
//             {I18n.t('ZhiyuanActivity.american')}
//         </Text>
//         <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 67, lineheight:px2dp() 21 }}>
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.scholarship')}</Text>
//             {I18n.t('ZhiyuanActivity.council')}
//         </Text>
//         <View style={{ paddingTop: 20, paddingBottom: 20 }}>
//             <Text style={{ fontWeight: '700', height:px2dp() 34, fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.journals')}</Text>
//             <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 23, ontStyle: 'italic', lineheight:px2dp() 21 }}>{I18n.t('ZhiyuanActivity.biochemistry')}</Text>
//             <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 23, fontStyle: 'italic', lineheight:px2dp() 21 }}>{I18n.t('ZhiyuanActivity.annuals')} </Text>
//             <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 23, fontStyle: 'italic', lineheight:px2dp() 21 }}>{I18n.t('ZhiyuanActivity.cellular')}</Text>
//             <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 23, fontStyle: 'italic', lineheight:px2dp() 21 }}>{I18n.t('ZhiyuanActivity.journal')} </Text>

//         </View>
//         <View style={{ paddingTop: 20, paddingBottom: 20 }}>
//             <Text style={{ fontWeight: '700', height:px2dp() 34, fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.board')}</Text>
//             <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 23, fontStyle: 'italic', lineheight:px2dp() 21 }}>{I18n.t('ZhiyuanActivity.journal')}</Text>
//         </View>
//     </View>
// );

// const SecondRoute = () => (
//     <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
//         <View style={{ height:px2dp() 20 }}></View>
//         <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 67, lineheight:px2dp() 21 }}>
//         {I18n.t('ZhiyuanActivity.society')}
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.newusa')}</Text>
//         </Text>
//         <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 88, lineheight:px2dp() 21 }}>
//         {I18n.t('ZhiyuanActivity.third')}
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.atlanta')}</Text>
//         </Text>
//         <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 67, lineheight:px2dp() 21 }}>
//         {I18n.t('ZhiyuanActivity.seminar')}
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.atlanta')}</Text>
//         </Text>
//         <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 67, lineheight:px2dp() 21 }}>
//         {I18n.t('ZhiyuanActivity.georgina')}
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.atlanta')}</Text>
//         </Text>
//         <Text style={{ fontFamily: 'FontAwesome', height:px2dp() 67, lineheight:px2dp() 21 }}>
//         {I18n.t('ZhiyuanActivity.symposium')}
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.china')}</Text>
//         </Text>
//     </View>
// );
// const styles = StyleSheet.create({
//     scene: {
//         flex: 1,
//     },
// });
export default class ZhiyuanActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ZhiyuanActivity.title"),
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
    //             { key: 'first', title: I18n.t('ZhiyuanActivity.honors') },
    //             { key: 'second', title: I18n.t('ZhiyuanActivity.conferences') },
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
            <ScrollView style={{flex:1}}>
                {/* {this.state.display == true ?
                    <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                        <WebView ref={(ref) => { this.brower = ref }} source={{ uri: this.state.url }} />
                        <View style={{ width: "100%", height:px2dp() 35, backgroundColor: "#0071BC" }}>
                            <TouchableOpacity style={{ width: "100%", height:px2dp() "100%" }}>
                                <Button style={{ width: "100%", height:px2dp() "100%", backgroundColor: "#0071BC" }} title="close" onPress={() => { { this.setState({ display: false }) } }} />
                            </TouchableOpacity>
                        </View>
                    </Modal> : null
                } */}
                <View style={{ backgroundColor: '#e5e6e7' }}>
                    <View style={{ height:px2dp(120) }}></View>
                    <View style={{ backgroundColor: '#f6f7f8', borderTopLeftRadius: px2dp(30), borderTopRightRadius: px2dp(30) }}>
                        <View style={{ width: '90%', }}>
                            <Image style={{ height:px2dp(99), width: '100%', marginTop: px2dp(-60), marginLeft:px2dp(-60)  }} resizeMode="contain" source={require("../image/icons/jason.png")}></Image>
                        </View>
                        <View style={{ borderTopLeftRadius: px2dp(20) , borderTopRightRadius:px2dp(20)  }}>
                            <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center', paddingTop:px2dp(20) , paddingBottom:px2dp(20) , borderStyle: "dashed", borderBottomWidth: 0.5 }}>
                                <Text style={{ fontSize:px2dp(18) , lineheight:px2dp(44) ,fontFamily:'fantasy', textAlign: 'left', marginLeft:px2dp(20) , color: '#0071bc' }}>Zhiyuan Lv Ph.D.</Text>
                                <Text style={{ fontSize:px2dp(16) , lineheight:px2dp(18) ,fontFamily:'fantasy', textAlign: 'left', marginLeft:px2dp(20) , }}>{I18n.t('ZhiyuanActivity.manager')}</Text>
                                <Text style={{ fontSize:px2dp(14) , lineheight:px2dp(18) ,fontFamily:'fantasy',textAlign: 'left', marginLeft:px2dp(20) , fontStyle: 'italic' }}>{I18n.t('ZhiyuanActivity.beijing')}</Text>
                            </View>
                        </View>
                        {/* 个人经历 */}
                        {/* <View style={{ marginBottom: 20, backgroundColor: '#f0f0f0' }}>
                    <Text style={{ width: '90%', height:px2dp() 67, alignSelf: 'center', fontFamily: 'fantasy', fontSize:px2dp() 18, lineheight:px2dp() 67, fontWeight: 'bold' }}>{I18n.t('ZhiyuanActivity.professional')}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: '28%', height:px2dp() 48, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1 }}></Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height:px2dp() 17, lineheight:px2dp() 19, fontFamily: 'fantasy', textAlign: 'center' }}>2017-now
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height:px2dp() 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height:px2dp() 16, lineheight:px2dp() 14, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('ZhiyuanActivity.epidial')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height:px2dp() 88, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height:px2dp() 88, paddingLeft: 19 }} >
                        <Text style={{ lineheight:px2dp() 28, fontFamily: 'fantasy' }}>{I18n.t('ZhiyuanActivity.ltd')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineheight:px2dp() 23, }}>{I18n.t('ZhiyuanActivity.lab')}</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height:px2dp() 17, lineheight:px2dp() 19, fontFamily: 'fantasy', textAlign: 'center' }}>2012 –2015
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height:px2dp() 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height:px2dp() 16, lineheight:px2dp() 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('ZhiyuanActivity.usa')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height:px2dp() 68, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height:px2dp() 68, paddingLeft: 19 }} >
                        <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineheight:px2dp() 34, }}>{I18n.t('ZhiyuanActivity.fellow')}</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height:px2dp() 17, lineheight:px2dp() 19, fontFamily: 'fantasy', textAlign: 'center' }}>2010 – 2012
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height:px2dp() 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height:px2dp() 16, lineheight:px2dp() 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('ZhiyuanActivity.state')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height:px2dp() 68, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}></Text>

                    <View style={{ width: '70%', height:px2dp() 68, paddingLeft: 19 }} >
                        <Text style={{ lineheight:px2dp() 18, fontFamily: 'fantasy' }}>{I18n.t('ZhiyuanActivity.university')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineheight:px2dp() 34, }}>{I18n.t('ZhiyuanActivity.phd')} </Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height:px2dp() 17, lineheight:px2dp() 19, fontFamily: 'fantasy', textAlign: 'center' }}>2006 - 2012
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height:px2dp() 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height:px2dp() 16, lineheight:px2dp() 17, fontFamily: 'fantasy', paddingLeft: 10 }}> {I18n.t('ZhiyuanActivity.key')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height:px2dp() 68, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height:px2dp() 68, paddingLeft: 19 }} >
                        <Text style={{ lineheight:px2dp() 18, fontFamily: 'fantasy' }}>{I18n.t('ZhiyuanActivity.nanjing')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineheight:px2dp() 45, }}>{I18n.t('ZhiyuanActivity.candidate')}</Text>
                    </View>
                </View> */}

                        {/* 滑块 */}
                        {/* <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: FirstRoute,
                        second: SecondRoute,
                    })}
                    onIndexChange={index => this.setState({ index })}

                    initialLayout={{ width: Dimensions.get('window').width }}
                    style={{ height:px2dp() 589, }}
                /> */}

                        {/* 论文 */}
                        {/* <View style={{ backgroundColor: '#f0f0f0' }}>
                    <Text style={{ width: '90%', height:px2dp() 56, alignSelf: 'center', fontFamily: 'fantasy', fontSize:px2dp() 18, fontWeight: 'bold', lineheight:px2dp() 56 }} >{I18n.t('ZhiyuanActivity.papers')}</Text>
                </View>
                <View style={{ backgroundColor: '#1f96f4', paddingTop: 20, paddingBottom: 20 }}>
                    <View style={{ width: '90%', height:px2dp() 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.pnas.org/content/113/37/E5434" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Cd47-Sirpαinteraction and IL-10
                            constrain inflammation-induced macrophage phagocytosis of healthy self-cells. PNAS. 2016 Sep;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4490976/" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Loss of Cell Surface CD47
                            Clustering Formation and Binding Avidity to SIRPa Facilitate Apoptotic Cell Clearance by Macrophages. The Journal of Immunology. 2015 Jul;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4607582/" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>CD47 deficiency ameliorates
                            autoimmune nephritis in Faslpr mice by suppressing IgG autoantibody production.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 77, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0103599" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Argonaute 2 in cell-secreted
                            microvesicles guides the function of secreted miRNAs in recipient cells. PloS One. 2014 Jul;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3797048/" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Clustering'SIRPα into the
                            plasma membrane lipid microdomains is required for activated monocytes and macrophages to mediate effective cell surface interactions with CD47. PloS One. 2013 Oct;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.nature.com/articles/ncomms3436" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Inflammation-induced
                            proteolytic processing of the SIRPα cytoplasmic ITIM in neutrophils propagates a proinflammatory state. Nature Communications.2013 Sep;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.sciencedirect.com/science/article/pii/S0091674913003102" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Micro RNA-17/20a/106a modulate
                            macrophage inflammatory responses through targeting signal-regulatory protein α.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/jcp.24015" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>The protective role of
                            peroxisome proliferator-activated receptor γ coactivator-1α in hyperthyroid cardiac hypertrophy.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/20816931" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Molecular cloning of amphioxus
                            uncoupling protein and assessment of its uncoupling activity using a yeast heterologous expression system.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 67, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.nature.com/articles/cr201046" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Hypoxia induces PGC-1α
                            expression and mitochondrial biogenesis in myocardium of TOF patients.Cell Research . 2010 Apr; </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.sciencedirect.com/science/article/pii/S1567724909001500" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}> Molecular cloning of lamprey
                            uncoupling protein and assessment of its uncoupling activity using a yeast heterologous expression system. Mitochodrion. 2009 Sep;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3797048/" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>HDMCP uncouples yeast
                            mitochondrial respiration and alleviates steatosis in L02 and hepG2 cells by decreasing ATP and H2O2 levels: A novel mechanism for NAFLD. Journal of Hepatology. 2008 Oct.</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}

                        <View style={{ marginTop:px2dp(40),marginBottom:px2dp(40)  }}>
                            <View style={{ width: '90%', alignSelf: 'center' }}>
                                {/* experiences 经历*/}
                                <TouchableOpacity onPress={() => this.navigate.push("ZhiyuanExperiences")}>
                                    <View style={{ borderRadius:px2dp(15) , borderWidth:px2dp(1) , borderColor: '#D6D7D8', height:px2dp(80) , flexDirection: 'row', backgroundColor: '#ffffff', }}>
                                        <View style={{ width: '20%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height:px2dp(45)  }} source={require('../image/icons/pro1.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize:px2dp(18) , textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('ZhiyuanActivity.professional')}
                                    </Text>
                                        </View>
                                        <View style={{ width: '15%', height:px2dp(80) , justifyContent: 'center' }}>
                                            <Text style={{ fontSize:px2dp(20) , fontFamily: 'fantasy', color: '#898989', textAlign: 'center', fontWeight: '700' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height:px2dp(20)  }}></View>
                                {/* Conferences */}
                                <TouchableOpacity onPress={() => this.navigate.push("ZhiyuanConferences")}>
                                    <View style={{ borderColor: '#D6D7D8', borderRadius:px2dp(15) , borderWidth:px2dp(1) , height:px2dp(80) , flexDirection: 'row', backgroundColor: '#ffffff', }}>
                                        <View style={{ width: '20%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height:px2dp(54)  }} source={require('../image/icons/pro3.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize:px2dp(18) , textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('ZhiyuanActivity.conferences')}
                                    </Text>
                                        </View>
                                        <View style={{ width: '15%', height:px2dp(80) , justifyContent: 'center' }}>
                                            <Text style={{ fontSize:px2dp(20) , fontFamily: 'fantasy', color: '#898989', textAlign: 'center', fontWeight: '700' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height:px2dp(20) }}></View>
                                {/* Honors 荣誉*/}
                                <TouchableOpacity onPress={() => this.navigate.push("ZhiyuanHonors")}>
                                    <View style={{ borderColor: '#D6D7D8', borderRadius:px2dp(15) , borderWidth:px2dp(1) , height:px2dp(80) , flexDirection: 'row', backgroundColor: '#ffffff', }}>
                                        <View style={{ width: '20%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height:px2dp(45)  }} source={require('../image/icons/pro4.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize:px2dp(18) , textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('ZhiyuanActivity.honors')}
                                    </Text>
                                        </View>
                                        <View style={{ width: '15%', height:px2dp(80) , justifyContent: 'center' }}>
                                            <Text style={{ fontSize:px2dp(20) , fontFamily: 'fantasy', color: '#898989', textAlign: 'center', fontWeight: '700' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height:px2dp(20)  }}></View>
                                {/* published 发表*/}
                                <TouchableOpacity onPress={() => this.navigate.push("ZhiyuanPublished")}>
                                    <View style={{ borderColor: '#D6D7D8', borderRadius: px2dp(15) , borderWidth:px2dp(1) , height:px2dp(80) , flexDirection: 'row', backgroundColor: '#ffffff', }}>
                                        <View style={{ width: '20%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height:px2dp(45) }} source={require('../image/icons/pro6.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize:px2dp(18) , textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('ZhiyuanActivity.papers')}
                                    </Text>
                                        </View>
                                        <View style={{ width: '15%', height:px2dp(80) , justifyContent: 'center' }}>
                                            <Text style={{ fontSize:px2dp(20) , fontFamily: 'fantasy', color: '#898989', textAlign: 'center', fontWeight: '700' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height:px2dp(20)  }}></View>
                            </View>
                        </View>
                       

                    </View>
                </View>
            </ScrollView >

        );
    }
}

