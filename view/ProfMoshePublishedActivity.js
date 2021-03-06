import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview'
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';
import VideoPlayer from 'react-native-video-controls'
import data from '../appdata'
import { px2dp } from '../src/px2dp';

export default class ProfMoshePublishedActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('ProfMosheActivity.papers'),
        })
    }
    constructor(props) {
        super(props);
    }
    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView style={{ flex: 1 }}>
                <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                {/* 荣誉 */}
                {/* <View style={{ backgroundColor: '#f0f0f0' }}>
                    <Text style={{ width: '90%', height: px2dp(50), alignSelf: 'center', fontFamily: 'fantasy', fontSize: px2dp(18), fontWeight: 'bold', lineheight: px2dp(56) }} >{I18n.t('ProfMosheActivity.papers')}</Text>
                </View> */}
                <View style={{ paddingTop: px2dp(20), paddingBottom: px2dp(20) }}>
                    {/* 新改 */}
                    <View style={{ height: px2dp(15) }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/15220929" }); this.setState({ display: true }) }}>
                            <Text style={{ height: px2dp(36), lineheight: px2dp(36), fontFamily: 'fantasy', fontSize: px2dp(14), fontWeight: '700', color: '#3B3B3B' }}>Epigenetic programming by
                            maternal behavior.</Text>
                            <Text style={{ height: px2dp(40), lineheight: px2dp(30), fontFamily: 'fantasy', fontSize: px2dp(14), color: '#626471' }}>
                                Aug 1st 2004  Nature Neuroscience volume 7 issue 8 pp 847-854</Text>
                        </TouchableOpacity>
                        <Text style={{ height: px2dp(26), lineheight: px2dp(26), fontFamily: 'fantasy', fontSize: px2dp(16), fontWeight: '700', color: '#101112' }}>5530 Citations</Text>
                        <View style={{ height: px2dp(15) }}></View>
                    </View>
                    <View style={{ height: px2dp(15) }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/19234457" }); this.setState({ display: true }) }}>
                            <Text style={{ height: 60, lineheight: px2dp(30), fontFamily: 'fantasy', fontSize: px2dp(14), fontWeight: '700', color: '#3B3B3B' }}>Epigenetic regulation of the
                            glucocorticoid receptor in human brain associates with childhood abuse.</Text>
                            <Text style={{ height: px2dp(36), lineheight: px2dp(36), fontFamily: 'fantasy', fontSize: px2dp(14), color: '#626471' }}>
                                Nat Neurosci .2009 Mar; 12(3): 342–348</Text>
                        </TouchableOpacity>
                        <Text style={{ height: px2dp(26), lineheight: px2dp(26), fontFamily: 'fantasy', fontSize: px2dp(16), fontWeight: '700', color: '#101112' }}>2892 Citations</Text>
                        <View style={{ height: px2dp(15) }}></View>
                    </View>
                    <View style={{ height: px2dp(15) }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/10050851" }); this.setState({ display: true }) }}>
                            <Text style={{ height: 60, lineheight: px2dp(30), fontFamily: 'fantasy', fontSize: px2dp(14), fontWeight: '700', color: '#3B3B3B' }}>A mammalian protein with specific
                            demethylase activity for mCpG DNA.</Text>
                            <Text style={{ height: px2dp(36), lineheight: px2dp(36), fontFamily: 'fantasy', fontSize: px2dp(14), color: '#626471' }}>
                                Nature 1999 Feb 18</Text>
                        </TouchableOpacity>
                        <Text style={{ height: px2dp(26), lineheight: px2dp(26), fontFamily: 'fantasy', fontSize: px2dp(16), fontWeight: '700', color: '#101112' }}>528 Citations</Text>
                        <View style={{ height: px2dp(15) }}></View>
                    </View>
                    <View style={{ height: px2dp(15) }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/18461137" }); this.setState({ display: true }) }}>
                            <Text style={{ height: 60, lineheight: px2dp(30), fontFamily: 'fantasy', fontSize: px2dp(14), fontWeight: '700', color: '#3B3B3B' }}>Promoter-wide hypermethylation of
                            the ribosomal RNA gene promoter in the suicide brain. </Text>
                            <Text style={{ height: px2dp(36), lineheight: px2dp(36), fontFamily: 'fantasy', fontSize: px2dp(14), color: '#626471' }}>
                                PLoS One 2008 May 7</Text>
                        </TouchableOpacity>
                        <Text style={{ height: px2dp(26), lineheight: px2dp(26), fontFamily: 'fantasy', fontSize: px2dp(16), fontWeight: '700', color: '#101112' }}>351 Citations</Text>
                        <View style={{ height: px2dp(15) }}></View>
                    </View>
                    <View style={{ height: px2dp(15) }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/21386994" }); this.setState({ display: true }) }}>
                            <Text style={{ height: 60, lineheight: px2dp(30), fontFamily: 'fantasy', fontSize: px2dp(14), fontWeight: '700', color: '#3B3B3B' }}>Broad epigenetic signature of
                            maternal care in the brain of adult rats. </Text>
                            <Text style={{ height: px2dp(36), lineheight: px2dp(36), fontFamily: 'fantasy', fontSize: px2dp(14), color: '#626471' }}>
                                PLoS One 2011 Feb 28</Text>
                        </TouchableOpacity>
                        <Text style={{ height: px2dp(26), lineheight: px2dp(26), fontFamily: 'fantasy', fontSize: px2dp(16), fontWeight: '700', color: '#101112' }}>347 Citations</Text>
                        <View style={{ height: px2dp(15) }}></View>
                    </View>
                    <View style={{ height: px2dp(15) }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/7713905" }); this.setState({ display: true }) }}>
                            <Text style={{ height: 60, lineheight: px2dp(30), fontFamily: 'fantasy', fontSize: px2dp(14), fontWeight: '700', color: '#3B3B3B' }}>Expression of antisense to DNA
                            demethylation and inhibits tumorigenesis. </Text>
                            <Text style={{ height: px2dp(36), lineheight: px2dp(36), fontFamily: 'fantasy', fontSize: px2dp(14), color: '#626471' }}>
                                J Biol Chem 1995 Apr 7</Text>
                        </TouchableOpacity>
                        <Text style={{ height: px2dp(26), lineheight: px2dp(26), fontFamily: 'fantasy', fontSize: px2dp(16), fontWeight: '700', color: '#101112' }}>256 Citations</Text>
                        <View style={{ height: px2dp(15) }}></View>
                    </View>
                    <View style={{ height: px2dp(15) }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/18851683" }); this.setState({ display: true }) }}>
                            <Text style={{ height: 60, lineheight: px2dp(30), fontFamily: 'fantasy', fontSize: px2dp(14), fontWeight: '700', color: '#3B3B3B' }}>Epigenetics, DNA methylation,
                            and chromatin modifying drugs. </Text>
                            <Text style={{ height: px2dp(36), lineheight: px2dp(36), fontFamily: 'fantasy', fontSize: px2dp(14), color: '#626471' }}>
                                Annu Rev Pharmacol Toxicol. 2009;49</Text>
                        </TouchableOpacity>
                        <Text style={{ height: px2dp(26), lineheight: px2dp(26), fontFamily: 'fantasy', fontSize: px2dp(16), fontWeight: '700', color: '#101112' }}>432 Citations</Text>
                        <View style={{ height: px2dp(15) }}></View>
                    </View>
                    <View style={{ height: px2dp(15) }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/16484373" }); this.setState({ display: true }) }}>
                            <Text style={{ height: px2dp(90), lineheight: px2dp(30), fontFamily: 'fantasy', fontSize: px2dp(14), fontWeight: '700', color: '#3B3B3B' }}>Maternal care effects on the
                            hippocampal transcriptome and anxiety-mediated behaviors in the offspring that are reversible in adulthood. </Text>
                            <Text style={{ height: px2dp(36), lineheight: px2dp(36), fontFamily: 'fantasy', fontSize: px2dp(14), color: '#626471' }}>
                                Proc Natl</Text>
                        </TouchableOpacity>
                        <Text style={{ height: px2dp(26), lineheight: px2dp(26), fontFamily: 'fantasy', fontSize: px2dp(16), fontWeight: '700', color: '#101112' }}>786 Citations</Text>
                        <View style={{ height: px2dp(15) }}></View>
                    </View>






                    {/* <View style={{ flexDirection: 'row', width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ url: 'https://www.ncbi.nlm.nih.gov/pubmed/16484373' }); this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'fantasy', fontSize:px2dp(14), color: '#ffffff' }}>Maternal care effects on the
                            hippocampal transcriptome and anxiety-mediated behaviors in the offspring that are reversible in adulthood. Proc Natl </Text>
                        </TouchableOpacity>
                        <Text style={{ width: '20%', fontFamily: 'fantasy', fontSize:px2dp(14), color: '#ffffff' }}>786 Citations</Text>
                    </View> */}
                </View>





                {/* 三个页面切换TabView */}
                {/* <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: FirstRoute,
                        second: SecondRoute,
                        Third: ThirddRoute,
                    })}
                    onIndexChange={index => this.setState({ index })}

                    initialLayout={{ width: Dimensions.get('window').width }}
                    style={{ height: 667, }}
                /> */}

                {/* 荣誉 */}


            </ScrollView>

        );
    }
}

