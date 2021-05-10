import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ScrollView,TouchableOpacity,Button } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n';
import MoodChart from "./MoodChart";
import { px2dp } from '../src/px2dp';

export default class MoodChartFailureActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('MoodChartActivity.Failure'),
        })
    }
    constructor(props) {
        super(props);
    }
    render() {
        const onButtonPress = () => {
            Alert.alert(I18n.t('LifeStyleChartActivity.savedata'));
        };
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
               <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                <View style={{ width: "100%", height: px2dp(400), marginTop: px2dp(20), marginBottom: px2dp(20)}}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%",marginTop: px2dp(20), marginBottom: px2dp(20)}}>
                                        <Text style={{  fontSize: px2dp(16), fontFamily: 'fantasy', color: '#000' }}>{I18n.t('MoodChartActivity.family')}</Text>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="failure"
                            column="failure"
                        />
                    </View>
                <TouchableOpacity style={{width:'90%', marginBottom: px2dp(20),marginTop:px2dp(100),width:'90%',alignSelf:'center' }}>
                    <Button title="save" onPress={onButtonPress} color="#685cf2" />
                </TouchableOpacity>
            </ScrollView>

        );
    }
}

