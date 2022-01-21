import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';
import { px2dp } from '../src/px2dp';
import { createStackNavigator, createAppContainer, Header } from 'react-navigation'
import TabAboutActivity from './TabAboutActivity';
import CompanyActivity from './CompanyActivity';
import MainActivity from './MainActivity';
import LoginActivity from './LoginActivity';
import ForgetActivity from './ForgetActivity';
import RegisterActivity from './RegisterActivity';
import LifeStyleChartActivity from './LifeStyleChartActivity';
import LifeStyleMassActivity from './LifeStyleMassActivity';
import LifeStyleHeartActivity from './LifeStyleHeartActivity';
import LifeStyleBloodActivity from './LifeStyleBloodActivity';
import LifeStyleCholesterolActivity from './LifeStyleCholesterolActivity';
import LifeStyleVitaminsActivity from './LifeStyleVitaminsActivity';
import LifeStyleDrugsActivity from './LifeStyleDrugsActivity';
import LifeStyleMeditationActivity from './LifeStyleMeditationActivity';
import LifeStyleSportActivity from './LifeStyleSportActivity';
import LifeStyleSleepActivity from './LifeStyleSleepActivity';
import LifeStyleSexActivity from './LifeStyleSexActivity';
import LifeStyleHabitsActivity from './LifeStyleHabitsActivity';
import DnaReportActivity from './DnaReportActivity';
import PaymentActivity from './PaymentActivity';
import ConfirmActivity from './ConfirmActivity';
import TabMallActivity from './TabMallActivity';
import TabCenterActivity from './TabCenterActivity';
import LoginIcon from './LoginIcon';
import MoreProActivity from './MoreProActivity';
import CheckActivity from './CheckActivity';
import ScienceteamActivity from './ScienceteamActivity';
import ProfMosheActivity from './ProfMosheActivity';
import ProfMosheExperiencesActivity from './ProfMosheExperiencesActivity';
import ProfMosheVideosActivity from './ProfMosheVideosActivity';
import ProfMosheCareerActivity from './ProfMosheCareerActivity';
import ProfMosheHonorsActivity from './ProfMosheHonorsActivity';
import ProfMosheSponsoredActivity from './ProfMosheSponsoredActivity';
import ProfMoshePublishedActivity from './ProfMoshePublishedActivity';
import DavidActivity from './DavidActivity';
import DavidExperiencesActivity from './DavidExperiencesActivity';
import DavidPublishedActivity from './DavidPublishedActivity';
import DavidHonorActivity from './DavidHonorActivity';
import DavidConferencesActivity from './DavidConferencesActivity';
import ChifatActivity from './ChifatActivity';
import ChifatExperiencesActivity from './ChifatExperiencesActivity';
import ChifatPublishedActivity from './ChifatPublishedActivity';
import ZhiyuanActivity from './ZhiyuanActivity';
import ZhiyuanExperiencesActivity from './ZhiyuanExperiencesActivity';
import ZhiyuanPublishedActivity from './ZhiyuanPublishedActivity';
import ZhiyuanHonorsActivity from './ZhiyuanHonorsActivity';
import ZhiyuanConferencesActivity from './ZhiyuanConferencesActivity';
import MethylationActivity from './MethylationActivity';
import QuestionnaireActivity from './QuestionnaireActivity';
import ConsentActivity from './ConsentActivity';
import MoodChartActivity from './MoodChartActivity';
import MoodChartPleasureActivity from './MoodChartPleasureActivity';
import MoodChartDepressedActivity from './MoodChartDepressedActivity';
import MoodChartAsleepActivity from './MoodChartAsleepActivity';
import MoodChartEnergyActivity from './MoodChartEnergyActivity';
import MoodChartOverEatingActivity from './MoodChartOverEatingActivity';
import MoodChartFailureActivity from './MoodChartFailureActivity';
import MoodChartFocusActivity from './MoodChartFocusActivity';
import MoodChartSlowActivity from './MoodChartSlowActivity';
import MoodChartAnxietyActivity from './MoodChartAnxietyActivity';
import MoodChartNervousActivity from './MoodChartNervousActivity';
import MoodChartLoseControlActivity from './MoodChartLoseControlActivity';
import MoodChartWorryActivity from './MoodChartWorryActivity';
import MoodChartLoseRelaxActivit from './MoodChartLoseRelaxActivit';
import MoodChartRestLessActivity from './MoodChartRestLessActivity';
import MoodChartIrritableActivity from './MoodChartIrritableActivity';
import McGillChartActivity from './McGillChartActivity';
import McGillChartThrobbingActivity from './McGillChartThrobbingActivity';
import McGillChartShootingActivity from './McGillChartShootingActivity';
import McGillChartStabbingActivity from './McGillChartStabbingActivity';
import McGillChartSharpActivity from './McGillChartSharpActivity';
import McGillChartCrampingActivity from './McGillChartCrampingActivity';
import McGillChartGnawingActivity from './McGillChartGnawingActivity';
import McGillChartBurningActivity from './McGillChartBurningActivity';
import McGillChartAchingActivity from './McGillChartAchingActivity';
import McGillChartHeavyActivity from './McGillChartHeavyActivity';
import McGillChartTenderActivity from './McGillChartTenderActivity';
import McGillChartSplitActivity from './McGillChartSplitActivity';
import McGillChartExhaustingActivity from './McGillChartExhaustingActivity';
import McGillChartSickeningActivity from './McGillChartSickeningActivity';
import McGillChartFearfulActivity from './McGillChartFearfulActivity';
import BiologicalActivity from './BiologicalActivity';
import TestprocessActivity from './TestprocessActivity';
import SleepChartActivity from "./SleepChartActivity"
import SleepChartAwakeActivity from "./SleepChartAwakeActivity"
import SleepChartFallActivity from "./SleepChartFallActivity"
import SleepChartQualityActivity from "./SleepChartQualityActivity"
import SleepChartMoodActivity from "./SleepChartMoodActivity"
import SleepChartAbilityActivity from "./SleepChartAbilityActivity"
import SleepChartTroubleActivity from "./SleepChartTroubleActivity"
import SleepChartEffectActivity from "./SleepChartEffectActivity"
import DietChartActivity from "./DietChartActivity";
import SameActivity from './SameActivity';
import DataActivity from './DataActivity';
import RasEncryptionActivity from "./RasEncryptionActivity"
import ContactActivity from './ContactActivity';
import QAActivity from './QAActivity';
import Manual1Activity from './Manual1Activity';
import Manual2Activity from './Manual2Activity';
import Manual3Activity from './Manual3Activity';
import SavepdfpathActivity from './SavepdfpathActivity';
import PdfViewActivity from './PdfViewActivity';
import ScannerAcitivity from './ScannerAcitivity';
import LangActivity from './LangActivity';
import ShafaatActivity from './ShafaatActivity';
import AgeAccelerateActivity from './AgeAccelerateActivity';
import Manual4Activity from './Manual4Activity';
import LaunchActivity from './LaunchActivity';
import ReportActivity from './ReportActivity';
import SettingActivity from './SettingActivity';

const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;
export const RootStack = createStackNavigator(
    {
        Launch: { //此处的Lauch名字任意,在跳转页面的时候会用到这个名字
            screen: LaunchActivity,//此处的screen赋值页面,要记得在顶部先import引入，否则找不到页面而报错，第一个代表默认加载的页面
            navigationOptions: {
                header: null,
            },
        },
        Register: {
            screen: RegisterActivity,

        },
        Login: {
            screen: LoginActivity,
        },
        Forget: {
            screen: ForgetActivity,
        },
        Consent: {
            screen: ConsentActivity,
        },
        Main: {
            screen: MainActivity,
        },
        DnaReport: {
            screen: DnaReportActivity,
        },
        Report: {
            screen: ReportActivity
        },
        Testprocess: {
            screen: TestprocessActivity,
        },
        About: {
            screen: TabAboutActivity,

        },
        Epicenter: {
            screen: TabCenterActivity,
            navigationOptions: {
                header: null,
            },
        },
        Setting: {
            screen: SettingActivity,
            navigationOptions: {
                headerRight: null,
            },
        },
        Company: {
            screen: CompanyActivity,
            navigationOptions: {
                headerRight: null,
            },
        },
        Scienceteam: {
            screen: ScienceteamActivity
        },
        Moshe: {
            screen: ProfMosheActivity
        },
        ProfMosheExperiences: {
            screen: ProfMosheExperiencesActivity
        },
        ProfMosheVideos: {
            screen: ProfMosheVideosActivity
        },
        ProfMosheCareer: {
            screen: ProfMosheCareerActivity
        },
        ProfMosheHonors: {
            screen: ProfMosheHonorsActivity
        },
        ProfMosheSponsored: {
            screen: ProfMosheSponsoredActivity
        },
        ProfMoshePublished: {
            screen: ProfMoshePublishedActivity
        },

        David: {
            screen: DavidActivity
        },
        DavidExperiences: {
            screen: DavidExperiencesActivity
        },
        DavidPublished: {
            screen: DavidPublishedActivity
        },
        DavidHonor: {
            screen: DavidHonorActivity
        },
        DavidConferences: {
            screen: DavidConferencesActivity
        },
        Chifat: {
            screen: ChifatActivity
        },
        ChifatExperiences: {
            screen: ChifatExperiencesActivity
        },
        ChifatPublished: {
            screen: ChifatPublishedActivity
        },
        Zhiyuan: {
            screen: ZhiyuanActivity
        },
        ZhiyuanExperiences: {
            screen: ZhiyuanExperiencesActivity
        },
        ZhiyuanPublished: {
            screen: ZhiyuanPublishedActivity
        },
        ZhiyuanHonors: {
            screen: ZhiyuanHonorsActivity
        },
        ZhiyuanConferences: {
            screen: ZhiyuanConferencesActivity
        },
        Methylation: {
            screen: MethylationActivity
        },
        Questionnaire: {
            screen: QuestionnaireActivity,
            navigationOptions: ({ navigation }) => {
                return ({
                    headerRight:
                        <TouchableOpacity onPress={() => {navigation.push("Manual3") }}>
                            <View style={{ flex: 1, width: px2dp(100), height: px2dp(80), justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ width: px2dp(100),lineHeight:px2dp(80),fontFamily:'fantasy', textAlign: 'center',fontSize:px2dp(14),fontWeight:'bold',color:'#000' }}>Help</Text>
                            </View>
                        </TouchableOpacity>
                }

                )
            }
        },

        Biological: {
            screen: BiologicalActivity
        },
        Same: {
            screen: SameActivity
        },
        Mall: {
            screen: TabMallActivity
        },
        MorePro: {
            screen: MoreProActivity
        },
        Check: {
            screen: CheckActivity
        },
        Confirm: {
            screen: ConfirmActivity
        },

        LifeStyleChart: {
            screen: LifeStyleChartActivity
        },
        LifeStyleMass: {
            screen: LifeStyleMassActivity
        },
        LifeStyleHeart: {
            screen: LifeStyleHeartActivity
        },
        LifeStyleBlood: {
            screen: LifeStyleBloodActivity
        },
        LifeStyleCholesterol: {
            screen: LifeStyleCholesterolActivity
        },
        LifeStyleVitamins: {
            screen: LifeStyleVitaminsActivity
        },
        LifeStyleDrugs: {
            screen: LifeStyleDrugsActivity
        },
        LifeStyleMeditation: {
            screen: LifeStyleMeditationActivity
        },
        LifeStyleSport: {
            screen: LifeStyleSportActivity
        },
        LifeStyleSleep: {
            screen: LifeStyleSleepActivity
        },
        LifeStyleSex: {
            screen: LifeStyleSexActivity
        },
        LifeStyleHabits: {
            screen: LifeStyleHabitsActivity
        },

        Payment: {
            screen: PaymentActivity
        },
        McGillChart: {
            screen: McGillChartActivity,
            
        },
        McGillChartThrobbing: {
            screen: McGillChartThrobbingActivity
        },
        McGillChartShooting: {
            screen: McGillChartShootingActivity
        },
        McGillChartStabbing: {
            screen: McGillChartStabbingActivity
        },
        McGillChartSharp: {
            screen: McGillChartSharpActivity
        },
        McGillChartCramping: {
            screen: McGillChartCrampingActivity
        },
        McGillChartGnawing: {
            screen: McGillChartGnawingActivity
        },
        McGillChartBurning: {
            screen: McGillChartBurningActivity
        },
        McGillChartAching: {
            screen: McGillChartAchingActivity
        },
        McGillChartHeavy: {
            screen: McGillChartHeavyActivity
        },
        McGillChartTender: {
            screen: McGillChartTenderActivity
        },
        McGillChartSplit: {
            screen: McGillChartSplitActivity
        },
        McGillChartExhausting: {
            screen: McGillChartExhaustingActivity
        },
        McGillChartSickening: {
            screen: McGillChartSickeningActivity
        },
        McGillChartFearful: {
            screen: McGillChartFearfulActivity
        },
        MoodChart: {
            screen: MoodChartActivity,
            navigationOptions: {
                headerRight: null,
            },
        },
        MoodChartPleasure: {
            screen: MoodChartPleasureActivity
        },
        MoodChartDepressed: {
            screen: MoodChartDepressedActivity
        },
        MoodChartAsleep: {
            screen: MoodChartAsleepActivity
        },
        MoodChartEnergy: {
            screen: MoodChartEnergyActivity
        },
        MoodChartOverEating: {
            screen: MoodChartOverEatingActivity
        },
        MoodChartFailure: {
            screen: MoodChartFailureActivity
        },
        MoodChartFocus: {
            screen: MoodChartFocusActivity
        },
        MoodChartSlow: {
            screen: MoodChartSlowActivity
        },
        MoodChartAnxiety: {
            screen: MoodChartAnxietyActivity
        },
        MoodChartNervous: {
            screen: MoodChartNervousActivity
        },
        MoodChartLoseControl: {
            screen: MoodChartLoseControlActivity
        },
        MoodChartWorry: {
            screen: MoodChartWorryActivity
        },
        MoodChartLoseRelax: {
            screen: MoodChartLoseRelaxActivit
        },
        MoodChartRestLess: {
            screen: MoodChartRestLessActivity
        },
        MoodChartIrritable: {
            screen: MoodChartIrritableActivity
        },
        SleepChart: {
            screen: SleepChartActivity
        },
        SleepChartAwake: {
            screen: SleepChartAwakeActivity
        },
        SleepChartFall: {
            screen: SleepChartFallActivity
        },
        SleepChartQuality: {
            screen: SleepChartQualityActivity
        },
        SleepChartMood: {
            screen: SleepChartMoodActivity
        },
        SleepChartAbility: {
            screen: SleepChartAbilityActivity
        },
        SleepChartTrouble: {
            screen: SleepChartTroubleActivity
        },
        SleepChartEffect: {
            screen: SleepChartEffectActivity
        },
        DietChart: {
            screen: DietChartActivity,
            navigationOptions: ({ navigation }) => {
                return ({
                    headerRight:
                        <TouchableOpacity onPress={() => {navigation.push("Manual4") }}>
                            <View style={{ flex: 1, width: px2dp(100), height: px2dp(80), justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ width: px2dp(100),lineHeight:px2dp(80),fontFamily:'fantasy', textAlign: 'center',fontSize:px2dp(14),fontWeight:'bold',color:'#000' }}>Help</Text>
                            </View>
                        </TouchableOpacity>
                }

                )
            }
        },
        DataSecurity: {
            screen: DataActivity
        },
        RasEncryptionActivity: {
            screen: RasEncryptionActivity
        },
        QA: {
            screen: QAActivity
        },
        Contact: {
            screen: ContactActivity
        },
        Manual1: {
            screen: Manual1Activity
        },
        Manual2: {
            screen: Manual2Activity
        },
        Manual3: {
            screen: Manual3Activity
        },
        Manual4: {
            screen: Manual4Activity
        },
        Savepdfpath: {
            screen: SavepdfpathActivity
        },
        PdfViewActivity: {
            screen: PdfViewActivity
        },
        Scanner: {
            screen: ScannerAcitivity
        },
        LangActivity: {
            screen: LangActivity
        },
        ShafaatActivity: {
            screen: ShafaatActivity
        },
        AgeAccelerate: {
            screen: AgeAccelerateActivity
        }

    },
    {
        initialRouteName: 'Launch',
        defaultNavigationOptions: ({ navigation }) => {
            return (

                {
                    // headerStyle: {
                    //     backgroundColor: '#0071BC',

                    // },
                    // headerTintColor: '#fff',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    //     fontFamily: 'NotoSansHans-Light',
                    // },
                    // //每一个screen组件中都自动具有了navigation属性
                    // //要强调的是navigation属性并不是所有的组件里都有，只有screen组件才自动接收该属性（被screen属性声明过的组件）
                    // //例如：如果你定义了一个MyBackButton组件，并且将其在一个screen组件中作为子组件渲染，那么就不会接收到navigation属性
                    // //所以需要在此处添加 navigation={navigation}，那么LoginIcon中的pros就能有navigation这个对象了
                    // headerRight: <LoginIcon navigation={navigation} />
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        alignSelf: 'center',
                        textAlign: 'center',
                        flex: 1,
                        fontWeight: 'bold',
                        fontSize: px2dp(18),
                        fontFamily: 'Roboto-Medium',
                    },
                    headerTitleContainerStyle: {
                        left: TITLE_OFFSET,
                        right: TITLE_OFFSET,
                    },
                    headerStyle: {
                        height: px2dp(60),
                        backgroundColor: '#5168ff',

                    },
                    headerRight: <LoginIcon navigation={navigation} />
                }
            )
        }
    }
);
export default createAppContainer(RootStack);