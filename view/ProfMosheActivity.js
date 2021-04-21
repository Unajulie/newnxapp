import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview'
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';
import VideoPlayer from 'react-native-video-controls'
import data from '../appdata'

// const FirstRoute = () => (
//     <View style={{ marginTop: 20, marginBottom: 20 }}>
//         <View style={{ flexDirection: 'row' }}>
//             <Text style={{ width: '28%', height: 48, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1 }}></Text>
//         </View>
//         <View style={{ width: '100%', flexDirection: 'row' }} >
//             <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'fantasy', textAlign: 'center' }}>2007-2018
//                         </Text>
//             <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
//             <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('ProfMosheActivity.pharmacology')}</Text>

//         </View>
//         <View style={{ flexDirection: 'row', }}>
//             <Text style={{ width: '28%', height: 68, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
//             </Text>
//             <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
//                 <Text style={{ lineHeight: 18, fontFamily: 'fantasy' }}>{I18n.t('ProfMosheActivity.pharmacology2')}</Text>
//                 <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineHeight: 45, }}>{I18n.t('ProfMosheActivity.chairman')}</Text>
//             </View>

//         </View>
//         <View style={{ width: '100%', flexDirection: 'row' }} >
//             <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'fantasy', textAlign: 'center' }}>2003-2018
//                         </Text>
//             <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
//             <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'fantasy', paddingLeft: 10 }}> {I18n.t('ProfMosheActivity.mcgill')}</Text>
//         </View>
//         <View style={{ flexDirection: 'row', }}>
//             <Text style={{ width: '28%', height: 68, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
//             </Text>
//             <Text style={{ width: '70%', height: 68, lineHeight: 18, fontFamily: 'fantasy', paddingLeft: 19 }}> <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineHeight: 27 }}> {I18n.t('ProfMosheActivity.professor2')}</Text> </Text>
//         </View>
//         <View style={{ width: '100%', flexDirection: 'row' }} >
//             <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'fantasy', textAlign: 'center' }}>2000-now
//                         </Text>
//             <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
//             <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('ProfMosheActivity.department')}</Text>
//         </View>
//         <View style={{ flexDirection: 'row', }}>
//             <Text style={{ width: '28%', height: 68, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}></Text>

//             <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
//                 <Text style={{ lineHeight: 18, fontFamily: 'fantasy' }}>{I18n.t('ProfMosheActivity.themcgill')}</Text>
//                 <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineHeight: 45, }}>{I18n.t('ProfMosheActivity.professor2')}</Text>
//             </View>
//         </View>
//         <View style={{ width: '100%', flexDirection: 'row' }} >
//             <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'fantasy', textAlign: 'center' }}>1993-2000
//                         </Text>
//             <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
//             <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('ProfMosheActivity.department')}</Text>
//         </View>
//         <View style={{ flexDirection: 'row', }}>
//             <Text style={{ width: '28%', height: 68, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
//             </Text>
//             <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
//                 <Text style={{ lineHeight: 18, fontFamily: 'fantasy' }}>{I18n.t('ProfMosheActivity.school')}</Text>
//                 <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineHeight: 45, }}>{I18n.t('ProfMosheActivity.Associate')}</Text>
//             </View>
//         </View>
//         <View style={{ width: '100%', flexDirection: 'row' }} >
//             <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'fantasy', textAlign: 'center' }}>1989-1993
//                         </Text>
//             <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
//             <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('ProfMosheActivity.department')}</Text>
//         </View>
//         <View style={{ flexDirection: 'row', }}>
//             <Text style={{ width: '28%', height: 68, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
//             </Text>
//             <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
//                 <Text style={{ lineHeight: 18, fontFamily: 'fantasy' }}>{I18n.t('ProfMosheActivity.school')}</Text>
//                 <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineHeight: 45, }}>{I18n.t('ProfMosheActivity.Associate')}</Text>
//             </View>

//         </View>
//     </View>
// );

// const SecondRoute = () => (
//     <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
//         <Text style={{ fontFamily: 'fantasy', }}>{I18n.t('ProfMosheActivity.member')}</Text>
//         <Text style={{ fontFamily: 'fantasy', }}>{I18n.t('ProfMosheActivity.ccnp')}</Text>
//         <Text style={{ fontFamily: 'fantasy', }}>{I18n.t('ProfMosheActivity.radio')}</Text>
//         <Text style={{ fontFamily: 'fantasy', }}>{I18n.t('ProfMosheActivity.forum')}</Text>
//         <Text style={{ fontFamily: 'fantasy', }}>{I18n.t('ProfMosheActivity.pharma')}</Text>
//         <Text style={{ fontFamily: 'fantasy', }}>{I18n.t('ProfMosheActivity.honorary')}</Text>
//         <Text style={{ fontFamily: 'fantasy', }}>{I18n.t('ProfMosheActivity.list')}</Text>
//         <Text style={{ fontFamily: 'fantasy', }}>{I18n.t('ProfMosheActivity.carrie')}</Text>
//         <Text style={{ fontFamily: 'fantasy', }}>{I18n.t('ProfMosheActivity.foundation')} </Text>
//         <Text style={{ fontFamily: 'fantasy', }}>{I18n.t('ProfMosheActivity.institute')} </Text>
//         <Text style={{ fontFamily: 'fantasy', }}>{I18n.t('ProfMosheActivity.scholarship')}</Text>
//         <Text style={{ fontFamily: 'fantasy', }}>{I18n.t('ProfMosheActivity.rothshiild')}</Text>
//         <Text style={{ fontFamily: 'fantasy', }}>{I18n.t('ProfMosheActivity.university')}</Text>
//         <Text style={{ fontFamily: 'fantasy', }}>{I18n.t('ProfMosheActivity.masteer')}</Text>
//     </View>
// );
// const ThirddRoute = () => (
//     <View style={{ marginTop: 20, marginBottom: 20 }}>
//         <View style={{ flexDirection: 'row' }}>
//             <Text style={{ width: '28%', height: 48, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1 }}></Text>
//         </View>
//         <View style={{ width: '100%', flexDirection: 'row' }} >
//             <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'fantasy', textAlign: 'center' }}>2010-2013
//                         </Text>
//             <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
//             <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('ProfMosheActivity.halth')}</Text>
//         </View>
//         <View style={{ flexDirection: 'row', }}>
//             <Text style={{ width: '28%', height: 88, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
//             </Text>
//             <View style={{ width: '70%', height: 88, paddingLeft: 19 }} >
//                 <Text style={{ lineHeight: 18, fontFamily: 'fantasy' }}>{I18n.t('ProfMosheActivity.team')}</Text>
//                 <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineHeight: 45, }}>C$166,666</Text>
//             </View>

//         </View>
//         <View style={{ width: '100%', flexDirection: 'row' }} >
//             <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'fantasy', textAlign: 'center' }}>2007-2012
//                         </Text>
//             <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
//             <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('ProfMosheActivity.cancer')}</Text>
//         </View>
//         <View style={{ flexDirection: 'row', }}>
//             <Text style={{ width: '28%', height: 88, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
//             </Text>
//             <View style={{ width: '70%', height: 88, paddingLeft: 19 }} >
//                 <Text style={{ lineHeight: 18, fontFamily: 'fantasy' }}>{I18n.t('ProfMosheActivity.analysis')}</Text>
//                 <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineHeight: 45, }}>C$141,000</Text>
//             </View>

//         </View>
//         <View style={{ width: '100%', flexDirection: 'row' }} >
//             <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'fantasy', textAlign: 'center' }}>2005-2010
//                         </Text>
//             <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
//             <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('ProfMosheActivity.health')} </Text>
//         </View>
//         <View style={{ flexDirection: 'row', }}>
//             <Text style={{ width: '28%', height: 88, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
//             </Text>
//             <View style={{ width: '70%', height: 88, paddingLeft: 19 }} >
//                 <Text style={{ lineHeight: 18, fontFamily: 'fantasy' }}>{I18n.t('ProfMosheActivity.prospect')} </Text>
//                 <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineHeight: 45, }}>C$168,158</Text>
//             </View>

//         </View>
//         <View style={{ width: '100%', flexDirection: 'row' }} >
//             <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'fantasy', textAlign: 'center' }}>1997-2000
//                         </Text>
//             <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
//             <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('ProfMosheActivity.natural')}</Text>
//         </View>
//         <View style={{ flexDirection: 'row', }}>
//             <Text style={{ width: '28%', height: 68, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
//             </Text>
//             <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
//                 <Text style={{ lineHeight: 18, fontFamily: 'fantasy' }}>{I18n.t('ProfMosheActivity.science')}</Text>
//                 <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineHeight: 45, }}>C$145,500</Text>
//             </View>

//         </View>
//         <View style={{ width: '100%', flexDirection: 'row' }} >
//             <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'fantasy', textAlign: 'center' }}>1989-1992
//                         </Text>
//             <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
//             <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'fantasy', paddingLeft: 10 }}>{I18n.t('ProfMosheActivity.inst')}</Text>
//         </View>
//         <View style={{ flexDirection: 'row', }}>
//             <Text style={{ width: '28%', height: 68, fontFamily: 'fantasy', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
//             </Text>
//             <View style={{ width: '70%', height: 68, paddingLeft: 19 }} >
//                 <Text style={{ lineHeight: 18, fontFamily: 'fantasy' }}> {I18n.t('ProfMosheActivity.school')}</Text>
//                 <Text style={{ fontFamily: 'fantasy', color: '#0071bc', lineHeight: 45, }}>C$74,592/year</Text>
//             </View>

//         </View>
//     </View>
// );
// const styles = StyleSheet.create({
//     scene: {
//         flex: 1,
//     },
// });
type Props = {};
export default class ProfMosheActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ProfMosheActivity.title"),
        })
    }
    constructor(props) {
        super(props);
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         display: false,
    //         url: "",
    //         index: 0,
    //         routes: [
    //             { key: 'first', title: 'Career' },
    //             { key: 'second', title: 'Honors' },
    //             { key: 'Third', title: 'Sponsored' },
    //         ],
    //     }
    // }
    // _handleIndexChange = index => this.setState({ index });

    // _renderHeader = props => <TabBar {...props} />;

    // _renderScene = SceneMap({
    //     first: FirstRoute,
    //     second: SecondRoute,
    //     Third: ThirddRoute,
    // });
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
                {/* display 这块触发的是三个切换页面 */}
                {/* {this.state.display == true ?
                    <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                        <WebView startInLoadingState={true} ref={(ref) => { this.brower = ref }} source={{ uri: this.state.url }} />
                        <View style={{ width: "100%", height: 35, backgroundColor: "#0071BC" }}>
                            <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                                <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="close" onPress={() => { { this.setState({ display: false }) } }} />
                            </TouchableOpacity>
                        </View>
                    </Modal> : null
                } */}
                <View style={{ backgroundColor: '#0383DE' }}>
                    <View style={{ height: 120 }}></View>
                    <View style={{ backgroundColor: '#F0F0F0', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <View style={{ width: '90%', }}>
                            <Image style={{ height: 99, width: '100%', marginTop: -60,marginLeft:-60 }} resizeMode="contain" source={require("../image/icons/prof.png")}></Image>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center', paddingTop: 20, paddingBottom: 20, borderStyle: "dotted", borderBottomWidth: 0.5 }}>
                            <Text style={{ fontSize: 18, lineHeight: 44, textAlign: 'left',marginLeft:20, color: '#0071bc' }}>{I18n.t('ScienceteamActivity.moshe')}</Text>
                            <Text style={{ fontSize: 16, lineHeight: 18, textAlign: 'left',marginLeft:20, }}>{I18n.t('ScienceteamActivity.ceo')}</Text>
                            <Text style={{ fontSize: 14, lineHeight: 18, textAlign: 'left', marginLeft:20,fontStyle: 'italic' }}>{I18n.t('ScienceteamActivity.hkg')}</Text>
                        </View>
                        {/* 专业履历 */}
                        {/* <View style={{ paddingBottom: 20 }}>
                    <View style={{ backgroundColor: '#f0f0f0', }}>
                        <Text style={{ width: '90%', height: 67, alignSelf: 'center', fontFamily: 'fantasy', fontSize: 18, lineHeight: 67, fontWeight: 'bold' }}>{I18n.t('ProfMosheActivity.experiences')}</Text>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: 16 }}>{I18n.t('ProfMosheActivity.pioneer')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: 16, }}>{I18n.t('ProfMosheActivity.inventor')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: 16 }}>{I18n.t('ProfMosheActivity.patent')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: 16 }}>{I18n.t('ProfMosheActivity.founder')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: 16 }}>{I18n.t('ProfMosheActivity.thought')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: 16 }}>{I18n.t('ProfMosheActivity.fellow')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: 16 }}>{I18n.t('ProfMosheActivity.canadian')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: 16 }}>{I18n.t('ProfMosheActivity.professor')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: 16 }}>{I18n.t('ProfMosheActivity.resident')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'fantasy', fontSize: 16 }}>{I18n.t('ProfMosheActivity.director')}</Text>
                        </View>
                    </View>
                </View> */}
                        {/* 相关影片 */}
                        {/* <View style={{ height: 20 }}></View>
                <View style={{ paddingTop: 20, paddingBottom: 20, backgroundColor: '#f0f0f0' }}>
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <Text style={{ width: '90%', height: 67, fontFamily: 'fantasy', fontSize: 18, lineHeight: 67, fontWeight: 'bold' }}>{I18n.t('ProfMosheActivity.video')}</Text>
                        <Text style={{ fontFamily: 'fantasy', fontSize: 16 }}>{I18n.t('ProfMosheActivity.o2o')}</Text>
                        <VideoPlayer
                            style={{ width: "100%", height: 250 }}
                            paused={true}
                            fullscreen={true}
                            poster={'https://app.beijingepidial.com/static/images/vid1.png'} //poster必须是url从互联网访问的形式
                            source={{ uri: 'https://app.beijingepidial.com/Healthtech_O2O_Summit_Dr_Moshe_Szyf_HKG_Epitherapeutics.mp4' }}
                            navigator={this.props.navigator}
                        />
                        <Text style={{ fontFamily: 'fantasy', fontSize: 16 }}>{I18n.t('ProfMosheActivity.hope')}</Text>
                        <VideoPlayer
                            style={{ width: "100%", height: 250 }}
                            paused={true}
                            fullscreen={true}
                            poster={'https://app.beijingepidial.com/static/images/vid2.png'} //poster必须是url从互联网访问的形式
                            source={{ uri: 'https://app.beijingepidial.com/Keynote_Dr_Moshe_Szyf_Science_of_Hope_Conference_2017.mp4' }}
                            navigator={this.props.navigator}
                        />
                        <Text style={{ fontFamily: 'fantasy', fontSize: 16 }}>{I18n.t('ProfMosheActivity.epigenetic')}</Text>
                        <VideoPlayer
                            style={{ width: "100%", height: 250 }}
                            paused={true}
                            fullscreen={true}
                            poster={'https://app.beijingepidial.com/static/images/vid3.png'} //poster必须是url从互联网访问的形式
                            source={{ uri: 'https://app.beijingepidial.com/What_is_epigenetic_and_why_knowing_it_will_change_your_life_Dr_Moshe_Szyf.mp4' }}
                            navigator={this.props.navigator}
                        />
                        <Text style={{ fontFamily: 'fantasy', fontSize: 16 }}>{I18n.t('ProfMosheActivity.behavioral')}</Text>
                        <VideoPlayer
                            style={{ width: "100%", height: 250 }}
                            paused={true}
                            fullscreen={true}
                            poster={'https://app.beijingepidial.com/static/images/vid4.png'} //poster必须是url从互联网访问的形式
                            source={{ uri: 'https://app.beijingepidial.com/Moshe_Szyf_Behavioral_Epigenetics.mp4' }}
                            navigator={this.props.navigator}
                        />
                    </View>
                </View> */}
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
                        {/* <View style={{ backgroundColor: '#f0f0f0' }}>
                    <Text style={{ width: '90%', height: 56, alignSelf: 'center', fontFamily: 'fantasy', fontSize: 18, fontWeight: 'bold', lineHeight: 56 }} >{I18n.t('ProfMosheActivity.papers')}</Text>
                </View>
                <View style={{ backgroundColor: '#1f96f4', paddingTop: 20, paddingBottom: 20 }}>
                    <View style={{ flexDirection: 'row', width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/15220929" }); this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>Epigenetic programming by
                            maternal behavior.Aug 1st 2004  Nature Neuroscience volume 7 issue 8 pp 847-854</Text>
                        </TouchableOpacity>

                        <Text style={{ width: '20%', fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>5530 Citations</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', height: 77, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/19234457" }); this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>Epigenetic regulation of the
                            glucocorticoid receptor in human brain associates with childhood abuse. Nat Neurosci .2009 Mar; 12(3): 342–348.</Text>
                        </TouchableOpacity>
                        <Text style={{ width: '20%', fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>2892 Citations</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', height: 67, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ url: 'https://www.ncbi.nlm.nih.gov/pubmed/10050851' }); this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>A mammalian protein with specific
                            demethylase activity for mCpG DNA.  Nature .1999 Feb 18</Text>
                        </TouchableOpacity>
                        <Text style={{ width: '20%', fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>528 Citations</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', height: 67, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ url: 'https://www.ncbi.nlm.nih.gov/pubmed/18461137' }); this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>Promoter-wide hypermethylation of
                            the ribosomal RNA gene promoter in the suicide brain.  PLoS One . 2008 May 7</Text>
                        </TouchableOpacity>
                        <Text style={{ width: '20%', fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>351 Citations</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', height: 67, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ url: 'https://www.ncbi.nlm.nih.gov/pubmed/21386994' }); this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>Broad epigenetic signature of
                            maternal care in the brain of adult rats.  PLoS One .2011 Feb 28</Text>
                        </TouchableOpacity>
                        <Text style={{ width: '20%', fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>347 Citations</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', height: 67, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ url: 'https://www.ncbi.nlm.nih.gov/pubmed/7713905' }); this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>Expression of antisense to DNA
                            demethylation and inhibits tumorigenesis. J Biol Chem. 1995 Apr 7</Text>
                        </TouchableOpacity>
                        <Text style={{ width: '20%', fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>256 Citations</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', height: 78, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ url: 'https://www.ncbi.nlm.nih.gov/pubmed/18851683' }); this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>Epigenetics, DNA methylation,
                            and chromatin modifying drugs. Annu Rev Pharmacol Toxicol. 2009;49</Text>
                        </TouchableOpacity>
                        <Text style={{ width: '20%', fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>432 Citations</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', height: 88, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => { this.setState({ url: 'https://www.ncbi.nlm.nih.gov/pubmed/16484373' }); this.setState({ display: true }) }}>
                            <Text style={{ width: '100%', fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>Maternal care effects on the
                            hippocampal transcriptome and anxiety-mediated behaviors in the offspring that are reversible in adulthood. Proc Natl </Text>
                        </TouchableOpacity>
                        <Text style={{ width: '20%', fontFamily: 'fantasy', fontSize: 14, color: '#ffffff' }}>786 Citations</Text>
                    </View>
                </View> */}

                        <View style={{ marginTop: 40 }}>
                            <View style={{ width: '90%', height: 740, alignSelf: 'center' }}>
                                {/* experiences */}
                                <TouchableOpacity onPress={() => this.navigate.push("ProfMosheExperiences")} >
                                    <View style={{ borderRadius: 15, borderWidth: 1, borderColor: '#D6D7D8', height: 80, flexDirection: 'row', backgroundColor: '#ffffff', }}>
                                        <View style={{ width: '20%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height: 45 }} source={require('../image/icons/pro1.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('ProfMosheActivity.experiences')}
                                             </Text>
                                        </View>
                                        <View style={{ width: '15%', height: 80, justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 20, fontFamily: 'fantasy', color: '#898989', textAlign: 'center', fontWeight: '700' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height: 20 }}></View>
                                {/* videos */}
                                <TouchableOpacity onPress={() => this.navigate.push("ProfMosheVideos")}>
                                    <View style={{ borderColor: '#D6D7D8', borderRadius: 15, borderWidth: 1, height: 80, flexDirection: 'row', backgroundColor: '#ffffff',}}>
                                        <View style={{ width: '20%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height: 45 }} source={require('../image/icons/pro2.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('ProfMosheActivity.video')} 
                                    </Text>
                                        </View>
                                        <View style={{ width: '15%', height: 80, justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 20, fontFamily: 'fantasy', color: '#898989', textAlign: 'center', fontWeight: '700' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height: 20 }}></View>
                                {/* Career */}
                                <TouchableOpacity onPress={() => this.navigate.push("ProfMosheCareer")}>
                                    <View style={{ borderColor: '#D6D7D8', borderRadius: 15, borderWidth: 1, height: 80, flexDirection: 'row', backgroundColor: '#ffffff', }}>
                                        <View style={{ width: '20%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height: 45 }} source={require('../image/icons/pro3.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('ProfMosheActivity.Career')}
                                    </Text>
                                        </View>
                                        <View style={{ width: '15%', height: 80, justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 20, fontFamily: 'fantasy', color: '#898989', textAlign: 'center', fontWeight: '700' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height: 20 }}></View>
                                {/* Honors */}
                                <TouchableOpacity onPress={() => this.navigate.push("ProfMosheHonors")}>
                                    <View style={{ borderColor: '#D6D7D8', borderRadius: 15, borderWidth: 1, height: 80, flexDirection: 'row', backgroundColor: '#ffffff', }}>
                                        <View style={{ width: '20%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height: 45 }} source={require('../image/icons/pro4.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('ProfMosheActivity.Honors')}
                                    </Text>
                                        </View>
                                        <View style={{ width: '15%', height: 80, justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 20, fontFamily: 'fantasy', color: '#898989', textAlign: 'center', fontWeight: '700' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height: 20 }}></View>
                                {/* Sponsored */}
                                <TouchableOpacity onPress={() => this.navigate.push("ProfMosheSponsored")}>
                                    <View style={{ borderColor: '#D6D7D8', borderRadius: 15, borderWidth: 1, height: 80, flexDirection: 'row', backgroundColor: '#ffffff', }}>
                                        <View style={{ width: '20%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height: 45 }} source={require('../image/icons/pro5.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('ProfMosheActivity.Sponsored')}
                                    </Text>
                                        </View>
                                        <View style={{ width: '15%', height: 80, justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 20, fontFamily: 'fantasy', color: '#898989', textAlign: 'center', fontWeight: '700' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height: 20 }}></View>
                                {/* published */}
                                <TouchableOpacity onPress={() => this.navigate.push("ProfMoshePublished")}>
                                    <View style={{ borderColor: '#D6D7D8', borderRadius: 15, borderWidth: 1, height: 80, flexDirection: 'row', backgroundColor: '#ffffff', }}>
                                        <View style={{ width: '20%', justifyContent: 'center' }}>
                                            <Image style={{ width: '100%', height: 45 }} source={require('../image/icons/pro6.png')} resizeMode='contain' />
                                        </View>
                                        <View style={{ width: '65%', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'fantasy', color: '#0A0A0A', fontWeight: '700' }}>{I18n.t('ProfMosheActivity.papers')}
                                    </Text>
                                        </View>
                                        <View style={{ width: '15%', height: 80, justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 20, fontFamily: 'fantasy', color: '#898989', textAlign: 'center', fontWeight: '700' }}> &gt; </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{ fontSize: 12, textAlign: 'center' }}>@2021 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
                    </View>
                </View>
            </ScrollView>

        );
    }
}

