import React, { Component } from 'react';
import { I18n } from '../locales/i18n'
import data from '../appdata'
import Input from "react-native-input-validation"
import { Platform, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Button } from 'react-native';
import { px2dp } from '../src/px2dp';


export default class ForgetActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ForgetActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = { disabled: false }
    }

    render() {
        const navigate = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'}>
                    </StatusBar>
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <View style={{ height: px2dp(40), marginTop: px2dp(200), alignItems: 'flex-start', fontSize: px2dp(14), justifyContent: 'flex-start' }} >
                            <Text style={{ color: '#000000', lineHeight: px2dp(20), fontSize: px2dp(14), fontWeight: 'bold', textAlign: 'center' }}>{I18n.t('ForgetActivity.link')}</Text>
                        </View>
                        <View style={{ height: px2dp(50), marginTop: px2dp(20), marginBottom: px2dp(50), width: "100%" }}>
                            <Input style={{
                                height: px2dp(50),
                                width: '100%',
                                borderRadius: px2dp(5),
                                borderWidth: px2dp(1),
                                borderColor: '#b3b3b3',
                                fontSize: px2dp(16),
                            }}
                                errorInputContainerStyle={{ borderColor: '#FF0000', borderWidth: px2dp(2), borderRadius: px2dp(5),height:px2dp(49),width:'100%' }}
                                errorMessage={I18n.t("LoginActivity.mailboxformatFail")}
                                placeholder="Email"
                                validator="email"
                                onValidatorExecuted={(isValid) => { this.setState({ disabled: !isValid }) }}
                                validatorExecutionDelay={100}
                                onChangeText={(email) => { this.setState({ email: email }) }}
                            />
                        </View>

                        <View>
                            <TouchableOpacity >
                                <Button title={I18n.t("ForgetActivity.title")} disabled={this.state.disabled} onPress={() => {
                                    if (!this.state.email) { this.setState({ disabled: true }); return }
                                    fetch(data.url + "user/sendpaswd.jhtml?email=" + this.state.email).then((data) => { data.text() }).then((data) => {
                                        Alert.alert("The reset password link has been sent to your mailbox")
                                    })
                                }} style={{ height: px2dp(50), borderRadius: px2dp(5) }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: px2dp(60), flexDirection: 'row', marginTop: px2dp(150), alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: px2dp(14), fontWeight: 'bold' }}>{I18n.t('ForgetActivity.back')}</Text>
                            <TouchableOpacity onPress={() => navigate.push("Login")}>
                                <Text style={{ fontSize: px2dp(14), color: '#0071bc', fontWeight: 'bold', paddingLeft: px2dp(5) }}>{I18n.t('ForgetActivity.link2')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

