import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview';
import { I18n } from '../locales/i18n';


// const styles = StyleSheet.create({
//     scene: {
//         flex: 1,
//     },
// });
type Props = {};
export default class ChifatExperiencesActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ChifatActivity.experiences"),
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
            <ScrollView>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                {/* {this.state.display == true ?
                    <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                        <WebView ref={(ref) => { this.brower = ref }} source={{ uri: this.state.url }} />
                        <View style={{ width: "100%", height: 35, backgroundColor: "#0071BC" }}>
                            <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                                <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="close" onPress={() => { { this.setState({ display: false }) } }} />
                            </TouchableOpacity>
                        </View>
                    </Modal> : null
                } */}
                {/* <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center', paddingTop: 20, marginBottom: 20, borderStyle: "dotted", borderBottomWidth: 0.5 }}>
                    <Image style={{ height: 99, width: '100%' }} resizeMode="contain" source={require("../image/icons/chifat.png")}></Image>
                    <Text style={{ fontFamily: 'fantasy', fontSize: 18, lineHeight: 44, textAlign: 'center', color: '#0071bc' }}>{I18n.t('ChifatActivity.title')}</Text>
                    <Text style={{ fontFamily: 'fantasy', fontSize: 16, lineHeight: 18, textAlign: 'center', }}>{I18n.t('ChifatActivity.senior')}</Text>
                    <Text style={{ fontFamily: 'fantasy', fontSize: 14, lineHeight: 18, textAlign: 'center', fontStyle: 'italic' }}>{I18n.t('ChifatActivity.ltb')}</Text>
                </View> */}
                <View>
                    <Text style={{ width: '90%', height: 67, alignSelf: 'center', fontFamily: 'fantasy', fontSize: 28, lineHeight: 67, fontWeight: 'bold' }}>{I18n.t('ChifatActivity.experiences')}</Text>
                </View>
                <View style={{ marginTop: 20, marginBottom: 20 }}>
                    {/* 2017-now */}
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 22, lineHeight: 22, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14 }}>2017-now</Text>
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'fantasy', paddingLeft: 10, textAlign: 'center', fontWeight: '700', fontSize: 16 }}>{I18n.t('ChifatActivity.hongkong')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineHeight: 45, textAlign: 'center', fontSize: 16 }}>{I18n.t('ChifatActivity.src')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineHeight: 45, textAlign: 'center', fontSize: 16 }}>{I18n.t('ChifatActivity.scientist')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                     {/* 2010,2016-2017 */}
                     <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 22, lineHeight: 22, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14 }}>2010,2016-2017</Text>
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'fantasy', paddingLeft: 10, textAlign: 'center', fontWeight: '700', fontSize: 16 }}>{I18n.t('ChifatActivity.university')}</Text>
                        <Text style={{ fontFamily: 'fantasy', color: '#676A74', lineHeight: 45, textAlign: 'center', fontSize: 16 }}>{I18n.t('ChifatActivity.assistaant')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>

                </View>

                {/* 论文 */}
                {/* <View style={{ height: 20 }}></View>
                <View style={{ backgroundColor: '#f0f0f0' }}>
                    <Text style={{ width: '90%', height: 56, alignSelf: 'center', fontFamily: 'fantasy', fontSize: 18, fontWeight: 'bold', lineHeight: 56 }} >{I18n.t('ChifatActivity.papers')}</Text>
                </View>
                <View style={{ backgroundColor: '#1f96f4', paddingTop: 20, paddingBottom: 20 }}>
                    <View style={{ width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://academic.oup.com/gbe/article/6/12/3344/549730" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>Li J*, Wong, C.F.*, Wong M.T., Huang, H., Leung F.C. (2014) Modularized evolution in archaeal methanogens phylogenetic forest.Genome Bio
							Evol  , 6(12), 3344. doi: 10.1093/gbe/evu259.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 98, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "http://cis.hku.hk/publication.html" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>Bao X, Wang Y, Li X, Li XM, Liu Z, Yang T, Wong CF, Zhang J, Hao Q, Li XD. (2014) Identification of 'erasers' for lysine crotonylated histone marks
							using a chemical proteomics approach.Elife , Nov 4;3. doi: 10.7554/eLife.02999.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/25079268" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>Niu H, Leung DY, Wong C, Zhang T, Chan M, Leung FC. (2014) Nitric oxide removal by wastewater bacteria in a biotrickling filter. J Environ Sci
							(China), 26(3), 555. doi: 10.1016/S1001-0742(13)60456-8.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.researchgate.net/publication/257075402_Comparative_Genome_Analysis_of_Enterobacter_cloacae" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>Liu W-Y, Wong C-F, Chung KM-K, Jiang J-W, Leung FC-C (2013) Comparative Genome Analysis of Enterobacter cloacae.PLoS ONE 8(9) : e74487.
							doi:10.1371/journal.pone.0074487</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 98, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://jb.asm.org/content/194/22/6326.full?related-urls=yes&legid=jb;194/22/6326" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>Wong, C. F., Niu, H., Jiang, J., Li, J., Chan, C. M., Leung, D. Y., & Leung, F. C. (2012). Genome Sequence of Pseudomonas mendocina DLHK,
							Isolated from a Biotrickling Reactor. J Bacteriol, 194(22), 6326. doi: 10.1128/JB.01618-12</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://jb.asm.org/content/194/21/5965.full" }); this.setState({ display: true }) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>Liu, W. Y., Chung, K. M., Wong, C. F., Jiang, J. W., Hui, R. K., & Leung, F. C. (2012). Complete Genome Sequence of the Endophytic Enterobacter
							cloacae subsp. cloacae Strain ENHKU01. J Bacteriol, 194(21), 5965. doi: 10.1128/JB.01394-12</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}

                <Text style={{ fontFamily: 'fantasy', fontSize: 12, textAlign: 'center' }}>{I18n.t('ChifatActivity.rights')}</Text>
            </ScrollView >

        );
    }
}

