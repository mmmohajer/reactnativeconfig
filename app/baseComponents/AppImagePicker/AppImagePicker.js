import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import AppTouchable from "BaseComponents/AppTouchable";
import Icon from "BaseComponents/Icon";
import AppImage from "BaseComponents/AppImage";

import { createAlert } from "Utils/alert";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const AppImagePicker = ({
  options,
  mediaType = "photo",
  isEditable = true,
  isMultipleSelection = false,
  isMultipleSelectionAtOnce = false,
}) => {
  const [imgUris, setImgUris] = useState([]);
  const [promptIsApproved, setPromptIsApproved] = useState(false);
  const [removedIdx, setRemovedIdx] = useState("");

  const requestPermission = async () => {
    try {
      const res = await ImagePicker.requestCameraPermissionsAsync();
      if (!res.granted) {
        alert("You need to enable permission to access the library.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const returnOptions = () => {
    let localOptions = { ...options };
    if (mediaType === "photo") {
      localOptions = {
        ...localOptions,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      };
    } else if (mediaType === "video") {
      localOptions = {
        ...localOptions,
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      };
    } else {
      localOptions = {
        ...localOptions,
        mediaTypes: ImagePicker.MediaTypeOptions.All,
      };
    }

    if (isEditable) {
      localOptions = {
        ...localOptions,
        allowsEditing: true,
      };
    }

    if (isMultipleSelectionAtOnce) {
      localOptions = {
        ...localOptions,
        allowsMultipleSelection: true,
      };
    }

    return localOptions;
  };

  const addImage = async () => {
    try {
      const localOptions = returnOptions();
      const res = await ImagePicker.launchImageLibraryAsync(localOptions);
      const localUris = [...imgUris];
      let index = 0;
      if (localUris?.length) {
        index = localUris[localUris.length - 1].index;
      }
      if (res?.assets?.[0]?.uri) {
        res.assets.forEach((item) => {
          index += 1;
          localUris.push({ index, uri: item.uri });
        });
        setImgUris(localUris);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeImage = (idx) => {
    const res = createAlert({
      isAlert: true,
      title: "Delete Image",
      message: "Are you sure you want to delete the selected image?",
      buttons: [
        {
          text: "No",
          onPress: () => setPromptIsApproved(false),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            setPromptIsApproved(true);
            setRemovedIdx(idx);
          },
        },
      ],
    });
  };

  useEffect(() => {
    if (promptIsApproved && removedIdx) {
      let localImgUris = [...imgUris];
      localImgUris = localImgUris.filter((item) => item.index !== removedIdx);
      setImgUris([...localImgUris]);
      setPromptIsApproved(false);
      setRemovedIdx("");
    }
  }, [promptIsApproved, removedIdx]);

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <>
      <>
        {isMultipleSelection ? (
          <AppView direction="row" isFullWidth={true} flex_wrap={true}>
            {imgUris.map((item) => (
              <AppTouchable
                key={item.index}
                type="highlight-no-effect"
                touchableProps={{ onPress: () => removeImage(item.index) }}
                widthInSize={100}
                bgColor="gray"
                heightInSize={100}
                brRad={10}
                brColor="black"
                brThickness={2}
                isCentralizedInX1Dir
                isCentralizedInX2Dir
                marginR={2}
                marginB={2}
              >
                <AppImage
                  isFromUri={true}
                  src={item.uri}
                  width={100}
                  height={100}
                  imgProps={{ blurRadius: 0, borderRadius: 10 }}
                  isCentralizedInX1Dir={true}
                  isCentralizedInX2Dir={true}
                  brRad={10}
                />
              </AppTouchable>
            ))}

            <AppTouchable
              type="highlight-no-effect"
              touchableProps={{ onPress: () => addImage() }}
              widthInSize={100}
              bgColor="gray"
              heightInSize={100}
              brRad={10}
              brColor="black"
              brThickness={2}
              isCentralizedInX1Dir
              isCentralizedInX2Dir
            >
              <Icon name="image" size={50} color="white" />
            </AppTouchable>
          </AppView>
        ) : (
          <AppTouchable
            type="highlight-no-effect"
            touchableProps={{
              onPress: () => {
                if (imgUris?.length) {
                  removeImage(imgUris[0].index);
                } else {
                  addImage();
                }
              },
            }}
            widthInSize={100}
            bgColor="gray"
            heightInSize={100}
            brRad={10}
            brColor="black"
            brThickness={2}
            isCentralizedInX1Dir
            isCentralizedInX2Dir
            marginR={2}
            marginB={2}
          >
            {imgUris?.length ? (
              <AppImage
                isFromUri={true}
                src={imgUris[0].uri}
                width={100}
                height={100}
                imgProps={{ blurRadius: 0, borderRadius: 10 }}
                isCentralizedInX1Dir={true}
                isCentralizedInX2Dir={true}
                brRad={10}
              />
            ) : (
              <Icon name="image" size={50} color="white" />
            )}
          </AppTouchable>
        )}
      </>
    </>
  );
};

export default AppImagePicker;
