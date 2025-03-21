import { View, TextInput, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";
import { colors } from "@/constants/colors";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

export default function SearchBar({ placeholder, onPress }: Props) {
  return (
    <View className="flex-row gap-2 items-center bg-dark-200 rounded-3xl px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={colors.text}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor={colors.text}
      />
    </View>
  );
}
