import React, { Component } from 'react';
import { StyleSheet, Modal, StatusBar, Text, View, Image, ScrollView, ImageBackground, Dimensions, TouchableOpacity, Button } from 'react-native';
import Swiper from 'react-native-swiper'
import VideoPlayer from 'react-native-video-controls'
import { I18n } from '../locales/i18n'
import { WebView } from 'react-native-webview'
import DropdownAlert from 'react-native-dropdownalert'
import Session from '../storage/Session'
import data from '../appdata'
import { px2dp } from '../src/px2dp';
import { SwipeablePanel } from 'rn-swipeable-panel';

export default class TabHomeActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("TabHomeActivity.title"),
        })
    }
    static navigationOptions = {
        headerRight: (
            <View style={{ width: px2dp(100), height: px2dp(50), justifyContent: "center", alignItems: "center" }}>
                <Image style={{ height: px2dp(25), width: px2dp(25) }} resizeMode="contain" source={require("../image/icons/user-logo.png")} />
                <Text style={{ color: "#fff" }} numberOfLines={1}>Hello</Text>
            </View>
        )

    }
    constructor(props) {
        // const {locale} = window.App;
        // console.info(locale);
        super(props);
        Session.save("launchershow", true);
        this.state = {
            user: null,
            display: false,
            showAlert: false,
            url: "",
            swipeablePanelActive: false
        };
    }
    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };
    //因为Session.load方法异步的,所以可以给sate设置值，设置之后，页面渲染会根据sata中的值变化而变化
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
        });
        this.dropDownAlertRef.alertWithType('success', I18n.t('TabHomeActivity.Tips'), I18n.t('TabHomeActivity.message'), {}, 60000 * 5)
    }
    render() {
        this.navigate = this.props.navigation;
        const { showAlert } = this.state;
        const styles = StyleSheet.create({
            image: {
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
                resizeMode: 'cover',

            }
        });
        return (
            <View style={{ flex: 1, backgroundColor: '#f6f7f8' }}>
                <ScrollView>
                    <StatusBar
                        animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                        hidden={true}  //是否隐藏状态栏。  
                        translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                        barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                    />
                    {this.state.display == true ?
                        <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                            <WebView startInLoadingState={true} ref={(ref) => { this.brower = ref }} source={{ uri: this.state.url }} />
                            <View style={{ width: "100%", height: 35, backgroundColor: "#404bc2" }}>
                                <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                                    <Button style={{ width: "100%", height: "100%", backgroundColor: "#404bc2" }} title="close" onPress={() => { { this.setState({ display: false }) } }} />
                                </TouchableOpacity>
                            </View>
                        </Modal> : null
                    }

                    <View style={{ width: '90%', height: px2dp(330), marginTop: px2dp(110), alignSelf: 'center' }}>
                        {/* 我的报告 */}
                        <TouchableOpacity onPress={() => {
                            this.state.user == null ?
                                this.navigate.push("Login")
                                :
                                this.state.user.privatekey ?
                                    this.navigate.push("DnaReport")
                                    :
                                    this.navigate.push("RasEncryptionActivity")

                        }}>
                            <View style={{ borderRadius: px2dp(15), height: px2dp(90), flexDirection: 'row', marginBottom: px2dp(20), borderWidth: px2dp(1.5), backgroundColor: '#ffffff', borderColor: '#b6b7b8', borderStyle: 'solid', }}>
                                <View style={{ width: '25%', justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: px2dp(60), }} source={require('../image/icons/home1.png')} resizeMode='contain' />
                                </View>
                                <View style={{ width: '65%', justifyContent: 'center' }}>
                                    <Text
                                        style={{ fontSize: px2dp(18), textAlign: 'left', fontWeight: 'bold', color: '#000000', fontFamily: 'fantasy' }}>
                                        {I18n.t('TabHomeActivity.myreport')}</Text>
                                    <Text style={{ fontSize: px2dp(14), textAlign: 'left', fontWeight: '200', color: '#000000', fontFamily: 'fantasy' }}>Scan your Kit and get your chronological Age data.</Text>

                                </View>
                                <View style={{ width: '10%', height: px2dp(90), justifyContent: 'center' }}>
                                    <Image style={{ height: px2dp(20), width: px2dp(20), marginLeft: px2dp(5) }} source={require('../image/right-arr.png')} resizeMode='contain' />
                                </View>
                            </View>
                        </TouchableOpacity>
                        {/* 问卷调查 */}
                        <TouchableOpacity onPress={() => this.setState({ swipeablePanelActive: true })}>
                            <View style={{ borderRadius: px2dp(15), height: px2dp(90), flexDirection: 'row', marginBottom: px2dp(20), borderWidth: px2dp(1.5), backgroundColor: '#ffffff', borderColor: '#b6b7b8', borderStyle: 'solid' }}>
                                <View style={{ width: '25%', justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: px2dp(60) }} source={require('../image/icons/home2.png')} resizeMode='contain' />
                                </View>
                                <View style={{ width: '65%', justifyContent: 'center' }}>
                                    <Text
                                        onPress={() => {
                                            this.state.user == null ?
                                                this.navigate.push("Login")
                                                :
                                                this.state.user.privatekey ?
                                                    this.navigate.push("LifeStyleChart")
                                                    :
                                                    this.navigate.push("RasEncryptionActivity")
                                        }}
                                        style={{ fontSize: px2dp(18), textAlign: 'left', fontWeight: 'bold', color: '#000000', fontFamily: 'fantasy' }}>{I18n.t('TabHomeActivity.questionnaires')}  </Text>
                                    <Text style={{ fontSize: px2dp(14), textAlign: 'left', fontWeight: '200', color: '#000000', fontFamily: 'fantasy' }}>Fill a questionnaires about your lifestyle</Text>

                                </View>
                                <View style={{ width: '10%', height: px2dp(90), justifyContent: 'center' }}>
                                    <Image style={{ height: px2dp(20), width: px2dp(20), marginLeft: px2dp(5) }} source={require('../image/right-arr.png')} resizeMode='contain' />
                                </View>
                            </View>
                        </TouchableOpacity>
                        {/* 测试流程 */}
                        <TouchableOpacity onPress={() => this.navigate.push("Testprocess")}>
                            <View style={{ borderRadius: px2dp(15), height: px2dp(90), flexDirection: 'row', marginBottom: px2dp(20), borderWidth: px2dp(1.5), backgroundColor: '#ffffff', borderColor: '#b6b7b8', borderStyle: 'solid' }}>
                                <View style={{ width: '25%', justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: px2dp(60) }} source={require('../image/icons/home3.png')} resizeMode='contain' />
                                </View>
                                <View style={{ width: '65%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: px2dp(18), textAlign: 'left', fontWeight: 'bold', color: '#000000', fontFamily: 'fantasy' }}>{I18n.t('TabHomeActivity.testprocess')}{"\n"}
                                        <Text style={{ fontSize: px2dp(14), textAlign: 'left', fontWeight: '200', color: '#000000', fontFamily: 'fantasy' }}>Step by step instrucations for a main workflow</Text>
                                    </Text>
                                </View>
                                <View style={{ width: '10%', height: px2dp(90), justifyContent: 'center' }}>
                                    <Image style={{ height: px2dp(20), width: px2dp(20), marginLeft: px2dp(5) }} source={require('../image/right-arr.png')} resizeMode='contain' />
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>



                    {/* <View style={{ width: '90%', marginTop: 34, marginBottom: 34, flex: 1, justifyContent: 'center', alignSelf: 'center', justifyContent: 'space-around' }}>
                    <ImageBackground style={{ width: '100%', heigh: '100%', alignSelf: 'center' }} source={require('../image/enpic/home-bg.png')} resizeMode='contain'  >

                        <View style={{ width: '90%', alignSelf: 'center', height: 314, zIndex: 999 }}>
                            <View style={{ heigh: 145, width: '100%', justifyContent: 'space-around', flexDirection: 'row' }}>
                                <View style={{ height: 145, width: '32%', }}>
                                    <Text onPress={() => this.navigate.push("About")} style={{height:145, textAlign:'center', color: '#ffffff',paddingTop:77, fontSize: 16,}}>{I18n.t('TabHomeActivity.aboutus')}</Text>
                                </View>
                                <View style={{ height: 156, width: '36%', alignSelf: 'center' ,}}>
                                    <Text onPress={() => {
                                        this.state.user == null ?
                                            this.navigate.push("Login")
                                            :
                                            this.state.user.privatekey ?
                                                this.navigate.push("LifeStyleChart")
                                                :
                                                this.navigate.push("RasEncryptionActivity")

                                    }} style={{height: 61,marginTop:95, textAlign:'right',paddingTop:41, color:'#ffffff',}}>{I18n.t('TabHomeActivity.lifestyle')}</Text>
                                </View>
                                <View style={{ height: 145, width: '32%', }}>
                                    <Text onPress={() => this.navigate.push("Testprocess")} style={{ height:145,textAlign:'center', color: '#ffffff',paddingTop:77,  fontSize: 16,}}>{I18n.t('TabHomeActivity.test')}</Text>
                                </View>
                            </View>
    
                            <View style={{ heigh: 89, width: '100%', justifyContent: 'space-around', flexDirection: 'row' }}>
                                
                                <View style={{ height: 112, width: '32%',}}>
                                    <Text onPress={() => this.navigate.push("Mall")}  style={{height:112,marginTop:45, paddingTop:34, textAlign:'center', color: '#ffffff', fontSize: 16, }}>{I18n.t('TabHomeActivity.mark')}</Text>
                                </View>
                                <View style={{ height: 145, width: '36%', alignSelf: 'center',}}>
                                    <Text onPress={() => {
                                        this.state.user == null ?
                                            this.navigate.push("Login")
                                            :
                                            this.state.user.privatekey ?
                                                this.navigate.push("DnaReport")
                                                :
                                                this.navigate.push("RasEncryptionActivity")
                                    }}
                                        style={{ height: 67,color:'#1e1e1e',lineHeight:17, }}>{I18n.t('TabHomeActivity.report')}</Text>
                                </View>
                                <View style={{ height: 112, width: '32%',}}>
                                    <Text onPress={() => { this.state.user == null ? this.navigate.push("Login") : this.navigate.push("Quesnote") }} style={{height:112,marginTop:45, paddingTop:34, textAlign:'center', color: '#ffffff', fontSize: 16,  }}>{I18n.t('TabHomeActivity.quest')}</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View> */}
                    <View style={{ width: '100%', marginTop: px2dp(20), }}>
                        <View style={{ width: '90%', alignSelf: 'center', marginBottom: px2dp(20), padding: px2dp(20), backgroundColor: '#EBECED', borderRadius: px2dp(15) }}>
                            <Text style={{ fontSize: px2dp(20), color: '#000000', textAlign: 'left', fontFamily: 'fantasy', lineHeight: px2dp(34), marginBottom: 19, fontWeight: 'bold' }}>{I18n.t('TabHomeActivity.biotitle')}</Text>
                            <Text style={{ fontSize: px2dp(16), textAlign: 'left', fontFamily: 'fantasy', lineHeight: px2dp(23), marginBottom: 12 }}>{I18n.t('TabHomeActivity.1ml')}</Text>
                            <Text style={{ fontSize: px2dp(16), textAlign: 'left', fontFamily: 'fantasy', lineHeight: px2dp(23) }}>{I18n.t('TabHomeActivity.testresult')}</Text>
                        </View>
                    </View>
                    <View style={{ height: 20 }}></View>
                    {/* 产品轮播点击跳转 */}
                    <View style={{ width: "100%", height: 460 }}>

                        <Swiper
                            height={px2dp(460)}//组件高度
                            horizontal={true}//水平轮播
                            // paginationStyle={{ bottom: 10 }}
                            showsPagination={false}//底部圆点
                            showsButtons={true}
                            backgroundColor={'pink'}
                            buttonWrapperStyle={{ position: 'absolute', top: px2dp(-210), paddingHorizontal: px2dp(30), paddingVertical: px2dp(30), display: 'flex', justifyContent: 'flex-end', }}
                            prevButton={
                                <View style={{ height: px2dp(40), width: px2dp(40), backgroundColor: '#eaebec', borderRadius: px2dp(30), marginRight: px2dp(10) }}>
                                    <Image style={{ height: '100%', width: '100%' }} source={require('../image/arr-left.png')} resizeMode='center' />
                                </View>}
                            nextButton={
                                <View style={{ height: px2dp(40), width: px2dp(40), backgroundColor: '#d2d3d4', borderRadius: px2dp(30) }}>
                                    <Image style={{ height: '100%', width: '100%' }} source={require('../image/arr-right.png')} resizeMode='center' />
                                </View>}
                            loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                            autoplay={false}>
                            <TouchableOpacity >

                                <View style={{ width: '100%', marginLeft: px2dp(20) }}>
                                    <Text style={{ fontSize: px2dp(26), textAlign: 'left', fontWeight: 'bold', fontFamily: 'fantasy', lineHeight: px2dp(34) }}>Products</Text>
                                </View>
                                <View style={{ height: px2dp(30), alignSelf: 'center' }}></View>
                                <View style={{ width: '90%', marginTop: px2dp(30) }}>
                                    <View style={{
                                        width: '90%', alignSelf: 'center', marginBottom: px2dp(10), borderStyle: 'solid',
                                        borderWidth: px2dp(1.5), borderRadius: px2dp(20), borderColor: '#b6b7b8',
                                    }}>
                                        <View style={{ width: '90%', alignSelf: 'center', }}>
                                            <Image style={{ width: '100%', height: px2dp(200), borderRadius: px2dp(20) }} source={require('../image/enpic/bio2.jpg')} resizeMode="contain" />
                                            <Text style={{ fontSize: px2dp(18), color: '#000000', fontFamily: 'fantasy', marginBottom: px2dp(10), fontWeight: 'bold' }}>{I18n.t('TabHomeActivity.bio2')}</Text>
                                            <Text style={{ fontSize: px2dp(14), fontFamily: 'fantasy', marginBottom: px2dp(10) }}>{I18n.t('TabHomeActivity.1ml2')}</Text>
                                            <TouchableOpacity onPress={() => this.navigate.push("Biological")}>
                                                <View style={{ flexDirection: 'row', width: '100%', height: px2dp(45), justifyContent: 'space-between', backgroundColor: '#E7E8EC', borderRadius: px2dp(5) }}>
                                                    <Text style={{ fontSize: px2dp(14), textAlign: 'center', lineHeight: px2dp(45), height: px2dp(45), color: '#000000', fontWeight: 'bold', marginLeft: px2dp(10), fontFamily: 'fantasy', }}>{I18n.t('TabHomeActivity.learnmore')}</Text>
                                                    <Image style={{ height: px2dp(15), width: px2dp(15), marginRight: px2dp(10), marginTop: px2dp(15) }} source={require('../image/right-arr.png')} resizeMode='contain' />
                                                </View>
                                            </TouchableOpacity>
                                            <View style={{ height: 15 }}></View>
                                        </View>
                                    </View>
                                </View>


                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ width: '100%', marginLeft: px2dp(20) }}>
                                    <Text style={{ fontSize: px2dp(26), textAlign: 'left', fontWeight: 'bold', fontFamily: 'fantasy', lineHeight: px2dp(34) }}>Products</Text>
                                </View>
                                <View style={{ height: 30 }}></View>
                                <View style={{ width: '90%', marginTop: px2dp(30) }}>
                                    <View style={{
                                        width: '90%', alignSelf: 'center', marginBottom: px2dp(10), borderStyle: 'solid',
                                        borderWidth: px2dp(1.5), borderRadius: px2dp(20), borderColor: '#b6b7b8',
                                    }}>
                                        <View style={{ width: '90%', alignSelf: 'center', }}>
                                            <Image style={{ width: '100%', height: px2dp(200), borderRadius: px2dp(20) }} source={require('../image/enpic/index9.jpg')} resizeMode="contain" />
                                            <Text style={{ fontSize: px2dp(18), color: '#000000', fontFamily: 'fantasy', marginBottom: px2dp(10), fontWeight: 'bold' }}>{I18n.t('TabHomeActivity.sam')}</Text>
                                            <Text style={{ fontSize: px2dp(14), fontFamily: 'fantasy', marginBottom: px2dp(10) }}>{I18n.t('TabHomeActivity.affacthealth')}</Text>
                                            <TouchableOpacity onPress={() => this.navigate.push("Same")}>
                                                <View style={{ flexDirection: 'row', width: '100%', height: px2dp(45), justifyContent: 'space-between', backgroundColor: '#E7E8EC', borderRadius: px2dp(5) }}>
                                                    <Text style={{ fontSize: px2dp(14), textAlign: 'center', lineHeight: px2dp(45), height: px2dp(45), color: '#000000', fontWeight: 'bold', marginLeft: px2dp(10), fontFamily: 'fantasy', }}>{I18n.t('TabHomeActivity.learnmore')}</Text>
                                                    <Image style={{ height: px2dp(15), width: px2dp(15), marginRight: px2dp(10), marginTop: px2dp(15) }} source={require('../image/right-arr.png')} resizeMode='contain' />
                                                </View>
                                            </TouchableOpacity>
                                            <View style={{ height: 15 }}></View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* <View style={{ width: '100%', }}>
                            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../image/enpic/index3.jpg')} resizeMode="cover" >
                                <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'column' }}>
                                <View style={{ height: 20 }}></View>
                                    <Text style={{ fontSize: 34, color: '#006DB5',fontWeight:"bold" }}>{I18n.t('TabHomeActivity.whatare')}</Text>
                                    <Text style={{ fontSize: 34, color: '#006DB5', fontWeight:"bold"}}>{I18n.t('TabHomeActivity.vitaamins')}</Text>
                                    <View style={{ height: 20 }}></View>
                                    <Text style={{fontSize: 14, color: '#5CACEE', }}>{I18n.t('TabHomeActivity.organic')}</Text>
                                    <Text style={{fontSize: 14,color: '#5CACEE', }}>{I18n.t('TabHomeActivity.necessary')}</Text>
                                    <Text style={{fontSize: 14,color: '#5CACEE', }}>{I18n.t('TabHomeActivity.left')}</Text>
                                    <Text style={{fontSize: 14,color: '#5CACEE', }}>{I18n.t('TabHomeActivity.active')}</Text>
                                    <Text style={{fontSize: 14, color: '#5CACEE', }}>{I18n.t('TabHomeActivity.healthman')}</Text>
                                    <View style={{ height: 20 }}></View>
                                    <Text style={{fontSize: 12, color: '#6A6B6A', }}>{I18n.t('TabHomeActivity.vitamin')}</Text>
                                    <Text style={{fontSize: 12, color: '#6A6B6A', }}>{I18n.t('TabHomeActivity.indispensable')}</Text>
                                </View>
                            </ImageBackground>
                        </View> */}
                            {/* <View style={{ width: '100%', height: 345 }}>
                            <Image style={{ width: '100%', height: '100%' }} source={require('../image/enpic/index4.jpg')} resizeMode="cover" />
                        </View> */}
                            {/* <View style={{ width: '100%', height: 345 }}>
                            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../image/enpic/index5.jpg')} resizeMode="cover" >
                                <View style={{  width: '90%', alignSelf: 'center', flexDirection:"column",}}>
                                <View style={{ height: '38%',}}></View>
                                <View style={{ height: '22%',}}>
                                <View style={{  width: '90%', alignSelf: 'center', flexDirection:"row",}}>
                                <View style={{ width: '22%',}}></View>
                                <View style={{ width: '35%',alignSelf:"center"}}>
                                    <Text style={{ fontSize: 12, color: '#E3E3E3',alignSelf:"center"}}>{I18n.t('TabHomeActivity.chronological')}</Text>
                               </View>
                               <View style={{ width: '40%',}}>
                                    <Text style={{ fontSize: 12, color: '#E3E3E3',textAlign:"right"}}>{I18n.t('TabHomeActivity.biological')}</Text>
                                    </View>
                               </View>
                               </View>
                                <View style={{ height: '34%' }}>
                                <View style={{  width: '90%', alignSelf: 'center', flexDirection:"row",}}>
                                <View style={{ width: '50%',}}></View>
                                    <Text style={{ fontSize: 12,color: '#E3E3E3',textAlign:"center"}}>{I18n.t('TabHomeActivity.management')}</Text>
                                </View>
                                </View>
                                </View>
                            </ImageBackground>
                        </View> */}
                        </Swiper >
                    </View>
                    <View style={{ height: 15 }}></View>
                    {/* 相关视频 */}
                    <View style={{ flex: 1, justifyContent: 'center', width: '90%', alignSelf: 'center' }}>
                        <Text style={{ fontSize: px2dp(26), fontWeight: 'bold', marginLeft: px2dp(10), fontFamily: 'fantasy', color: '#000000', marginBottom: px2dp(15) }}>{I18n.t('TabHomeActivity.video')}</Text>
                        <VideoPlayer
                            style={{ width: "100%", height: px2dp(250), borderRadius: px2dp(20) }}
                            paused={true}
                            fullscreen={true}
                            poster={data.url + 'static/images/ted.jpg'} //poster必须是url从互联网访问的形式
                            source={{ uri: data.url + '/How_early_life_experience_is_written_into_DNA _Moshe_Szyf.mp4' }}
                            navigator={this.props.navigator}
                        />
                    </View>
                    <View style={{ heigh: px2dp(100), width: '100%' }}></View>
                    {/* 图片 */}
                    <DropdownAlert ref={ref => this.dropDownAlertRef = ref} onTap={() => {
                        this.state.user == null ?
                            this.navigate.push("Login")
                            :
                            this.state.user.privatekey ?
                                this.navigate.push("DnaReport")
                                :
                                this.navigate.push("RasEncryptionActivity")
                    }} />
                    <Text style={{ fontSize: px2dp(12), textAlign: 'center', marginBottom: px2dp(20), marginTop: px2dp(20), fontFamily: 'fantasy' }}>{I18n.t('TabHomeActivity.allright')}</Text>
                </ScrollView >
                <SwipeablePanel
                    fullWidth={true}
                    showCloseButton={true}
                    closeOnTouchOutside={true}
                    openLarge={true}
                    isActive={this.state.swipeablePanelActive}
                    onClose={() => { this.setState({ swipeablePanelActive: false }) }}
                    onPressCloseButton={() => { this.setState({ swipeablePanelActive: false }) }}
                >
                    <ScrollView>
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), marginBottom: px2dp(20) }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(18), color: '#000', height: px2dp(45), fontWeight: 'bold' }}>{I18n.t('QuesnoteActivity.about')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(16), color: '#000', lineHeight: px2dp(20), marginBottom: px2dp(10) }}>{I18n.t('QuesnoteActivity.are')} <Text style={{ color: '#000', fontWeight: 'bold' }}>{I18n.t('QuesnoteActivity.optional')}</Text>{I18n.t('QuesnoteActivity.however')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(16), color: '#000', lineHeight: px2dp(20), marginBottom: px2dp(30) }}>{I18n.t('QuesnoteActivity.personalized')}</Text>
                            {/* <View style={{ width: '45%', borderRadius: 10 }}>
                                    <TouchableOpacity >
                                        <Button style={{ backgroundColor: "#2196f3" }}
                                            onPress={() => this.navigate.pop()}
                                            title={I18n.t('QuesnoteActivity.back')}
                                            color="#2196f3" />

                                    </TouchableOpacity>
                                </View> */}
                            <View style={{ width: '90%',height:px2dp(50),alignSelf:'center', borderRadius: px2dp(5) }}>
                                <TouchableOpacity >
                                    <Button style={{width:'100%',height:px2dp(50), backgroundColor: "#404bc2", }}
                                        onPress={() => this.navigate.push("Questionnaire")}
                                        title={I18n.t('QuesnoteActivity.ques')}
                                        fontFamily='fantasy'
                                        textAllCaps={false}
                                        color="#404bc2"
                                        backgroundColor='#404bc2'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </SwipeablePanel>
            </View>
        );
    }
}
