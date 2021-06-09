import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Modal, Button, ScrollView, TouchableOpacity } from 'react-native';
import Slider from "rn-vertical-slider-gradient";
import { ECharts } from "react-native-echarts-wrapper";
import { WebView } from 'react-native-webview'
import Session from '../storage/Session';
import data from '../appdata'
import moment from 'moment'
import { encrypt, decrypt } from 'react-native-simple-encryption';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';

export default class DietSliderChart extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            option: {
                tooltip: {
                    trigger: 'axis'
                },
                dataZoom: [
                    {
                        id: 'dataZoomX',
                        type: 'slider',
                        xAxisIndex: [0],
                        filterMode: 'filter'
                    },
                ],
                xAxis: {
                    name: 'date',
                    nameLocation: 'middle',
                    nameGap: 20,
                    type: "category",
                    nameTextStyle: { fontSize: 10, color: "#0071BC" },
                    data: null
                },
                yAxis: {
                    nameTextStyle: { color: "red" },
                    name: null,
                    nameLocation: 'end',
                    type: "value"
                },
                series: [
                    {
                        data: null,
                        type: "line",
                        markLine: {
                            silent: true,
                            data: [
                                // { yAxis: 2000 },
                                // { yAxis: 2500 }
                            ]
                        }
                    }
                ]
            }
        }


    }
    load = () => {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user })
            let plaintxt = decrypt(user.publickey, user.uuid)
            fetch(data.url + "user/diet/data.jhtml?uuid=" + plaintxt).then(res => res.json()).then((data) => {
                let xValue = []
                let yValue = []
                for (var i in data) {
                    xValue.push(moment(data[i].updateTime).format('YYYY-MM-DD'));
                    yValue.push(data[i][this.props.yAxisLabelValue])
                }
                let option = Object.assign({}, this.state.option);
                option.xAxis.data = xValue;
                option.yAxis.name = this.props.yAxisLabelName;
                option.series[0].data = yValue
                //如果this.props.yAxisLine有定义
                if (this.props.yAxisLine) {
                    let lines = this.props.yAxisLine.split("@")
                    for (let i = 0; i < lines.length; i++) {
                        option.series[0].markLine.data[i] = {};
                        option.series[0].markLine.data[i].yAxis = window.parseFloat(lines[i]);
                    }
                }
                this.setState({ option });
                this.echarts.webview.reload();
            })

        });

    }
    componentDidMount() {
        this.load();
    }

    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性

        return (
            <View style={{ width: "100%" }}>
                {this.state.display == true ?
                    <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                        <WebView startInLoadingState={true} ref={(ref) => { this.brower = ref }} source={{ uri: this.props.refUrl }} />
                        <View style={{ width: "100%", height: 35, backgroundColor: "#0071BC" }}>
                            <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                                <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="close" onPress={() => { { this.setState({ display: false }) } }} />
                            </TouchableOpacity>
                        </View>
                    </Modal> : null
                }
                <View style={{ width: "100%", alignItems: "center" }}>
                    {this.props.title ? <View style={{ width: "90%", height: 25 }}><Text style={{ fontSize: 18, fontWeight: "bold" }}>{this.props.title}</Text></View> : null}
                    {this.props.refTitle ? <View style={{ width: "90%", height: 25 }}><TouchableOpacity onPress={() => { this.setState({ display: true }) }}><Text style={{ fontSize: 14, color: "#0071BC", textDecorationLine: "underline" }}>{this.props.refTitle}</Text></TouchableOpacity></View> : null}
                    {this.props.desc ? this.props.desc : null}
                </View>
                <View style={{ width: "100%",alignSelf:'center' }}>
                    <View style={{ height: px2dp(250), width: "100%",alignSelf:'center' }}>
                        <ECharts ref={(ref) => { this.echarts = ref }} option={this.state.option} />
                    </View>
                    <Text style={{ fontSize: px2dp(16), height: px2dp(60), marginTop: px2dp(30), width: '90%',marginLeft:'5%', fontFamily: 'fantasy', fontWeight: 'bold', color: '#000' }}>{I18n.t('DietChartActivity.recordcalby')}</Text>
                    <View style={{ width: "100%", borderRadius: px2dp(30), alignItems: 'center', lignSelf: 'center', marginBottom: px2dp(30), backgroundColor: '#f6f7f8' }}>
                        <View style={{ flexDirection: 'row',height:px2dp(60),marginBottom:px2dp(20),marginRight:'10%', }}>
                            <View style={{ width: px2dp(30), height: px2dp(30), borderRadius: px2dp(50), marginLeft: '20%', marginTop: px2dp(20), backgroundColor: '#000', }}>
                                <Text style={{ fontSize: px2dp(20),height:px2dp(30), lineHeight:px2dp(30), fontWeight: 'bold', fontFamily: 'fantasy', color: '#fff', textAlign: 'center' }}>1</Text>
                            </View>
                            <Text style={{ fontSize: px2dp(16),height:px2dp(60),marginTop:px2dp(20), marginLeft: px2dp(14), fontFamily: 'fantasy', color: '#000' }}>{I18n.t('DietChartActivity.sliderecord')}</Text>
                        </View>
                        <Slider
                            style={{ marginBottom: px2dp(30) }}
                            width={px2dp(100)}
                            height={px2dp(200)}
                            value={this.props.sliderDefualtValue}
                            disabled={false}
                            min={0}
                            max={this.props.max}
                            onChange={(value) => {
                                // console.log("CHANGE", value);
                            }}
                            onComplete={(value) => {
                                let plaintxt = decrypt(this.state.user.publickey, this.state.user.uuid)
                                let url = data.url + "user/diet/update.jhtml.jhtml?uuid=" + plaintxt + "&foodname=" + value + "&calories=" + value + "&updateTime=" + new Date().getTime()
                                fetch(url).then(res => res.text()).then((data) => {
                                    this.load();
                                })
                            }}
                            step={1}
                            borderRadius={5}
                            ballIndicatorWidth={px2dp(40)}
                            minimumTrackTintColor={[
                                "rgb(146, 208, 80)",
                                "rgb(146, 208, 80)",
                                "rgb(255, 192, 0)",
                                "rgb(255, 192, 0)",
                                "rgb(255,0,0)"
                            ]}
                            maximumTrackTintColor="#ecf0f1"
                            showBallIndicator
                            ballIndicatorPosition={-40}
                            ballIndicatorColor={"#404bc2"}
                            ballIndicatorTextColor={"white"}
                        />
                        <View style={{ height: px2dp(50), width: '100%' }}>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
