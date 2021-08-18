@echo off
cd android && gradlew clean && gradlew --stop && cd .. && npx react-native run-android --variant=release