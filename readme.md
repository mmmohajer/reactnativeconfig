npm -g expo-cli
expo init .
Copy/Replace All the files into the created directory
Remove assets folder from the root folder
expo install expo-secure-store
expo install expo-image-picker
expo install @react-native-community/netinfo
expo install expo-notifications
npm i react-native-community/hooks
npm i react-native-gesture-handler
npm i @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
npm i @reduxjs/toolkit
npm i react-redux
To support both portrait and landscape mode in app.json file change:
orientation: "portrait" ==> orientation: "default"
Create .env.js file and copy .env.sample.js to .env.js file
npm start

If you get an error to get expo notification token, you need to login to expo in
your terminal, so you must run the following command in the terminal:
expo login
Also, be sure to use real device

Notice for publishing app:
It's best practice to have the size of icon (icon.png) file in 1024px X 1024px

To optimize assets:
npm i -g sharp-cli
npx expo-optimize

Publish app
expo publish --release-channel staging
Note: staging is the name of environment, (it can be prod as well or any other name)

in app.json, versionCode and buildNumber
must increase everytime

expo build:ios
expo build:android

cmd+d ==> Open developer menu in ios simulator
cmd+m ==> Open developer menu in android simulator
cmd+right/left
