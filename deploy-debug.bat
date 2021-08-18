@echo off
cd android && gradlew clean && gradlew --stop && cd .. && react-native run-android  