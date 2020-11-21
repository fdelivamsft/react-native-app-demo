# React native app powered by expo 

https://expo.io to get started

Pros:
React native is fast moving
New version every month
breaking changes do happen
High dependency on 3rd party packages that also change
Bugs/workarounds required

Cons:
vast majority code can be reused

alternative:
Build real native apps
Learn Java/Android for Android
Learn Swift/Objective C for iOS

Download Expo Client from AppStore
and Run the app on the iOS phone

Using locator strategy:
https://appiumpro.com/editions/76-testing-react-native-apps-with-appium

# Build ipa artefact
https://medium.com/easyread/build-react-native-ipa-apk-using-cli-simple-ci-cd-2b8303d079e0

gem install xcpretty

xcodebuild clean archive -workspace rnfirstapp.xcworkspace -scheme "rnfirstapp" -archivePath rnfirstapp.xcarchive
     
xcodebuild -exportArchive -archivePath rnfirstapp.xcarchive -exportPath rnfirstapp -exportOptionsPlist ExportOptions.plist | xcpretty

# Integrate to Azure DevOps pipeline
https://medium.com/@liam.e.andrew/continuous-integration-for-react-native-with-azure-pipelines-245d90948f6a