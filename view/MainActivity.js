import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import TabHomeActivity from './TabHomeActivity';
import TabMallActivity from './TabMallActivity';
import TabAboutActivity from './TabAboutActivity';
import TabCenterActivity from './TabCenterActivity';
import { I18n } from '../locales/i18n';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { px2dp } from '../src/px2dp';
export default MainActivity = createBottomTabNavigator({
    Home: {
        screen: TabHomeActivity,
        navigationOptions: () => {
            //tab 的属性的属性
            return {
                tabBarLabel: I18n.t("MainActivity.home"),
                tabBarIcon: ({ tintColor, focused }) => (
                        focused ?
                            <Image
                                source={require("../image/tab/ic2_tab_home.png")}
                                style={styles.iconStyle} resizeMode='contain'
                            />
                            :
                            <Image
                                source={require("../image/tab/ic1_tab_home.png")}
                                style={styles.iconStyle} resizeMode='contain'
                            />
                    )
            }
        }
    },
    ABOUT: {
        screen: TabAboutActivity,
        navigationOptions: {
            //tab 属性
            tabBarLabel: I18n.t("MainActivity.about"),
            tabBarIcon: ({ tintColor, focused }) => (
                focused ?
                    <Image
                        source={require("../image/tab/ic2_tab_about.png")}
                        style={styles.iconStyle}resizeMode='contain'
                    />
                    :
                    <Image
                        source={require("../image/tab/ic1_tab_about.png")}
                        style={styles.iconStyle}resizeMode='contain'
                    />
            )
        }
    },
    SHOPPING: {
        screen: TabMallActivity,
        navigationOptions: {
            //tab 的属性
            tabBarLabel: I18n.t("MainActivity.shop"),
            tabBarIcon: ({ tintColor, focused }) => (
                focused ? <Image source={require("../image/tab/ic2_tab_mall.png")} style={styles.iconStyle} resizeMode='contain' />
                    :
                    <Image source={require("../image/tab/ic1_tab_mall.png")} style={styles.iconStyle} resizeMode='contain' />
            )
        }
    },



    EPICENTER: {
        screen: TabCenterActivity,
        navigationOptions: {
            //tab 属性
            tabBarLabel: I18n.t("MainActivity.epicenter"),
            tabBarIcon: ({ tintColor, focused }) => (
                focused ?
                    <Image
                        source={require("../image/tab/ic2_tab_user.png")}
                        style={styles.iconStyle} resizeMode='contain'
                    />
                    :
                    <Image
                        source={require("../image/tab/ic1_tab_user.png")}
                        style={styles.iconStyle} resizeMode='contain'
                    />
            )

        }
    },
},
    {
        //设置TabNavigator的位置
        tabBarPosition: 'bottom',
        //是否在更改标签时显示动画
        animationEnabled: true,
        //是否允许在标签之间进行滑动
        swipeEnabled: true,
        //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        backBehavior: "none",
        //进入App的首页
        initialRouteName: 'Home',
        //设置Tab标签的属性
        tabBarOptions: {
            //Android属性
            upperCaseLabel: false,//是否使标签大写，默认为true
            //共有属性
            showIcon: true,//是否显示图标，默认关闭
            showLabel: true,//是否显示label，默认开启
            activeTintColor: '#0071bc',//label和icon的前景色 活跃状态下（选中）
            inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        },
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName,
            headerStyle: { backgroundColor: '#f3f4f5', },
            headerTintColor: "#0071bc",
            headerStyle: { height: px2dp(56), backgroundColor: '#b6b7b8' },
        }),

    });
//导航条上的内容展示 TouchableOpacity 
MainActivity.navigationOptions = ({ navigation }) => {

    let { routeName } = navigation.state.routes[navigation.state.index];
    // You can do whatever you like here to pick the title based on the route name
    let headerTitle = routeName;
    return {
        headerTitle,
    };
};



const styles = StyleSheet.create({
    iconStyle: {
        width: Platform.OS === 'ios' ? px2dp(25) : px2dp(25),
        height: Platform.OS === 'ios' ? px2dp(25) : px2dp(25)
    },
});
