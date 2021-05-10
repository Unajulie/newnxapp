import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ScrollView, TouchableOpacity, Button } from 'react-native';
import { I18n } from '../locales/i18n';
import SliderLineChart from './SliderLineChart';
import RatingChart from './RatingChart';
import { px2dp } from '../src/px2dp';

export default class LifeStyleSexActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('LifeStyleChartActivity.sex'),
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
                <View style={{ width: "100%", height: px2dp(400), marginTop: px2dp(20), marginBottom: px2dp(20)}} >
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.active')}
                        max={5}
                        min={0}
                        sliderDefualtValue={5}
                        yAxisLabelValue="sexfrequency"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.timesday')}
                        column="sexfrequency"
                        gradient={[["50%", "green", "2"], ["25%", "#FFB233", "4"], ["25%", "red", "5"]]}
                    />
                </View>
                <View>
                    <RatingChart
                        title={I18n.t('LifeStyleChartActivity.sexual')}
                        column="sexscore"
                        yAxisLabelValue="sexscore"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.score')}
                        max="5"
                    />
                </View>
                <TouchableOpacity style={{ width: '90%', marginBottom: px2dp(20), marginTop: px2dp(60), width: '90%', alignSelf: 'center' }}>
                    <Button title="save" onPress={onButtonPress} color="#f7871e" />
                </TouchableOpacity>
            </ScrollView>

        );
    }
}

