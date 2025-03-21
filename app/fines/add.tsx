import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import BaseLayout from "@/components/BaseLayout";
import { useRouter } from "expo-router";
import SearchBar from "@/components/SearchBar";

export default function Add() {
  const router = useRouter();

  const [licensePlate, setLicensePlate] = useState("");

  const handleSearch = () => {};

  return (
    <BaseLayout>
      <View className="flex-1 mt-5">
        <SearchBar
          placeholder="Search for a fine..."
          value={licensePlate}
          onChangeText={(text) => setLicensePlate(text)}
        />
      </View>
    </BaseLayout>
  );
}
