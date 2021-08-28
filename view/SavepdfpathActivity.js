import React, { Component } from 'react';
import { StatusBar, Text, View, Image, Alert, Clipboard, TouchableOpacity, Button } from 'react-native';
import Session from '../storage/Session'
import { I18n } from '../locales/i18n';
import data from '../appdata'
import { px2dp } from '../src/px2dp';

export default class SavepdfpathActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: "PDF"
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            pathbox: [],
        }
    }
    componentDidMount() {
        Session.load("pdfsavepath").then((savepathbox) => {
            for (let i in savepathbox) {
                let barcode = savepathbox[i].split(":")[0]
                let uuid = savepathbox[i].split(":")[1]
                let locale = savepathbox[i].split(":")[2]
                let view =
                    <View key={i} style={{ borderBottomColor: "#e0e0e0", borderBottomWidth: 1, height: px2dp(80),}}>
                        <View style={{ width: "100%", flexDirection: "row", height: "100%", height: px2dp(40),margin:px2dp(10) }}>
                            <View style={{ width: "70%", flexDirection: "row", height: "100%", height: px2dp(50) }} key={i} >
                                <View style={{ width: "100%", flexDirection: "row", height: "100%", height: px2dp(50) }}>
                                    <View style={{ width: "20%", height: px2dp(40),marginBottom:px2dp(10) }}>
                                        <Image style={{ width: px2dp(40), height: px2dp(40) }} resizeMode="contain" source={require("../image/pdf.png")} />
                                    </View>
                                    <View style={{ width: "80%", height: px2dp(40) }}>
                                        <Text style={{ height: "100%", lineHeight: px2dp(40) }}>{barcode}:{I18n.locale}.pdf</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: "25%", height: px2dp(50), marginBottom: px2dp(10),fontSize:px2dp(14), marginRight:px2dp(10) }}>
                                <Button
                                    title={I18n.t("SavepdfpathActivity.btncp")}
                                    color="#404cb2"
                                    fontFamily='fantasy'
                                    style={{fontSize:px2dp(10)}}
                                    onPress={() => {
                                        let url = data.url + "user/report/" + barcode + "/" + I18n.locale + "/pdf.jhtml"
                                        Clipboard.setString(url);
                                        Alert.alert(I18n.t("SavepdfpathActivity.titlemsg"), I18n.t("SavepdfpathActivity.copy"))
                                    }} />
                            </View>
                        </View>
                    </View>

                this.state.pathbox.push(view)
            }
            this.setState({ pathbox: this.state.pathbox })



        })

    }


    render() {
        return (
            <View style={{ flex: 1, width: "100%" }}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <View style={{ width: "100%" }}>
                    {this.state.pathbox.length == 0 ? null : this.state.pathbox.map((value) => { return value })}
                </View>

            </View>
        );
    }
}
