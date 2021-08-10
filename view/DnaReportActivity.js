import React, { Component } from 'react';
import { StyleSheet, StatusBar, Dimensions, Text, View, Animated, ScrollView, Alert, TextInput, TouchableOpacity, Image } from 'react-native';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';
import SwitchSelector from "react-native-switch-selector";
import { decrypt } from 'react-native-simple-encryption'
import ToggleSwitch from 'toggle-switch-react-native'
import Session from '../storage/Session'
import data from '../appdata'
import Input from "react-native-input-validation"
import DropDownItem from "react-native-drop-down-item";
import ProgressBarAnimated from 'react-native-progress-bar-animated';
const customText = {
    style: {
        // fontFamily: 'serif',
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
    }
};
export default class DnaReportActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("DnaReportActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            tabshow: true,
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
            btnBuildPdfdisabled: true,
            display: false,

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
            //         nameTextStyle: { color: "#0071BC" },
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
            //         nameTextStyle: { color: "#0071BC" },
            //         axisLabel: {
            //             formatter: '{value}'
            //         }
            //     }],
            //     series: [
            //         {
            //             name: 'Chronological Age<Epigenetic Age',
            //             type: 'scatter',
            //             //圆点的颜色为红色
            //             itemStyle: {
            //                 normal: {
            //                     color: 'red'
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
            //             //圆点的颜色为绿色
            //             itemStyle: {
            //                 normal: {
            //                     color: 'green'
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


            //         }]
            // }
        }
    }
    reload = () => {
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
                console.info(data[i].barcode + " allday:" + _31day / (24 * 3600 * 1000) + " move day:" + ((data[i].curtime - data[i].detectTime) / (24 * 3600 * 1000)))
                vbarcode.remain = parseFloat((_31day / (24 * 3600 * 1000) - ((data[i].curtime - data[i].detectTime) / (24 * 3600 * 1000)))).toFixed(2)
                vbarcode.stat = data[i].status
                vbarcode.naturally = data[i].naturally
                vbarcode.biological = data[i].biological
                vbarcode.accuracy= data[i].accuracy
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
    }
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });

            // fetch(data.url + "/user/report/findNtrLtBio.jhtml").then(res => res.json()).then((data) => {
            //     let v = []
            //     for (var i in data) {
            //         let naturally = window.parseFloat(data[i].naturally).toFixed(2)
            //         let biological = window.parseFloat(data[i].biological).toFixed(2)
            //         v.push([naturally, biological])
            //     }
            //     let option = Object.assign({}, this.state.option);
            //     option.series[0].data = v;
            //     this.setState({ option });
            //     this.echarts.webview.reload();

            // })
            fetch(data.url + "/user/report/findNtrGtBio.jhtml").then(res => res.json()).then((data) => {
                let v = []
                for (var i in data) {
                    let naturally = window.parseFloat(data[i].naturally).toFixed(2)
                    let biological = window.parseFloat(data[i].biological).toFixed(2)
                    v.push([naturally, biological])
                }
                let option = Object.assign({}, this.state.option);
                option.series[1].data = v;
                this.setState({ option });
                this.echarts.webview.reload();
            })
        });



    }
    increase = (key, value) => {
        this.setState({
            [key]: this.state[key] + value,
        });
    }
    //查看报告
    // viewReport() {
    //     //赋值
    //     this.setState({ rage: this.state.ageBox[j] })
    //     let uuid = decrypt(this.state.user.publickey, this.state.user.uuid)
    //     fetch(data.url + "/user/report/" + uuid + "/" + barcode.val + "/findEmail.jhtml").then(data => data.json()).then((udata) => {
    //         if (barcode.stat == "ready") {
    //             this.setState({ animating: true })
    //             this.state.ageBox[j] = this.state.ageBox[j] == "" ? 0 : this.state.ageBox[j]
    //             this.setState({ ageBox: this.state.ageBox })
    //             console.info(data.url + "user/age/upmyage.jhtml?uuid=" + uuid + "&barcode=" + barcode.val + "&myage=" + this.state.ageBox[j])
    //             //更改实际年龄
    //             fetch(data.url + "user/age/upmyage.jhtml?uuid=" + uuid + "&barcode=" + barcode.val + "&myage=" + this.state.ageBox[j]).then(res => res.text()).then((data) => {
    //                 this.setState({ btnBuildPdfdisabled: false })
    //                 let option = Object.assign({}, this.state.option);
    //                 let biological = window.parseFloat(barcode.biological).toFixed(2);
    //                 let naturally = window.parseFloat(barcode.naturally).toFixed(2)
    //                 // let naturally = this.state.ageBox[j]
    //                 this.setState({ biological })
    //                 this.setState({ naturally })
    //                 let i = biological > naturally ? 0 : 1;
    //                 option.series[i].markPoint.data[0].value = biological
    //                 //自然年龄
    //                 this.state.ageBox[j] = this.state.ageBox[j] == "" ? 0 : this.state.ageBox[j]
    //                 this.setState({ ageBox: this.state.ageBox })
    //                 //自然年龄
    //                 option.series[i].markPoint.data[0].xAxis = this.state.ageBox[j]
    //                 option.series[i].markPoint.data[0].yAxis = biological
    //                 this.setState({ option })
    //                 this.setState({ visual: true })
    //                 {/* 因为Echarts的内核是封装webview,当动态设置option时,有时候没反应,需要动态刷新一下,所以要获得ECharts的引用 */ }
    //                 {/* 通过获取ECharts的引用,从而获取webview,获得webview之后可以执行 this.echarts.webview.reload(); */ }
    //                 {/* 从而重新刷新webview数据 */ }
    //                 this.echarts.webview.reload()
    //                 this.setState({ animating: false })
    //             })
    //         } else if (barcode.stat == "processing") {
    //             this.setState({ visual: false })
    //             Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.processed"));
    //         } else if (barcode.stat == "pending") {
    //             this.setState({ visual: false })
    //             Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.pendingwait"));
    //         }
    //         this.setState({ barcode: barcode.val })
    //     })

    // }
    render() {
        this.navigate = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#f6f7f8' }}>
                <ScrollView>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(30) }}>
                        <SwitchSelector
                            initial={0}
                            onPress={value => {
                                this.setState({ tabshow: value == 'newkit' ? true : false })
                                if (!this.state.tabshow) {
                                    this.reload();
                                }
                            }}
                            textStyle={{ fontWeight: 'bold', fontFamily: 'fantasy' }}
                            selectedTextStyle={{ fontWeight: 'bold', fontFamily: 'fantasy' }}
                            textColor={'#404cb2'}
                            selectedColor={'#ffffff'}
                            buttonColor={'#404cb2'}
                            borderColor={'#404cb2'}
                            borderWidth={px2dp(1)}
                            borderRadius={px2dp(5)}
                            hasPadding={true}
                            options={[
                                { label: I18n.t("DnaReportActivity.newkit"), value: "newkit", }, //images.feminino = require('./path_to/assets/img/feminino.png')
                                { label: I18n.t("DnaReportActivity.registeredkit"), value: "registerkit", } //images.masculino = require('./path_to/assets/img/masculino.png')
                            ]}
                            testID="gender-switch-selector"
                            accessibilityLabel="gender-switch-selector"
                        />
                        {this.state.tabshow == true ?
                            <View style={{ flex: 1, width: '100%', alignSelf: 'center', marginTop: px2dp(30) }}>
                                <View style={{ width: '100%', height: px2dp(250), backgroundColor: '#ebeced', borderRadius: px2dp(30) }}>
                                    <View style={{ marginLeft: px2dp(15), marginTop: px2dp(20) }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: px2dp(16), fontFamily: 'fantasy', }}>{I18n.t("DnaReportActivity.epiage1")}</Text>
                                    </View>
                                    <Text style={{ margin: px2dp(15), fontWeight: '200', fontSize: px2dp(14), fontFamily: 'serif', }}>{I18n.t("DnaReportActivity.life")}</Text>
                                    <Image style={{ height: px2dp(140), width: '100%', borderRadius: px2dp(30) }} source={require('../image/enpic/index9.jpg')} resizeMode='cover' />
                                </View>
                                <View style={{ width: "100%", alignSelf: "center", height: px2dp(300), marginTop: px2dp(45) }}>
                                    <View style={{ flexDirection: 'row', height: px2dp(50), width: '100%', justifyContent: 'center', alignItems: 'center', borderColor: '#404cb2', borderWidth: 1, borderRadius: px2dp(5), }}>
                                        <Image style={{ height: px2dp(30), width: px2dp(50), marginLeft: px2dp(5) }} source={require('../image/barcode.png')} resizeMode='contain' />
                                        <TextInput
                                            style={{ flex: 1, height: px2dp(50), color: '#000000', fontWeight: 'bold', paddingVertical: 0, fontFamily: 'fantasy', }}
                                            onChangeText={(barcode) => this.setState({ barcode })}
                                            placeholder={I18n.t("DnaReportActivity.yourbarcode")}
                                            placeholderTextColor='#cdcdcd'

                                            value={this.state.barcode}
                                        >
                                        </TextInput>
                                    </View>
                                    <Text style={{ width: "100%", height: px2dp(40), lineHeight: px2dp(40), color: "#000000", textAlign: "center", textAlignVertical: "center", fontSize: px2dp(16), fontFamily: 'fantasy', fontWeight: 'bold' }}>OR</Text>
                                    <TouchableOpacity onPress={() => {
                                        this.navigate.push("Scanner", {
                                            barcode: this.state.barcode,
                                            callback: (data) => {
                                                this.setState({ barcode: data })
                                            }
                                        })
                                    }}>
                                        <View style={{ width: "100%", height: px2dp(50), justifyContent: 'center', flexDirection: 'row', alignSelf: "center", borderWidth: 1, borderColor: '#404cb2', borderRadius: px2dp(5), }} >
                                            <Image style={{ height: px2dp(30), width: px2dp(50), marginTop: px2dp(10) }} resizeMode='contain' source={require("../image/barcode.png")}></Image>
                                            <Text style={{ color: '#404cb2', lineHeight: px2dp(50), fontWeight: 'bold', fontSize: px2dp(14), fontFamily: 'fantasy', }}>{I18n.t("DnaReportActivity.Scan")}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ width: "100%", height: px2dp(50), backgroundColor: "#404cb2", borderRadius: px2dp(5), marginTop: px2dp(30), alignSelf: "center" }} >
                                        <TouchableOpacity disabled={this.state.barcode.length != 0 ? false : true} onPress={() => {
                                            //this.setState({ display: true })
                                            //解密
                                            let uuid = decrypt(this.state.user.publickey, this.state.user.uuid)
                                            fetch(data.url + "user/report/upbarcode.jhtml?uuid=" + uuid + "&barcode=" + this.state.barcode).then(res => res.json()).then((data) => {
                                                switch (data.status) {
                                                    case "invalid":
                                                        Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.invalid"));
                                                        break
                                                    case "in-transit":
                                                        var barcode = {}
                                                        barcode.val = this.state.barcode
                                                        barcode.stat = data.status
                                                        barcode.createTime = "in-transit"
                                                        barcode.endtime = "in-transit"
                                                        barcode.processing = 0
                                                        barcode.naturally = 0
                                                        barcode.switchon = false
                                                        //判断该barcode是否存在
                                                        if (JSON.stringify(this.state.itemBox).indexOf(barcode.val) == -1) {
                                                            this.state.itemBox.push(barcode)
                                                            this.setState({ itemBox: this.state.itemBox })
                                                            this.setState({ statusbar: true })
                                                        }
                                                        Alert.alert(I18n.t("DnaReportActivity.barcodesuccess"), I18n.t("DnaReportActivity.wait"))
                                                        this.setState({ tabshow:false })
                                                        
                                                        break
                                                    case "pending":
                                                        this.setState({ statusbar: false })
                                                        Alert.alert(I18n.t("DnaReportActivity.barcodesuccess"), I18n.t("DnaReportActivity.pendingwait"))
                                                        this.setState({ tabshow: false })
                                                        break;
                                                    case "processing":
                                                        this.setState({ visual: false })
                                                        Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.processed"));
                                                        this.setState({ tabshow: false })
                                                        break;
                                                    case "ready":
                                                        this.setState({ statusbar: true })
                                                        this.setState({ btnBuildPdfdisabled: false })
                                                        let option = Object.assign({}, this.state.option);
                                                        let biological = window.parseFloat(data.biological).toFixed(2);
                                                        let naturally = window.parseFloat(data.naturally).toFixed(2)
                                                        this.setState({ biological })
                                                        this.setState({ naturally })
                                                        let i = biological > naturally ? 0 : 1;
                                                        this.echarts.webview.reload();
                                                        option.series[i].markPoint.data[0].value = biological
                                                        option.series[i].markPoint.data[0].xAxis = naturally
                                                        option.series[i].markPoint.data[0].yAxis = biological
                                                        this.setState({ option })
                                                        this.setState({ visual: true })
                                                        {/* 因为Echarts的内核是封装webview,当动态设置option时,有时候没反应,需要动态刷新一下,所以要获得ECharts的引用 */ }
                                                        {/* 通过获取ECharts的引用,从而获取webview,获得webview之后可以执行 this.echarts.webview.reload(); */ }
                                                        {/* 从而重新刷新webview数据 */ }
                                                        this.echarts.webview.reload();
                                                        this.setState({ tabshow: false })
                                                        break;
                                                }
                                                this.setState({ display: false })

                                            })

                                        }}>
                                            <Text style={{ width: "100%", height: px2dp(50), textAlign: "center", lineHeight: px2dp(50), color: "white", fontSize: px2dp(16), fontFamily: 'serif', }}>{I18n.t('DnaReportActivity.Registerkit')}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            // First page end
                            :
                            // Second page start
                            <View style={{ width: '100%', marginTop: px2dp(30), }}>
                                {this.state.itemBox ?
                                    this.state.itemBox.map((barcode, i) => {
                                        let j = i
                                        return <View key={barcode.val}
                                        >
                                            <View style={{
                                                flex: 1,
                                                alignItems: 'center',
                                                backgroundColor: '#feffff',
                                                borderRadius: px2dp(15),
                                                // borderWidth: px2dp(2),
                                                // borderColor:'#cdcdcd'
                                            }}>
                                                <ScrollView >

                                                    <DropDownItem
                                                        key={i}
                                                        contentVisible={true}
                                                        invisibleImage={require('../image/drop-down.png')}
                                                        visibleImage={require('../image/drop-up.png')}
                                                        // invisibleImage={<Text style={{color:'red'}}>&gt;ppppp</Text>}
                                                        // vis  ibleImage={ <Text>&lt;</Text>}
                                                        style={{ padding: px2dp(10) }}
                                                        header={
                                                            <View style={{ height: px2dp(75) }}>

                                                                <View style={{
                                                                    width: px2dp(9),
                                                                    height: px2dp(9),
                                                                    backgroundColor: '#404cb2',
                                                                    borderColor: '#404cb2',
                                                                    borderStyle: 'solid',
                                                                    borderRadius: px2dp(15),
                                                                    marginTop: px2dp(5)
                                                                }} />

                                                                <View style={{
                                                                    width: '100%',
                                                                    height: px2dp(50),
                                                                    margin: px2dp(5),
                                                                    flexDirection: 'row',
                                                                    alignItems: 'center',
                                                                }}>
                                                                    <Text style={{
                                                                        height: px2dp(50),
                                                                        lineHeight: px2dp(50),
                                                                        fontSize: px2dp(17),
                                                                        color: '#7f8081',
                                                                        fontWeight: 'bold',
                                                                        fontFamily: 'fantasy',
                                                                    }}>{I18n.t('DnaReportActivity.barcode')} | <Text style={{ color: '#000000', fontFamily: 'fantasy', }}>{barcode.val}</Text></Text>

                                                                </View>
                                                            </View>
                                                        }>

                                                        <View key={barcode.val} style={{ width: px2dp(290), height: px2dp(560), borderTopWidth: px2dp(1), borderTopColor: 'grey', overflow: 'hidden' }}>
                                                            <View style={{ height: px2dp(50), width: '100%', justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: px2dp(1), borderColor: '#cdcdcd', borderStyle: 'dotted', }}>
                                                                <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#7f8081', fontFamily: 'fantasy', }}>{I18n.t('DnaReportActivity.regtime')}</Text>
                                                                <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#000000', textAlign: 'justify', fontFamily: 'fantasy', }}>{barcode.createTime}</Text>
                                                            </View>
                                                            <View style={{ height: px2dp(50), width: '100%', justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: px2dp(1), borderColor: '#cdcdcd', borderStyle: 'dotted', }}>
                                                                <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#7f8081', fontFamily: 'fantasy', }}>{I18n.t('DnaReportActivity.detectTime')}</Text>
                                                                <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#000000', fontFamily: 'fantasy', }}>{barcode.detectTime}</Text>
                                                            </View>
                                                            {barcode.stat == "ready" ?
                                                                <View style={{ height: px2dp(50), width: '100%', justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: px2dp(1), borderColor: '#cdcdcd', borderStyle: 'dotted', }}>
                                                                    <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#7f8081', fontFamily: 'fantasy', }}>{I18n.t('DnaReportActivity.status')}</Text>
                                                                    <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#000000', fontFamily: 'fantasy', }}>{barcode.endtime}</Text>
                                                                </View>
                                                                :
                                                                <View style={{ height: px2dp(50), width: '100%', justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: px2dp(1), borderColor: '#cdcdcd', borderStyle: 'dotted', }}>
                                                                    <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#7f8081', fontFamily: 'fantasy', }}>{I18n.t('DnaReportActivity.endtime')}</Text>
                                                                    <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#000000', fontFamily: 'fantasy', }}>{barcode.endtime}</Text>
                                                                </View>
                                                            }
                                                            {/* progress bar start */}

                                                            <View style={{ height: px2dp(100), }}>
                                                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', lineHeight: px2dp(50) }}>
                                                                    <Text style={{
                                                                        lineHeight: px2dp(50),
                                                                        color: '#7f8081',
                                                                        fontSize: px2dp(14),
                                                                        fontFamily: 'fantasy',
                                                                    }}>{I18n.t('DnaReportActivity.percentage')}</Text>
                                                                    <Text style={{ lineHeight: px2dp(50), fontSize: px2dp(14), color: '#000000', fontFamily: 'fantasy', }}>{barcode.processing}%</Text>
                                                                </View>
                                                                <View style={{ width: '100%', height: px2dp(40), alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: '#cdcdcd' }}>
                                                                    <ProgressBarAnimated
                                                                        width={px2dp(290)}
                                                                        height={px2dp(10)}
                                                                        backgroundColor={'#9c9d9e'}
                                                                        underlyingColor={'#c1c2c3'}
                                                                        borderColor={'#9c9d9e'}
                                                                        value={parseInt(barcode.processing)}
                                                                        // percent={parseInt(barcode.processing)}
                                                                        backgroundColorOnComplete="#9c9d9e"
                                                                    />
                                                                </View>
                                                            </View>
                                                            {/* progress bar end */}
                                                            {/* enter your age start */}
                                                            <View style={{ height: px2dp(80), width: '100%', borderBottomWidth: px2dp(1), borderColor: '#cdcdcd', }}>
                                                                <View style={{ flexDirection: 'row', height: px2dp(50), marginTop: px2dp(10), width: '100%', justifyContent: 'center', alignItems: 'center', borderColor: '#d0d1d2', borderWidth: px2dp(2), borderRadius: px2dp(5), }}>
                                                                    <Image style={{ height: px2dp(20), width: px2dp(30), marginLeft: px2dp(5) }} source={require('../image/person.png')} resizeMode='contain' />
                                                                    <TextInput
                                                                        style={{ flex: 1, height: px2dp(50), width: '100%', fontFamily: 'fantasy', color: '#000', fontSize: px2dp(14), paddingVertical: 0, }}
                                                                        onChangeText={(barcode) => this.setState({ barcode })}
                                                                        placeholder={I18n.t('DnaReportActivity.yourage')}
                                                                        keyboardType="numeric"
                                                                        placeholderTextColor='#cdcdcd'
                                                                        defaultValue={"0"}
                                                                        value={this.state.ageBox[i] ? String(this.state.ageBox[i]) : ""}
                                                                        onChangeText={(val) => {
                                                                            let data = val.replace(/[^\d.]/g, '')
                                                                            this.state.ageBox[i] = data
                                                                            this.setState({ ageBox: this.state.ageBox })
                                                                        }}>
                                                                    </TextInput>
                                                                </View>
                                                            </View>
                                                            {/* enter your age end */}

                                                            {/* notify me by email start*/}
                                                            {barcode.stat == "in-transit" ?
                                                                null :
                                                                <View style={{ width: "100%", height: px2dp(100), marginTop: px2dp(20), borderBottomColor: '#cdcdcd', borderBottomWidth: 1 }}>
                                                                    <View style={{ flexDirection: 'row', height: px2dp(50), width: '100%', alignItems: 'center', borderColor: '#d0d1d2', borderWidth: px2dp(2), borderRadius: px2dp(5), }}>
                                                                        <Image style={{ height: px2dp(20), width: px2dp(30), marginLeft: px2dp(5) }} source={require('../image/notify.png')} resizeMode='contain' />
                                                                        <TextInput style={{
                                                                            flex: 1, height: px2dp(50), width: '100%', color: '#000000', fontSize: px2dp(14), fontWeight: 'bold', paddingVertical: 0, fontFamily: 'fantasy',
                                                                        }}
                                                                            errorInputContainerStyle={{ borderColor: '#FF0000', borderWidth: 0, borderRadius: 5, fontFamily: 'fantasy', }}
                                                                            errorMessage={I18n.t("LoginActivity.mailboxformatFail")}
                                                                            placeholder={'Notification email'}
                                                                            placeholderTextColor='#cdcdcd'
                                                                            validator="email"
                                                                            onValidatorExecuted={(isvalid) => {

                                                                            }}
                                                                            validatorExecutionDelay={100}
                                                                            onChangeText={(email) => {
                                                                                this.state.switchonBox[j] = false
                                                                                this.setState({ switchonBox: this.state.switchonBox })
                                                                                this.state.emailBox[j] = email
                                                                                this.setState({ emailBox: this.state.emailBox })
                                                                            }
                                                                            }
                                                                            defaultValue={barcode.email}
                                                                        />

                                                                    </View>
                                                                    <View style={{ width: "100%", flexDirection: 'row', margin: px2dp(10) }}>
                                                                        <ToggleSwitch
                                                                            isOn={this.state.switchonBox[j]}
                                                                            onColor="green"
                                                                            offColor="grey"
                                                                            width="30%"
                                                                            labelStyle={{ color: "black", fontWeight: "900" }}
                                                                            size="small"
                                                                            onToggle={isOn => {
                                                                                let mail = this.state.emailBox[j]
                                                                                let pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/
                                                                                if (!pattern.test(mail)) {
                                                                                    Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.emailFormat"))
                                                                                    return
                                                                                }
                                                                                let uuid = decrypt(this.state.user.publickey, this.state.user.uuid)
                                                                                let allow = isOn ? 1 : 0;
                                                                                let url = data.url + "/user/report/" + uuid + "/" + mail + "/" + barcode.val + "/" + allow + "/notify.jhtml"
                                                                                fetch(url).then(res => res.text()).then((data) => {
                                                                                    if (data == "error") {
                                                                                        Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.invalid"))
                                                                                    } else {
                                                                                        this.state.switchonBox[j] = isOn
                                                                                        this.setState({ switchonBox: this.state.switchonBox })
                                                                                    }
                                                                                })
                                                                            }}
                                                                        />
                                                                        <Text style={{ width: '60%', height: px2dp(30), fontSize: px2dp(12), marginLeft: px2dp(5), marginRight: px2dp(5), fontFamily: 'fantasy', }}>{I18n.t("DnaReportActivity.allow")}</Text>
                                                                    </View>
                                                                </View>
                                                            }

                                                            <View style={{ width: "100%", height: px2dp(50), backgroundColor: "#404cb2", borderRadius: px2dp(5), marginTop: px2dp(30), alignSelf: "center" }} >
                                                                <TouchableOpacity onPress={() => {
                                                                    //赋值
                                                                    this.setState({ rage: this.state.ageBox[j] })
                                                                    let uuid = decrypt(this.state.user.publickey, this.state.user.uuid)
                                                                    fetch(data.url + "/user/report/" + uuid + "/" + barcode.val + "/findEmail.jhtml").then(data => data.json()).then((udata) => {
                                                                        if (barcode.stat == "ready") {
                                                                            this.setState({ animating: true })
                                                                            this.state.ageBox[j] = this.state.ageBox[j] == "" ? 0 : this.state.ageBox[j]
                                                                            this.setState({ ageBox: this.state.ageBox })
                                                                            console.info(data.url + "user/age/upmyage.jhtml?uuid=" + uuid + "&barcode=" + barcode.val + "&myage=" + this.state.ageBox[j])
                                                                            //更改实际年龄
                                                                            fetch(data.url + "user/age/upmyage.jhtml?uuid=" + uuid + "&barcode=" + barcode.val + "&myage=" + this.state.ageBox[j]).then(res => res.text()).then((data) => {
                                                                                let biological = window.parseFloat(barcode.biological).toFixed(2);
                                                                                let naturally = this.state.ageBox[j]
                                                                                let repdata = {}
                                                                                repdata.biological = biological
                                                                                repdata.naturally = this.state.ageBox[i]
                                                                                repdata.barcode = barcode.val
                                                                                repdata.accuracy=barcode.accuracy
                                                                                // repdata.btnBuildPdfdisabled= this.setState({ btnBuildPdfdisabled: false })
                                                                                this.navigate.push("Report", repdata)
                                                                            })
                                                                        } else if (barcode.stat == "processing") {
                                                                            this.setState({ visual: false })
                                                                            Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.processed"));
                                                                        } else if (barcode.stat == "pending") {
                                                                            this.setState({ visual: false })
                                                                            Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.pendingwait"));
                                                                        }
                                                                        this.setState({ barcode: barcode.val })
                                                                    })

                                                                }}>
                                                                    <Text style={{ width: "100%", height: px2dp(50), textAlign: "center", lineHeight: px2dp(50), color: "white", fontSize: px2dp(16), fontFamily: 'fantasy', }}>View Report</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                            {/* notify me by email end */}
                                                        </View>
                                                        <View style={{ width: "100%", height: 5, backgroundColor: "#f5f5f5" }}></View>
                                                    </DropDownItem>
                                                </ScrollView>
                                            </View>
                                            <View style={{ width: "100%", height: px2dp(10) }}></View>
                                        </View>
                                    }) :
                                    null

                                }
                            </View>
                        }

                    </View>
                </ScrollView >
                {this.state.tabshow == true ?
                    <TouchableOpacity onPress={() => this.navigate.push("Mall")} style={{ width: '100%', height: px2dp(60), flex: 1, position: 'absolute', bottom: 0, left: 0, zIndex: 9999, backgroundColor: '#cdcdcd' }}>
                        <Text style={{ height: px2dp(60), fontSize: px2dp(14), lineHeight: px2dp(60), fontWeight: 'bold', color: '#000000', textAlign: 'center', fontFamily: 'fantasy', }}>{I18n.t("DnaReportActivity.buyepi")}</Text>
                    </TouchableOpacity>
                    :
                    null
                }
            </View>
        );
    }
}