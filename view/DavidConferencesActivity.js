import React, { Component } from 'react';
import { StyleSheet, StatusBar, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { WebView } from 'react-native-webview';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';




type Props = {};
export default class DavidConferencesActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t('DavidActivity.conferences'),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView style={{flex:1}}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>

                {/* 荣誉 */}
                <View>
                    <Text style={{ width: '90%', height:px2dp(67) , alignSelf: 'center', fontFamily: 'fantasy', fontSize:px2dp(28) , lineheight:px2dp(67) , fontWeight: 'bold' }}>{I18n.t('DavidActivity.conferences')}</Text>
                </View>
                <View style={{ marginTop:px2dp(20) , marginBottom:px2dp(20)  }}>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16)  }}>●</Text><Text style={{ width: '76%', fontFamily: 'fantasy', lineheight:px2dp(21) , marginBottom:px2dp(18)  }}>{I18n.t('DavidActivity.forum')}<Text style={{width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.india')}</Text></Text>
                        </View>
                    </View>

                    <View style={{ width: '90%', alignSelf: 'center', paddingTop: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16)  }}>●</Text><Text style={{ width: '76%', fontFamily: 'fantasy', lineheight:px2dp(21) , marginBottom:px2dp(18)  }}>{I18n.t('DavidActivity.diseases')}<Text style={{width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.canadaa')}</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16)  }}>●</Text><Text style={{ width: '76%', fontFamily: 'fantasy', lineheight:px2dp(21) , marginBottom:px2dp(18)  }}>{I18n.t('DavidActivity.conference')}<Text style={{width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.newyork')}</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16)  }}>●</Text><Text style={{ width: '76%', fontFamily: 'fantasy', lineheight:px2dp(21) , marginBottom:px2dp(18)  }}>{I18n.t('DavidActivity.first')}<Text style={{width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.erat')}</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16)  }}>●</Text><Text style={{ width: '76%', fontFamily: 'fantasy', lineheight:px2dp(21) , marginBottom:px2dp(18)  }}>{I18n.t('DavidActivity.reseach')}<Text style={{width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.oslo')}</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16)  }}>●</Text><Text style={{ width: '76%', fontFamily: 'fantasy', lineheight:px2dp(21) , marginBottom:px2dp(18)  }}>{I18n.t('DavidActivity.cell')}<Text style={{width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.france')}</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16)  }}>●</Text><Text style={{ width: '76%', fontFamily: 'fantasy', lineheight:px2dp(21) , marginBottom:px2dp(18)  }}>{I18n.t('DavidActivity.basic')}<Text style={{width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.newyork')}</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', paddingTop: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'fantasy', fontSize:px2dp(16)  }}>●</Text><Text style={{ width: '76%', fontFamily: 'fantasy', lineheight:px2dp(21) , marginBottom:px2dp(18)  }}>{I18n.t('DavidActivity.health')}<Text style={{width: '18%', fontWeight: '700', fontStyle: 'italic', fontFamily: 'fantasy' }}>{I18n.t('DavidActivity.london')}</Text></Text>
                        </View>
                    </View>


                </View>

               
            </ScrollView >

        );
    }
}

