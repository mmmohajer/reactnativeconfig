import { View, Text, Animated } from "react-native";
import { useRef, useEffect } from "react";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { getAllViewStyles } from "Utils/getStyles";
import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const AnimatedView = ({
  durationTime = 1000,
  initialOpacity = null,
  finalOpacity = null,
  initialTranslateX = null,
  finalTranslateX = null,
  initialTranslateY = null,
  finalTranslateY = null,
  initialRotation = null,
  finalRotation = null,
  startAnimation = false,
  setStartAnimation = null,
  children,
  ...props
}) => {
  const appliedStyle = getAllViewStyles(props);

  const fadeAnim = useRef(new Animated.Value(initialOpacity || 0)).current;
  const translateXAnim = useRef(
    new Animated.Value(initialTranslateX || 0)
  ).current;
  const translateYAnim = useRef(
    new Animated.Value(initialTranslateY || 0)
  ).current;
  const rotationAnim = useRef(new Animated.Value(initialRotation || 0)).current;

  let anmiationStyle = {};

  if (initialOpacity !== finalOpacity) {
    anmiationStyle = { ...anmiationStyle, opacity: fadeAnim };
  }

  let transforms = [];

  if (initialTranslateX !== finalTranslateX) {
    transforms.push({ translateX: translateXAnim });
  }

  if (initialTranslateY !== finalTranslateY) {
    transforms.push({ translateY: translateYAnim });
  }

  const rotationInDeg = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  if (initialRotation !== finalRotation) {
    transforms.push({ rotate: rotationInDeg });
  }

  if (
    initialTranslateX !== finalTranslateX ||
    initialTranslateY !== finalTranslateY ||
    initialRotation !== finalRotation
  ) {
    anmiationStyle = { ...anmiationStyle, transform: transforms };
  }

  useEffect(() => {
    if (initialOpacity !== finalOpacity && startAnimation) {
      Animated.timing(fadeAnim, {
        toValue: finalOpacity,
        duration: durationTime,
        useNativeDriver: true,
      }).start();
    }
    setTimeout(() => {
      if (setStartAnimation) {
        setStartAnimation(false);
      }
    }, durationTime);
  }, [fadeAnim, startAnimation, initialOpacity, finalOpacity]);

  useEffect(() => {
    if (initialTranslateX !== finalTranslateX && startAnimation) {
      Animated.timing(translateXAnim, {
        toValue: finalTranslateX,
        duration: durationTime,
        useNativeDriver: true,
      }).start();
    }
    setTimeout(() => {
      if (setStartAnimation) {
        setStartAnimation(false);
      }
    }, durationTime);
  }, [translateXAnim, startAnimation, initialTranslateX, finalTranslateX]);

  useEffect(() => {
    if (initialTranslateY !== finalTranslateY && startAnimation) {
      Animated.timing(translateYAnim, {
        toValue: finalTranslateY,
        duration: durationTime,
        useNativeDriver: true,
      }).start();
    }
    setTimeout(() => {
      if (setStartAnimation) {
        setStartAnimation(false);
      }
    }, durationTime);
  }, [translateYAnim, startAnimation, initialTranslateY, finalTranslateY]);

  useEffect(() => {
    if (initialRotation !== finalRotation && startAnimation) {
      Animated.timing(rotationAnim, {
        toValue: finalRotation,
        duration: durationTime,
        useNativeDriver: true,
      }).start();
    }
    setTimeout(() => {
      if (setStartAnimation) {
        setStartAnimation(false);
      }
    }, durationTime);
  }, [rotationAnim, startAnimation, initialRotation, finalRotation]);

  return (
    <>
      <Animated.View
        style={{
          ...appliedStyle,
          ...anmiationStyle,
        }}
      >
        {children}
      </Animated.View>
    </>
  );
};

export default AnimatedView;
