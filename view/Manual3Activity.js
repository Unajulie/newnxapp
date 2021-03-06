import React, { Component } from 'react';
import { StatusBar, Text, View, Image, ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';
export default class Manual3Activity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("Manual3Activity.title"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView style={{flex:1}}>
               <StatusBar animated={true}  hidden={true} translucent={true} barStyle={'light-content'} />

                <View style={{ width: '90%', alignSelf: 'center', marginTop: px2dp(20), paddingBottom: px2dp(20), }}>
                    <Text style={{ textAlign: 'center', fontSize: px2dp(20),marginBottom:px2dp(20),color:'#000', fontFamily: 'fantasy', fontWeight: 'bold', textAlignVertical: 'center' }}>{I18n.t("Manual3Activity.how")}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{  width: '7%', fontSize: px2dp(16), fontWeight: 'bold',color:'#000',fontFamily:'fantasy',lineHeight:px2dp(20) }}>1.</Text>
                        <Text style={{  width: '95%', fontSize:  px2dp(16), marginBottom: 8,color:'#000', fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t("Manual3Activity.slider1")}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(230) }} source={require('../image/enpic/ques-guide1.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{  width: '7%', fontSize:  px2dp(16), fontWeight: 'bold',color:'#000', }}>2.</Text>
                        <Text style={{  width: '95%', fontSize:  px2dp(16), marginBottom: 8,color:'#000', fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t("Manual3Activity.ratingstart2")}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(230) }} source={require('../image/enpic/ques-guide2.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{  width: '7%', fontSize:  px2dp(16), fontWeight: 'bold',color:'#000', }}>3.</Text>
                        <Text style={{  width: '95%', fontSize:  px2dp(16), marginBottom: 8,color:'#000', fontFamily: 'fantasy', lineHeight: px2dp(20) }}>{I18n.t("Manual3Activity.enteefield3")}</Text>
                    </View>
                    <Image style={{ width: '100%', height: px2dp(230) }} source={require('../image/enpic/ques-guide3.png')} resizeMode='contain' />
                </View>
            </ScrollView >
        );
    }
}

