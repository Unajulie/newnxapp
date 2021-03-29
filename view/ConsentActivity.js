import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';
import Session from '../storage/Session';
import { px2dp } from '../src/px2dp';
import { H1 } from 'native-base';
export default class ConsentActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ConsentActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            dispaly: true,
        }
    }
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ dispaly: false })
        })
    }
    render() {
        this.navigate = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20),  }}>
                        <Text style={{ marginTop: px2dp(20), marginBottom: px2dp(20), fontSize: px2dp(24), fontWeight: 'bold',color: '#000000', }}>Terms of Service</Text>
                        <Text style={{ fontSize: px2dp(16), paddingTop: px2dp(20), lineHeight: px2dp(17), fontWeight: 'bold', color: '#000000', }}>{I18n.t('ConsentActivity.users')}</Text>
                        <Text style={{ fontSize: px2dp(14), paddingTop: px2dp(10), lineHeight: px2dp(17),  color: '#000000' }}>{I18n.t('ConsentActivity.welcome')} {I18n.t('ConsentActivity.registering')}</Text>
                        <Text style={{ fontSize: px2dp(16), paddingTop: px2dp(20), lineHeight: px2dp(17), fontWeight: 'bold', color: '#000000',}}>{I18n.t('ConsentActivity.about')}</Text>
                        <Text style={{ fontSize: px2dp(14), paddingTop: px2dp(10), lineHeight: px2dp(17),  color: '#000000' }}>{I18n.t('ConsentActivity.your')}{I18n.t('ConsentActivity.personal')}</Text>
                        <Text style={{ fontSize: px2dp(16), paddingTop: px2dp(20), lineHeight: px2dp(17), fontWeight: 'bold', color: '#000000', }}>{I18n.t('ConsentActivity.purpose')}</Text>
                        <Text style={{ fontSize: px2dp(14), paddingTop: px2dp(10), lineHeight: px2dp(17),  color: '#000000' }}> {I18n.t('ConsentActivity.designed')}{I18n.t('ConsentActivity.changes')}</Text>
                        <Text style={{ fontSize: px2dp(16), paddingTop: px2dp(20), lineHeight: px2dp(17), fontWeight: 'bold', color: '#000000', }}>{I18n.t('ConsentActivity.data')}</Text>
                        <Text style={{ fontSize: px2dp(14), paddingTop: px2dp(10), lineHeight: px2dp(17),  color: '#000000' }}>{I18n.t('ConsentActivity.obligated')}{I18n.t('ConsentActivity.analyzing')} </Text>
                        <Text style={{ fontSize: px2dp(16), paddingTop: px2dp(20), lineHeight: px2dp(17), fontWeight: 'bold', color: '#000000', }}>{I18n.t('ConsentActivity.sharing')}</Text>
                        <Text style={{ fontSize: px2dp(14), paddingTop: px2dp(10), lineHeight: px2dp(17),  color: '#000000' }}>{I18n.t('ConsentActivity.believe')}</Text>
                        <Text style={{ fontSize: px2dp(16), paddingTop: px2dp(20), lineHeight: px2dp(17), fontWeight: 'bold', color: '#000000', }}>{I18n.t('ConsentActivity.security')}</Text>
                        <Text style={{ fontSize: px2dp(14), paddingTop: px2dp(10), lineHeight: px2dp(17), color: '#000000' }}>{I18n.t('ConsentActivity.accordance')}</Text>
                        <Text style={{ fontSize: px2dp(16), paddingTop: px2dp(20), lineHeight: px2dp(17), fontWeight: 'bold', color: '#000000',  }}>{I18n.t('TabHomeActivity.disclaimer')}</Text>
                        <Text style={{ fontSize: px2dp(14), paddingTop: px2dp(10), lineHeight: px2dp(17),  color: '#000000' }}>{I18n.t('TabHomeActivity.disclaimertext')}</Text>

                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, marginTop: 34, textAlign: 'center' }}>{I18n.t('ConsentActivity.ved')}</Text>
                    </View>
                </ScrollView>
            </View >
        );
    }
}
