import React, { Component } from 'react';
import { View, Image, ImageBackground, StyleSheet } from 'react-native';
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
import HuiliActivity from './HuiliActivity';
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
import MoodChartActivity from './MoodChartActivity'
import McGillChartActivity from './McGillChartActivity';
import BiologicalActivity from './BiologicalActivity';
import TestprocessActivity from './TestprocessActivity';
import SleepChartActivity from "./SleepChartActivity"
import DietChartActivity from "./DietChartActivity";
import SameActivity from './SameActivity';
import DataActivity from './DataActivity';
import RasEncryptionActivity from "./RasEncryptionActivity"
import ContactActivity from './ContactActivity';
import QAActivity from './QAActivity';
import QuesnoteActivity from './QuesnoteActivity';
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
            navigationOptions: {

                headerTintColor: 'black',
                headerRight: null,
                headerTitleStyle: {
                    alignSelf: 'center',
                    textAlign: 'center',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: px2dp(18),
                },
                headerTitleContainerStyle: {
                    left: TITLE_OFFSET,
                    right: TITLE_OFFSET,
                },
                headerStyle: {
                    height: px2dp(80),
                    backgroundColor: '#FBF0EC',

                }
            },

        },
        Login: {
            screen: LoginActivity,
            navigationOptions: {

                headerTintColor: 'black',
                headerRight: null,
                headerTitleStyle: {
                    alignSelf: 'center',
                    textAlign: 'center',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: px2dp(18),
                },
                headerTitleContainerStyle: {
                    left: TITLE_OFFSET,
                    right: TITLE_OFFSET,
                },
                headerStyle: {
                    height: px2dp(80),
                    backgroundColor: '#FBF0EC',

                }
            },
        },
        Forget: {
            screen: ForgetActivity,
            navigationOptions: {

                headerTintColor: 'black',
                headerRight: null,
                headerTitleStyle: {
                    alignSelf: 'center',
                    textAlign: 'center',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: px2dp(18),
                },
                headerTitleContainerStyle: {
                    left: TITLE_OFFSET,
                    right: TITLE_OFFSET,
                },
                headerStyle: {
                    height: px2dp(80),
                    backgroundColor: '#FBF0EC',

                }
            },
        },
        Consent: {
            screen: ConsentActivity,
            navigationOptions: {

                headerTintColor: 'black',
                headerRight: null,
                headerTitleStyle: {
                    alignSelf: 'center',
                    textAlign: 'center',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: px2dp(18),
                },
                headerTitleContainerStyle: {
                    left: TITLE_OFFSET,
                    right: TITLE_OFFSET,
                },
                headerStyle: {
                    height: px2dp(80),
                    backgroundColor: '#FBF0EC',

                }
            },
        },
        Main: {
            screen: MainActivity,
            navigationOptions: {

                headerTintColor: 'black',
                headerTitleStyle: {
                    alignSelf: 'center',
                    textAlign: 'center',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: px2dp(18),
                },
                headerTitleContainerStyle: {
                    left: TITLE_OFFSET,
                    right: TITLE_OFFSET,
                },
                headerStyle: {
                    height: px2dp(80),
                    backgroundColor: '#FBF0EC',

                }
            },
        },
        DnaReport: {
            screen: DnaReportActivity,
            navigationOptions: {

                headerTintColor: 'black',
                headerTitleStyle: {
                    alignSelf: 'center',
                    textAlign: 'center',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: px2dp(18),
                },
                headerTitleContainerStyle: {
                    left: TITLE_OFFSET,
                    right: TITLE_OFFSET,
                },
                headerStyle: {
                    height: px2dp(80),
                    backgroundColor: '#FBF0EC',

                }
            },
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
        epicenter: {
            screen: TabCenterActivity,
            navigationOptions: {
                header: null,
            },
        },
        Company: {
            screen: CompanyActivity
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
        Huili: {
            screen: HuiliActivity
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
            screen: QuestionnaireActivity
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


        Payment: {
            screen: PaymentActivity
        },
        McGillChart: {
            screen: McGillChartActivity
        },
        MoodChart: {
            screen: MoodChartActivity
        },
        SleepChart: {
            screen: SleepChartActivity
        },
        DietChart: {
            screen: DietChartActivity
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
        Quesnote: {
            screen: QuesnoteActivity
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
        initialRouteName: 'Main',      
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
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        alignSelf: 'center',
                        textAlign: 'center',
                        flex: 1,
                        fontWeight: 'bold',
                        fontSize: px2dp(18),
                        fontFamily: 'fantasy',
                    },
                    headerTitleContainerStyle: {
                        left: TITLE_OFFSET,
                        right: TITLE_OFFSET,
                    },
                    headerStyle: {
                        height: px2dp(80),
                        backgroundColor: '#FBF0EC',

                    },
                    headerRight: <LoginIcon navigation={navigation} />
                }
            )
        }
    }
);
export default createAppContainer(RootStack);