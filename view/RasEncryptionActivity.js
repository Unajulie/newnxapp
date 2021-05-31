import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Alert, Clipboard, Button, ScrollView, ActivityIndicator, TouchableOpacity, TextInput } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n'
import Session from '../storage/Session'
import md5 from "react-native-md5"
import RNFS from 'react-native-fs'
import UUIDGenerator from 'react-native-uuid-generator'
import { encrypt, decrypt } from 'react-native-simple-encryption'
import data from '../appdata'
import { px2dp } from '../src/px2dp';

export default class RasEncryptionActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("RasEncryptionActivity.title"),
            headerRight: null
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            btnSaveDisabled: false,
            btnCopyDisabled: false,
            editable: true,
            privatekey: "",
            btnPrivatekeyDisabled: false,
            animating: false
        }
    }
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user })
            if (user.privatekey) { this.setState({ btnPrivatekeyDisabled: true }) }
            if (user.publickey) { this.setState({ btnPublickeyDisabled: true }) }
            if (user.privatekey && user.publickey) {
                // this.setState({ btnSaveDisabled: true })
                this.setState({ publickey: user.publickey })
                this.setState({ privatekey: decrypt(user.publickey, user.uuid) })
                
            }

        })
    }

    render() {
        this.navigate = this.props.navigation;
        return (

            <ScrollView style={{ flex: 1 }}>
                <StatusBar animated={true}  hidden={true} translucent={true} barStyle={'light-content'}/ >
                <View>
                    {/* <Text style={{ width: "100%", height: px2dp(60), lineHeight: px2dp(60), textAlign: "center", textAlignVertical: "center", fontSize: px2dp(22), fontWeight: "bold", height: "100%" }}>Private key</Text> */}
                    <View style={{ width: "100%", alignItems: 'center' }}>
                        <View style={{ width: "90%" }}>
                            <Text style={{ height: px2dp(40), lineHeight: px2dp(40), marginTop: px2dp(20),color:'#000000', fontWeight: "bold", fontFamily: 'fantasy', fontSize: px2dp(14), }}>{I18n.t('RasEncryptionActivity.privatekey')}</Text>
                            <View style={{ width: "100%", flexDirection: "row" }}>
                                <View style={{ width: "63%" }}>
                                    <TextInput style={{
                                        width: '100%',
                                        borderRadius: px2dp(5),
                                        height: px2dp(40),
                                        borderWidth: px2dp(1),
                                        borderColor: '#e5e6e7',
                                        marginBottom: px2dp(10),
                                        fontSize: px2dp(16),
                                        paddingVertical: 0,
                                        textAlign: "center"

                                    }}
                                        defaultValue={this.state.publickey}
                                        editable={true}
                                        onChangeText={(publickey) => {
                                            this.setState({ btnPublickeyDisabled: publickey.length == 0 ? false : true })
                                            this.setState({ publickey })
                                            if (this.state.privatekey && this.state.privatekey.length != 0) {
                                                if (publickey.length != 0) {
                                                    this.setState({ btnSaveDisabled: false })
                                                    this.setState({ btnCopyDisabled: false })

                                                } else {
                                                    this.setState({ btnSaveDisabled: true })
                                                    this.setState({ btnCopyDisabled: true })
                                                }
                                            } else {
                                                this.setState({ btnSaveDisabled: true })
                                                this.setState({ btnCopyDisabled: true })
                                            }
                                        }}
                                    />
                                </View>
                                <View style={{ width: "35%", marginLeft: '2%',backgroundColo:'#404bc2', height: px2dp(40), marginTop: px2dp(3) }}>
                                    {/* 将私钥发送到邮箱 */}
                                    <Button disabled={this.state.btnPublickeyDisabled}
                                        color='#404bc2'
                                        title={I18n.t('RasEncryptionActivity.generate')}
                                        style={{ height: "100%", width: "100%" }}
                                        onPress={() => {
                                            UUIDGenerator.getRandomUUID().then((uuid) => {
                                                let publickey = uuid.substring(0, 18).toUpperCase()
                                                this.setState({ publickey })
                                                this.setState({ btnSaveDisabled: false })
                                                this.setState({ btnCopyDisabled: false })
                                            });
                                        }}
                                    />
                                </View>
                            </View>
                            <Text style={{ height: px2dp(40), lineHeight: px2dp(40), fontWeight: "bold", fontFamily: 'fantasy',color:'#000000', fontSize: px2dp(14), }}>{I18n.t('RasEncryptionActivity.publickey')}</Text>
                            <View style={{ width: "100%", flexDirection: "row" }}>
                                <View style={{ width: "63%" }}>
                                    <TextInput style={{
                                        width: '100%',
                                        borderRadius: px2dp(5),
                                        height: px2dp(40),
                                        borderWidth: px2dp(1),
                                        borderColor: '#e5e6e7',
                                        marginBottom: px2dp(10),
                                        fontSize: px2dp(16),
                                        paddingVertical: 0,
                                        textAlign: "center"

                                    }}
                                        defaultValue={this.state.privatekey}
                                        editable={true}
                                        onChangeText={(privatekey) => {
                                            this.setState({ btnPrivatekeyDisabled: privatekey.length == 0 ? false : true })
                                            this.setState({ privatekey })
                                            if (this.state.publickey && this.state.publickey.length != 0) {
                                                if (privatekey.length != 0) {
                                                    this.setState({ btnSaveDisabled: false })
                                                    this.setState({ btnCopyDisabled: false })
                                                } else {
                                                    this.setState({ btnSaveDisabled: true })
                                                    this.setState({ btnCopyDisabled: true })
                                                }
                                            } else {
                                                this.setState({ btnSaveDisabled: true })
                                                this.setState({ btnCopyDisabled: true })
                                            }
                                        }}
                                    />
                                </View>
                                <View style={{ width: "35%",backgroundColo:'#404bc2', marginLeft: '2%', height: px2dp(40), marginTop: px2dp(3) }}>
                                    {/* 将私钥发送到邮箱 */}
                                    <Button disabled={this.state.btnPrivatekeyDisabled}
                                        color='#404bc2'
                                        title={I18n.t('RasEncryptionActivity.generate')}
                                        style={{ height: "100%", width: "100%" }}
                                        onPress={() => {
                                            UUIDGenerator.getRandomUUID().then((uuid) => {
                                                let privatekey = uuid.substring(0, 7).toUpperCase()
                                                this.setState({ privatekey })
                                                this.setState({ btnSaveDisabled: false })
                                                this.setState({ btnCopyDisabled: false })
                                            });
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ width: "90%", height: px2dp(150), alignSelf: 'center' }}>
                                <View style={{ width: "100%", height: px2dp(45),backgroundColo:'#404bc2', marginTop: px2dp(10),borderRadius:px2dp(5) }}>
                                    <Button disabled={this.state.btnCopyDisabled}
                                        color='#404bc2'
                                        title={I18n.t("RasEncryptionActivity.copykeys")}
                                        style={{ width: '100%', height: '100%', textAlignVertical: "center" }}
                                        onPress={() => {
                                            // this.state({btnCopyDisabled:true})
                                            let keys = this.state.publickey + "\n" + this.state.privatekey
                                            Clipboard.setString(keys);
                                            Alert.alert(I18n.t("RasEncryptionActivity.titlemsg"), I18n.t("RasEncryptionActivity.meg"))
                                        }}
                                    />
                                </View>
                                <View style={{ width: "100%", height: px2dp(45),backgroundColo:'#404bc2', marginTop: px2dp(10),borderRadius:px2dp(5) }}>
                                    {/* 将私钥和公钥保存到本地 */}
                                    <Button disabled={this.state.btnSaveDisabled}
                                        color='#404bc2'
                                        title={I18n.t('RasEncryptionActivity.save')}
                                        style={{ height: "100%", width: "100%" }}
                                        onPress={() => {
                                            let id = this.state.user.id
                                            this.setState({ animating: true })
                                            this.setState({ btnPrivatekeyDisabled: true })
                                            this.setState({ btnPublickeyDisabled: true })
                                            this.setState({ btnSaveDisabled: true })
                                            this.setState({ btnCopyDisabled: true })
                                            //用public key加密private key生成加密的priavekey
                                            let cipher = encrypt(this.state.publickey, this.state.privatekey)
                                            fetch(data.url + "user/updatekey.jhtml?id=" + id + "&uuid=" + cipher).then(user => user.json()).then((user) => {
                                                let path = RNFS.DocumentDirectoryPath + '/' + md5.hex_md5(user.mail) + '.txt'
                                                user.privatekey = this.state.privatekey
                                                user.publickey = this.state.publickey
                                                Session.save("sessionuser", user)
                                                this.setState({ animating: false })
                                                //先将之前的文件删除
                                                //将私钥和公钥写入文件中
                                                RNFS.writeFile(path, this.state.publickey + ":" + this.state.privatekey, 'utf8')
                                                    .then((success) => {
                                                        Alert.alert("Message", I18n.t("RasEncryptionActivity.success"), [{
                                                            text: "OK", onPress: () => {
                                                                const resetAction = StackActions.reset({
                                                                    index: 0,
                                                                    actions: [NavigationActions.navigate({ routeName: 'Main' })],
                                                                });
                                                                this.props.navigation.dispatch(resetAction);
                                                            }
                                                        }])
                                                    })
                                                    .catch((err) => {
                                                        Alert.alert("Message", err)
                                                    });
                                            })
                                        }} />
                                </View>


                                <View style={{ width: "90%", alignItems: "center" }}>
                                    <View style={{ width: "100%", height: px2dp(45) }}>
                                        {this.state.animating ? <ActivityIndicator
                                            animating={true}
                                            style={{ height: px2dp(45) }}
                                            size="large" /> : null}
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: px2dp(10) }}>
                                <Text style={{ width: '4%', fontSize: px2dp(14), fontFamily: 'fantasy', lineHeight: px2dp(18),color:'#000'}}>1.</Text>
                                <Text style={{ width: '95%', fontSize: px2dp(14), fontFamily: 'fantasy', lineHeight: px2dp(18),color:'#000' }}>{I18n.t('RasEncryptionActivity.press')}<Text style={{ color: '#404bc2', fontStyle: 'italic', fontSize: 14 }}>{I18n.t('RasEncryptionActivity.press2')} </Text> </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: px2dp(10) }}>
                                <Text style={{ width: '4%', fontSize: px2dp(14), fontFamily: 'fantasy', lineHeight: px2dp(18),color:'#000' }}>2.</Text>
                                <Text style={{ width: '95%', fontSize: px2dp(14), fontFamily: 'fantasy', lineHeight: px2dp(18),color:'#000'}}>{I18n.t('RasEncryptionActivity.setkey')} <Text style={{ color: '#404bc2', fontStyle: 'italic' }}> {I18n.t('RasEncryptionActivity.setkey2')}</Text></Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: px2dp(10) }}>
                                <Text style={{ width: '4%', fontSize: px2dp(14), fontFamily: 'fantasy', lineHeight: px2dp(18),color:'#000' }}>3.</Text>
                                <Text style={{ width: '95%', fontSize: px2dp(14), fontFamily: 'fantasy', lineHeight: px2dp(18), color: '#404bc2', fontStyle: 'italic' }}> {I18n.t('RasEncryptionActivity.unique')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: px2dp(10) }}>
                                <Text style={{ width: '4%', fontSize: px2dp(14), fontFamily: 'fantasy', lineHeight: px2dp(18),color:'#000' }}>4.</Text>
                                <Text style={{ width: '95%', fontSize: px2dp(14), fontFamily: 'fantasy', lineHeight: px2dp(18),color:'#000' }}> {I18n.t('RasEncryptionActivity.savekey')}<Text onPress={() => this.navigate.push("DataSecurity")} style={{ fontSize: 14, fontStyle: 'italic', color: '#404bc2', textDecorationLine: 'underline' }}>{I18n.t('RasEncryptionActivity.security')}</Text> {I18n.t('RasEncryptionActivity.savekey2')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: px2dp(10) }}>
                                <Text style={{ width: '4%', fontSize: px2dp(14), fontFamily: 'fantasy', lineHeight: px2dp(18),color:'#000' }}>5.</Text>
                                <Text style={{ width: '95%', fontSize: px2dp(14), fontFamily: 'fantasy', lineHeight: px2dp(18),color:'#000' }}> {I18n.t('RasEncryptionActivity.freestate')} </Text>
                            </View>


                        </View>
                    </View>

                </View>
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    videoContainer: {
        margin: 10
    }
})