import React, { Component } from 'react';
import { StatusBar, Text, View, Image, ScrollView, } from 'react-native';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';

type Props = {};
export default class ContactActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ContactActivity.title"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <View style={{flex:1}}>
                <ScrollView>
                    <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(80), paddingBottom: px2dp(20), }}>
                        <Image style={{ height: px2dp(130), width: '23%', alignSelf: 'center' }} resizeMode='contain' source={require("../image/icons/logo.png")}></Image>
                        <Text style={{ height: px2dp(45), fontSize: px2dp(16), fontFamily: 'fantasy',color:'#000', lineHeight: px2dp(20), textAlign: 'center' }}>{I18n.t('ContactActivity.phone')}</Text>
                        <Text style={{ height: px2dp(45), fontSize: px2dp(16), fontFamily: 'fantasy',color:'#000', lineHeight: px2dp(20), textAlign: 'center' }}>{I18n.t('ContactActivity.utics')}</Text>
                        <Text style={{ height: px2dp(45), fontSize: px2dp(16), fontFamily: 'fantasy',color:'#000',lineHeight: px2dp(20), textAlign: 'center' }}> {I18n.t('ContactActivity.http')}</Text>
                        <Text style={{ height: px2dp(130), fontSize: px2dp(16), fontFamily: 'fantasy',color:'#000', lineHeight: px2dp(20), textAlign: 'center' }}>{I18n.t('ContactActivity.hkg')}</Text>
                    </View>
                </ScrollView >
            </View>
        );
    }
}

