import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';


// const styles = StyleSheet.create({
//     scene: {
//         flex: 1,
//     },
// });
export default class ChifatActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ChifatActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            index: 0,
        }
    }
    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView style={{ flex: 1 }}>
                <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
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
                <View style={{flex:1, backgroundColor: '#e5e6e7' }}>
                    <View style={{ height: px2dp(120) }}></View>
                    <View style={{ backgroundColor: '#f6f7f8', borderTopLeftRadius: px2dp(30), borderTopRightRadius: px2dp(30) }}>
                        <View style={{ width: '90%', }}>
                            <Image style={{ height: px2dp(99), width: '100%', marginTop: px2dp(-60), marginLeft: -60 }} resizeMode="contain" source={require("../image/icons/chifat.png")}></Image>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center', paddingTop: px2dp(20), paddingBottom: px2dp(20), borderStyle: "dotted", borderBottomWidth: 0.5 }}>
                            <Text style={{ fontSize: px2dp(18), lineheight: px2dp(44),fontFamily:'fantasy', textAlign: 'left', marginLeft: px2dp(20), color: '#0071bc' }}>{I18n.t('ChifatActivity.title')}</Text>
                            <Text style={{ fontSize: px2dp(16), lineheight: px2dp(18), textAlign: 'left',fontFamily:'fantasy', marginLeft: px2dp(20), }}>{I18n.t('ChifatActivity.senior')}</Text>
                            <Text style={{ fontSize: px2dp(14), lineheight: px2dp(18), textAlign: 'left',fontFamily:'fantasy', marginLeft: px2dp(20), fontStyle: 'italic' }}>{I18n.t('ChifatActivity.ltb')}</Text>
                        </View>
                        {/* 个人履历 */}
                        {/* <View style={{ marginBottom: 20, backgroundColor: '#f0f0f0' }}>
                    <Text style={{ width: '90%', height:px2dp() 67, alignSelf: 'center', fontFamily: 'fantasy', fontSize:px2dp() 18, lineheight:px2dp() 67, fontWeight: 'bold' }}>{I18n.t('ChifatActivity.experiences')}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: '28%', height:px2dp() 48, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1 }}></Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height:px2dp() 17, lineheight:px2dp() 19, fontFamily: 'fantasy', textAlign: 'center' }}>2017-now
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height:px2dp() 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height:px2dp() 16, lineheight:px2dp() 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('ChifatActivity.hongkong')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height:px2dp() 56, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height:px2dp() 56, paddingLeft: 19 }} >
                        <Text style={{ lineheight:px2dp() 18, fontFamily: 'fantasy' }}>{I18n.t('ChifatActivity.src')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineheight:px2dp() 34, }}>{I18n.t('ChifatActivity.scientist')} </Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }} >
                    <Text style={{ width: '25%', height:px2dp() 17, lineheight:px2dp() 19, fontFamily: 'fantasy',fontSize:px2dp()12, textAlign: 'center' }}>2010,2016-2017
                        </Text>
                    <Text style={{ alignSelf: 'flex-end', width: '5%', height:px2dp() 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                    <Text style={{ width: '70%', height:px2dp() 16, lineheight:px2dp() 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('ChifatActivity.university')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ width: '28%', height:px2dp() 68, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                    </Text>
                    <View style={{ width: '70%', height:px2dp() 68, paddingLeft: 19 }} >
                        <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineheight:px2dp() 34, }}>{I18n.t('ChifatActivity.assistaant')}</Text>
                    </View>
                </View> */}

                        {/* 论文 */}
                        {/* <View style={{ height:px2dp() 20 }}></View>
                <View style={{ backgroundColor: '#f0f0f0' }}>
                    <Text style={{ width: '90%', height:px2dp() 56, alignSelf: 'center', fontFamily: 'fantasy', fontSize:px2dp() 18, fontWeight: 'bold', lineheight:px2dp() 56 }} >{I18n.t('ChifatActivity.papers')}</Text>
                </View>
                <View style={{ backgroundColor: '#1f96f4', paddingTop: 20, paddingBottom: 20 }}>
                    <View style={{ width: '90%', height:px2dp() 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://academic.oup.com/gbe/article/6/12/3344/549730" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Li J*, Wong, C.F.*, Wong M.T., Huang, H., Leung F.C. (2014) Modularized evolution in archaeal methanogens phylogenetic forest.Genome Bio
							Evol  , 6(12), 3344. doi: 10.1093/gbe/evu259.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 98, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "http://cis.hku.hk/publication.html" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Bao X, Wang Y, Li X, Li XM, Liu Z, Yang T, Wong CF, Zhang J, Hao Q, Li XD. (2014) Identification of 'erasers' for lysine crotonylated histone marks
							using a chemical proteomics approach.Elife , Nov 4;3. doi: 10.7554/eLife.02999.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/25079268" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Niu H, Leung DY, Wong C, Zhang T, Chan M, Leung FC. (2014) Nitric oxide removal by wastewater bacteria in a biotrickling filter. J Environ Sci
							(China), 26(3), 555. doi: 10.1016/S1001-0742(13)60456-8.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.researchgate.net/publication/257075402_Comparative_Genome_Analysis_of_Enterobacter_cloacae" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Liu W-Y, Wong C-F, Chung KM-K, Jiang J-W, Leung FC-C (2013) Comparative Genome Analysis of Enterobacter cloacae.PLoS ONE 8(9) : e74487.
							doi:10.1371/journal.pone.0074487</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 98, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://jb.asm.org/content/194/22/6326.full?related-urls=yes&legid=jb;194/22/6326" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Wong, C. F., Niu, H., Jiang, J., Li, J., Chan, C. M., Leung, D. Y., & Leung, F. C. (2012). Genome Sequence of Pseudomonas mendocina DLHK,
							Isolated from a Biotrickling Reactor. J Bacteriol, 194(22), 6326. doi: 10.1128/JB.01618-12</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height:px2dp() 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://jb.asm.org/content/194/21/5965.full" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize:px2dp() 14, color: '#ffffff' }}>Liu, W. Y., Chung, K. M., Wong, C. F., Jiang, J. W., Hui, R. K., & Leung, F. C. (2012). Complete Genome Sequence of the Endophytic Enterobacter
							cloacae subsp. cloacae Strain ENHKU01. J Bacteriol, 194(21), 5965. doi: 10.1128/JB.01394-12</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
                        <View style={{ marginTop: px2dp(40),marginBottom:px2dp(40),height:px2dp(300) }}>
                            <View style={{ width: '90%', alignSelf: 'center' }}>
                                {/* experiences 经历*/}
                                <TouchableOpacity onPress={() => this.navigate.push("ChifatExperiences")}>
                                    <View style={{ borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', height: px2dp(80), flexDirection: 'row', backgroundColor: '#ffffff', }}>
                                        <View style={{ width: '20%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/pro1.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: px2dp(18), textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('ChifatActivity.experiences')}
                                            </Text>
                                        </View>
                                        <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                            <Text style={{ fontSize: px2dp(20), fontFamily: 'fantasy', color: '#898989', textAlign: 'center', fontWeight: '700' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height: px2dp(20) }}></View>
                                {/* published 发表*/}
                                <TouchableOpacity onPress={() => this.navigate.push("ChifatPublished")}>
                                    <View style={{ borderColor: '#D6D7D8', borderRadius: 15, borderWidth: 1, height: px2dp(80), flexDirection: 'row', backgroundColor: '#ffffff', }}>
                                        <View style={{ width: '20%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height: px2dp(45) }} source={require('../image/icons/pro6.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: px2dp(18), textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('ChifatActivity.papers')}
                                            </Text>
                                        </View>
                                        <View style={{ width: '15%', height: px2dp(80), justifyContent: 'center' }}>
                                            <Text style={{ fontSize: px2dp(20), fontFamily: 'fantasy', color: '#898989', textAlign: 'center', fontWeight: '700' }}> &gt; </Text>
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

