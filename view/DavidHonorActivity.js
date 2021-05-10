import React, { Component } from 'react';
import { StyleSheet, StatusBar, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { WebView } from 'react-native-webview';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';



// 學術會議
// const SecondRoute = () => (
//     <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
//         <Text style={{ fontFamily: 'fantasy', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.forum')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.india')}</Text></Text>
//         <Text style={{ fontFamily: 'fantasy', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.diseases')} <Text style={{ fontWeight: '700', fontStyle: 'italic', }}>{I18n.t('DavidActivity.canadaa')}</Text></Text>
//         <Text style={{ fontFamily: 'fantasy', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.conference')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.newyork')}</Text></Text>
//         <Text style={{ fontFamily: 'fantasy', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.first')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.erat')}</Text></Text>
//         <Text style={{ fontFamily: 'fantasy', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.reseach')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.oslo')}</Text></Text>
//         <Text style={{ fontFamily: 'fantasy', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.cell')}  <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.france')}</Text></Text>
//         <Text style={{ fontFamily: 'fantasy', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.basic')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.newyork')}</Text></Text>
//         <Text style={{ fontFamily: 'fantasy', lineHeight: 21,marginBottom:18 }}>{I18n.t('DavidActivity.health')} <Text style={{ fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.london')} </Text></Text>
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
            <ScrollView style={{ flex: 1 }}>
                <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                {/* 荣誉 */}
                {/* <View>
                    <Text style={{ width: '90%', height:px2dp(67) , alignSelf: 'center', fontFamily: 'fantasy', fontSize:px2dp(28) , lineHeight:px2dp(67) , fontWeight: 'bold' }}>{I18n.t('DavidActivity.honor')}</Text>
                </View> */}
                <View style={{ marginTop: px2dp(30), marginBottom: px2dp(30) }}>
                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: px2dp(20), paddingTop: px2dp(20) }} >
                        <Text style={{ height: px2dp(40), lineheight: px2dp(40), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14), }}>{I18n.t('DavidActivity.us')}</Text>
                        <Text style={{ height: px2dp(80), lineheight: px2dp(40), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('DavidActivity.cancer')}</Text>
                    </View>

                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: px2dp(20), paddingTop: px2dp(20) }} >
                        <Text style={{ height: px2dp(40), lineheight: px2dp(40), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14), }}>{I18n.t('DavidActivity.uspa')}</Text>
                        <Text style={{ height: px2dp(80), lineheight: px2dp(40), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('DavidActivity.dna')}</Text>
                    </View>

                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: px2dp(20), paddingTop: px2dp(20) }} >
                        <Text style={{ height: px2dp(40), lineheight: px2dp(40), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14), }}>2011</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(20), fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('DavidActivity.fellow')}</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(20), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('DavidActivity.israel')}</Text>
                    </View>
                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: px2dp(20), paddingTop: px2dp(20) }} >
                        <Text style={{ height: px2dp(40), lineheight: px2dp(40), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14), }}>2010</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(20), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('DavidActivity.alumni')}</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(20), fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('DavidActivity.award')}</Text>
                    </View>

                    <View style={{ height: px2dp(20) }}></View>
                    <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#B2B2B2', paddingBottom: px2dp(20), paddingTop: px2dp(20) }} >
                        <Text style={{ height: px2dp(40), lineheight: px2dp(40), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(14), }}>2009</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(20), fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('DavidActivity.medical')}</Text>
                        <Text style={{ height: px2dp(20), lineheight: px2dp(20), fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy', textAlign: 'center', fontSize: px2dp(16) }}>{I18n.t('DavidActivity.award')}</Text>
                    </View>

                </View>
            </ScrollView >

        );
    }
}

