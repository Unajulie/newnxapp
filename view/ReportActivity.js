import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, ImageBackground, Alert, Dimensions, ScrollView, Clipboard, TouchableOpacity, ActivityIndicator, Modal, Button } from 'react-native';
//  import { ECharts } from "react-native-echarts-wrapper"
import { decrypt } from 'react-native-simple-encryption'
import { WebView } from 'react-native-webview';
import data from '../appdata'
import Session from '../storage/Session'
import { I18n } from '../locales/i18n'
import { px2dp } from '../src/px2dp';
import { SwipeablePanel } from 'rn-swipeable-panel';
//  import * as ecStat from 'echarts-stat';


export default class ReportActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ReportActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        const { navigation } = this.props;
      
        this.state = {
            swipeablePanelActive: false,
            rage: 0,
            itemBox: [],
            ageBox: [],
            switchonBox: [],
            emailBox: [],
            notifyEmail: "",
            switchon: false,
            statusbar: false,
            animating: false,
            barcode: '',
            btnBuildPdfdisabled: false,
            display: false,
            pdfbox: [],
            // lineardata:null,
            // option: {
            //     legend: {
            //         data: ['Chronological Age<Epigenetic Age', 'Chronological Age>Epigenetic Age']
            //     },
            //     xAxis: [{
            //         name: 'Chronological Age',
            //         type: 'value',
            //         nameLocation: 'middle',
            //         nameGap: 20,
            //         scale: true,
            //         nameTextStyle: { color: "#404cb2", },
            //         axisLabel: {
            //             formatter: '{value}'
            //         }
            //     }],
            //     yAxis: [{
            //         name: 'Epigenetic Age',
            //         nameLocation: 'middle',
            //         nameGap: 22,
            //         nameRotate: 90,
            //         type: 'value',
            //         scale: true,
            //         nameTextStyle: { color: "#404cb2", },
            //         axisLabel: {
            //             formatter: '{value}'
            //         }
            //     }],
            //     series: [
            //         {
            //             name: 'Chronological Age<Epigenetic Age',
            //             type: 'scatter',
            //             style: { fontFamily: 'fantasy', },
            //             //圆点的颜色为红色
            //             itemStyle: {
            //                 normal: {
            //                     color: 'red',
            //                     fontFamily: 'fantasy',
            //                 }
            //             },
            //             //自然年龄<生物学年龄
            //             data: null,
            //             markPoint: {
            //                 data: [
            //                     {
            //                         name: 'Epigenetic Age',
            //                         value: null,
            //                         xAxis: null,
            //                         yAxis: null
            //                     }
            //                 ]
            //             },
            //         },
            //         {
            //             name: 'Chronological Age>Epigenetic Age',
            //             type: 'scatter',
            //             style: { fontFamily: 'fantasy', },
            //             //圆点的颜色为绿色
            //             itemStyle: {
            //                 normal: {
            //                     color: 'green',
            //                     fontFamily: 'fantasy'
            //                 }
            //             },
            //             //自然年龄>生物学年龄
            //             data: null,
            //             markPoint: {
            //                 data: [
            //                     {
            //                         name: 'Epigenetic Age',
            //                         value: null,
            //                         xAxis: null,
            //                         yAxis: null
            //                     }
            //                 ]
            //             },
            //         },
                   
            //             {
            //                 name: 'line',
            //                 type: 'line',
            //                 showSymbol: false,
            //                 data: null,
            //                 markPoint: {
            //                     itemStyle: {
            //                         normal: {
            //                             color: 'transparent'
            //                         }
            //                     },
            //                     label: {
            //                         normal: {
            //                             show: true,
            //                             formatter:null,
            //                             textStyle: {
            //                                 color: '#333',
            //                                 fontSize: 14
            //                             }
            //                         }
            //                     },
            //                     data: [{
            //                         coord: null
            //                     }]
            //                 }
            //             },
                
            //     ]
            // }
        };


    }
    //整个页面渲染完毕
    componentDidMount() {
        this.navigate = this.props.navigation;//此处可以自定义跳转属性
        // console.info(this.navigate)
        // let option = Object.assign({}, this.state.option);
        let biological = window.parseFloat(this.navigate.getParam("biological")).toFixed(2);
        // let naturally = window.parseFloat(this.navigate.getParam("naturally")).toFixed(2)
        let naturally = this.navigate.getParam("naturally") //{ "biological":"x",naturally:10}
        let barcode = this.navigate.getParam("barcode")
        let accuracy = this.navigate.getParam("accuracy")==0?98:this.navigate.getParam("accuracy")
        // console.info("lkxbarcode " + barcode)
        this.setState({ barcode })
        this.setState({ biological })
        this.setState({ naturally })
        this.setState({accuracy})
        // this.setState({regequation})
        // console.info("sleiiowieoii " + this.state.barcode)
        // let i = biological > naturally ? 0 : 1;
        // option.series[i].markPoint.data[0].value = biological
        // //自然年龄
        // this.state.ageBox[j] = this.state.ageBox[j] == "" ? 0 : this.state.ageBox[j]
        // this.setState({ ageBox: this.state.ageBox })
        // //自然年龄
        // option.series[i].markPoint.data[0].xAxis = naturally
        // option.series[i].markPoint.data[0].yAxis = biological
       
        // this.setState({ option })
        // this.echarts.webview.reload()
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
            console.info("rage is"+ this.state.naturally)
            // fetch(data.url + "user/report/findAllNB.jhtml").then(res => res.json()).then((data) => {
                
            //     let upper=[]
            //     let lower=[]
            //     let lineardata=[]
            //     for (var i in data) {
            //         let naturally = window.parseFloat(data[i].naturally).toFixed(2)
            //         let biological = window.parseFloat(data[i].biological).toFixed(2)
            //         lineardata.push([parseFloat(naturally), parseFloat(biological)])
            //         if(naturally>biological){
            //             lower.push([parseFloat(naturally), parseFloat(biological)])
            //         }else{
            //             upper.push([parseFloat(naturally), parseFloat(biological)])
            //     }
            //     }
            //     let option = Object.assign({}, this.state.option);
            //     option.series[1].data = lower;
            //     option.series[0].data = upper;
               
            //     /**Begin liangxiaoyuan 2022.1.10 addReason: linear Regression expression */
            //     let myRegression = ecStat.regression('linear',lineardata);
            //     option.series[2].data=myRegression.points;
            //     option.series[2].markPoint.label.normal.formatter=myRegression.expression;
            //     option.series[2].markPoint.data[0].coord= myRegression.points[myRegression.points.length - 1]
                
            //      /**End liangxiaoyuan 2022.1.10 addReason:linear Regression expression*/
            //     this.setState({ option });
            //     /**Begin liangxiaoyuan 2022.1.10 addReason: linear Regression expression */
            //     this.setState({ lineardata })
            //     /**End liangxiaoyuan 2022.1.10 addReason:linear Regression expression*/
            //     this.echarts.webview.reload();
            // })

            // ALTER TABLE epi.udata ADD pendingtime BIGINT DEFAULT 0 NOT NULL;
            let uuid = decrypt(this.state.user.publickey, this.state.user.uuid)
            fetch(data.url + "user/report/findDataByUuid.jhtml?uuid=" + uuid).then(res => res.json()).then((data) => {
                for (let i in data) {
                    let _31day = (31 * 24 * 3600 * 1000) + (data[i].pendingTime == 0 ? 0 : data[i].curtime - data[i].pendingTime)
                    let time = {}
                    if (data[i].status == "in-transit") time.leftseconds = _31day
                    //pendding状态下当前时间离到期时间还剩多少毫秒到期
                    else if (data[i].status == "pending") time.leftseconds = (data[i].detectTime + _31day) - data[i].pendingTime
                    //processing状态下当前时间离到期时间还剩多少毫秒到期
                    else if (data[i].status == "processing") time.leftseconds = (data[i].detectTime + _31day) - data[i].curtime
                    else if (data[i].status == "ready") { time.leftseconds = 0 }
                    let process = parseInt(((_31day - time.leftseconds) / _31day) * 100)
                    let vbarcode = {}
                    vbarcode.val = data[i].barcode
                    // console.info(data[i].barcode + " allday:" + _31day / (24 * 3600 * 1000) + " move day:" + ((data[i].curtime - data[i].detectTime) / (24 * 3600 * 1000)))
                    vbarcode.remain = parseFloat((_31day / (24 * 3600 * 1000) - ((data[i].curtime - data[i].detectTime) / (24 * 3600 * 1000)))).toFixed(2)
                    vbarcode.stat = data[i].status
                    vbarcode.naturally = data[i].naturally
                    vbarcode.biological = data[i].biological
                    vbarcode.createTime = new Date(data[i].createTime).toLocaleDateString()
                    vbarcode.detectTime = (data[i].status == "in-transit") ? I18n.t("DnaReportActivity.intransit") : new Date(data[i].detectTime).toLocaleDateString()
                    if (data[i].status == "in-transit") { vbarcode.endtime = I18n.t("DnaReportActivity.intransit") }
                    else if (data[i].status == "pending") { vbarcode.endtime = I18n.t("DnaReportActivity.Pendding") }
                    else if (data[i].status == "processing") { vbarcode.endtime = new Date(data[i].detectTime + _31day).toLocaleDateString() }
                    else if (data[i].status == "ready") { vbarcode.endtime = I18n.t("DnaReportActivity.done") }

                    vbarcode.email = data[i].email
                    vbarcode.processing = process
                    vbarcode.switchon = data[i].allow == 1 ? true : false
                    this.state.itemBox.push(vbarcode)
                    this.state.ageBox[i] = vbarcode.naturally ? vbarcode.naturally : 0
                    this.state.switchonBox[i] = vbarcode.switchon
                    this.state.emailBox[i] = data[i].email
                }
                this.setState({ ageBox: this.state.ageBox })
                this.setState({ itemBox: this.state.itemBox })
                this.setState({ switchonBox: this.state.switchonBox })
                this.setState({ emailBox: this.state.emailBox })
                this.setState({ statusbar: true })
            })
        });



    }
    render() {
        this.navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <View style={{ flex: 1, backgroundColor: '#f6f7f8' }}>
                <ScrollView>
                    {/* <Text>{navigate.state.params.meeego}</Text> */}
                    <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                    <View style={{ width: '90%', borderRadius: px2dp(5), height: px2dp(50), marginTop: px2dp(30), backgroundColor: '#ebeced', alignSelf: 'center', flexDirection: 'row', }}>
                        <Text style={{
                            marginLeft: px2dp(20),
                            height: px2dp(60),
                            lineHeight: px2dp(50),
                            fontSize: px2dp(17),
                            color: '#000000',
                            fontWeight: 'bold',
                            fontFamily: 'fantasy'
                        }}>{I18n.t('DnaReportActivity.barcode')} | <Text style={{ color: '#000000', fontFamily: 'fantasy' }}>{this.state.barcode}</Text></Text>

                    </View>
                    {this.state.display == true ?
                        <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                            <WebView ref={(ref) => { this.brower = ref }} source={{ uri: this.state.url }} startInLoadingState={true} />
                            <View style={{ width: "100%", height: px2dp(35), backgroundColor: "#404cb2" }}>
                                <TouchableOpacity>
                                    <Button style={{ width: "100%", height: "100%", backgroundColor: "#404cb2" }}
                                        color="#404cb2"
                                        onPress={() => { { this.setState({ display: false }) } }} />
                                </TouchableOpacity>
                            </View>
                        </Modal> : null
                    }

                    {/* <ImageBackground style={{ width: '100%', height: 223 }} resizeMode='cover' source={require("../image/enpic/rep1.png")}>
                </ImageBackground> */}

                    <View style={{ width: "100%" }}>

                        <View style={{ width: "100%", height: 5, backgroundColor: "#f5f5f5" }}></View>
                        <View style={{ height: px2dp(300), width: "100%", alignSelf: 'center', marginTop: 34 }}>
                        <Image style={{ height: px2dp(300), width: '100%', }} resizeMode='contain' source={require("../image/enpic/rep14.jpg")}></Image>
                            {/* 因为Echarts的内核是封装webview,当动态设置option时,有时候没反应,需要动态刷新一下,所以要获得ECharts的引用 */}
                            {/* 通过获取ECharts的引用,从而获取webview,获得webview之后可以执行 this.echarts.webview.reload(); */}
                            {/* 从而重新刷新webview数据 */}
                            {/* <ECharts lineardata={this.state.lineardata} option={this.state.option} ref={(ref) => { this.echarts = ref }} /> */}
                        </View>
                        {this.state.display ? <ActivityIndicator size="large" color="#404cb2" /> : null}
                        <View style={{ width: '90%', height: px2dp(370), alignSelf: 'center', marginTop: px2dp(20), backgroundColor: '#feffff', borderRadius: px2dp(15), borderWidth: px2dp(1), borderColor: '#cdcdcd', padding: px2dp(5), }}>
                            {/* <View style={{ flexDirection: 'row', margin: px2dp(15) }}>
                                <Image style={{ height: px2dp(18), width: px2dp(18), }} resizeMode="contain" source={require("../image/icons/rep-green.png")}></Image>
                                <Image style={{ height: px2dp(18), width: px2dp(18), marginLeft: px2dp(5) }} resizeMode="contain" source={require("../image/icons/rep-red.png")}></Image>
                                <Text style={{ width: '88%', fontSize: px2dp(14), fontWeight: 'bold', marginLeft: px2dp(10), fontFamily: 'fantasy', }}>{I18n.t('DnaReportActivity.yourbio')} </Text>
                            </View> */}
                            <View style={{ flexDirection: 'row', margin: px2dp(5) }}>
                                <Text style={{ width: '12%', paddingLeft: px2dp(10), fontSize: px2dp(14), color: 'red' }}>●</Text>
                                <Text style={{ width: '88%', fontSize: px2dp(12), fontWeight: 'bold', lineHeight: px2dp(18), fontFamily: 'fantasy', }}>{I18n.t('DnaReportActivity.Chartdescription')}</Text>
                            </View>
                            {/* <View style={{ flexDirection: 'row', margin: px2dp(5) }}>
                                <Text style={{ width: '12%', paddingLeft: px2dp(12), fontSize: px2dp(14), color: 'green' }}>●</Text>
                                <Text style={{ width: '88%', fontSize: px2dp(12), fontWeight: 'bold', lineHeight: px2dp(18), fontFamily: 'fantasy', }}>{I18n.t('DnaReportActivity.otheryounger')}</Text>
                            </View> */}
                        </View>
                        <View style={{ width: '90%', height: px2dp(60), flexDirection: 'row', alignSelf: 'center', marginTop: px2dp(20), backgroundColor: '#feffff', borderRadius: px2dp(15), borderWidth: px2dp(1), borderColor: '#cdcdcd', }}>
                            <Text style={{ width: '68%', marginTop: px2dp(18), marginLeft: px2dp(10), fontSize: px2dp(14), fontFamily: 'fantasy', }}>{I18n.t('DnaReportActivity.accuracy')} -<Text style={{ color: '#000000', fontWeight: 'bold', fontFamily: 'fantasy', }}>&nbsp; {this.state.accuracy}%</Text></Text>
                            <TouchableOpacity onPress={() => this.setState({ swipeablePanelActive: true })} style={{ width: '25%', height: px2dp(35), }}>
                                <View style={{ width: '100%', height: px2dp(35), marginTop: px2dp(12), backgroundColor: '#e7e8ec', fontSize: px2dp(12), borderRadius: px2dp(5), flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold', color: '#000000', marginLeft: px2dp(10), lineHeight: px2dp(35), fontFamily: 'fantasy', }}>INFO</Text>
                                    <Image style={{ height: px2dp(12), width: px2dp(12), backgroundColor: '#e7e8ec',  marginLeft: px2dp(15), marginTop: px2dp(12) }} source={require('../image/right-arr.png')} resizeMode='contain' />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '90%', height: px2dp(60), flexDirection: 'row', alignSelf: 'center', marginTop: px2dp(20), backgroundColor: '#feffff', borderRadius: px2dp(15), borderWidth: px2dp(1), borderColor: '#cdcdcd', }}>
                            <Text style={{ width: '68%', marginTop: px2dp(18), fontFamily: 'fantasy', marginLeft: px2dp(10), fontSize: px2dp(14), }}>{I18n.t('DnaReportActivity.acceleration')}</Text>
                            <TouchableOpacity onPress={() => this.navigate.push("AgeAccelerate",{biological:this.state.biological,naturally:this.state.naturally})} style={{ width: '25%', height: px2dp(35), }}>
                                <View style={{ width: '100%', height: px2dp(35), marginTop: px2dp(12), backgroundColor: '#e7e8ec', fontSize: px2dp(12), borderRadius: px2dp(5), flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold', color: '#000000', marginLeft: px2dp(10), lineHeight: px2dp(35), fontFamily: 'fantasy', }}>GO</Text>
                                    <Image style={{ height: px2dp(12), width: px2dp(12), backgroundColor: '#e7e8ec', marginLeft: px2dp(28), marginTop: px2dp(12) }} source={require('../image/right-arr.png')} resizeMode='contain' />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '90%', height: px2dp(100), flexDirection: 'column', alignSelf: 'center', marginTop: px2dp(20), backgroundColor: '#f1f5f6', borderRadius: px2dp(15), borderWidth: px2dp(1), borderColor: '#cdcdcd', }}>
                            {parseFloat(this.state.naturally) > 0 ?
                                <View style={{ flexDirection: 'row', justifyContent: 'center', height: px2dp(60), width: '55%', alignSelf: 'center' }}>
                                    <Image style={{ height: px2dp(50), marginTop: px2dp(10), width: '30%', alignItems: 'center', }} source={require('../image/olive-leaf.png')} resizeMode='contain' />
                                    <Text style={{ lineHeight: px2dp(60), width: '40%', textAlign: 'center', color: '#000000', fontSize: px2dp(30), fontWeight: 'bold', fontFamily: 'fantasy', }}>{this.state.naturally}</Text>
                                    <Text style={{ lineHeight: px2dp(60), width: '30%', textAlign: 'center', fontSize: px2dp(18), color: '#000000', fontWeight: '600', fontFamily: 'fantasy', }}>{I18n.t('DnaReportActivity.years')}</Text>

                                </View>
                                :
                                <View style={{ flexDirection: 'row', justifyContent: 'center', height: px2dp(60), width: '80%', alignSelf: 'center' }}>
                                    <Image style={{ height: px2dp(50), marginTop: px2dp(10), width: '30%', alignItems: 'center', }} source={require('../image/olive-leaf.png')} resizeMode='contain' />
                                    <Text style={{ lineHeight: px2dp(60), width: '70%', textAlign: 'center', color: '#000000', fontSize: px2dp(14), fontWeight: 'bold', fontFamily: 'fantasy', }}>NA(non-available)</Text>

                                </View>
                            }
                            <Text style={{ width: '100%', height: px2dp(30), textAlign: 'center', lineHeight: px2dp(30), fontSize: px2dp(16), marginBottom: px2dp(10), fontFamily: 'fantasy', }}>{I18n.t('DnaReportActivity.yourchro')}</Text>
                        </View>
                        <View style={{ width: '90%', height: px2dp(200), flexDirection: 'column', alignSelf: 'center', marginTop: px2dp(20), backgroundColor: '#f1f5f6', borderRadius: px2dp(15), borderWidth: px2dp(1), borderColor: '#cdcdcd', }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', height: px2dp(60), width: '70%', alignSelf: 'center' }}>
                                <Image style={{ height: px2dp(50), marginTop: px2dp(10), width: '30%', alignItems: 'center', }} source={require('../image/olive-leaf.png')} resizeMode='contain' />
                                {/* <Text style={{ lineHeight: px2dp(60), width: '40%', textAlign: 'center', color: '#000000', fontSize: px2dp(30), fontFamily: 'fantasy', fontWeight: 'bold', fontFamily: 'fantasy', }}>{parseFloat((-1.6394 + (Math.sqrt(2.6876 + 0.0288 * -((parseFloat(this.state.biological)) + 7.5806)))) / (-0.0144)).toFixed(2)}</Text> */}
                                <Text style={{ lineHeight: px2dp(60), width: '40%', textAlign: 'center', color: '#000000', fontSize: px2dp(30), fontFamily: 'fantasy', fontWeight: 'bold', fontFamily: 'fantasy', }}>{parseFloat((parseFloat(this.state.biological) - 8.9657) / 0.9044).toFixed(2)}</Text>

                                <Text style={{ lineHeight: px2dp(60), width: '30%', textAlign: 'center', fontSize: px2dp(18), color: '#000000', fontFamily: 'fantasy', fontWeight: '600', fontFamily: 'fantasy', }}>{I18n.t('DnaReportActivity.years')}</Text>
                            </View>
                            <Text style={{ width: '100%', height: px2dp(30), textAlign: 'center', lineHeight: px2dp(30), fontSize: px2dp(16), marginBottom: px2dp(10), fontFamily: 'fantasy', }}>{I18n.t('DnaReportActivity.yourexpchro')}</Text>
                            <View style={{ borderTopWidth: px2dp(1), borderTopColor: '#cdcdcd', borderStyle: 'dashed', }}></View>
                            <View style={{ height: px2dp(90), }}>
                                <Text style={{ textAlign: 'center', fontSize: px2dp(14), color: '#000000', margin: px2dp(15), fontFamily: 'fantasy', }}>
                                {I18n.t('DnaReportActivity.expchroexplain')}
                                </Text>
                            </View>
                        </View>
                        <View style={{ width: '90%', height: px2dp(230), flexDirection: 'column', alignSelf: 'center', marginTop: px2dp(20), marginBottom: px2dp(50), backgroundColor: '#feffff', borderRadius: px2dp(15), borderWidth: px2dp(1), borderColor: '#cdcdcd', }}>
                            <Image style={{ height: px2dp(30), width: '15%', marginTop: px2dp(20) }} source={require('../image/dna-icon.png')} resizeMode='contain' />
                            <View style={{ width: px2dp(100), height: px2dp(80), marginTop: px2dp(-20), alignSelf: 'center', borderRadius: px2dp(15), backgroundColor: '#ebeced',}}>
                                <Text style={{ textAlign: 'center', lineHeight: px2dp(80), color: '#000000', fontSize: px2dp(30), fontWeight: 'bold', fontFamily: 'fantasy' }}>{this.state.biological}</Text>
                            </View>
                            <Text style={{ lineHeight: px2dp(30), textAlign: 'center', fontSize: px2dp(18), color: '#000000', fontWeight: 'bold', marginBottom: px2dp(30), fontFamily: 'fantasy', }}>{I18n.t('DnaReportActivity.yourbio')}</Text>

                            {this.state.naturally !== 0 ?
                                // null
                                // this.state.biological < parseFloat((parseFloat(this.state.biological) - 8.9657) / 0.9044).toFixed(2) ?
                                this.state.naturally > parseFloat((parseFloat(this.state.biological) - 8.9657) / 0.9044).toFixed(2)   ?
                                    <View style={{ height: px2dp(120), backgroundColor: '#ebeced', borderRadius: px2dp(15),marginTop:px2dp(20),marginBottom:px2dp(100) }}>
                                        <View style={{ height: px2dp(60), width: px2dp(60), borderRadius: px2dp(50), backgroundColor: '#ebeced', alignSelf: 'center', marginTop: px2dp(-25) }}>
                                            <Image style={{ height: px2dp(40), width: px2dp(40), marginTop: px2dp(10), alignSelf: 'center' }} source={require('../image/smile-black.png')} resizeMode='contain' />
                                        </View>
                                        <Text style={{ textAlign: 'center', height: px2dp(70), fontSize: px2dp(14), color: '#000000', fontFamily: 'fantasy', }}>
                                            {I18n.t('DnaReportActivity.is')} <Text style={{ fontSize: px2dp(16), fontWeight: 'bold' }}>
                                                {Math.abs((parseFloat((parseFloat(this.state.biological) - 8.9657) / 0.9044)).toFixed(2) - parseFloat(this.state.naturally)).toFixed(2)}</Text>
                                            {I18n.t('DnaReportActivity.lower')}</Text>
                                        <View style={{ width: '100%',height:px2dp(120)}}></View>
                                    </View>
                                    :
                                    <View style={{ height: px2dp(120), backgroundColor: '#ebeced', borderRadius: px2dp(15),marginTop:px2dp(20),marginBottom:px2dp(100) }}>
                                        <View style={{ height: px2dp(60), width: px2dp(60), borderRadius: px2dp(50), backgroundColor: '#ebeced', alignSelf: 'center', marginTop: px2dp(-25) }}>
                                            <Image style={{ height: px2dp(40), width: px2dp(40), marginTop: px2dp(10), alignSelf: 'center' }} source={require('../image/sad-black.png')} resizeMode='contain' />
                                        </View>
                                        <Text style={{ textAlign: 'center', height: px2dp(70), fontSize: px2dp(14), color: '#000000', fontFamily: 'fantasy', }}>
                                            {I18n.t('DnaReportActivity.is')} <Text style={{ fontSize: px2dp(16), fontWeight: 'bold' }}>
                                                {Math.abs((parseFloat((parseFloat(this.state.biological) - 8.9657) / 0.9044)).toFixed(2) - parseFloat(this.state.naturally)).toFixed(2)}</Text>
                                            {I18n.t('DnaReportActivity.higher')}</Text>
                                            <View style={{ width: '100%',height:px2dp(120)}}></View>
                                    </View>
                                :
                                null
                                //  this.state.rage > parseFloat((parseFloat(this.state.biological) - 8.9657) / 0.9044).toFixed(2)   ?
                                   
                                //     <View style={{ height: px2dp(100), backgroundColor: '#ebeced', borderRadius: px2dp(15), }}>
                                //         <View style={{ height: px2dp(60), width: px2dp(60), borderRadius: px2dp(50), backgroundColor: '#ebeced', alignSelf: 'center', marginTop: px2dp(-25) }}>
                                //             <Image style={{ height: px2dp(40), width: px2dp(40), marginTop: px2dp(10), alignSelf: 'center' }} source={require('../image/smile-black.png')} resizeMode='contain' />
                                //         </View>
                                //         <Text style={{ textAlign: 'center', height: px2dp(70), fontSize: px2dp(14), color: '#000000', fontFamily: 'fantasy', }}>
                                //             {I18n.t('DnaReportActivity.is')} <Text style={{ fontSize: px2dp(16), fontWeight: 'bold' }}>{Math.abs((this.state.rage) - parseFloat((parseFloat(this.state.biological) - 8.9657) / 0.9044)).toFixed(2)} </Text> {I18n.t('DnaReportActivity.lower')} </Text>
                                //     </View>
                                //     :
                                //     <View style={{ height: px2dp(100), backgroundColor: '#ebeced', borderRadius: px2dp(15), }}>
                                //         <View style={{ height: px2dp(60), width: px2dp(60), borderRadius: px2dp(50), backgroundColor: '#ebeced', alignSelf: 'center', marginTop: px2dp(-25) }}>
                                //             <Image style={{ height: px2dp(40), width: px2dp(40), marginTop: px2dp(10), alignSelf: 'center' }} source={require('../image/sad-black.png')} resizeMode='contain' />
                                //         </View>
                                //         <Text style={{ textAlign: 'center', height: px2dp(70), fontSize: px2dp(14), color: '#000000', fontFamily: 'fantasy', }}>
                                //             {I18n.t('DnaReportActivity.is')} <Text style={{ fontSize: px2dp(16), fontWeight: 'bold', fontFamily: 'fantasy', }}>{Math.abs((this.state.rage) - parseFloat((parseFloat(this.state.biological) - 8.9657) / 0.9044)).toFixed(2)} </Text> {I18n.t('DnaReportActivity.old')} </Text>
                                //     </View>
                                
                            }

                        </View>
                       
                        {/* <View style={{ width: '90%', height: px2dp(60), flexDirection: 'row', alignSelf: 'center', marginTop: px2dp(10), backgroundColor: '#feffff', borderRadius: px2dp(15), borderWidth: px2dp(1), borderColor: '#cdcdcd', }}>
                            <Text style={{ width: '68%', marginTop: px2dp(18), fontFamily: 'fantasy', marginLeft: px2dp(10), fontSize: px2dp(16), }}>{I18n.t('DnaReportActivity.calculate')}</Text>
                            <TouchableOpacity onPress={() => { this.setState({ url: "https://epigenexperts.ca/epigenetic-age-calculator/" }); this.setState({ display: true }) }} style={{ width: '20%', height: px2dp(35), }}>
                                <View style={{ width: '100%', height: px2dp(35), marginTop: px2dp(12), backgroundColor: '#e7e8ec', fontSize: px2dp(12), borderRadius: px2dp(5), flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold', color: '#000000', marginLeft: px2dp(10), lineHeight: px2dp(35), fontFamily: 'fantasy', }}>GO</Text>
                                    <Image style={{ height: px2dp(12), width: px2dp(12), backgroundColor: '#e7e8ec', color: '#cdcdcd', marginLeft: px2dp(15), marginTop: px2dp(12) }} source={require('../image/right-arr.png')} resizeMode='contain' />
                                </View>
                            </TouchableOpacity>
                        </View> */}

                        <View style={{ width: "100%", alignItems: "center", marginTop: px2dp(30), backgroundColor: '#f6f7f8' }}>
                         <Image style={{ height: px2dp(300), width: '100%', borderTopRightRadius: px2dp(30), borderTopLeftRadius: px2dp(30) }} resizeMode='contain' source={require("../image/enpic/rep12.jpg")}></Image>
                            <View style={{ width: '90%', alignSelf: 'center', }}>
                                <View style={{ width: '100%', alignSelf: 'flex-end', marginTop: px2dp(-23), marginBottom: px2dp(34) }}>
                                    <Text style={{ alignSelf: 'flex-end', fontSize: px2dp(14), color: '#404cb2', fontFamily: 'fantasy', }}>{I18n.t('DnaReportActivity.how')}</Text>
                                    <Text style={{ alignSelf: 'flex-end', fontSize: px2dp(14), color: '#888888', fontFamily: 'fantasy', lineHeight: px2dp(20), marginTop: px2dp(10) }}>{I18n.t('DnaReportActivity.why')}</Text>
                                    <Text style={{ alignSelf: 'flex-end', fontSize: px2dp(20), color: '#404cb2', fontFamily: 'fantasy', lineHeight: px2dp(30) }}>{I18n.t('DnaReportActivity.epigenetic')}</Text>

                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(8), fontFamily: 'fantasy', lineHeight: px2dp(22) }}>{I18n.t('DnaReportActivity.look')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.parameter')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.hardware')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.shift')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.clock')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.different')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.studies')}</Text>
                                </View>
                            </View>
                            <View style={{ width: '100%', backgroundColor: '#f0f0f0', height: 10 }}></View>
                            <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '70%', fontSize: 16, fontFamily: 'fantasy', paddingTop: 23, lineHeight: 26, }}>{I18n.t('DnaReportActivity.what')}<Text style={{ color: '#404cb2', fontSize: 21 }}>{I18n.t('DnaReportActivity.epiage')}</Text><Text style={{ color: '#404cb2' }}>{I18n.t('DnaReportActivity.mean')}</Text></Text>
                                    <Image style={{ height: 99, width: '30%', marginBottom: 20 }} resizeMode='contain' source={require("../image/enpic/rep2.png")}></Image>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.cg')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.dna')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.redflag')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.changes')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.act')}</Text>
                                </View>
                                <Image style={{ height: px2dp(100), width: '50%', alignSelf: 'flex-end', marginBottom: px2dp(10) }} resizeMode='contain' source={require("../image/enpic/rep3.png")}></Image>

                            </View>
                            <View style={{ height: px2dp(10), width: '100%', backgroundColor: '#f0f0f0' }}></View>
                            <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), marginBottom: px2dp(20), }}>
                                <View style={{ flexDirection: 'row', marginBottom: px2dp(20) }}>
                                    <View style={{ flexDirection: 'column', width: '40%' }}>
                                        <Text style={{ fontSize: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(28), }}>{I18n.t('DnaReportActivity.do')} </Text>
                                        <Image style={{ height: px2dp(100), width: '100%' }} resizeMode='contain' source={require("../image/enpic/rep4.png")}></Image>
                                    </View>
                                    <Text style={{ width: '60%', fontSize: px2dp(16), fontFamily: 'fantasy', lineHeight: px2dp(35), }}><Text style={{ color: '#404cb2', fontSize: px2dp(22) }}>{I18n.t('DnaReportActivity.older')}</Text></Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.genetics')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.open')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.exercise')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: '60%', flexDirection: 'row' }}>
                                        <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                        <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.way')}</Text>
                                    </View>
                                    <Image style={{ width: '40%', height: 123, }} resizeMode='contain' source={require("../image/enpic/rep5.png")}></Image>
                                </View>
                            </View>
                            <Image style={{ width: '100%', height: px2dp(300), borderTopLeftRadius: px2dp(30), borderTopRightRadius: px2dp(30) }} resizeMode='contain' source={require("../image/enpic/rep6.png")}></Image>
                            <View style={{ width: '70%', alignSelf: 'flex-end', marginTop: px2dp(-60), marginBottom: px2dp(23) }}>
                                <Text style={{ fontSize: px2dp(22), color: '#404cb2', fontFamily: 'fantasy', lineHeight: px2dp(30) }}>{I18n.t('DnaReportActivity.position')}</Text>
                                <Text style={{ fontSize: px2dp(14), fontFamily: 'fantasy', lineHeight: px2dp(30) }}>{I18n.t('DnaReportActivity.health')}</Text>
                            </View>
                            <View style={{ width: '90%', alignSelf: 'center', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.links')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.updated')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.first')}</Text>
                                </View>
                            </View>
                            <Image style={{ width: '100%', height: px2dp(300), borderTopLeftRadius: px2dp(30), borderTopRightRadius: px2dp(30) }} resizeMode='contain' source={require("../image/enpic/rep7.png")}></Image>
                            <View style={{ width: '80%', alignSelf: 'flex-end', marginTop: px2dp(-60), marginBottom: px2dp(23) }}>
                                <Text style={{ fontSize: px2dp(16), fontFamily: 'fantasy', }}>{I18n.t('DnaReportActivity.dynamic')}</Text>
                                <Text style={{ fontSize: px2dp(22), lineHeight: px2dp(30), color: '#404cb2', fontFamily: 'fantasy', }}>{I18n.t('DnaReportActivity.achive')}</Text>
                            </View>
                            <View style={{ width: '90%', alignSelf: 'center', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.suggest')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.update')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.second')}</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.anonymized')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.model')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.analyze')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>

                                    <View style={{ width: '60%' }}>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                            <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.routes')}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ width: '7%', fontSize: px2dp(12), color: '#939598' }}>●</Text>
                                            <Text style={{ width: '95%', fontSize: px2dp(12), marginBottom: px2dp(10), fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t('DnaReportActivity.coevolve')}</Text>
                                        </View>
                                    </View>
                                    <Image style={{ width: '40%', height: 123 }} resizeMode='contain' source={require("../image/enpic/rep13.png")}></Image>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 34, width: "100%" }}></View>

                    </View>
                    <View style={{ width: "100%", alignItems: "center" }}>
                        <View style={{ width: "90%", height: 80 }}>
                            {this.state.animating ? <ActivityIndicator
                                animating={true}
                                style={{ height: 80 }}
                                size="large" /> : null}
                        </View>
                    </View>
                    <View style={{ width: "100%", alignItems: "center" }}>
                        <View style={{ width: '90%' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ width: "89%", alignSelf: 'center', borderRadius: 50 }}>
                                    <TouchableOpacity>
                                        <Button disabled={this.state.btnBuildPdfdisabled}
                                            color="#404cb2"
                                            onPress={() => {
                                                this.setState({ animating: true })
                                                this.setState({ btnBuildPdfdisabled: true })
                                                let uuid = decrypt(this.state.user.publickey, this.state.user.uuid)
                                                Session.load("pdfsavepath").then((savepathbox) => {
                                                    let url = data.url + "user/report/" + uuid + "/" + this.state.barcode + "/" + I18n.locale + "/" + this.state.rage + "/buildPDF.jhtml"
                                                   
                                                    console.info(url)
                                                     //下载pdf
                                                    fetch(url).then(res => res.text()).then((issuccess) => {
                                                        if (issuccess == "success") {
                                                            if (savepathbox.indexOf(this.state.barcode + ":" + uuid + ":" + I18n.locale) == -1) {
                                                                savepathbox.push(this.state.barcode + ":" + uuid + ":" + I18n.locale)
                                                                Session.save("pdfsavepath", savepathbox)
                                                                this.setState({ animating: false })
                                                                let url = data.url + "user/report/" + this.state.barcode + "/" + I18n.locale + "/pdf.jhtml"
                                                                Clipboard.setString(url);
                                                                Alert.alert(I18n.t("SavepdfpathActivity.titlemsg"), I18n.t("SavepdfpathActivity.copy"))                                                                                
                                                                
                                                            } else {
                                                                //let barcode=savepathbox[0].split(":")[0]
                                                                let url = data.url + "user/report/" + this.state.barcode + "/" + I18n.locale + "/pdf.jhtml"
                                                                Clipboard.setString(url);
                                                                this.setState({ animating: false })
                                                                Alert.alert(I18n.t("SavepdfpathActivity.titlemsg"), I18n.t("SavepdfpathActivity.copy"))
                                                            }
                                                        } else {
                                                            Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.pdffail"))
                                                            this.setState({ btnBuildPdfdisabled: true })
                                                            this.setState({ animating: false })
                                                        }
                                                    })
                                                }).catch(e => {
                                                    Session.save("pdfsavepath", [])
                                                    Session.load("pdfsavepath").then((savepathbox) => {
                                                        fetch(url).then(res => res.text()).then((issuccess) => {
                                                            if (issuccess == "success") {
                                                                savepathbox.push(this.state.barcode + ":" + uuid + ":" + I18n.locale)
                                                                this.setState({ animating: false })
                                                                Session.save("pdfsavepath", savepathbox)
                                                                Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.pdfsuccess"))
                                                            } else {
                                                                Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.pdffail"))
                                                                this.setState({ btnBuildPdfdisabled: true })
                                                                this.setState({ animating: false })
                                                            }
                                                        })
                                                    })
                                                })

                                            }} title={I18n.t("DnaReportActivity.buildPDF")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '100%', height: 23 }} />
                                <View style={{ width: "89%", height: '100%', alignSelf: 'center', borderRadius: 50 }}>
                                    <TouchableOpacity >
                                        <Button
                                            color="#404cb2"
                                            title={I18n.t("DnaReportActivity.viewPdf")} onPress={() => {
                                                this.navigate.push("Savepdfpath")
                                            }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: "100%", height: 20 }}></View>
                    </View>
                </ScrollView >
                <SwipeablePanel
                    fullWidth={true}
                    showCloseButton={true}
                    closeOnTouchOutside={true}
                    isActive={this.state.swipeablePanelActive}
                    onClose={() => { this.setState({ swipeablePanelActive: false }) }}
                    onPressCloseButton={() => { this.setState({ swipeablePanelActive: false }) }}
                >
                    <View style={{ width: '90%', alignSelf: 'center', margin: px2dp(20) }}>
                        <Text style={{ fontSize: px2dp(20),fontFamily:'fantasy', fontWeight: 'bold', color: '#000000', marginBottom: px2dp(20) }}>Technical Accuracy</Text>
                        <Text style={{ fontSize: px2dp(16),fontFamily:'fantasy', color: '#000000', marginBottom: px2dp(10) }}>We performed three independent tests on your saliva using next generation sequencing technology. We provide you with an average of the three tests and the technical accuracy is to 100%, the closer the tests results were to each other.</Text>
                    </View>
                </SwipeablePanel>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    videoContainer: {
        margin: 10
    }
})