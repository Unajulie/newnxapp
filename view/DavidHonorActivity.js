import React, { Component } from 'react';
import { StyleSheet, StatusBar, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { WebView } from 'react-native-webview';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';



// 學術會議
// const SecondRoute = () => (
//     <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
//         <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.forum')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('DavidActivity.india')}</Text></Text>
//         <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.diseases')} <Text style={{ fontWeight: '700', fontStyle: 'italic', }}>{I18n.t('DavidActivity.canadaa')}</Text></Text>
//         <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.conference')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('DavidActivity.newyork')}</Text></Text>
//         <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.first')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('DavidActivity.erat')}</Text></Text>
//         <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.reseach')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('DavidActivity.oslo')}</Text></Text>
//         <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.cell')}  <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('DavidActivity.france')}</Text></Text>
//         <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.basic')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('DavidActivity.newyork')}</Text></Text>
//         <Text style={{ fontFamily: 'FontAwesome', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.health')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('DavidActivity.london')} </Text></Text>
//     </View>
// );
// const styles = StyleSheet.create({
//     scene: {
//         flex: 1,
//     },
// });
type Props = {};
export default class DavidHonorActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('DavidActivity.honor'),
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

                {/* 荣誉 */}
                <View>
                    <Text style={{ width: '90%', height: 67, alignSelf: 'center', fontFamily: 'fantasy', fontSize: 28, lineHeight: 67, fontWeight: 'bold' }}>{I18n.t('DavidActivity.honor')}</Text>
                </View>
                <View style={{ marginTop: 20, marginBottom: 20 }}>

                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 40, lineHeight: 40, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14,}}>{I18n.t('DavidActivity.us')}</Text>
                        <Text style={{ height: 80, lineHeight: 40, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('DavidActivity.cancer')}</Text>
                    </View>

                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 40, lineHeight: 40, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14, }}>{I18n.t('DavidActivity.uspa')}</Text>
                        <Text style={{ height: 80, lineHeight: 40, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('DavidActivity.dna')}</Text>
                    </View>

                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 40, lineHeight: 40, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14,  }}>2011</Text>
                        <Text style={{ height: 20, lineHeight: 20, fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome', textAlign: 'center', fontSize: 16 }}>{I18n.t('DavidActivity.fellow')}</Text>
                        <Text style={{ height: 20, lineHeight: 20, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('DavidActivity.israel')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 40, lineHeight: 40, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14,}}>2010</Text>
                        <Text style={{ height: 20, lineHeight: 20, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('DavidActivity.alumni')}</Text>
                        <Text style={{ height: 20, lineHeight: 20, fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome', textAlign: 'center', fontSize: 16 }}>{I18n.t('DavidActivity.award')}</Text>
                    </View>

                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 40, lineHeight: 40, fontFamily: 'fantasy', textAlign: 'center', fontSize: 14, }}>2009</Text>
                        <Text style={{ height: 20, lineHeight: 20, fontFamily: 'fantasy', textAlign: 'center', fontSize: 16 }}>{I18n.t('DavidActivity.medical')}</Text>
                        <Text style={{ height: 20, lineHeight: 20, fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome', textAlign: 'center', fontSize: 16 }}>{I18n.t('DavidActivity.award')}</Text>
                    </View>

                </View>

                <Text style={{ fontFamily: 'fantasy', fontSize: 12, textAlign: 'center' }}>{I18n.t('DavidActivity.all')}</Text>
            </ScrollView >

        );
    }
}

