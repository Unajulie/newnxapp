import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, TextInput, ScrollView, } from 'react-native';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';
export default class AgeAccelerateActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("AgeAccelerateActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            naturally: "",
            biological: "",
        }
    }
    componentDidMount() {
        this.navigate = this.props.navigation;//此处可以自定义跳转属性
        let biological = window.parseFloat(this.navigate.getParam("biological")).toFixed(2);
        let naturally = window.parseFloat(this.navigate.getParam("naturally")).toFixed(2)
        // let naturally = this.navigate.getParam("naturally") //{ "biological":"x",naturally:10}
        this.setState({ biological })
        this.setState({ naturally })
        console.info("biological---" + this.state.biological+"naturally----"+this.state.naturally)
}
    render() {
        this.navigate = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <StatusBar animated={true} hidden={true}  translucent={true} barStyle={'light-content'}/>
                    <View style={{ width: '90%', alignSelf: 'center', margin: px2dp(20), }}>
                        <Text style={{ fontSize: px2dp(18), fontWeight: 'bold', fontFamily: 'fantasy', height: 67, textAlign: 'center' }}>{I18n.t("AgeAccelerateActivity.accecalcul")}</Text>
                        <Text style={{
                            fontFamily: 'fantasy',
                            fontSize: 14,
                            height: 34,
                        }}>{I18n.t("AgeAccelerateActivity.enterchro")}</Text>
                        <TextInput style={{
                            width: '100%',
                            height: px2dp(45),
                            fontSize: px2dp(20),
                            textAlign: 'center',
                            fontFamily: 'fantasy',
                            borderWidth: 1,
                            borderRadius: 5,
                            paddingVertical: 0,
                            borderColor: this.state.biological == "" ? "#adadad" : "#404bc2",
                        }}
                            keyboardType='numeric'
                            onChangeText={(text1) => {
                                const realage = text1.replace(/[^0-9.]/g, '');
                                //可以打印看看是否过滤掉了非数字
                                //console.log(newText)
                                this.setState({ naturally: realage })
                            }}
                            // value={this.state.naturally}
                            value={this.state.naturally}

                        />

                        <View style={{ height: 23, width: '100%' }}></View>
                        <Text style={{
                            fontSize: 14,
                            fontFamily: 'fantasy',
                            height: 34,

                        }}>{I18n.t("AgeAccelerateActivity.enterepi")}</Text>
                        <TextInput style={{
                            width: "100%",
                            height: px2dp(45),
                            fontSize: px2dp(20),
                            fontFamily: 'fantasy',
                            textAlign: 'center',
                            borderWidth: 1,
                            borderRadius: 5,
                            paddingVertical: 0,
                            borderColor: this.state.biological == "" ? "#adadad" : "#404bc2",
                        }}
                            // placeholder="Epigenetic age"
                            keyboardType='numeric'
                            onChangeText={(text2) => {
                                const epiage = text2.replace(/[^0-9.]/g, '');
                                //可以打印看看是否过滤掉了非数字
                                //console.log(newText)
                                this.setState({ biological: epiage })
                            }}
                            // value={this.state.biological}
                            value={this.state.biological}
                        />

                        <Text style={{ fontSize: 20,marginTop:px2dp(50), fontWeight: '600', fontFamily: 'fantasy', height: 45, textAlign: 'center' }}>{I18n.t("AgeAccelerateActivity.youraccis")}</Text>
                        {this.state.biological == "" || this.state.naturally == "" ?
                            null
                            :
                            <View style={{ height: 56, fontSize: 'bold', width: '100%', alignItems: 'center', alignSelf: 'center', backgroundColor: '#404bc2', borderRadius: 5 }}>
                                <Text style={{ fontSize: 45, fontWeight: '600', fontFamily: 'fantasy', lineHeight: 56, color: '#ffffff', textAlignVertical: 'center' }}> {(this.state.biological - (0.902 * this.state.naturally + 4.564)).toFixed(2)}</Text>
                            </View>
                        }

                    </View>
                </ScrollView >
            </View>
        );
    }
}

