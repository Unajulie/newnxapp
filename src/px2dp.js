// import { Form } from "native-base";
// import { Demension } from "react-native";
// //屏幕宽
// export const screenWidth = Demension.get("window").screenWidth;
// //屏幕高
// export const screenHeight = Demension.get("height").screenHeight;
// // 像素转dp

// export const px2dp = (elePX) => screenWidth * elePX / 375;

import {PixelRatio} from 'react-native';
const dp2px = dp=>PixelRatio.getPixelSizeForLayoutSize(dp);
export const px2dp = px => PixelRatio.roundToNearestPixel(px);
