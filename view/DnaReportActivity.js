import React, { Component } from 'react';
import { StyleSheet, StatusBar, Dimensions, Text, View, Animated, ScrollView, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';
import SwitchSelector from "react-native-switch-selector";
import { decrypt } from 'react-native-simple-encryption'
import ToggleSwitch from 'toggle-switch-react-native'
import Session from '../storage/Session'
import data from '../appdata'
import Input from "react-native-input-validation"
import ProgressCircle from 'react-native-progress-circle'
import DropDownItem from "react-native-drop-down-item";
import ProgressBarAnimated from 'react-native-progress-bar-animated';

export default class DnaReportActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("DnaReportActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            progress: 20,
            progressWithOnComplete: 0,
            progressCustomized: 0,
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
            contents: [
                {
                    title: "Title 1",
                    body: "Hi. I love this component. What do you think?"
                },
                {
                    title: "See this one too",
                    body: "Yes. You can have more items."
                },
                {
                    title: "Thrid thing",
                    body:
                        "What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?"
                }
            ],
            option: {
                legend: {
                    data: ['Chronological Age<Epigenetic Age', 'Chronological Age>Epigenetic Age']
                },
                xAxis: [{
                    name: 'Chronological Age',
                    type: 'value',
                    nameLocation: 'middle',
                    nameGap: 20,
                    scale: true,
                    nameTextStyle: { color: "#0071BC" },
                    axisLabel: {
                        formatter: '{value}'
                    }
                }],
                yAxis: [{
                    name: 'Epigenetic Age',
                    nameLocation: 'middle',
                    nameGap: 22,
                    nameRotate: 90,
                    type: 'value',
                    scale: true,
                    nameTextStyle: { color: "#0071BC" },
                    axisLabel: {
                        formatter: '{value}'
                    }
                }],
                series: [
                    {
                        name: 'Chronological Age<Epigenetic Age',
                        type: 'scatter',
                        //圆点的颜色为红色
                        itemStyle: {
                            normal: {
                                color: 'red'
                            }
                        },
                        //自然年龄<生物学年龄
                        data: null,
                        markPoint: {
                            data: [
                                {
                                    name: 'Epigenetic Age',
                                    value: null,
                                    xAxis: null,
                                    yAxis: null
                                }
                            ]
                        },
                    },
                    {
                        name: 'Chronological Age>Epigenetic Age',
                        type: 'scatter',
                        //圆点的颜色为绿色
                        itemStyle: {
                            normal: {
                                color: 'green'
                            }
                        },
                        //自然年龄>生物学年龄
                        data: null,
                        markPoint: {
                            data: [
                                {
                                    name: 'Epigenetic Age',
                                    value: null,
                                    xAxis: null,
                                    yAxis: null
                                }
                            ]
                        },


                    }]
            }
        }
    }

    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });

            fetch(data.url + "/user/report/findNtrLtBio.jhtml").then(res => res.json()).then((data) => {
                let v = []
                for (var i in data) {
                    let naturally = window.parseFloat(data[i].naturally).toFixed(2)
                    let biological = window.parseFloat(data[i].biological).toFixed(2)
                    v.push([naturally, biological])
                }
                let option = Object.assign({}, this.state.option);
                option.series[0].data = v;
                this.setState({ option });
                this.echarts.webview.reload();

            })
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
                    console.info(data[i].barcode + " allday:" + _31day / (24 * 3600 * 1000) + " move day:" + ((data[i].curtime - data[i].detectTime) / (24 * 3600 * 1000)))
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
    increase = (key, value) => {
        this.setState({
            [key]: this.state[key] + value,
        });
    }
    //查看报告
    viewReport() {
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
                    this.setState({ btnBuildPdfdisabled: false })
                    let option = Object.assign({}, this.state.option);
                    let biological = window.parseFloat(barcode.biological).toFixed(2);
                    //let naturally = window.parseFloat(barcode.naturally).toFixed(2)
                    let naturally = this.state.ageBox[j]
                    this.setState({ biological })
                    this.setState({ naturally })
                    let i = biological > naturally ? 0 : 1;
                    option.series[i].markPoint.data[0].value = biological
                    //自然年龄
                    this.state.ageBox[j] = this.state.ageBox[j] == "" ? 0 : this.state.ageBox[j]
                    this.setState({ ageBox: this.state.ageBox })
                    //自然年龄
                    option.series[i].markPoint.data[0].xAxis = this.state.ageBox[j]
                    option.series[i].markPoint.data[0].yAxis = biological
                    this.setState({ option })
                    this.setState({ visual: true })
                    {/* 因为Echarts的内核是封装webview,当动态设置option时,有时候没反应,需要动态刷新一下,所以要获得ECharts的引用 */ }
                    {/* 通过获取ECharts的引用,从而获取webview,获得webview之后可以执行 this.echarts.webview.reload(); */ }
                    {/* 从而重新刷新webview数据 */ }
                    this.echarts.webview.reload()
                    this.setState({ animating: false })
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

    }
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
                            }}
                            textStyle={{ fontWeight: 'bold' }}
                            selectedTextStyle={{ fontWeight: 'bold' }}
                            textColor={'#404cb2'}
                            selectedColor={'#ffffff'}
                            buttonColor={'#404cb2'}
                            borderColor={'#404cb2'}
                            borderWidth={px2dp(1)}
                            borderRadius={px2dp(5)}
                            hasPadding={true}
                            options={[
                                { label: "New Kit", value: "newkit", }, //images.feminino = require('./path_to/assets/img/feminino.png')
                                { label: "Register Kit", value: "registerkit", } //images.masculino = require('./path_to/assets/img/masculino.png')
                            ]}
                            testID="gender-switch-selector"
                            accessibilityLabel="gender-switch-selector"
                        />
                        {this.state.tabshow == true ?
                            <View style={{ flex: 1, width: '100%', alignSelf: 'center', marginTop: px2dp(30) }}>
                                <View style={{ width: '100%', height: px2dp(250), backgroundColor: '#ebeced', borderRadius: px2dp(30) }}>
                                    <View style={{ marginLeft: px2dp(30), marginTop: px2dp(20) }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: px2dp(16), }}>fljseifsie</Text>
                                    </View>
                                    <Text style={{ margin: px2dp(20), fontWeight: '200', fontSize: px2dp(14) }}>jjsoei fosieowejf oweijfiwoe owieowi oweijfoiejfiewj ifoiewjfie jiewjf iej ijfieow je e </Text>
                                    <Image style={{ height: px2dp(140), width: '100%', borderRadius: px2dp(30) }} source={require('../image/enpic/index9.jpg')} resizeMode='cover' />
                                </View>
                                <View style={{ width: "100%", alignSelf: "center", height: px2dp(300), marginTop: px2dp(45) }}>
                                    <View style={{ flexDirection: 'row', height: px2dp(50), width: '100%', justifyContent: 'center', alignItems: 'center', borderColor: '#404cb2', borderWidth: 1, borderRadius: px2dp(5), }}>
                                        <Image style={{ height: px2dp(30), width: px2dp(50), marginLeft: px2dp(5) }} source={require('../image/barcode.png')} resizeMode='contain' />
                                        <TextInput
                                            style={{ flex: 1, height: px2dp(50), color: '#000000', fontWeight: 'bold', paddingVertical: 0, }}
                                            onChangeText={(barcode) => this.setState({ barcode })}
                                            placeholder={I18n.t("DnaReportActivity.yourbarcode")}
                                            placeholderTextColor='#cdcdcd'

                                            value={this.state.barcode}
                                        >
                                        </TextInput>
                                    </View>
                                    <Text style={{ width: "100%", height: px2dp(40), lineHeight: px2dp(40), color: "#000000", textAlign: "center", textAlignVertical: "center", fontSize: px2dp(16), fontWeight: 'bold' }}>OR</Text>
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
                                            <Text style={{ color: '#404cb2', lineHeight: px2dp(50), fontWeight: 'bold', fontSize: px2dp(14) }}>Scan Kit Barcode</Text>
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
                                                        break
                                                    case "pending":
                                                        this.setState({ statusbar: false })
                                                        Alert.alert(I18n.t("DnaReportActivity.barcodesuccess"), I18n.t("DnaReportActivity.pendingwait"))
                                                        break;
                                                    case "processing":
                                                        this.setState({ visual: false })
                                                        Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.processed"));
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
                                                        break;
                                                }
                                                this.setState({ display: false })
                                            })

                                        }}>
                                            <Text style={{ width: "100%", height: px2dp(50), textAlign: "center", lineHeight: px2dp(50), color: "white", fontSize: px2dp(16), }}>{I18n.t('DnaReportActivity.Registerkit')}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            // First page end
                            :
                            // Second page start
                            <View style={{ width: '100%', marginTop: px2dp(30) }}>

                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#ffffff',
                                    borderRadius: px2dp(15)
                                }}>
                                    <ScrollView style={{ width: '100%' }}>
                                        {
                                            this.state.contents
                                                ? this.state.contents.map((param, i) => {
                                                    return (
                                                        <DropDownItem
                                                            key={i}
                                                            contentVisible={false}
                                                            invisibleImage={require('../image/drop-down.png')}
                                                            visibleImage={require('../image/drop-up.png')}
                                                            style={{padding:px2dp(10)}}
                                                            header={
                                                                <View style={{width:'100%',backgroundColor:'pink'}}>
                                                                    <View style={{
                                                                        width: px2dp(9),
                                                                        height: px2dp(9),
                                                                        backgroundColor: '#404cb2',
                                                                        borderColor: '#404cb2',
                                                                        borderStyle: 'solid',
                                                                        borderRadius: px2dp(15),
                                                                        marginTop: px2dp(10)
                                                                    }}></View>
                                                                    <View style={{
                                                                        width: '100%',
                                                                        height: px2dp(30),
                                                                        margin: px2dp(10),
                                                                        flexDirection: 'row',
                                                                        alignItems: 'center',
                                                                    }}>
                                                                        <Text style={{
                                                                            fontSize: px2dp(16),
                                                                            color: '#7f8081',
                                                                            fontWeight: 'bold'
                                                                        }}>{I18n.t('DnaReportActivity.barcode')} | <Text style={{ color: '#000000' }}>o998t6788</Text></Text>

                                                                    </View>
                                                                </View>
                                                            }>
                                                            {this.state.itemBox ?
                                                                this.state.itemBox.map((barcode, i) => {
                                                                    let j = i
                                                                    return <TouchableOpacity key={barcode.val}
                                                                        onPress={() => {
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
                                                                                        this.setState({ btnBuildPdfdisabled: false })
                                                                                        let option = Object.assign({}, this.state.option);
                                                                                        let biological = window.parseFloat(barcode.biological).toFixed(2);
                                                                                        //let naturally = window.parseFloat(barcode.naturally).toFixed(2)
                                                                                        let naturally = this.state.ageBox[j]
                                                                                        this.setState({ biological })
                                                                                        this.setState({ naturally })
                                                                                        let i = biological > naturally ? 0 : 1;
                                                                                        option.series[i].markPoint.data[0].value = biological
                                                                                        //自然年龄
                                                                                        this.state.ageBox[j] = this.state.ageBox[j] == "" ? 0 : this.state.ageBox[j]
                                                                                        this.setState({ ageBox: this.state.ageBox })
                                                                                        //自然年龄
                                                                                        option.series[i].markPoint.data[0].xAxis = this.state.ageBox[j]
                                                                                        option.series[i].markPoint.data[0].yAxis = biological
                                                                                        this.setState({ option })
                                                                                        this.setState({ visual: true })
                                                                                        {/* 因为Echarts的内核是封装webview,当动态设置option时,有时候没反应,需要动态刷新一下,所以要获得ECharts的引用 */ }
                                                                                        {/* 通过获取ECharts的引用,从而获取webview,获得webview之后可以执行 this.echarts.webview.reload(); */ }
                                                                                        {/* 从而重新刷新webview数据 */ }
                                                                                        this.echarts.webview.reload()
                                                                                        this.setState({ animating: false })
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
                                                                        <View key={barcode.val} style={{ width: "90%", height: px2dp(400),alignSelf:'center', borderBottomWidth: 1, borderBottomColor: "#999999", borderTopWidth: px2dp(1), borderTopColor: 'grey', }}>
                                                                            <View style={{ height: px2dp(50), width: '100%', justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: px2dp(1), borderColor: '#cdcdcd', borderStyle: 'dotted', }}>
                                                                                <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#7f8081' }}>{I18n.t('DnaReportActivity.regtime')}</Text>
                                                                                <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#000000' }}>{barcode.createTime}</Text>
                                                                            </View>
                                                                            <View style={{ height: px2dp(50), width: '100%', justifyContent: 'flex-start', flexDirection: 'row', borderBottomWidth: px2dp(1), borderColor: '#cdcdcd', borderStyle: 'dotted', }}>
                                                                                <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#7f8081' }}>{I18n.t('DnaReportActivity.detectTime')}</Text>
                                                                                <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#000000' }}>{barcode.detectTime}</Text>
                                                                            </View>
                                                                            <View style={{ height: px2dp(50), width: '100%', justifyContent: 'flex-start', flexDirection: 'row', borderBottomWidth: px2dp(1), borderColor: '#cdcdcd', borderStyle: 'dotted', }}>
                                                                                <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#000000' }}>{barcode.detectTime}</Text>
                                                                                <View style={{ width: "100%", height: 29 }}>
                                                                                    {barcode.stat == "ready" ?

                                                                                        <View style={{ height: px2dp(50), width: '100%', justifyContent: 'flex-start', flexDirection: 'row', borderBottomWidth: px2dp(1), borderColor: '#cdcdcd', borderStyle: 'dotted', }}>
                                                                                            <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#7f8081' }}>{I18n.t('DnaReportActivity.status')}</Text>
                                                                                            <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#000000' }}>{barcode.endtime}</Text>
                                                                                        </View>
                                                                                        :
                                                                                        <View style={{ height: px2dp(50), width: '100%', justifyContent: 'flex-start', flexDirection: 'row', borderBottomWidth: px2dp(1), borderColor: '#cdcdcd', borderStyle: 'dotted', }}>
                                                                                            <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#7f8081' }}>{I18n.t('DnaReportActivity.endtime')}</Text>
                                                                                            <Text style={{ height: px2dp(50), lineHeight: px2dp(50), fontSize: px2dp(14), color: '#000000' }}>{barcode.endtime}</Text>
                                                                                        </View>
                                                                                    }
                                                                                </View>
                                                                            </View>
                                                                            {/* progress bar start */}
                                                                            <View style={{ height: px2dp(100), }}>
                                                                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', lineHeight: px2dp(50) }}>
                                                                                    <Text style={{
                                                                                        lineHeight: px2dp(50),
                                                                                        color: '#7f8081',
                                                                                        fontSize: px2dp(14),
                                                                                    }}>Test Status </Text>
                                                                                    <Text style={{ lineHeight: px2dp(50), fontSize: px2dp(14), color: '#000000' }}>100% </Text>
                                                                                </View>
                                                                                <View style={{ width: '100%', height: px2dp(40), alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: '#cdcdcd' }}>
                                                                                    <ProgressBarAnimated
                                                                                        width={px2dp(290)}
                                                                                        height={px2dp(10)}
                                                                                        backgroundColor={'#9c9d9e'}
                                                                                        underlyingColor={'#c1c2c3'}
                                                                                        borderColor={'#9c9d9e'}
                                                                                        value={this.state.progress}
                                                                                        backgroundColorOnComplete="#9c9d9e"
                                                                                    />
                                                                                </View>

                                                                            </View>
                                                                                    {/* progress bar end */}



                                                                            <View style={{ width: "100%", height: 150, flexDirection: "row", }}>
                                                                                <View style={{ width: "70%", height: 150 }}>
                                                                                    <View style={{ width: "100%", height: 29 }}>
                                                                                        <Text >{I18n.t('DnaReportActivity.regtime')}：{barcode.createTime}</Text>
                                                                                    </View>
                                                                                    <View style={{ width: "100%", height: 29 }}>
                                                                                        <Text>{I18n.t('DnaReportActivity.detectTime')}：{barcode.detectTime}</Text>
                                                                                    </View>
                                                                                    <View style={{ width: "100%", height: 29 }}>
                                                                                        {barcode.stat == "ready" ?
                                                                                            <Text >{I18n.t('DnaReportActivity.status')}：{barcode.endtime}</Text>
                                                                                            :
                                                                                            <Text>{I18n.t('DnaReportActivity.endtime')}：{barcode.endtime}</Text>
                                                                                        }
                                                                                    </View>
                                                                                    {barcode.stat == "in-transit" ?
                                                                                        null :
                                                                                        <View>
                                                                                            {barcode.stat == "ready" ?
                                                                                                null :
                                                                                                <View style={{ width: '100%', height: 29 }}>
                                                                                                    <Text>{I18n.t('DnaReportActivity.remaining_days')}: {barcode.remain}</Text>
                                                                                                </View>
                                                                                            }

                                                                                            <View style={{ width: "100%", flexDirection: "row" }}>

                                                                                                <Text style={{ height: 29, lineHeight: 29 }}>{I18n.t('DnaReportActivity.yourage')}：</Text>
                                                                                                <TextInput style={{
                                                                                                    height: 29,
                                                                                                    width: '30%',
                                                                                                    borderWidth: 1.5,
                                                                                                    borderColor: '#c5f3fe',
                                                                                                    backgroundColor: "#f8f8f8",
                                                                                                    fontSize: 14,
                                                                                                    borderRadius: 5,
                                                                                                    paddingVertical: 0,
                                                                                                    textAlign: "center"
                                                                                                }}
                                                                                                    keyboardType="numeric"
                                                                                                    defaultValue={"0"}
                                                                                                    value={this.state.ageBox[i] ? String(this.state.ageBox[i]) : ""}
                                                                                                    onChangeText={(val) => {
                                                                                                        let data = val.replace(/[^\d.]/g, '')
                                                                                                        this.state.ageBox[i] = data
                                                                                                        this.setState({ ageBox: this.state.ageBox })
                                                                                                    }}
                                                                                                />
                                                                                            </View>
                                                                                        </View>}

                                                                                </View>
                                                                                <View style={{ width: "30%", height: "100%", alignItems: "center", justifyContent: "center", marginLeft: 6 }}>
                                                                                    <ProgressCircle
                                                                                        percent={parseInt(barcode.processing)}
                                                                                        marginTop={1}
                                                                                        radius={50}
                                                                                        borderWidth={16}
                                                                                        color="#3399FF"
                                                                                        shadowColor="#999"
                                                                                        bgColor="#fff">
                                                                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{barcode.processing}%</Text>
                                                                                    </ProgressCircle>
                                                                                    <Text style={{ fontSize: 12, backgroundColor: "#3399FF", color: '#fff', height: 23, lineHeight: 23, width: "89%", textAlign: 'center', borderRadius: 20, marginBottom: 16, marginTop: 10 }}>View Report</Text>
                                                                                </View>
                                                                            </View>
                                                                            {barcode.stat == "in-transit" ?
                                                                                null :
                                                                                <View style={{ width: "100%", height: 29, flexDirection: "row" }}>
                                                                                    <View style={{ width: "75%" }}>
                                                                                        <Input style={{
                                                                                            height: 29,
                                                                                            width: '100%',
                                                                                            borderWidth: 1.5,
                                                                                            borderColor: '#c5f3fe',
                                                                                            backgroundColor: "#f8f8f8",
                                                                                            fontSize: 14,
                                                                                            borderRadius: 5,
                                                                                            borderWidth: 1,
                                                                                            paddingVertical: 0
                                                                                        }}
                                                                                            errorInputContainerStyle={{ borderColor: '#FF0000', borderWidth: 0, borderRadius: 5 }}
                                                                                            errorMessage={I18n.t("LoginActivity.mailboxformatFail")}
                                                                                            placeholder={I18n.t("RegisterActivity.email")} placeholderTextColor='#0071bc' validator="email"
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
                                                                                    <View style={{ width: "5%", height: 29 }}></View>
                                                                                    <View style={{ width: "20%" }}>
                                                                                        <View style={{ width: "100%", height: 8 }}></View>
                                                                                        <ToggleSwitch
                                                                                            isOn={this.state.switchonBox[j]}
                                                                                            onColor="green"
                                                                                            offColor="grey"
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
                                                                                        <Text style={{ fontSize: 10 }}>{I18n.t("DnaReportActivity.allow")}</Text>
                                                                                    </View>
                                                                                </View>
                                                                            }
                                                                        </View>
                                                                        <View style={{ width: "100%", height: 5, backgroundColor: "#f5f5f5" }}></View>
                                                                    </TouchableOpacity>
                                                                }) :
                                                                null

                                                            }

                                                        </DropDownItem>

                                                    );
                                                })
                                                : null
                                        }
                                    </ScrollView>
                                </View>

                                <View style={{ width: "100%", height: 5, backgroundColor: "#f5f5f5" }}></View>
                                <View style={{ width: "90%", alignItems: "center" }}>
                                    {this.state.statusbar ?
                                        <View style={{ width: "100%", height: 35, borderBottomWidth: 1, borderBottomColor: "#f5f5f5", flexDirection: "row" }}>
                                            <View style={{ width: "70%", height: 35 }}><Text style={{ color: "#808080", textAlign: 'left', fontFamily: 'NotoSansHans-Medium', fontSize: 14, fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>{I18n.t('DnaReportActivity.baseinfo')}</Text></View>
                                            <View style={{ width: "30%", height: 35 }}><Text style={{ color: "#808080", textAlign: "left", fontFamily: 'NotoSansHans-Medium', fontSize: 14, fontWeight: "bold", marginBottom: 5, marginTop: 10 }}>{I18n.t('DnaReportActivity.status')}</Text></View>
                                        </View>

                                        : null}

                                </View>
                            </View>
                        }

                    </View>
                </ScrollView >
                <TouchableOpacity onPress={() => this.navigate.push("Mall")} style={{ width: '100%', height: px2dp(60), flex: 1, position: 'absolute', bottom: 0, left: 0, zIndex: 9999, backgroundColor: '#cdcdcd' }}>
                    <Text style={{ height: px2dp(60), fontSize: px2dp(14), lineHeight: px2dp(60), fontWeight: 'bold', color: '#000000', textAlign: 'center', }}>No product yet? Buy Epiage Kit →</Text>
                </TouchableOpacity>
            </View>
        );
    }
}