import React, { Component } from 'react';
import { Platform,StatusBar, Text, View, Image, ScrollView, TouchableOpacity, navigate } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n';
type Props = {};
export default class ScienceteamActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ScienceteamActivity.title"),
        })
    }
    constructor(props) {
        super(props);
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
                <View style={{height:20,width:'100%'}}></View>
                <View>
                    <Text style={{  width: '100%', fontSize: 20, lineHeight: 40, fontFamily: 'FontAwesome',marginLeft:15,color:'black',height:40 }}>Seience Team
                    </Text>
                </View>
                <View style={{height:20,width:'100%'}}></View>
                <TouchableOpacity onPress={() => this.navigate.push("Moshe")} >
                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row',borderRadius:15,borderWidth:1 }}>
                        <Image style={{ height: 123, width: '30%' }} resizeMode="contain" source={require("../image/icons/prof1.png")}></Image>
                        <View style={{ width: '60%', height: 123, fontFamily: 'fantasy', paddingLeft: 17, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 16, lineHeight: 44, color: '#0071bc' }}>{I18n.t('ScienceteamActivity.moshe')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 14, lineHeight: 16 }}>{I18n.t('ScienceteamActivity.ceo')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 12, lineHeight: 18, fontStyle: 'italic' }}>{I18n.t('ScienceteamActivity.hkg')}</Text>
                        </View>
                        <Text style={{ width: '10%', height: 123, fontFamily: 'fantasy', fontSize: 18, lineHeight: 123,fontWeight:"700" }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10}}></View>
                <TouchableOpacity onPress={() => this.navigate.push("David")}>
                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row',borderRadius:15,borderWidth:1 }}>
                        <Image style={{ height: 123, width: '30%' }} resizeMode="contain" source={require("../image/icons/david1.png")}></Image>
                        <View style={{ width: '60%', height: 123, fontFamily: 'fantasy', paddingLeft: 17, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 16, lineHeight: 44, color: '#0071bc' }}>{I18n.t('ScienceteamActivity.david')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 14, lineHeight: 16 }}>{I18n.t('ScienceteamActivity.davidtitle')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 12, lineHeight: 18, fontStyle: 'italic' }}>{I18n.t('ScienceteamActivity.hkg')}</Text>
                        </View>
                        <Text style={{ width: '10%', height: 123, fontFamily: 'fantasy', fontSize: 18, lineHeight: 123,fontWeight:"700" }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                {/* <View style={{ height: 10, marginTop: 10 }}></View>
                <TouchableOpacity onPress={() => this.navigate.push("Huili")}>
                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row',borderRadius:15,borderWidth:1 }}>
                        <Image style={{ height: 123, width: '30%' }} resizeMode="contain" source={require("../image/icons/huili1.png")}></Image>
                        <View style={{ width: '60%', height: 123, fontFamily: 'fantasy', paddingLeft: 17, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 16, lineHeight: 44, color: '#0071bc' }}>{I18n.t('ScienceteamActivity.huili')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 14, lineHeight: 16 }}>{I18n.t('ScienceteamActivity.huilititle')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 12, lineHeight: 18, fontStyle: 'italic' }}>{I18n.t('ScienceteamActivity.hkg')}</Text>
                        </View>
                        <Text style={{ width: '10%', height: 123, fontFamily: 'fantasy', fontSize: 18, lineHeight: 123,fontWeight:"700" }}>&gt;</Text>
                    </View>
                </TouchableOpacity> */}
                <View style={{ height: 10, marginTop: 10}}></View>
                <TouchableOpacity onPress={() => this.navigate.push("Chifat")}>
                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row',borderRadius:15,borderWidth:1 }}>
                        <Image style={{ height: 123, width: '30%', borderRadius: 10 }} resizeMode="contain" source={require("../image/icons/chifat1.png")}></Image>
                        <View style={{ width: '60%', height: 123, fontFamily: 'fantasy', paddingLeft: 17, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 16, lineHeight: 44, color: '#0071bc' }}>{I18n.t('ScienceteamActivity.chifat')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 14, lineHeight: 14 }}>{I18n.t('ScienceteamActivity.chifattitle')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 12, lineHeight: 18, fontStyle: 'italic' }}>{I18n.t('ScienceteamActivity.hkg')}</Text>
                        </View>
                        <Text style={{ width: '100%', height: 123, fontFamily: 'fantasy', fontSize: 18, lineHeight: 123,fontWeight:"700" }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10 }}></View>
                <TouchableOpacity onPress={() => this.navigate.push("Zhiyuan")}>
                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row',borderRadius:15,borderWidth:1 }}>
                        <Image style={{ height: 123, width: '30%', borderRadius: 10 }} resizeMode="contain" source={require("../image/icons/jason1.png")}></Image>
                        <View style={{ width: '60%', height: 123, fontFamily: 'fantasy', paddingLeft: 17, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 16, lineHeight: 44, color: '#0071bc' }}>{I18n.t('ScienceteamActivity.zhiyuan')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 14, lineHeight: 16 }}>{I18n.t('ScienceteamActivity.zhiyuantitle')}</Text>
                            <Text style={{ fontFamily: 'fantasy', fontSize: 12, lineHeight: 18, fontStyle: 'italic' }}>{I18n.t('ScienceteamActivity.epidial')}</Text>
                        </View>

                        <Text style={{ width: '10%', height: 123, fontFamily: 'fantasy', fontSize: 18, lineHeight: 123,fontWeight:"700" }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 45, marginTop: 10,width:'90%',alignSelf:'center'}}>
                    <Text style={{ fontFamily: 'fantasy', fontSize: 18, lineHeight: 44, fontWeight:'bold' }}>&nbsp;&nbsp;Scientific Advisory Board</Text>
                </View>
                <View style={{ height: 10, marginTop: 10, }}></View>
                <TouchableOpacity onPress={() => this.navigate.push("ShafaatActivity")}>
                <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row',borderRadius:15,borderWidth:1 }}>
                    <Image style={{ height: 123, width: '30%', borderRadius: 10 }} resizeMode="contain" source={require("../image/icons/Shafaat-1.jpg")}></Image>
                    <View style={{ width: '60%', height: 123, fontFamily: 'fantasy', paddingLeft: 17, justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'fantasy', fontSize: 16, lineHeight: 44, color: '#0071bc' }}>{I18n.t('ScienceteamActivity.Shafaat')}</Text>
                    </View>
                    <Text style={{ width: '10%', height: 123, fontFamily: 'fantasy', fontSize: 18, lineHeight: 123,fontWeight:"700" }}>&gt;</Text>
                </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10,}}></View>
                <Text style={{ fontFamily: 'fantasy', fontSize: 12, textAlign: 'center' }}>{I18n.t('TabHomeActivity.allright')}</Text>
            </ScrollView>
        );
    }
}

