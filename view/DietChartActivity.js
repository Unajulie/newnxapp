import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, TouchableOpacity, Button, ScrollView, Modal, Alert, TextInput } from 'react-native'
import { I18n } from '../locales/i18n'
import InputSpinner from "react-native-input-spinner"
import Session from '../storage/Session'
import Search from 'react-native-search-box'
import { encrypt, decrypt } from 'react-native-simple-encryption';
import DietSliderChart from './DietSliderChart'
import data from '../appdata'
import { px2dp } from '../src/px2dp';
export default class DietChartActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("DietChartActivity.title"),
        })
    }

    constructor(props) {
        super(props);
        this.position = -1
        this.state = {
            dietbox: [],
            items: [],
            display: false,
            curpage: 1,
            isshow: false,
            itembox: [],
            calories: 0,
            fat: 0,
            position: -1,
            foodbox: []
        };

    }
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
        })
    }
    load = (text, index) => {
        this.setState({ items: [] })
        this.setState({ index })
        this.setState({ text })
        let url = "https://esha-nutrition-demo.azurewebsites.net/api/foods?query=" + text + "&count=5&start=" + index + "&spell=true&"
        fetch(url).then(res => res.json()).then((data) => {
            this.setState({ isshow: true })
            this.setState({ total: data.total })
            let allpage = data.total / 5.0
            this.setState({ allpage })
            let items = []
            let item = data.items;
            for (let i in item) {
                let view =
                    <View key={i} style={{ width: "100%", borderBottomWidth: 1, borderColor: "#808080" }}>
                        <View style={{ width: "100%",alignSelf:'center', flexDirection: "row" }}>
                            <TouchableOpacity style={{ width: "85%",alignSelf:'center', flexDirection: "row" }}
                                onPress={() => {
                                    let url = "https://esha-nutrition-demo.azurewebsites.net/api/food/" + item[i].id + "?"
                                    fetch(url).then(res => res.json()).then((data) => {
                                        Alert.alert("detail", "Saturated Fat:" + data.nutrient_data[0].value + " g\nCalories:" + data.nutrient_data[2].value + " kcal")
                                    })
                                }} >
                                <View style={{ width: "100%", alignItems: "center" }}>
                                    <View style={{ width: "100%", flexDirection: "row" }}>
                                        <Text style={{ fontFamily: 'fantasy', fontSize: px2dp(14), color: '#000' }}><Text style={{ fontWeight: "bold" }}>Amount:</Text>{item[i].quantity} Each </Text>
                                    </View>
                                    <View style={{ width: "100%", flexDirection: "row" }}>
                                        <Text><Text style={{ fontWeight: "bold", fontFamily: 'fantasy', fontSize: px2dp(14), color: '#000' }}>Category:</Text>{item[i].category}</Text>
                                    </View>
                                    <View style={{ width: "100%", flexDirection: "row" }}>
                                        <Text style={{ fontWeight: "bold", fontFamily: 'fantasy', fontSize: px2dp(14), color: '#000' }}>Description:<Text style={{ color: "#404bc2", textDecorationLine: "underline" }}>{item[i].description}</Text></Text>
                                    </View>
                                    <View style={{ width: "100%" }}>
                                        <Text><Text style={{ fontWeight: "bold", fontFamily: 'fantasy', fontSize: px2dp(14), color: '#000' }}>Groups:</Text>{item[i].groups}</Text>
                                    </View>
                                    <View style={{ width: "100%" }}>
                                        <Text><Text style={{ fontWeight: "bold", fontFamily: 'fantasy', fontSize: px2dp(14), color: '#000' }}>Product:</Text>{item[i].product}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ width: "15%",marginTop:px2dp(40) }}>
                                <TouchableOpacity style={{ marginTop: px2dp(40) }}>
                                    <Button color='#404bc2' title="add" onPress={() => {
                                        if (this.state.itembox.indexOf(item[i].id) == -1) {
                                            this.position += 1
                                            let point = this.position
                                            this.state.itembox.push(item[i].id)
                                            this.setState({ itembox: this.state.itembox })
                                            let url = "https://esha-nutrition-demo.azurewebsites.net/api/food/" + item[i].id + "?"
                                            fetch(url).then(res => res.json()).then((data) => {
                                                let foodstatus = "{\"foodname\":\"" + data.description + "\",\"calories\":" + data.nutrient_data[2].value + ",\"size\":1}"
                                                this.state.foodbox.splice(point, 1, foodstatus)

                                                let diet = {};
                                                diet.quantity = data.quantity + ""
                                                diet.description = data.description
                                                diet.calories = Number(parseFloat(data.nutrient_data[2].value).toFixed(3))
                                                diet.fat = Number(parseFloat(data.nutrient_data[0].value).toFixed(3))


                                                this.state.calories = Number(parseFloat(diet.calories + this.state.calories).toFixed(3))
                                                this.state.fat = Number(parseFloat(diet.fat + this.state.fat).toFixed(3))
                                                this.setState({ calories: this.state.calories })
                                                this.setState({ fat: this.state.fat })
                                                let id = (new Date()).valueOf();
                                                let dietview =
                                                    <View key={id} style={{ width: "90%", alignItems: "center", alignSelf: 'center' }}>
                                                        <View style={{ width: "100%", height: px2dp(20), flexDirection: "row", marginTop: px2dp(10),justifyContent:'space-between' }}>
                                                            <Text style={{width:'40%', color: "#404bc2", fontSize: px2dp(14), fontFamily: 'fantasy', fontWeight: "bold", }}>{diet.description ? (diet.description.length > 5 ? diet.description.substr(0, 18) + "..." : diet.description) : ""}</Text>
                                                            <View style={{width:'30%'}}>
                                                                <InputSpinner
                                                                    inputStyle={{ paddingVertical: 0 }}
                                                                    showBorder={true}
                                                                    fontSize={16}
                                                                    rounded={false}
                                                                    height={20}
                                                                    width={70}
                                                                    max={100}
                                                                    min={-100}
                                                                    precision={1}
                                                                    step={1}
                                                                    arrows={true}
                                                                    color={"#a0a0a0"}
                                                                    value={1}
                                                                    ref={(ref) => { this["type$$" + item[i].id] = ref }}
                                                                    itemid={item[i].id}
                                                                    onIncrease={(value) => {
                                                                        this["type$$" + item[i].id].size = value
                                                                        let itemid = this["type$$" + item[i].id].props.itemid
                                                                        let url = "https://esha-nutrition-demo.azurewebsites.net/api/food/" + itemid + "?"
                                                                        fetch(url).then(res => res.json()).then((data) => {
                                                                            let calories = Number(parseFloat(data.nutrient_data[2].value).toFixed(3))
                                                                            let fat = Number(parseFloat(data.nutrient_data[0].value).toFixed(3))
                                                                            this.state.calories = Number(parseFloat(this.state.calories + calories).toFixed(3))
                                                                            this.state.fat = Number(parseFloat(this.state.fat + fat).toFixed(3))
                                                                            this.setState({ calories: this.state.calories })
                                                                            this.setState({ fat: this.state.fat })
                                                                            let foodstatus = "{\"foodname\":\"" + data.description + "\",\"calories\":" + calories + ",\"size\":" + value + "}"
                                                                            this.state.foodbox.splice(point, 1, foodstatus)

                                                                        })
                                                                    }}
                                                                    onDecrease={(value) => { //value 已经点击之后的值
                                                                        this["type$$" + item[i].id].size = this["type$$" + item[i].id].size == undefined ? 1 : this["type$$" + item[i].id].size
                                                                        let itemid = this["type$$" + item[i].id].props.itemid
                                                                        let url = "https://esha-nutrition-demo.azurewebsites.net/api/food/" + itemid + "?"
                                                                        fetch(url).then(res => res.json()).then((data) => {
                                                                            let calories = Number(parseFloat(data.nutrient_data[2].value).toFixed(3))
                                                                            let fat = Number(parseFloat(data.nutrient_data[0].value).toFixed(3))
                                                                            this.state.calories = Number(parseFloat(this.state.calories - calories).toFixed(3))
                                                                            this.state.fat = Number(parseFloat(this.state.fat - fat).toFixed(3))
                                                                            this.setState({ calories: this.state.calories })
                                                                            this.setState({ fat: this.state.fat })

                                                                            let foodstatus = "{\"foodname\":\"" + data.description + "\",\"calories\":" + calories + ",\"size\":" + value + "}"
                                                                            this.state.foodbox.splice(point, 1, foodstatus)
                                                                            console.info(this.state.foodbox)
                                                                        })
                                                                    }}
                                                                />
                                                            </View>
                                                            <View style={{width:'30%'}}>
                                                                <TouchableOpacity itemid={item[i].id} dataid={point} ref={(ref) => { this["type$$" + item[i].id] = ref }}
                                                                    onPress={() => {
                                                                        let size = this["type$$" + item[i].id].size == undefined ? 1 : this["type$$" + item[i].id].size
                                                                        let itemid = this["type$$" + item[i].id].props.itemid
                                                                        let url = "https://esha-nutrition-demo.azurewebsites.net/api/food/" + itemid + "?"
                                                                        fetch(url).then(res => res.json()).then((data) => {
                                                                            let calories = Number(parseFloat(data.nutrient_data[2].value).toFixed(3)) * size
                                                                            let fat = Number(parseFloat(data.nutrient_data[0].value).toFixed(3)) * size
                                                                            this.state.calories = Number(parseFloat(this.state.calories - calories).toFixed(3))
                                                                            this.state.fat = Number(parseFloat(this.state.fat - fat).toFixed(3))
                                                                            this.setState({ calories: this.state.calories })
                                                                            this.setState({ fat: this.state.fat })
                                                                            let position = this["type$$" + item[i].id].props.dataid
                                                                            this.state.dietbox.splice(position, 1, undefined)
                                                                            this.state.itembox.splice(position, 1, undefined)
                                                                            this.state.foodbox.splice(position, 1, undefined)
                                                                            this.setState({ dietbox: this.state.dietbox })


                                                                        })
                                                                    }} >
                                                                    <View style={{width:px2dp(70), height:px2dp(20),alignSelf:'flex-end', borderRadius:px2dp(5),backgroundColor:'#404bc2'}}>
                                                                        <Text style={{ width: "100%", fontWeight: "bold", textAlign: "center",color:'#fff', fontFamily: 'fantasy', fontSize: px2dp(12) }}>{I18n.t('DietChartActivity.remove')}</Text>
                                                                    </View>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                        <View style={{ width: "100%", height: px2dp(5), alignItems: "center" }}>
                                                            <View style={{ width: "90%", height: "100%", borderBottomColor: "#f6f7f8", borderBottomWidth: px2dp(1) }}>
                                                            </View>
                                                        </View>
                                                    </View>

                                                this.state.dietbox.push(dietview)
                                                this.setState({ dietbox: this.state.dietbox })
                                            })
                                        } else {
                                            Alert.alert("Message", "Items have been added to the list")
                                        }
                                    }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                items.push(view)
            }
            this.setState({ items })
        })

    }
    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <View style={{ flex: 1,}}>
                <ScrollView>
                    <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />
                    <View style={{ width: "90%", alignSelf: 'center', marginBottom:px2dp(30)}}>
                        <View style={{ width: "100%", height: px2dp(20) }}></View>
                        <DietSliderChart
                            width={'90%'}
                            alignSelf={'center'}
                            title={I18n.t('DietChartActivity.food')}
                            refTitle={I18n.t('DietChartActivity.source')}
                            refUrl="https://www.healthline.com/nutrition/how-many-calories-per-day"
                            max="4000"
                            sliderDefualtValue={1500}
                            yAxisLabelValue="calories"
                            yAxisLabelName="calories"
                            yAxisLine="2000@2500"
                            column="calories"
                            ref={(ref) => { this.dietchart = ref }}
                            desc={
                                <View style={{ width: "90%", alignSelf: 'center' }}>
                                    <Text style={{ fontSize: px2dp(12), fontFamily: 'fantasy' }}>
                                        <Text style={{ fontWeight: "bold", fontFamily: 'fantasy', }}>{I18n.t('DietChartActivity.recommen')}</Text>{I18n.t('DietChartActivity.calories')}
                                    </Text>
                                    {/* <TouchableOpacity onPress={() => navigate.push("Manual4")}>
                                        <Text style={{ textDecorationLine: 'underline', color: '#FF0000' }}>How does it work?</Text>
                                    </TouchableOpacity> */}
                                </View>

                            }
                        />
                        <Text style={{ fontSize: px2dp(16), fontFamily: 'fantasy', fontWeight: 'bold',color:'#000', textAlign: 'center', textDecorationStyle: 'dashed', }}>Or</Text>
                        <View style={{ flex: 1, width: "100%", marginTop: px2dp(20), alignItems: "center", backgroundColor: '#f6f7f8', borderTopLeftRadius: px2dp(30), borderTopRightRadius: px2dp(30) }}>
                            <View style={{ flexDirection: 'row', height: px2dp(60), marginBottom: px2dp(20),marginRight:'15%',}}>
                                <View style={{ width: px2dp(30), height: px2dp(30), borderRadius: px2dp(50),marginLeft: '20%', marginTop: px2dp(20), backgroundColor: '#000', }}>
                                    <Text style={{ fontSize: px2dp(20), height: px2dp(30), lineHeight: px2dp(30), fontWeight: 'bold', fontFamily: 'fantasy', color: '#fff', textAlign: 'center' }}>2</Text>
                                </View>
                                <Text style={{ fontSize: px2dp(16),height:px2dp(60), marginTop: px2dp(20), marginLeft: px2dp(14), fontFamily: 'fantasy', color: '#000' }}>{I18n.t('DietChartActivity.diet')}</Text>
                            </View>
                            <View style={{ width: '90%', height: px2dp(90), alignSelf: 'center', marginTop: px2dp(20) }}>
                                <Search
                                    ref={(ref) => { this.searchbox = ref }}
                                    onCancel={() => { this.setState({ items: [] }) }}
                                    onSearch={(text) => {
                                        this.load(text, 0)
                                    }}
                                />
                            </View>
                            <View style={{ width: "100%", alignItems: "center" }}>
                                <View style={{ width: "90%", flexDirection: "row", justifyContent: 'space-between', borderBottomColor: "#efefef", borderBottomWidth: 1 }}>
                                    <View ><Text style={{ textAlign: "center", fontSize: px2dp(14), fontFamily: 'fantasy', color: '#000' }}>{I18n.t('DietChartActivity.foodd')}</Text></View>
                                    <View ><Text style={{ textAlign: "center", fontSize: px2dp(14), fontFamily: 'fantasy', color: '#000' }}>{I18n.t('DietChartActivity.each')}</Text></View>
                                    <View ><Text style={{ textAlign: "right", fontSize: px2dp(14), fontFamily: 'fantasy', color: '#000' }}>{I18n.t('DietChartActivity.edit')}</Text></View>
                                </View>
                                <View style={{ width: "100%", height: px2dp(6) }}></View>
                            </View>
                            {this.state.dietbox.length == 0 ? null : this.state.dietbox.map((value) => { return value })}
                            <View style={{ width: "90%", alignSelf: 'center', marginTop: px2dp(20), height: px2dp(20), flexDirection: "row", justifyContent: 'space-between', borderTopColor: "#f6f7f8", borderTopWidth: 1, borderBottomColor: "#f6f7f8", borderBottomWidth: 1 }}>
                                <View style={{ width: "40%" }}><Text style={{ textAlign: 'left', fontSize: px2dp(14), fontFamily: 'fantasy', color: '#000', fontWeight: 'bold' }}>{I18n.t('DietChartActivity.caloriess')}</Text></View>
                                <View style={{ width: "60%" }}><Text style={{ textAlign: "justify", fontSize: px2dp(14), fontFamily: 'fantasy', color: '#000', fontWeight: 'bold' }}>{this.state.calories} {I18n.t('DietChartActivity.kcal')}</Text></View>
                            </View>
                            <View style={{ width: "100%", alignItems: "center" }}>
                                <View style={{ width: "90%", flexDirection: "row", height: px2dp(20), borderBottomColor: "#f6f7f8", marginBottom: px2dp(10), borderBottomWidth: 1 }}>
                                    <View style={{ width: "40%" }}><Text style={{ textAlign: 'justify', fontSize: px2dp(14), fontFamily: 'fantasy', color: '#000', fontWeight: 'bold' }}>{I18n.t('DietChartActivity.fat')}</Text></View>
                                    <View style={{ width: "60%" }}><Text style={{ textAlign: "justify", fontSize: px2dp(14), fontFamily: 'fantasy', color: '#000', fontWeight: 'bold' }}>{this.state.fat} {I18n.t('DietChartActivity.g')}</Text></View>
                                </View>
                            </View>
                            <View style={{ width: "90%", alignSelf: "center", marginTop: px2dp(20) }}>
                                <Button title="save" color='#404bc2' style={{ width: "100%", height: px2dp(40) }} onPress={() => {
                                    let uuid = decrypt(this.state.user.publickey, this.state.user.uuid)
                                    //解密
                                    // 关键点在于headers，因为默认Content-Type不是application/x-www-form-urlencoded，所以导致后台无法正确获取到q的值。body的写法也是一个重点
                                    fetch(data.url + "user/diet/update.jhtml", {
                                        method: "POST",
                                        headers: {
                                            'Content-Type': 'application/x-www-form-urlencoded'
                                        },
                                        body: "uuid=" + uuid + "&foodname=" + this.state.foodbox.join('|') + "&calories=" + this.state.calories + "&updateTime=" + new Date().getTime()
                                    }).then(res => res.text()).then((data) => {
                                        this.dietchart.load()
                                    })
                                }}></Button>
                            </View>
                            <View style={{ width: "100%", height: 30 }}></View>
                            <View>

                                {this.state.items.length == 0 ? null :
                                    <ScrollView keyboardShouldPersistTaps="always" style={{ backgroundColor: '#f8f8f8', width: "100%", height: 600 }}>
                                        {this.state.items}
                                        {this.state.isshow == true ?
                                            <View style={{ width: "100%", height: 30, flexDirection: "row" }}>
                                                <View style={{ width: "30%", height: 30 }}>
                                                    <Text style={{ width: "100%", textAlignVertical: "center", height: 30, textAlign: "right" }}>Total:{this.state.allpage} page</Text>
                                                </View>
                                                <View style={{ width: "40%" }}>
                                                    <TouchableOpacity onPress={() => {
                                                        if (this.state.curpage == 1) { return; }
                                                        let curpage = this.state.curpage - 1
                                                        this.setState({ curpage })
                                                        let index = this.state.index - 5
                                                        this.setState({ index })
                                                        this.load(this.state.text, index)
                                                    }}>
                                                        <Text style={{ color: "#404bc2", fontWeight: "bold", textAlignVertical: "center", height: "100%", textAlign: "right" }}>prev</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ width: "5%", height: 30 }}><Text style={{ textAlignVertical: "center", fontWeight: "bold", width: "100%", height: "100%", textAlign: "center" }}>{this.state.curpage}</Text></View>
                                                <View style={{ width: "10%" }}>
                                                    <TouchableOpacity onPress={() => {
                                                        if (curpage == this.state.total) { return; }
                                                        let curpage = this.state.curpage + 1
                                                        this.setState({ curpage })
                                                        let index = this.state.index + 5
                                                        this.setState({ index })
                                                        this.load(this.state.text, index)
                                                        this.setState({ greycolor: "#404bc2" })

                                                    }}>
                                                        <Text style={{ color: "#404bc2", fontWeight: "bold", textAlignVertical: "center", height: "100%", textAlign: "left" }}>next</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View> : null}

                                    </ScrollView>}
                            </View>
                        </View>
                    </View>

                </ScrollView >
            </View>
        );
    }
}

