import React, { Component } from 'react';
import { StatusBar, Text, View, Alert, ScrollView, TouchableOpacity, Button } from 'react-native';
import { I18n } from '../locales/i18n';
import SliderLineChart from './SliderLineChart';
import { px2dp } from '../src/px2dp';
export default class LifeStyleVitaminsActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('LifeStyleChartActivity.Vitamins'),
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
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                    <View style={{ width: "100%", height: px2dp(450), marginTop: px2dp(20), marginBottom: px2dp(50) }}>
                        <SliderLineChart
                            title={I18n.t('LifeStyleChartActivity.vitamin')}
                            refTitle={I18n.t('LifeStyleChartActivity.mayoclinic')}
                            refUrl="https://www.mayoclinic.org/drugs-supplements-vitamin-d/art-20363792"
                            max={1000}
                            min={0}
                            sliderDefualtValue={200}
                            yAxisLabelValue="vitaminD"
                            yAxisLabelName={I18n.t('LifeStyleChartActivity.iuday')}
                            column="vitaminD"
                            yAxisLine="400@600@800"
                            gradient={[["100%", "green", "1000"]]}
                            desc={
                                <View style={{ width: "90%" }}>
                                    <Text style={{ fontSize: 12 }}>
                                        <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                        {I18n.t('LifeStyleChartActivity.recommended')}
                                    </Text>
                                </View>
                            }
                        />
                    </View>
                        <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: px2dp(450), marginTop: px2dp(20), marginBottom: px2dp(50) }}>
                        <SliderLineChart
                            title={I18n.t('LifeStyleChartActivity.vitaminc')}
                            refTitle={I18n.t('LifeStyleChartActivity.mayoclinic')}
                            refUrl="https://www.mayoclinic.org/drugs-supplements-vitamin-c/art-20363932"
                            max={450}
                            min={0}
                            sliderDefualtValue={80}
                            yAxisLabelValue="vitaminC"
                            yAxisLabelName="mg/day"
                            column="vitaminC"
                            yAxisLine="75@90"
                            gradient={[["100%", "green", "450"]]}
                            desc={
                                <View style={{ width: "90%" }}>
                                    <Text style={{ fontSize: 12 }}>
                                        <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                        {I18n.t('LifeStyleChartActivity.daily')}
                                    </Text>
                                </View>
                            }
                        />
                    </View>
                        <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: px2dp(450), marginTop: px2dp(20), marginBottom: px2dp(50) }}>
                        <SliderLineChart
                            title={I18n.t('LifeStyleChartActivity.vitamina')}
                            refTitle={I18n.t('LifeStyleChartActivity.mayoclinic')}
                            refUrl="https://www.mayoclinic.org/drugs-supplements-vitamin-a/art-20365945"
                            max={1500}
                            min={0}
                            sliderDefualtValue={80}
                            yAxisLabelValue="vitaminA"
                            yAxisLabelName={I18n.t('LifeStyleChartActivity.mcgday')}
                            column="vitaminA"
                            yAxisLine="700@900"
                            gradient={[["100%", "green", "1500"]]}
                            desc={
                                <View style={{ width: "90%" }}>
                                    <Text style={{ fontSize: 12 }}>
                                        <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                        {I18n.t('LifeStyleChartActivity.women')}
                                    </Text>
                                </View>
                            }
                        />
                    </View>
                        <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: px2dp(450), marginTop: px2dp(20), marginBottom: px2dp(20) }}>
                        <SliderLineChart
                            title={I18n.t('LifeStyleChartActivity.same')}
                            refTitle={I18n.t('LifeStyleChartActivity.webmd')}
                            refUrl="https://www.webmd.com/diet/supplement-guide-sam-e#1"
                            max={5000}
                            min={0}
                            sliderDefualtValue={80}
                            yAxisLabelValue="same"
                            yAxisLabelName={I18n.t('LifeStyleChartActivity.mg1')}
                            column="same"
                            yAxisLine="600@1600"
                            gradient={[["100%", "green", "5000"]]}
                            desc={
                                <View style={{ width: "90%" }}>
                                    <Text style={{ fontSize: 12 }}>
                                        <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                        {I18n.t('LifeStyleChartActivity.same-recommon')}
                                    </Text>
                                </View>
                            }
                        />
                    </View>
                        <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: px2dp(450), marginTop: px2dp(20), marginBottom: px2dp(50) }}>
                        <SliderLineChart
                            title={I18n.t('LifeStyleChartActivity.nmn')}
                            refTitle={I18n.t('LifeStyleChartActivity.selfhacked')}
                            refUrl="https://content.selfdecode.com/nicotinamide-mononucleotide/"
                            max={5000}
                            min={0}
                            sliderDefualtValue={80}
                            yAxisLabelValue="nmn"
                            yAxisLabelName={I18n.t('LifeStyleChartActivity.mg1')}
                            column="nmn"
                            yAxisLine="125@250"
                            gradient={[["100%", "green", "5000"]]}
                            desc={
                                <View style={{ width: "90%" }}>
                                    <Text style={{ fontSize: 12 }}>
                                        <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                        {I18n.t('LifeStyleChartActivity.nmn-recommon')}
                                    </Text>
                                </View>
                            }
                        />
                    </View>
                        <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: px2dp(450), marginTop: px2dp(20), marginBottom: px2dp(50) }}>
                        <SliderLineChart
                            title={I18n.t('LifeStyleChartActivity.dhea')}
                            refTitle={I18n.t('LifeStyleChartActivity.webmd')}
                            refUrl="https://www.webmd.com/a-to-z-guides/dhea#1"
                            max={500}
                            min={0}
                            sliderDefualtValue={80}
                            yAxisLabelValue="dhea"
                            yAxisLabelName={I18n.t('LifeStyleChartActivity.mg1')}
                            column="dhea"
                            yAxisLine="125@250"
                            gradient={[["100%", "green", "500"]]}
                            desc={
                                <View style={{ width: "90%" }}>
                                    <Text style={{ fontSize: 12 }}>
                                        <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                        {I18n.t('LifeStyleChartActivity.dhea-recommon')}
                                    </Text>
                                </View>
                            }
                        />
                    </View>
                        <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: px2dp(450), marginTop: px2dp(20), marginBottom: px2dp(50) }}>
                        <SliderLineChart
                            title={I18n.t('LifeStyleChartActivity.tmg')}
                            refTitle={I18n.t('LifeStyleChartActivity.tmgwebsite')}
                            refUrl="https://examine.com/supplements/trimethylglycine/"
                            max={1000}
                            min={0}
                            sliderDefualtValue={80}
                            yAxisLabelValue="tmg"
                            yAxisLabelName={I18n.t('LifeStyleChartActivity.mg1')}
                            column="tmg"
                            yAxisLine=""
                            gradient={[["100%", "green", "1000"]]}
                            desc={
                                <View style={{ width: "90%" }}>
                                    <Text style={{ fontSize: 12 }}>
                                        <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                        {I18n.t('LifeStyleChartActivity.tmg-recommon')}
                                    </Text>
                                </View>
                            }
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: px2dp(500), marginTop: px2dp(20), marginBottom: px2dp(50) }}>
                        <SliderLineChart
                            title={I18n.t('LifeStyleChartActivity.lipoic')}
                            refTitle={I18n.t('LifeStyleChartActivity.lipoicwebsite')}
                            refUrl="https://www.drugs.com/mtm/alpha-lipoic-acid.html"
                            max={600}
                            min={0}
                            sliderDefualtValue={80}
                            yAxisLabelValue="lipoic"
                            yAxisLabelName={I18n.t('LifeStyleChartActivity.mg1')}
                            column="lipoic"
                            yAxisLine=""
                            gradient={[["100%", "green", "600"]]}
                            desc={
                                <View style={{ width: "90%" }}>
                                    <Text style={{ fontSize: 12 }}>
                                        <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                        {I18n.t('LifeStyleChartActivity.lipoic-recommon')}
                                    </Text>
                                </View>
                            }
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: px2dp(450), marginTop: px2dp(20), marginBottom: px2dp(50) }}>
                        <SliderLineChart
                            title={I18n.t('LifeStyleChartActivity.vitaminD2')}
                            refTitle={I18n.t('LifeStyleChartActivity.vitaminD2website')}
                            refUrl="https://www.lesswrong.com/posts/c5aycbSsSc38XWPEc/taking-vitamin-d3-with-k2-in-the-morning"
                            max={5000}
                            min={0}
                            sliderDefualtValue={280}
                            yAxisLabelValue="lipoic"
                            yAxisLabelName={I18n.t('LifeStyleChartActivity.iuday')}
                            column="lipoic"
                            yAxisLine=""
                            gradient={[["100%", "green", "5000"]]}
                            desc={
                                <View style={{ width: "90%" }}>
                                    <Text style={{ fontSize: px2dp(12), fontFamily: 'fantasy' }}>
                                        <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                        {I18n.t('LifeStyleChartActivity.vitaminD2-recommon')}
                                    </Text>
                                </View>
                            }
                        />
                    </View>
                    <View style={{width:'100%',height:px2dp(80)}}></View>
                <TouchableOpacity >
                    <View style={{ width: '90%', height: px2dp(40), backgroundColor: '#f7871e', borderRadius: px2dp(5), marginBottom: px2dp(20), alignSelf: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', textAlign: 'center', }} onPress={onButtonPress}>SAVE</Text>
                    </View>
                </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

