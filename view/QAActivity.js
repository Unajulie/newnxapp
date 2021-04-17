import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity,StatusBar } from 'react-native';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';

export default class QAActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("QAActivity.title"),
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
                <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), paddingBottom: px2dp(20), }}>
                    <TouchableOpacity onPress={() => this.navigate.push("Manual2")}>
                        <Text style={{ height: px2dp(70),lineHeight: px2dp(70), fontSize: px2dp(16), fontFamily: 'fantasy', color:'#000', borderBottomWidth: 1, borderBottomColor: '#efefef' }}>{I18n.t('QAActivity.test')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.navigate.push("Manual1")}>
                        <Text style={{ height: px2dp(70),lineHeight: px2dp(70), fontSize: px2dp(16), fontFamily: 'fantasy', color:'#000',  borderBottomWidth: 1, borderBottomColor: '#efefef' }}>{I18n.t('QAActivity.report')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.navigate.push("Manual3")}>
                        <Text style={{height: px2dp(70),lineHeight: px2dp(70), fontSize: px2dp(16), fontFamily: 'fantasy',color:'#000', borderBottomWidth: 1, borderBottomColor: '#efefef' }}>{I18n.t('QAActivity.fillques')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.navigate.push("Manual4")}>
                        <Text numberOfLines={2} style={{ height: px2dp(70),lineHeight: px2dp(20),fontSize: px2dp(16), fontFamily: 'fantasy',color:'#000',  borderBottomWidth: 1, borderBottomColor: '#efefef',textAlignVertical:'center' }}>{I18n.t('QAActivity.calfoot')}</Text>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView >
        );
    }
}

