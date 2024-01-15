npm install -g expo-cli </br>
expo init . </br>
Copy/Replace All the files into the created directory </br>
Remove assets folder from the root folder </br>
npm install <br/>
npm install expo-secure-store expo-image-picker @react-native-community/netinfo expo-notifications react-native-community/hooks react-native-gesture-handler @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs @reduxjs/toolkit react-redux <br/>

To support both portrait and landscape mode in app.json file change: <br/>
orientation: "portrait" ==> orientation: "default" <br/>

Create .env.js file and copy .env.sample.js to .env.js file <br/>

npm start

If you get an error to get expo notification token, you need to login to expo in your terminal, so you must run the following command in the terminal: <br/>
expo login <br/>
Also, be sure to use real device <br/>

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
