import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Alert, ScrollView, TouchableOpacity, Button } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n';
import SliderLineChart from './SliderLineChart';
import data from '../appdata'

type Props = {};
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
            <ScrollView>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <View style={{ height: 40 }}></View>
                <View style={{ width: "100%", height: 480, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10,  }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
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
                <View style={{ width: "100%", height: 450, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
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
                <View style={{ width: "100%", height: 450, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
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
                <View style={{ width: "100%", height: 500, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
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
                <View style={{ width: "100%", height: 500, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
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
                <View style={{ width: "100%", height: 500, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
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
                <View style={{ width: "100%", height: 500, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
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
                <View style={{ width: "100%", height: 550, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
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
                <View style={{ width: "100%", height: 550, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
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
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.vitaminD2-recommon')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ height: 80 }}></View>
                <TouchableOpacity >
                    <Button title="save" onPress={onButtonPress} color="#f7871e" />
                </TouchableOpacity>

                {/* <Text style={{ fontFamily: 'fantasy', fontSize: 12, textAlign: 'center' }}>@2021 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text> */}
            </ScrollView>

        );
    }
}

