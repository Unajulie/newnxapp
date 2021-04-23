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
type Props = {};
export default class ChifatPublishedActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ChifatActivity.papers"),
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
            <ScrollView style={{flex:1}}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
              
                <View>
                    <Text style={{ width: '90%', height:px2dp(67) , alignSelf: 'center', fontFamily: 'fantasy', fontSize:px2dp(28) , lineheight:px2dp(67) , fontWeight: 'bold' }}>{I18n.t('ChifatActivity.papers')}</Text>
                </View>

                <View style={{ marginTop: 20, marginBottom: 20 }}>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://academic.oup.com/gbe/article/6/12/3344/549730" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(100) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                            Li J*, Wong, C.F.*, Wong M.T., Huang, H., Leung F.C. (2014) Modularized evolution in archaeal methanogens phylogenetic forest.Genome Bio Evol.</Text>
                            <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontFamily: 'fantasy', fontSize:px2dp(14) , color: '#626471' }}>
                            6(12), 3344. doi: 10.1093/gbe/evu259</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "http://cis.hku.hk/publication.html" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(100) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                            Bao X, Wang Y, Li X, Li XM, Liu Z, Yang T, Wong CF, Zhang J, Hao Q, Li XD. (2014) Identification of 'erasers' for lysine crotonylated histone marks 
                            using a chemical proteomics approach.</Text>
                            <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontFamily: 'fantasy', fontSize:px2dp(14) , color: '#626471' }}>
                            Elife Nov 4;3. doi: 10.7554/eLife.02999</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/25079268" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(100) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                            Niu H, Leung DY, Wong C, Zhang T, Chan M, Leung FC. (2014) Nitric oxide removal 
                            by wastewater bacteria in a biotrickling filter. </Text>
                            <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontFamily: 'fantasy', fontSize:px2dp(14) , color: '#626471' }}>
                            J Environ Sci (China),26(3), 555. doi: 10.1016/S1001-0742(13)60456-8</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://www.researchgate.net/publication/257075402_Comparative_Genome_Analysis_of_Enterobacter_cloacae" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(100) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                            Niu H, Leung DY, Wong C, Zhang T, Chan M, Leung FC. (2014) Nitric oxide removal 
                            by wastewater bacteria in a biotrickling filter. </Text>
                            <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontFamily: 'fantasy', fontSize:px2dp(14) , color: '#626471' }}>
                            PLoS ONE 8(9) : e74487.doi:10.1371/journal.pone.0074487</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://jb.asm.org/content/194/22/6326.full?related-urls=yes&legid=jb;194/22/6326" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(100) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                            Wong, C. F., Niu, H., Jiang, J., Li, J., Chan, C. M., Leung, D. Y., & Leung, F. C. (2012). Genome Sequence of Pseudomonas mendocina DLHK,
                            Isolated from a Biotrickling Reactor. </Text>
                            <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontFamily: 'fantasy', fontSize:px2dp(14) , color: '#626471' }}>
                            J Bacteriol, 194(22), 6326. doi: 10.1128/JB.01618-12</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                    <View style={{ alignSelf: 'center', width: '90%', alignSelf: 'center', borderBottomWidth: 0.5, borderStyle: 'solid' }}>
                        <TouchableOpacity onPress={() => { this.setState({ url: "https://jb.asm.org/content/194/21/5965.full" }); this.setState({ display: true }) }}>
                            <Text style={{ height:px2dp(100) , lineheight:px2dp(25) , fontFamily: 'fantasy', fontSize:px2dp(14) , fontWeight: '700', color: '#3B3B3B' }}>
                            Liu, W. Y., Chung, K. M., Wong, C. F., Jiang, J. W., Hui, R. K., & Leung, F. C. (2012). Complete Genome Sequence of the Endophytic Enterobacter
							cloacae subsp. cloacae Strain ENHKU01. </Text>
                            <Text style={{ height:px2dp(40) , lineheight:px2dp(30) , fontFamily: 'fantasy', fontSize:px2dp(14) , color: '#626471' }}>
                            J Bacteriol, 194(21), 5965. doi: 10.1128/JB.01394-12</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height:px2dp(15)  }}></View>
                </View>

                
            </ScrollView >

        );
    }
}

