import React, { Component, useState } from 'react';
import { Text, View, Button, StatusBar, TextInput, ScrollView, StyleSheet, TouchableOpacity, Alert, FetchResult, } from 'react-native';
import { I18n } from '../locales/i18n';
import data from '../appdata'
import { px2dp } from '../src/px2dp'
import { RaisedTextButton } from 'react-native-material-buttons';
import { OutlinedTextField } from 'rn-material-ui-textfield'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { SwipeablePanel } from 'rn-swipeable-panel';
const style = {
    regionstyle: {
        height: px2dp(45),
        lineHeight: px2dp(45),
        color: "#000",
        paddingLeft: px2dp(20),
        textAlign: "left",
        borderBottomWidth: px2dp(1),
        borderBottomColor: "#DCDCDC",
    },
}
export default class RegisterActivity extends Component<Props> {

    constructor(props) {
        super(props);
        this.onFocusRegion = this.onFocusRegion.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmitRegion = this.onSubmitRegion.bind(this);
        this.onSubmitUserName = this.onSubmitUserName.bind(this);
        this.onSubmitEmail = this.onSubmitEmail.bind(this);
        this.onSubmitPassword = this.onSubmitPassword.bind(this);
        this.onSubmitConfirmpw = this.onSubmitConfirmpw.bind(this);
        this.onAccessoryPress = this.onAccessoryPress.bind(this);
        this.onreAccessoryPress = this.onreAccessoryPress.bind(this);

        this.RegionRef = this.updateRef.bind(this, 'region');
        this.usernameRef = this.updateRef.bind(this, 'username');
        this.emailRef = this.updateRef.bind(this, 'email');
        this.passwordRef = this.updateRef.bind(this, 'password');
        this.confirmpwRef = this.updateRef.bind(this, 'confirmpw');

        this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);
        this.renderConfirmpwAccessory = this.renderConfirmpwAccessory.bind(this);
        this.state = {
            checked: false,
            region: "",
            secureTextEntry: true,
            resecureTextEntry: true,
            swipeablePanelActive: false
        };
    }

    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("RegisterActivity.title"),
            
        })
    }
    onFocusRegion() {
        let { errors = {} } = this.state;
        delete errors['region'];
        this.setState({ swipeablePanelActive: true });
    }
    onFocus() {
        let { errors = {} } = this.state;

        for (let name in errors) {
            let ref = this[name];

            if (ref && ref.isFocused()) {
                delete errors[name];
            }
        }

        this.setState({ errors });
    }

    onChangeText(text) {
        ['region', 'username', 'email', 'password', 'confirmpw']
            .map((name) => ({ name, ref: this[name] }))
            .forEach(({ name, ref }) => {
                if (ref.isFocused()) {
                    this.setState({ [name]: text });
                }
            });
    }

    onAccessoryPress() {
        this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
    }
    onreAccessoryPress() {
        this.setState(({ resecureTextEntry }) => ({ resecureTextEntry: !resecureTextEntry }));
    }
    onSubmitRegion() {
        this.region.focus();
    }
    onSubmitUserName() {
        this.username.focus();
    }
    onSubmitEmail() {
        this.email.focus();
    }
    onSubmitPassword() {
        this.password.blur();
    }
    onSubmitConfirmpw() {
        this.confirmpw.blur();
    }


    onSubmit() {
        let errors = {};
        let success = true;
        ['region', 'username', 'email', 'password', 'confirmpw']
            .forEach((name) => {
                let value = this[name].value();
                if ('region' === name && !value) {
                    errors[name] = 'Should not be empty';
                    success = false

                } else if ('username' === name && !value) {
                    errors[name] = 'Should not be empty';
                } else if ('email' === name && !(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value))) {
                    errors[name] = 'Email invlid';
                    success = false
                } else if ('password' === name && !value) {
                    errors[name] = 'Should not be empty';
                    success = false
                    if ('password' === name && value.length < 6) {
                        errors[name] = 'Too short'
                        success = false
                    }

                } else if ('confirmpw' === name && value !== this['password'].value()) {
                    errors[name] = 'Different from the previous one'
                    success = false
                }
            });


        if (success == true) {
            // 关键点在于headers，因为默认Content-Type不是application/x-www-form-urlencoded，所以导致后台无法正确获取到q的值。body的写法也是一个重点
            fetch(data.url + "/user/register.jhtml", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: "mail=" + this.state.email + "&password=" + this.state.password + "&nickname=" + this.state.nickname + "&region=" + this.state.region
            }).then(res => res.text()).then((data) => {
                if (data == "error") {
                    Alert.alert(I18n.t('RegisterActivity.message'), I18n.t('RegisterActivity.registered'))
                    return
                }
                if (data == "success") {
                    Alert.alert(I18n.t('RegisterActivity.message'), I18n.t('RegisterActivity.activation'))
                    return
                }
                if (data = "network-error") {
                    Alert.alert(I18n.t('RegisterActivity.message'), I18n.t('RegisterActivity.again'))
                    return
                }
            })
        } else {

            this.setState({ errors });
        }
    }

    updateRef(name, ref) {
        this[name] = ref;
    }
    renderPasswordAccessory() {
        let { secureTextEntry } = this.state;

        let name = secureTextEntry ?
            'visibility' :
            'visibility-off';

        return (
            <MaterialIcon
                size={24}
                name={name}
                color={OutlinedTextField.defaultProps.baseColor}
                onPress={this.onAccessoryPress}
                suppressHighlighting={true}
            />
        );
    }
    renderConfirmpwAccessory() {
        let { resecureTextEntry } = this.state;

        let name = resecureTextEntry ?
            'visibility' :
            'visibility-off';

        return (
            <MaterialIcon
                size={24}
                name={name}
                color={OutlinedTextField.defaultProps.baseColor}
                onPress={this.onreAccessoryPress}
                suppressHighlighting={true}
            />
        );
    }

    render() {
        this.navigate = this.props.navigation;
        //const navigator=this.props.navitation;//此处可以自定义跳转属性
        let { errors = {}, secureTextEntry, resecureTextEntry, ...data } = this.state;


        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <StatusBar animated={true} hidden={true} translucent={true} barStyle={'light-content'} />

                    <View style={{ flex: 1 }}>
                        <View style={{ marginTop: px2dp(30), width: '90%', alignSelf: 'center' }}>
                            <View style={{ marginBottom: px2dp(10) }}>
                                <OutlinedTextField
                                    ref={this.RegionRef}
                                    value={this.state.region}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocusRegion}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitRegion}
                                    returnKeyType='next'
                                    label='Region'
                                    error={errors.region}
                                />
                            </View>
                            <View style={{ marginBottom: px2dp(10) }}>
                                <OutlinedTextField
                                    ref={this.usernameRef}
                                    value={this.state.username}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitUserName}
                                    returnKeyType='next'
                                    label='User Name'
                                    error={errors.username}
                                />
                            </View>
                            <View style={{ marginBottom: px2dp(10) }}>
                                <OutlinedTextField
                                    ref={this.emailRef}
                                    value={this.state.email}
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitEmail}
                                    returnKeyType='next'
                                    label='Email Address'
                                    error={errors.email}
                                />
                            </View>
                            <View style={{ marginBottom: px2dp(10) }}>
                                <OutlinedTextField
                                    ref={this.passwordRef}
                                    secureTextEntry={secureTextEntry}
                                    value={this.state.password}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    clearTextOnFocus={false}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitPassword}
                                    returnKeyType='done'
                                    label='Password'
                                    error={errors.password}
                                    maxLength={30}
                                    characterRestriction={20}
                                    renderRightAccessory={this.renderPasswordAccessory}
                                />
                            </View>
                                <OutlinedTextField
                                    ref={this.confirmpwRef}
                                    secureTextEntry={resecureTextEntry}
                                    value={this.state.confirmpw}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    clearTextOnFocus={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitConfirmpw}
                                    returnKeyType='done'
                                    label='Confirm Password'
                                    error={errors.confirmpw}
                                    maxLength={30}
                                    characterRestriction={20}
                                    renderRightAccessory={this.renderConfirmpwAccessory}
                                />
                            <View style={{ marginTop: px2dp(20) }}>
                                <RaisedTextButton
                                    onPress={this.onSubmit}
                                    title='Sign Up'
                                    color={OutlinedTextField.defaultProps.tintColor}
                                    titleColor='white'
                                    style={{ height: px2dp(40) }}
                                />

                            </View>
                            <View style={{ height: px2dp(40), width: '90%',margin:px2dp(10), alignSelf: 'center',justifyContent: 'center' }}>
                                <Text style={{ height: px2dp(40),width: '90%', fontSize: px2dp(14),fontWeight:'bold',textAlign:'center' }} > {I18n.t('RegisterActivity.agree')}
                                    <Text onPress={() => this.navigate.push("Consent")} style={{ color: '#0071bc'}}> {I18n.t('RegisterActivity.privacy')}</Text>
                                </Text>
                            </View>
                            <View style={{ height: px2dp(20),marginTop:px2dp(50), alignItems: 'center', justifyContent: 'center' ,flexDirection:'row'}} >
                                <Text style={{fontSize:px2dp(14), fontWeight:'bold' }}>{I18n.t('RegisterActivity.account')}</Text>
                                <TouchableOpacity onPress={() => this.navigate.push("Login")}>
                                    <Text style={{paddingLeft:px2dp(5), color: '#0071bc',textDecorationLine:'underline',fontWeight:'bold' }}>{I18n.t('RegisterActivity.login')}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <SwipeablePanel
                    fullWidth={true}
                    showCloseButton={true}
                    closeOnTouchOutside={true}
                    isActive={this.state.swipeablePanelActive}
                    onClose={() => { this.setState({ swipeablePanelActive: false }) }}
                    onPressCloseButton={() => { this.setState({ swipeablePanelActive: false }) }}
                >
                    <ScrollView>
                        <View style={{ width: '100%', alignSelf: 'center', margin: px2dp(10) }}>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Afghanistan (‫افغانستان‬‎)", swipeablePanelActive: false }) }}>Afghanistan (‫افغانستان‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Åland Islands (Åland)", swipeablePanelActive: false }) }}>Åland Islands (Åland)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Albania (Shqipëria)", swipeablePanelActive: false }) }}>Albania (Shqipëria)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Algeria (‫الجزائر‬‎)", swipeablePanelActive: false }) }}>Algeria (‫الجزائر‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "American Samoa", swipeablePanelActive: false }) }}>American Samoa</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Andorra", swipeablePanelActive: false }) }}>Andorra</Text>
                        </View>
                    </ScrollView>
                </SwipeablePanel>
            </View>
        );
    }
}

