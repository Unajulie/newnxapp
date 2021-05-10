import React, { Component } from 'react';
import {  StatusBar, Text, View, Alert, ScrollView, TouchableOpacity, Button } from 'react-native';
import { I18n } from '../locales/i18n';
import McGillChart from "./McGillChart"
import { px2dp } from '../src/px2dp';
export default class McGillChartShootingActivity extends Component<Props> {
    static navigationOptions = () => {
        return ({
            title: I18n.t('McGillChartActivity.shooting'),
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
                <View style={{ width: "100%",  height: px2dp(400), marginTop: px2dp(20), marginBottom: px2dp(20) }}>
                    <McGillChart
                        title={I18n.t('McGillChartActivity.shooting')}
                        yAxisLabelName={I18n.t('McGillChartActivity.score')}
                        yAxisLabelValue="shooting"
                        column="shooting"
                    />
                </View>
                <TouchableOpacity style={{width:'90%', marginBottom: px2dp(20),marginTop:px2dp(100),width:'90%',alignSelf:'center' }} >
                    <Button title="save" onPress={onButtonPress} color="#d62e2d" />
                </TouchableOpacity>
            </ScrollView>

        );
    }
}

