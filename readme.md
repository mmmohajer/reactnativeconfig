npm -g expo-cli
expo init .
Copy/Replace All the files into the created directory
Remove assets folder from the root folder
npm i react-native-community/hooks
npm i react-native-gesture-handler
expo install expo-image-picker
To support both portrait and landscape mode in app.json file change:
orientation: "portrait" ==> orientation: "default"
npm start

cmd+d ==> Open developer menu in ios simulator
cmd+m ==> Open developer menu in android simulator
cmd+right/left
