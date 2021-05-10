import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview';
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';

// const FirstRoute = () => (
//     <View style={{ width: '90%', alignSelf: 'center', marginTop:px2dp() 20, marginBottom:px2dp() 20 }}>
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
//     <View style={{ width: '90%', alignSelf: 'center', marginTop:px2dp() 20, marginBottom:px2dp() 20 }}>
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
export default class ZhiyuanPublishedActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ZhiyuanActivity.papers"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView style={{flex:1}}>
                {/* <View>
                    <Text style={{ width: '90%', height:px2dp(67) , alignSelf: 'center', fontFamily: 'fantasy', fontSize:px2dp(28) , lineheight:px2dp(67) , fontWeight: 'bold' }}>{I18n.t('ZhiyuanActivity.papers')}</Text>
                </View> */}
                <View style={{ marginTop:px2dp(30) , marginBottom:px2dp(30)  }}>
                    <View></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.pnas.org/content/113/37/E5434" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(89) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                            Cd47-Sirpαinteraction and IL-10 constrain inflammation-induced macrophage
                             phagocytosis of healthy self-cells.</Text>
                            <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontFamily: 'fantasy', fontSize:px2dp(14) , color: '#626471' }}>
                            PNAS. 2016 Sep</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4490976/" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(80) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                             Loss of Cell Surface CD47 Clustering Formation and Binding Avidity to SIRPa
                             Facilitate Apoptotic Cell Clearance by Macrophages.</Text>
                            <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontFamily: 'fantasy', fontSize:px2dp(14) , color: '#626471' }}>
                            The Journal of Immunology.2015 Jul</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4607582/" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(80) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                            CD47 deficiency ameliorates
                            autoimmune nephritis in Faslpr mice by suppressing IgG autoantibody production.</Text>  
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0103599" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(80) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                            Argonaute 2 in cell-secreted
                            microvesicles guides the function of secreted miRNAs in recipient cells.</Text>
                            <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontFamily: 'fantasy', fontSize:px2dp(14) , color: '#626471' }}>
                            PloS One. 2014 Jul</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3797048/" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(80) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                            Clustering'SIRPα into the plasma membrane lipid microdomains is required for
                             activated monocytes and macrophages to mediate effective cell surface interactions with CD47.</Text>
                            <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontFamily: 'fantasy', fontSize:px2dp(14) , color: '#626471' }}>
                            PloS One. 2013 Oct</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.nature.com/articles/ncomms3436" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(80) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                             Inflammation-induced proteolytic processing of the SIRPα cytoplasmic
                             ITIM in neutrophils propagates a proinflammatory state.</Text>
                            <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontFamily: 'fantasy', fontSize:px2dp(14) , color: '#626471' }}>
                            Nature Communications.2013 Sep</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.sciencedirect.com/science/article/pii/S0091674913003102" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(80) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                            Micro RNA-17/20a/106a modulate macrophage inflammatory responses
                             through targeting signal-regulatory protein α.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/jcp.24015" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(80) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                            The protective role of peroxisome proliferator-activated receptor
                             γ coactivator-1α in hyperthyroid cardiac hypertrophy.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/20816931" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(80) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                            Molecular cloning of amphioxus uncoupling protein and assessment
                             of its uncoupling activity using a yeast heterologous expression system.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.nature.com/articles/cr201046" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(80) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                            Hypoxia induces PGC-1α expression and mitochondrial
                             biogenesis in myocardium of TOF patients.</Text>
                            <Text style={{ height:px2dp(40) , lineheight:px2dp(30), fontFamily: 'fantasy', fontSize:px2dp(14) , color: '#626471' }}>
                            Cell Research . 2010 Apr</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.sciencedirect.com/science/article/pii/S1567724909001500" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(80) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                            Molecular cloning of lamprey uncoupling protein and assessment
                             of its uncoupling activity using a yeast heterologous expression system.</Text>
                            <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontFamily: 'fantasy', fontSize:px2dp(14) , color: '#626471' }}>
                            Mitochodrion. 2009 Sep</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3797048/" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(100) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                            HDMCP uncouples yeast mitochondrial respiration and alleviates steatosis
                             in L02 and hepG2 cells by decreasing ATP and H2O2 levels: A novel mechanism for NAFLD.</Text>
                            <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontFamily: 'fantasy', fontSize:px2dp(14) , color: '#626471' }}>
                            Journal of Hepatology. 2008 Oct</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ height:px2dp(20)  }}></View>
               
            </ScrollView >

        );
    }
}

