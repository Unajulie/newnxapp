import React, { Component } from 'react';
import { Text, View, Image, ScrollView, } from 'react-native';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';

export default class ShafaatActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('ScienceteamActivity.Shafaat'),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#e5e6e7' }}>
                    <View style={{ height: 120 }}></View>
                    <View style={{ backgroundColor: '#f6f7f8', borderTopLeftRadius: px2dp(30), borderTopRightRadius: px2dp(30) }}>
                        <View style={{ width: '90%', }}>
                            <Image style={{ height: px2dp(99), width: '100%', marginTop: -60, marginLeft: -60 }} resizeMode="contain" source={require("../image/icons/Shafaat-2.png")}></Image>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center', paddingTop: px2dp(20), paddingBottom: px2dp(20), borderStyle: "dashed", borderBottomWidth: 0.5 }}>
                            <Text style={{ fontSize: px2dp(18), lineHeight: px2dp(44), textAlign: 'left',fontFamily:'fantasy', color: '#0071bc', marginLeft: 20 }}>{I18n.t('ScienceteamActivity.Shafaat')}</Text>
                        </View>
                        <View style={{ height: px2dp(40) }}></View>
                        <View style={{ width: '100%' }}>
                            <View style={{ width: "90%", alignSelf: 'center',}}>
                                <Text style={{ lineHeight: px2dp(20), fontSize:px2dp(14),fontFamily:'fantasy' }}>{I18n.t('ScienceteamActivity.Shafaatmsg')}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >

        );
    }
}

