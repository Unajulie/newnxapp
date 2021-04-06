import React, { Component } from 'react';
import { StyleSheet, StatusBar, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { WebView } from 'react-native-webview';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';


type Props = {};
export default class DavidPublishedActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('DavidActivity.publshed'),
        })
    }
    constructor(props) {
        super(props);
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
                >
                </StatusBar>
          
                {/* 发表论文 */}
                <View>
                    <Text style={{ width: '90%', height: 67, alignSelf: 'center', fontFamily: 'fantasy', fontSize: 28, lineHeight: 67, fontWeight: 'bold' }}>{I18n.t('DavidActivity.publshed')}</Text>
                </View>
                <View style={{ marginTop: 20, marginBottom: 20 }}>
                    <View style={{ height: 15 }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/29924424" }); this.setState({ display: true }) }}>
                            <Text style={{ height: 80, lineHeight: 25, fontFamily: 'fantasy', fontSize: 14, fontWeight: '700', color: '#3B3B3B' }}>Identification of an Epigenetic Signature of 
                            Osteoporosis in Blood DNA of Postmenopausal Women.</Text>
                            <Text style={{ height: 40, lineHeight: 30, fontFamily: 'fantasy', fontSize: 14, color: '#626471' }}>
                            JBMR  2018</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 15 }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://bmccancer.biomedcentral.com/articles/10.1186/s12885-018-4482-7" }); this.setState({ display: true }) }}>
                            <Text style={{ height: 60, lineHeight: 25, fontFamily: 'fantasy', fontSize: 14, fontWeight: '700', color: '#3B3B3B' }}>
                             DNA methylation signatures of breast cancer in peripheral T-cells.</Text>
                            <Text style={{ height: 40, lineHeight: 30, fontFamily: 'fantasy', fontSize: 14, color: '#626471' }}>
                            BMC  Cancer 2018</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 15 }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://clinicalepigeneticsjournal.biomedcentral.com/articles/10.1186/s13148-017-0436-1" }); this.setState({ display: true }) }}>
                            <Text style={{ height: 60, lineHeight: 25, fontFamily: 'fantasy', fontSize: 14, fontWeight: '700', color: '#3B3B3B' }}>
                             DNA methylation signatures of breast cancer in peripheral T-cells.</Text>
                            <Text style={{ height: 40, lineHeight: 30, fontFamily: 'fantasy', fontSize: 14, color: '#626471' }}>
                            Clin Epigenetics.2018</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 15 }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.onlinelibrary.wiley.com/doi/full/10.1002/mnfr.201701008" }); this.setState({ display: true }) }}>
                            <Text style={{ height: 80, lineHeight: 25, fontFamily: 'fantasy', fontSize: 14, fontWeight: '700', color: '#3B3B3B' }}>
                            Personalized cardio-metabolic responses to an anti-inflammatory nutrition intervention in obese adolescents.</Text>
                            <Text style={{ height: 40, lineHeight: 30, fontFamily: 'fantasy', fontSize: 14, color: '#626471' }}>
                            a randomized controlled crossover trial</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 15 }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.sciencedirect.com/science/article/abs/pii/S1094695016301780" }); this.setState({ display: true }) }}>
                            <Text style={{ height: 80, lineHeight: 25, fontFamily: 'fantasy', fontSize: 14, fontWeight: '700', color: '#3B3B3B' }}>
                            Genetic polymorphisms in ESR1 and VDR genes do not correlate with osteoporosis with familial dysautonomia.</Text>
                            <Text style={{ height: 40, lineHeight: 30, fontFamily: 'fantasy', fontSize: 14, color: '#626471' }}>
                              J Clin Densitom 2018</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 15 }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.greenmedinfo.health/article/methyl-donor-s-adenosylmethionine-sam-supplementation-attenuates-breast-cancer" }); this.setState({ display: true }) }}>
                            <Text style={{ height: 100, lineHeight: 25, fontFamily: 'fantasy', fontSize: 14, fontWeight: '700', color: '#3B3B3B' }}>
                            Methyl donor S-adenosylmethionine (SAM) supplementation attenuates breast cancer growth, invasion, and metastasis in vivo; therapeutic and chemopreventive applications.</Text>
                            <Text style={{ height: 40, lineHeight: 30, fontFamily: 'fantasy', fontSize: 14, color: '#626471' }}>
                            Oncotarget 2017</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 15 }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://academic.oup.com/nar/article/45/22/12681/4259028" }); this.setState({ display: true }) }}>
                            <Text style={{ height: 60, lineHeight: 25, fontFamily: 'fantasy', fontSize: 14, fontWeight: '700', color: '#3B3B3B' }}>
                            Epigenetic mechanisms underlie the crosstalk between growth factors and a steroid hormone.</Text>
                            <Text style={{ height: 40, lineHeight: 30, fontFamily: 'fantasy', fontSize: 14, color: '#626471' }}>
                            Nucleic Acids Res 2017</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 15 }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.researchgate.net/publication/316689941_DNA_methylation_controls_unmethylated_transcription_start_sites_in_the_genome_in_trans" }); this.setState({ display: true }) }}>
                            <Text style={{ height: 60, lineHeight: 25, fontFamily: 'fantasy', fontSize: 14, fontWeight: '700', color: '#3B3B3B' }}>
                            DNA methylation controls unmethylated transcription start sites in the genome in trans.</Text>
                            <Text style={{ height: 40, lineHeight: 30, fontFamily: 'fantasy', fontSize: 14, color: '#626471' }}>
                            Epigenomics  2017</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <Text style={{ fontFamily: 'fantasy', fontSize: 12, textAlign: 'center' }}>{I18n.t('DavidActivity.all')}</Text>
            </ScrollView >

        );
    }
}

