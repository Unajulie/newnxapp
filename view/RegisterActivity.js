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
                    this.setState({ [name]: text.split(" ").join("") });
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
                console.info(value+"ppppppppppppppp")
                // console.info("test email"+value.split(" ").join(""))
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

                } else if ('confirmpw' === name && value && value !== this['password'].value()) {
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
                                    onFocus={this.onFocusRegion}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitRegion}
                                    label='Region'
                                    error={errors.region}
                                />
                            </View>
                            <View style={{ marginBottom: px2dp(10) }}>
                                <OutlinedTextField
                                    ref={this.usernameRef}
                                    value={this.state.username}
                                    autoCorrect={false}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitUserName}
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
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitEmail}
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
                            <OutlinedTextField
                                ref={this.confirmpwRef}
                                secureTextEntry={resecureTextEntry}
                                value={this.state.confirmpw}
                                autoCapitalize='none'
                                autoCorrect={false}
                                clearTextOnFocus={true}
                                onFocus={this.onFocus}
                                onChangeText={this.onChangeText}
                                onSubmitEditing={this.onSubmitConfirmpw}
                                returnKeyType='done'
                                label='Confirm Password'
                                error={errors.confirmpw}
                                characterRestriction={20}
                                renderRightAccessory={this.renderConfirmpwAccessory}
                            />
                            <View style={{ marginTop: px2dp(20) }}>
                                <RaisedTextButton
                                    onPress={this.onSubmit}
                                    title='Sign Up'
                                    color={'#404bc2'}
                                    titleColor='white'
                                    style={{ height: px2dp(40) }}
                                />

                            </View>
                            <View style={{ height: px2dp(40), width: '90%', margin: px2dp(10),marginTop:px2dp(20), alignSelf: 'center', justifyContent: 'center' }}>
                                <Text style={{ height: px2dp(40), width: '90%', fontSize: px2dp(14), fontWeight: 'bold', textAlign: 'center',fontFamily: 'fantasy', }} > {I18n.t('RegisterActivity.agree')}
                                    <Text onPress={() => this.navigate.push("Consent")} style={{ color: '#404bc2', fontFamily: 'fantasy', fontSize: px2dp(14) }}> {I18n.t('RegisterActivity.privacy')}</Text>
                                </Text>
                            </View>
                            <View style={{ height: px2dp(20), marginTop: px2dp(30), alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }} >
                                <Text style={{ fontSize: px2dp(14), fontWeight: 'bold',fontFamily: 'fantasy', }}>{I18n.t('RegisterActivity.account')}</Text>
                                <TouchableOpacity onPress={() => this.navigate.push("Login")}>
                                    <Text style={{ paddingLeft: px2dp(5), color: '#404bc2', textDecorationLine: 'underline', fontWeight: 'bold', fontFamily: 'fantasy', fontSize: px2dp(14) }}>{I18n.t('RegisterActivity.login')}</Text>
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
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Angola", swipeablePanelActive: false }) }}>Angola</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Anguilla", swipeablePanelActive: false }) }}>Anguilla</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Antarctica", swipeablePanelActive: false }) }}>Antarctica</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Antigua and Barbuda", swipeablePanelActive: false }) }}>Antigua and Barbuda</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Argentina", swipeablePanelActive: false }) }}>Argentina</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Armenia (Հայաստան)", swipeablePanelActive: false }) }}>Armenia (Հայաստան)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Aruba", swipeablePanelActive: false }) }}>Aruba</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Ascension Island", swipeablePanelActive: false }) }}>Ascension Island</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Australia", swipeablePanelActive: false }) }}>Australia</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Austria (Österreich)", swipeablePanelActive: false }) }}>Austria (Österreich)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Azerbaijan (Azərbaycan)", swipeablePanelActive: false }) }}>Azerbaijan (Azərbaycan)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Bahamas", swipeablePanelActive: false }) }}>Bahamas</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Bahrain (‫البحرين‬‎)", swipeablePanelActive: false }) }}>Bahrain (‫البحرين‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Bangladesh (বাংলাদেশ)", swipeablePanelActive: false }) }}>Bangladesh (বাংলাদেশ)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Barbados", swipeablePanelActive: false }) }}>Barbados</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Belarus (Беларусь)", swipeablePanelActive: false }) }}>Belarus (Беларусь)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Belgium (België)", swipeablePanelActive: false }) }}>Belgium (België)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Belize", swipeablePanelActive: false }) }}>Belize</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Benin (Bénin)", swipeablePanelActive: false }) }}>Benin (Bénin)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Bermuda", swipeablePanelActive: false }) }}>Bermuda</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Bhutan (འབྲུག)'", swipeablePanelActive: false }) }}>Bhutan (འབྲུག)'</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Bolivia", swipeablePanelActive: false }) }}>Bolivia</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Bosnia and Herzegovina (Босна и Херцеговина)", swipeablePanelActive: false }) }}>Bosnia and Herzegovina (Босна и Херцеговина)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Botswana", swipeablePanelActive: false }) }}>Botswana</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Bouvet Island", swipeablePanelActive: false }) }}>Bouvet Island</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Brazil (Brasil)", swipeablePanelActive: false }) }}>Brazil (Brasil)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "British Indian Ocean Territory", swipeablePanelActive: false }) }}>British Indian Ocean Territory</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "British Virgin Islands", swipeablePanelActive: false }) }}>British Virgin Islands</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Brunei", swipeablePanelActive: false }) }}>Brunei</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Bulgaria (България)", swipeablePanelActive: false }) }}>Bulgaria (България)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Burkina Faso", swipeablePanelActive: false }) }}>Burkina Faso</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Burundi (Uburundi)", swipeablePanelActive: false }) }}>Burundi (Uburundi)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Cambodia (កម្ពុជា)'", swipeablePanelActive: false }) }}>Cambodia (កម្ពុជា)'</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Cameroon (Cameroun)", swipeablePanelActive: false }) }}>Cameroon (Cameroun)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Canada", swipeablePanelActive: false }) }}>Canada</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Canary Islands (Islas Canarias)", swipeablePanelActive: false }) }}>Canary Islands (Islas Canarias)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Cape Verde (Kabu Verdi)", swipeablePanelActive: false }) }}>Cape Verde (Kabu Verdi)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Caribbean Netherlands", swipeablePanelActive: false }) }}>Caribbean Netherlands</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Cayman Islands", swipeablePanelActive: false }) }}>Cayman Islands</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Central African Republic (République centrafricaine)", swipeablePanelActive: false }) }}>Central African Republic (République centrafricaine)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Ceuta and Melilla (Ceuta y Melilla)", swipeablePanelActive: false }) }}>Ceuta and Melilla (Ceuta y Melilla)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Chad (Tchad)", swipeablePanelActive: false }) }}>Chad (Tchad)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Chile", swipeablePanelActive: false }) }}>Chile</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "China (中国)", swipeablePanelActive: false }) }}>China (中国)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Christmas Island", swipeablePanelActive: false }) }}>Christmas Island</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Clipperton Island (Île Clipperton)", swipeablePanelActive: false }) }}>Clipperton Island (Île Clipperton)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Cocos [Keeling] Islands", swipeablePanelActive: false }) }}>Cocos [Keeling] Islands</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Colombia", swipeablePanelActive: false }) }}>Colombia</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Comoros (‫جزر القمر‬‎)", swipeablePanelActive: false }) }}>Comoros (‫جزر القمر‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Congo [DRC] (Jamhuri ya Kidemokrasia ya Kongo)", swipeablePanelActive: false }) }}>Congo [DRC] (Jamhuri ya Kidemokrasia ya Kongo)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Congo [Republic] (Congo-Brazzaville)", swipeablePanelActive: false }) }}>Congo [Republic] (Congo-Brazzaville)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Cook Islands", swipeablePanelActive: false }) }}>Cook Islands</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Costa Rica", swipeablePanelActive: false }) }}>Costa Rica</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Côte d’Ivoire", swipeablePanelActive: false }) }}>Côte d’Ivoire</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Cuba", swipeablePanelActive: false }) }}>Cuba</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Curaçao", swipeablePanelActive: false }) }}>Curaçao</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Cyprus (Κύπρος)", swipeablePanelActive: false }) }}>Cyprus (Κύπρος)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Czech Republic (Česká republika)", swipeablePanelActive: false }) }}>Czech Republic (Česká republika)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Denmark (Danmark)", swipeablePanelActive: false }) }}>Denmark (Danmark)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Diego Garcia", swipeablePanelActive: false }) }}>Diego Garcia</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Djibouti", swipeablePanelActive: false }) }}>Djibouti</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Dominica", swipeablePanelActive: false }) }}>Dominica</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Dominican Republic (República Dominicana)", swipeablePanelActive: false }) }}>Dominican Republic (República Dominicana)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Ecuador", swipeablePanelActive: false }) }}>Ecuador</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Egypt (‫مصر‬‎)", swipeablePanelActive: false }) }}>Egypt (‫مصر‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "El Salvador", swipeablePanelActive: false }) }}>El Salvador</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Equatorial Guinea (Guinea Ecuatorial)", swipeablePanelActive: false }) }}>Equatorial Guinea (Guinea Ecuatorial)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Eritrea", swipeablePanelActive: false }) }}>Eritrea</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Estonia (Eesti)", swipeablePanelActive: false }) }}>Estonia (Eesti)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Ethiopia", swipeablePanelActive: false }) }}>Ethiopia</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Falkland Islands [Islas Malvinas]", swipeablePanelActive: false }) }}>Falkland Islands [Islas Malvinas]</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Faroe Islands (Føroyar)", swipeablePanelActive: false }) }}>Faroe Islands (Føroyar)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Fiji", swipeablePanelActive: false }) }}>Fiji</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Finland (Suomi)", swipeablePanelActive: false }) }}>Finland (Suomi)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "France", swipeablePanelActive: false }) }}>France</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "French Guiana (Guyane française)", swipeablePanelActive: false }) }}>French Guiana (Guyane française)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "French Polynesia (Polynésie française)", swipeablePanelActive: false }) }}>French Polynesia (Polynésie française)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "French Southern Territories (Terres australes françaises)", swipeablePanelActive: false }) }}>French Southern Territories (Terres australes françaises)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Gabon", swipeablePanelActive: false }) }}>Gabon</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Gambia", swipeablePanelActive: false }) }}>Gambia</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Georgia (საქართველო)", swipeablePanelActive: false }) }}>Georgia (საქართველო)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Germany (Deutschland)", swipeablePanelActive: false }) }}>Germany (Deutschland)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Ghana (Gaana)", swipeablePanelActive: false }) }}>Ghana (Gaana)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Gibraltar", swipeablePanelActive: false }) }}>Gibraltar</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Greece (Ελλάδα)", swipeablePanelActive: false }) }}>Greece (Ελλάδα)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Greenland (Kalaallit Nunaat)", swipeablePanelActive: false }) }}>Greenland (Kalaallit Nunaat)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Grenada", swipeablePanelActive: false }) }}>Grenada</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Guadeloupe", swipeablePanelActive: false }) }}>Guadeloupe</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Guam", swipeablePanelActive: false }) }}>Guam</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Guatemala", swipeablePanelActive: false }) }}>Guatemala</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Guernsey", swipeablePanelActive: false }) }}>Guernsey</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Guinea (Guinée)", swipeablePanelActive: false }) }}>Guinea (Guinée)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Guinea-Bissau (Guiné Bissau)", swipeablePanelActive: false }) }}>Guinea-Bissau (Guiné Bissau)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Guyana", swipeablePanelActive: false }) }}>Guyana</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Haiti", swipeablePanelActive: false }) }}>Haiti</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Heard Island and McDonald Islands", swipeablePanelActive: false }) }}>Heard Island and McDonald Islands</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Honduras", swipeablePanelActive: false }) }}>Honduras</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Hong Kong (香港)", swipeablePanelActive: false }) }}>Hong Kong (香港)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Hungary (Magyarország)", swipeablePanelActive: false }) }}>Hungary (Magyarország)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Iceland (Ísland)", swipeablePanelActive: false }) }}>Iceland (Ísland)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "India (भारत)'", swipeablePanelActive: false }) }}>India (भारत)'</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Indonesia", swipeablePanelActive: false }) }}>Indonesia</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Iran (‫ایران‬‎)", swipeablePanelActive: false }) }}>Iran (‫ایران‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Ireland", swipeablePanelActive: false }) }}>Ireland</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Isle of Man", swipeablePanelActive: false }) }}>Isle of Man</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Israel (‫ישראל‬‎)", swipeablePanelActive: false }) }}>Israel (‫ישראל‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Italy (Italia)", swipeablePanelActive: false }) }}>Italy (Italia)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Jamaica", swipeablePanelActive: false }) }}>Jamaica</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Japan (日本)", swipeablePanelActive: false }) }}>Japan (日本)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Jersey", swipeablePanelActive: false }) }}>Jersey</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Jordan (‫الأردن‬‎)", swipeablePanelActive: false }) }}>Jordan (‫الأردن‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Kazakhstan (Казахстан)", swipeablePanelActive: false }) }}>Kazakhstan (Казахстан)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Kenya", swipeablePanelActive: false }) }}>Kenya</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Kiribati", swipeablePanelActive: false }) }}>Kiribati</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Kosovo (Косово)", swipeablePanelActive: false }) }}>Kosovo (Косово)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Kuwait (‫الكويت‬‎)", swipeablePanelActive: false }) }}>Kuwait (‫الكويت‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Kyrgyzstan", swipeablePanelActive: false }) }}>Kyrgyzstan</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Laos (ສ.ປ.ປ ລາວ)", swipeablePanelActive: false }) }}>Laos (ສ.ປ.ປ ລາວ)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Latvia (Latvija)", swipeablePanelActive: false }) }}>Latvia (Latvija)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Lebanon (‫لبنان‬‎)", swipeablePanelActive: false }) }}>Lebanon (‫لبنان‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Lesotho", swipeablePanelActive: false }) }}>Lesotho</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Liberia", swipeablePanelActive: false }) }}>Liberia</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Libya (‫ليبيا‬‎)", swipeablePanelActive: false }) }}>Libya (‫ليبيا‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Liechtenstein", swipeablePanelActive: false }) }}>Liechtenstein</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Lithuania (Lietuva)", swipeablePanelActive: false }) }}>Lithuania (Lietuva)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Luxembourg", swipeablePanelActive: false }) }}>Luxembourg</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Macau (澳門)", swipeablePanelActive: false }) }}>Macau (澳門)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Macedonia [FYROM] (Македонија)", swipeablePanelActive: false }) }}>Macedonia [FYROM] (Македонија)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Madagascar (Madagasikara)", swipeablePanelActive: false }) }}>Madagascar (Madagasikara)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Malawi", swipeablePanelActive: false }) }}>Malawi</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Malaysia", swipeablePanelActive: false }) }}>Malaysia</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Maldives", swipeablePanelActive: false }) }}>Maldives</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Mali", swipeablePanelActive: false }) }}>Mali</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Malta", swipeablePanelActive: false }) }}>Malta</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Marshall Islands", swipeablePanelActive: false }) }}>Marshall Islands</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Martinique", swipeablePanelActive: false }) }}>Martinique</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Mauritania (‫موريتانيا‬‎)", swipeablePanelActive: false }) }}>Mauritania (‫موريتانيا‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Mauritius (Moris)", swipeablePanelActive: false }) }}>Mauritius (Moris)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Mayotte", swipeablePanelActive: false }) }}>Mayotte</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Mexico (México)", swipeablePanelActive: false }) }}>Mexico (México)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Micronesia", swipeablePanelActive: false }) }}>Micronesia</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Moldova (Republica Moldova)", swipeablePanelActive: false }) }}>Moldova (Republica Moldova)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Monaco", swipeablePanelActive: false }) }}>Monaco</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Mongolia (Монгол)", swipeablePanelActive: false }) }}>Mongolia (Монгол)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Montenegro (Crna Gora)", swipeablePanelActive: false }) }}>Montenegro (Crna Gora)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Montserrat", swipeablePanelActive: false }) }}>Montserrat</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Morocco (‫المغرب‬‎)", swipeablePanelActive: false }) }}>Morocco (‫المغرب‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Mozambique (Moçambique)", swipeablePanelActive: false }) }}>Mozambique (Moçambique)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Myanmar [Burma]", swipeablePanelActive: false }) }}>Myanmar [Burma]</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Namibia", swipeablePanelActive: false }) }}>Namibia</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Nauru", swipeablePanelActive: false }) }}>Nauru</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Nepal (नेपाल)'", swipeablePanelActive: false }) }}>Nepal (नेपाल)'</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Netherlands (Nederland)", swipeablePanelActive: false }) }}>Netherlands (Nederland)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "New Zealand", swipeablePanelActive: false }) }}>New Zealand</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Nicaragua", swipeablePanelActive: false }) }}>Nicaragua</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Niger (Nijar)", swipeablePanelActive: false }) }}>Niger (Nijar)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Nigeria", swipeablePanelActive: false }) }}>Nigeria</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Niue", swipeablePanelActive: false }) }}>Niue</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Norfolk Island", swipeablePanelActive: false }) }}>Norfolk Island</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Northern Mariana Islands", swipeablePanelActive: false }) }}>Northern Mariana Islands</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "North Korea", swipeablePanelActive: false }) }}>North Korea</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Norway (Norge)", swipeablePanelActive: false }) }}>Norway (Norge)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Oman (‫عُمان‬‎)", swipeablePanelActive: false }) }}>Oman (‫عُمان‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Pakistan (‫پاکستان‬‎)", swipeablePanelActive: false }) }}>Pakistan (‫پاکستان‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Palau", swipeablePanelActive: false }) }}>Palau</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Palestine (‫فلسطين‬‎)", swipeablePanelActive: false }) }}>Palestine (‫فلسطين‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Panama (Panamá)", swipeablePanelActive: false }) }}>Panama (Panamá)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Papua New Guinea", swipeablePanelActive: false }) }}>Papua New Guinea</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Paraguay", swipeablePanelActive: false }) }}>Paraguay</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Peru (Perú)", swipeablePanelActive: false }) }}>Peru (Perú)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Philippines", swipeablePanelActive: false }) }}>Philippines</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Pitcairn Islands", swipeablePanelActive: false }) }}>Pitcairn Islands</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Poland (Polska)", swipeablePanelActive: false }) }}>Poland (Polska)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Portugal", swipeablePanelActive: false }) }}>Portugal</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Puerto Rico", swipeablePanelActive: false }) }}>Puerto Rico</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Qatar (‫قطر‬‎)", swipeablePanelActive: false }) }}>Qatar (‫قطر‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Réunion", swipeablePanelActive: false }) }}>Réunion</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Romania (România)", swipeablePanelActive: false }) }}>Romania (România)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Russia (Россия)", swipeablePanelActive: false }) }}>Russia (Россия)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Rwanda", swipeablePanelActive: false }) }}>Rwanda</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Saint Barthélemy (Saint-Barthélémy)", swipeablePanelActive: false }) }}>Saint Barthélemy (Saint-Barthélémy)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Saint Helena", swipeablePanelActive: false }) }}>Saint Helena</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Saint Kitts and Nevis", swipeablePanelActive: false }) }}>Saint Kitts and Nevis</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Saint Lucia", swipeablePanelActive: false }) }}>Saint Lucia</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Saint Martin (Saint-Martin [partie française])", swipeablePanelActive: false }) }}>Saint Martin (Saint-Martin [partie française])</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", swipeablePanelActive: false }) }}>Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "VieSaint Vincent and the Grenadinestnam", swipeablePanelActive: false }) }}>VieSaint Vincent and the Grenadinestnam</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Samoa", swipeablePanelActive: false }) }}>Samoa</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "San Marino", swipeablePanelActive: false }) }}>San Marino</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "São Tomé and Príncipe (São Tomé e Príncipe)", swipeablePanelActive: false }) }}>São Tomé and Príncipe (São Tomé e Príncipe)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Saudi Arabia (‫المملكة العربية السعودية‬‎)", swipeablePanelActive: false }) }}>Saudi Arabia (‫المملكة العربية السعودية‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Senegal (Sénégal)", swipeablePanelActive: false }) }}>Senegal (Sénégal)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Serbia (Србија)", swipeablePanelActive: false }) }}>Serbia (Србија)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Seychelles", swipeablePanelActive: false }) }}>Seychelles</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Sierra Leone", swipeablePanelActive: false }) }}>Sierra Leone</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Singapore", swipeablePanelActive: false }) }}>Singapore</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Sint Maarten", swipeablePanelActive: false }) }}>Sint Maarten</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Slovakia (Slovensko)", swipeablePanelActive: false }) }}>Slovakia (Slovensko)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Slovenia (Slovenija)", swipeablePanelActive: false }) }}>Slovenia (Slovenija)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Solomon Islands", swipeablePanelActive: false }) }}>Solomon Islands</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Somalia (Soomaaliya)", swipeablePanelActive: false }) }}>Somalia (Soomaaliya)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "South Africa", swipeablePanelActive: false }) }}>South Africa</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "South Georgia and the South Sandwich Islands", swipeablePanelActive: false }) }}>South Georgia and the South Sandwich Islands</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "South Korea ", swipeablePanelActive: false }) }}>South Korea </Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "South Sudan (‫جنوب السودان‬‎)", swipeablePanelActive: false }) }}>South Sudan (‫جنوب السودان‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Spain (España)", swipeablePanelActive: false }) }}>Spain (España)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Sri Lanka (ශ්‍රී ලංකාව)'", swipeablePanelActive: false }) }}>Sri Lanka (ශ්‍රී ලංකාව)'</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Sudan (‫السودان‬‎)", swipeablePanelActive: false }) }}>Sudan (‫السودان‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Suriname", swipeablePanelActive: false }) }}>Suriname</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Svalbard and Jan Mayen (Svalbard og Jan Mayen)", swipeablePanelActive: false }) }}>Svalbard and Jan Mayen (Svalbard og Jan Mayen)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Swaziland", swipeablePanelActive: false }) }}>Swaziland</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Sweden (Sverige)", swipeablePanelActive: false }) }}>Sweden (Sverige)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Switzerland (Schweiz)", swipeablePanelActive: false }) }}>Switzerland (Schweiz)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Syria (‫سوريا‬‎)", swipeablePanelActive: false }) }}>Syria (‫سوريا‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Taiwan (台灣)", swipeablePanelActive: false }) }}>Taiwan (台灣)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Tajikistan", swipeablePanelActive: false }) }}>Tajikistan</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Tanzania", swipeablePanelActive: false }) }}>Tanzania</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Thailand (ไทย)", swipeablePanelActive: false }) }}>Thailand (ไทย)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Timor-Leste", swipeablePanelActive: false }) }}>Timor-Leste</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Togo", swipeablePanelActive: false }) }}>Togo</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Tokelau", swipeablePanelActive: false }) }}>Tokelau</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Tonga", swipeablePanelActive: false }) }}>Tonga</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Trinidad and Tobago", swipeablePanelActive: false }) }}>Trinidad and Tobago</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Tristan da Cunha", swipeablePanelActive: false }) }}>Tristan da Cunha</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Tunisia (‫تونس‬‎)", swipeablePanelActive: false }) }}>Tunisia (‫تونس‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Turkey (Türkiye)", swipeablePanelActive: false }) }}>Turkey (Türkiye)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Turkmenistan", swipeablePanelActive: false }) }}>Turkmenistan</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Turks and Caicos Islands", swipeablePanelActive: false }) }}>Turks and Caicos Islands</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Tuvalu", swipeablePanelActive: false }) }}>Tuvalu</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "U.S. Outlying Islands", swipeablePanelActive: false }) }}>U.S. Outlying Islands</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "U.S. Virgin Islands", swipeablePanelActive: false }) }}>U.S. Virgin Islands</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Uganda", swipeablePanelActive: false }) }}>Uganda</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Ukraine (Україна)", swipeablePanelActive: false }) }}>Ukraine (Україна)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", swipeablePanelActive: false }) }}>United Arab Emirates (‫الإمارات العربية المتحدة‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "United Kingdom", swipeablePanelActive: false }) }}>United Kingdom</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "United States", swipeablePanelActive: false }) }}>United States</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Uruguay", swipeablePanelActive: false }) }}>Uruguay</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Uzbekistan (Ўзбекистон)", swipeablePanelActive: false }) }}>Uzbekistan (Ўзбекистон)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Vanuatu", swipeablePanelActive: false }) }}>Vanuatu</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Vatican City (Città del Vaticano)", swipeablePanelActive: false }) }}>Vatican City (Città del Vaticano)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Venezuela", swipeablePanelActive: false }) }}>Venezuela</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Vietnam (Việt Nam)", swipeablePanelActive: false }) }}>Vietnam (Việt Nam)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Wallis and Futuna", swipeablePanelActive: false }) }}>Wallis and Futuna</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Western Sahara (‫الصحراء الغربية‬‎)", swipeablePanelActive: false }) }}>Western Sahara (‫الصحراء الغربية‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Yemen (‫اليمن‬‎)", swipeablePanelActive: false }) }}>Yemen (‫اليمن‬‎)</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Zambia", swipeablePanelActive: false }) }}>Zambia</Text>
                            <Text style={style.regionstyle} onPress={() => { this.setState({ region: "Zimbabwe", swipeablePanelActive: false }) }}>Zimbabwe</Text>
                        </View>
                    </ScrollView>
                </SwipeablePanel>
            </View>
        );
    }
}

