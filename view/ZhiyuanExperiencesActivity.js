import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview';
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';

// const FirstRoute = () => (
//     <View style={{ width: '90%', alignSelf: 'center', marginTop:px2dp() 20, marginBottom: 20 }}>
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
//     <View style={{ width: '90%', alignSelf: 'center', marginTop:px2dp() 20, marginBottom: 20 }}>
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
export default class ZhiyuanExperiencesActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ZhiyuanActivity.professional"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView style={{ flex: 1 }}>
                {/* <View>
                    <Text style={{ width: '90%', height:px2dp(67) , alignSelf: 'center', fontFamily: 'fantasy', fontSize:px2dp(28) , lineheight:px2dp(67) , fontWeight: 'bold' }}>{I18n.t('ZhiyuanActivity.professional')}</Text>
                </View> */}
                <View style={{ marginTop: px2dp(30), marginBottom: px2dp(30) }}>
                    {/* 2017-now */}
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: px2dp(22), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>2017-now</Text>
                        <Text style={{ height: px2dp(50), fontFamily: 'fantasy', textAlign: 'center', fontWeight: '700', fontSize: px2dp(16) }}>{I18n.t('ZhiyuanActivity.epidial')}</Text>
                        <Text style={{ fontFamily: 'fantasy',  lineheight: px2dp(45), textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ZhiyuanActivity.ltd')}</Text>
                        <Text style={{ fontFamily: 'fantasy', ineheight: px2dp(45), textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ZhiyuanActivity.lab')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    {/* 2012 –2015 */}
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: px2dp(20), paddingTop: px2dp(20) }} >
                        <Text style={{ height: px2dp(22), lineheight: px2dp(22), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>2012 –2015</Text>
                        <Text style={{ height: px2dp(50), lineheight: px2dp(20), fontFamily: 'fantasy', textAlign: 'center', fontWeight: '700', fontSize: px2dp(16) }}>{I18n.t('ZhiyuanActivity.usa')}</Text>
                        <Text style={{ fontFamily: 'fantasy', lineheight: px2dp(45), textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ZhiyuanActivity.fellow')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    {/* 2010 – 2012 */}
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: px2dp(20), paddingTop: px2dp(20) }} >
                        <Text style={{ height: px2dp(22), lineheight: px2dp(22), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>2010 – 2012</Text>
                        <Text style={{ height: px2dp(50), lineheight: px2dp(20), fontFamily: 'fantasy', textAlign: 'center', fontWeight: '700', fontSize: px2dp(16) }}>{I18n.t('ZhiyuanActivity.state')}</Text>
                        <Text style={{ fontFamily: 'fantasy', lineheight: px2dp(45), textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ZhiyuanActivity.university')}</Text>
                        <Text style={{ fontFamily: 'fantasy',lineheight: px2dp(45), textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ZhiyuanActivity.phd')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    {/* 2006 - 2012 */}
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: px2dp(20), paddingTop: px2dp(20) }} >
                        <Text style={{ height: px2dp(22), lineheight: px2dp(22), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14) }}>2010 – 2012</Text>
                        <Text style={{ height: px2dp(50), lineheight: px2dp(20), fontFamily: 'fantasy',  textAlign: 'center', fontWeight: '700', fontSize: px2dp(16) }}>{I18n.t('ZhiyuanActivity.key')}</Text>
                        <Text style={{ fontFamily: 'fantasy', lineheight: px2dp(45), textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ZhiyuanActivity.nanjing')}</Text>
                        <Text style={{ fontFamily: 'fantasy',lineheight: px2dp(45), textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('ZhiyuanActivity.candidate')}</Text>
                    </View>
                </View>



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



            </ScrollView >

        );
    }
}

