import React, { Component } from 'react';
import {StatusBar, Text, View, Alert, ScrollView, TouchableOpacity, Button } from 'react-native';
import { I18n } from '../locales/i18n';
import SliderLineChart from './SliderLineChart';
import { px2dp } from '../src/px2dp';
export default class LifeStyleMeditationActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('LifeStyleChartActivity.Meditation'),
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
                        title={I18n.t('LifeStyleChartActivity.meditation')}
                        refTitle={I18n.t('LifeStyleChartActivity.mayo')}
                        refUrl="https://www.mayoclinic.org/tests-procedures/meditation/in-depth/meditation/art-20045858"
                        max={16}
                        min={0}
                        sliderDefualtValue={5}
                        yAxisLabelValue="meditation"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.unit')}
                        column="meditation"
                        gradient={[["50%", "green", "8"], ["25%", "#FFB233", "12"], ["25%", "red", "16"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: px2dp(12),fontFamily:'fantasy' }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.most')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{width:'100%',height:px2dp(100)}}></View>
                <TouchableOpacity >
                    <View style={{ width: '90%', height: px2dp(40), backgroundColor: '#f7871e', borderRadius: px2dp(5), marginBottom: px2dp(20),alignSelf: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', textAlign: 'center', }} onPress={onButtonPress}>SAVE</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

        );
    }
}

