import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ScrollView, TouchableOpacity, Button } from 'react-native';
import { I18n } from '../locales/i18n';
import SliderLineChart from './SliderLineChart';
import { px2dp } from '../src/px2dp';

export default class LifeStyleSleepActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('LifeStyleChartActivity.Sleep'),
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
                <View style={{ width: "100%",  height: px2dp(400), marginTop: px2dp(20), marginBottom: px2dp(20)}}>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.sleep')}
                        refTitle={I18n.t('LifeStyleChartActivity.foundation')}
                        refUrl="https://www.sleepfoundation.org/"
                        max={16}
                        min={0}
                        sliderDefualtValue={8}
                        yAxisLabelValue="sleep"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.unit')}
                        column="sleep"
                        yAxisLine="5@8@10"
                        gradient={[["50%", "green", "8"], ["25%", "#FFB233", "12"], ["25%", "red", "16"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: px2dp(12) }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.morethan')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <TouchableOpacity style={{ width: '90%', marginBottom: px2dp(20), marginTop: px2dp(60), width: '90%', alignSelf: 'center' }}>
                    <Button title="save" onPress={onButtonPress} color="#f7871e" />
                </TouchableOpacity>
            </ScrollView>

        );
    }
}

