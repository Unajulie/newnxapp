import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview';
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';

// const FirstRoute = () => (

// );

// const SecondRoute = () => (
//     <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
//         <View style={{ height: 20 }}></View>
//         <Text style={{ fontFamily: 'FontAwesome', height: 67, lineHeight: 21 }}>
//         {I18n.t('ZhiyuanActivity.society')}
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.newusa')}</Text>
//         </Text>
//         <Text style={{ fontFamily: 'FontAwesome', height: 88, lineHeight: 21 }}>
//         {I18n.t('ZhiyuanActivity.third')}
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.atlanta')}</Text>
//         </Text>
//         <Text style={{ fontFamily: 'FontAwesome', height: 67, lineHeight: 21 }}>
//         {I18n.t('ZhiyuanActivity.seminar')}
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.atlanta')}</Text>
//         </Text>
//         <Text style={{ fontFamily: 'FontAwesome', height: 67, lineHeight: 21 }}>
//         {I18n.t('ZhiyuanActivity.georgina')}
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.atlanta')}</Text>
//         </Text>
//         <Text style={{ fontFamily: 'FontAwesome', height: 67, lineHeight: 21 }}>
//         {I18n.t('ZhiyuanActivity.symposium')}
//             <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'FontAwesome' }}>{I18n.t('ZhiyuanActivity.china')}</Text>
//         </Text>
//     </View>
// );
// const styles = StyleSheet.create({
//     scene: {
//         flex: 1,
//     },
// });
type Props = {};
export default class ZhiyuanHonorsActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ZhiyuanActivity.honors"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>

                <View>
                    <Text style={{ width: '90%', height: 67, alignSelf: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 28, lineHeight: 67, fontWeight: 'bold' }}>{I18n.t('ZhiyuanActivity.honors')}</Text>
                </View>

                {/* honors */}
                <View style={{ marginTop: 20, marginBottom: 20 }}>

                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 40, lineHeight: 30, fontStyle: 'italic', fontFamily: 'FontAwesome' ,textAlign: 'center', fontSize: 14,fontWeight: '700', }}>{I18n.t('ZhiyuanActivity.trainee')}</Text>
                        <Text style={{ height: 40, lineHeight: 30, fontFamily: 'NotoSansHans-Light', textAlign: 'center', fontSize: 16 }}>{I18n.t('ZhiyuanActivity.american')}</Text>
                    </View>
                    
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 40, lineHeight: 30, fontStyle: 'italic', fontFamily: 'FontAwesome' ,textAlign: 'center', fontSize: 14,fontWeight: '700', }}>{I18n.t('ZhiyuanActivity.scholarship')}</Text>
                        <Text style={{ height: 40, lineHeight: 30, fontFamily: 'NotoSansHans-Light', textAlign: 'center', fontSize: 16 }}>{I18n.t('ZhiyuanActivity.council')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 40, lineHeight: 30, fontStyle: 'italic', fontFamily: 'FontAwesome' ,textAlign: 'center', fontSize: 14,fontWeight: '700', }}>{I18n.t('ZhiyuanActivity.journals')}</Text>
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'NotoSansHans-Light', textAlign: 'center', fontSize: 16 }}>{I18n.t('ZhiyuanActivity.biochemistry')}</Text>
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'NotoSansHans-Light', textAlign: 'center', fontSize: 16 }}>{I18n.t('ZhiyuanActivity.annuals')}</Text>
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'NotoSansHans-Light', textAlign: 'center', fontSize: 16 }}>{I18n.t('ZhiyuanActivity.cellular')}</Text>
                        <Text style={{ height: 30, lineHeight: 30, fontFamily: 'NotoSansHans-Light', textAlign: 'center', fontSize: 16 }}>{I18n.t('ZhiyuanActivity.journal')}</Text>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: 20, paddingTop: 20 }} >
                        <Text style={{ height: 40, lineHeight: 30, fontStyle: 'italic', fontFamily: 'FontAwesome' ,textAlign: 'center', fontSize: 14,fontWeight: '700', }}>{I18n.t('ZhiyuanActivity.board')}</Text>
                        <Text style={{ height: 40, lineHeight: 30, fontFamily: 'NotoSansHans-Light', textAlign: 'center', fontSize: 16 }}>{I18n.t('ZhiyuanActivity.journal')}</Text>
                    </View>
  
                </View>

                <View style={{ height: 20 }}></View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>{I18n.t('ZhiyuanActivity.reserved')}</Text>
            </ScrollView >

        );
    }
}

