import React, { Component } from 'react';

import { Text, View, TouchableOpacity, ScrollView, Alert ,ActivityIndicator} from 'react-native';
import Toast from 'react-native-root-toast';
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n';
import md5 from "react-native-md5";
import Session from '../storage/Session';
import RNFS from 'react-native-fs'
import data from '../appdata'
import { px2dp } from '../src/px2dp'
import { RaisedTextButton } from 'react-native-material-buttons';
import { OutlinedTextField } from 'rn-material-ui-textfield'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


export default class LoginActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("LoginActivity.title"),
            headerRight: null
        })
    }

    constructor(props) {
        super(props);
        this.onFocus = this.onFocus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);

        this.onSubmitEmail = this.onSubmitEmail.bind(this);
        this.onSubmitPassword = this.onSubmitPassword.bind(this);

        this.onAccessoryPress = this.onAccessoryPress.bind(this);
        this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);

        this.emailRef = this.updateRef.bind(this, 'email');
        this.passwordRef = this.updateRef.bind(this, 'password');

        this.state = { animating: false, disabled: true, secureTextEntry: true,signin:true };
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
     
        ['email', 'password']
        .map((name) => ({ name, ref: this[name] }))
        .forEach(({ name, ref }) => {
            if (ref.isFocused()) {
                this.setState({ [name]: text });
            }
        });
        if(this.state.email&&this.state.password){
            this.setState({signin:false})
        }
        console.info(text)
    }

    onAccessoryPress() {
        this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
    }

    onSubmitEmail() {
        this.email.focus();
    }
    onSubmitPassword() {
        this.password.blur();
    }
    onSubmit() {
        this.setState({ animating: true,signin:true })
        let errors = {};
        let success = true;
        let url = data.url + "user/login.jhtml?email=" + this.state.email + "&password=" + md5.hex_md5(this.state.password);
        ['email', 'password']
        .forEach((name) => {
                let value = this[name].value();
                if ('email' === name && !(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value))) {
                    errors[name] = 'Email invlid';
                    this.setState({signin:false});
                    success = false
                } else if ('password' === name && !value) {
                    errors[name] = 'Should not be empty';
                    this.setState({signin:false});
                    success = false
                }
            });
                if (success = true) {
                    fetch(url, { method: 'GET' }).then(res => res.json())
                        .then(sessionuser => {
                            if (sessionuser.mail == null) { Toast.show(I18n.t("LoginActivity.Invalid.Email"), { duration: 7000, position: Toast.positions.CENTER });this.setState({ signin: false,animating:false }); return; }
                            else {
                                if (sessionuser.password != md5.hex_md5(this.state.password)) {Toast.show(I18n.t("LoginActivity.Invalid.PWD"), { duration: 7000, position: Toast.positions.CENTER });this.setState({ signin: false ,animating:false}); return; }
                                if (sessionuser.valid == 0) { Toast.show(I18n.t("LoginActivity.Invalid.unactive"), { duration: 7000, position: Toast.positions.CENTER });this.setState({ signin: false,animating:false }); return; }
                                
                                this.setState({ disabled: true })
                                Session.save("sessionuser", sessionuser)
                                let path = RNFS.DocumentDirectoryPath + '/' + md5.hex_md5(sessionuser.mail) + '.txt'
                                RNFS.exists(path).then((exists) => {
                                    let jumpPage = "Main"
                                    if (exists) {
                                        RNFS.readFile(path).then((result) => {
                                            sessionuser.publickey = result ? result.split(":")[0] : ""
                                            sessionuser.privatekey = result ? result.split(":")[1] : ""
                                            Session.save("sessionuser", sessionuser)
                                            this.setState({ animating: false })
                                            if (sessionuser.publickey != "" && sessionuser.privatekey != "") {
                                                const resetAction = StackActions.reset({
                                                    index: 0,
                                                    actions: [NavigationActions.navigate({ routeName: "Main" })],
                                                });
                                                this.props.navigation.dispatch(resetAction);
                                            }
                                          
                                        }).catch((e) => {
                                            console.info(e)
                                            Alert.alert("Message", e)
                                        });
                                    } else {
                                        jumpPage = "RasEncryptionActivity"
                                    }
                                    const resetAction = StackActions.reset({
                                        index: 0,
                                        actions: [NavigationActions.navigate({ routeName: jumpPage })],
                                    });
                                    this.props.navigation.dispatch(resetAction);
                                })



                            }
                        })
                        .catch((e) => {
                            console.info(e)
                            Toast.show(I18n.t("LoginActivity.Invalid.NetFail"))
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

render() {
    this.navigate = this.props.navigation;
    let { errors = {}, secureTextEntry, resecureTextEntry, ...data } = this.state;
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <View style={{ height: px2dp(60),width:"100%"}}></View>
                    {this.state.animating ? <ActivityIndicator size="large" color="#404cb2" /> : null}
                    <View style={{ marginBottom: px2dp(10), marginTop: px2dp(120) }}>
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
                            characterRestriction={20}
                            renderRightAccessory={this.renderPasswordAccessory}
                        />
                    </View>
                    <View style={{ marginTop: px2dp(20) }}>
                        <RaisedTextButton
                        disabled={this.state.signin}
                            onPress={this.onSubmit}
                            title='Sign In'
                            color={'#404bc2'}
                            titleColor='white'
                            style={{ height: px2dp(40) }}
                        />

                    </View>
                    <View style={{ height: px2dp(60), alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.navigate.push("Forget")}>
                            <Text style={{ fontSize: px2dp(14), color: '#404bc2',fontWeight:'bold',textDecorationLine:'underline',fontFamily: 'fantasy',  }}>{I18n.t('LoginActivity.ForgetPwd')}</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={{flex:1,marginTop:px2dp(120), height: px2dp(60),flexDirection:'row', alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{fontWeight:'bold' ,fontSize: px2dp(14),fontFamily: 'fantasy',  }}>{I18n.t('LoginActivity.noaccount')}</Text>
                        <TouchableOpacity  onPress={() => this.navigate.push("Register")}>
                            <Text style={{paddingLeft:px2dp(5), color: '#404bc2',textDecorationLine:'underline',fontWeight:'bold',fontFamily: 'fantasy',  }}>{I18n.t('LoginActivity.register')}</Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
        </View>
    );
}
}

