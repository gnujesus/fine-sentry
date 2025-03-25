import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { ChevronRight } from "lucide-react-native";
import { useRouter } from "expo-router";

interface Props {
  fine: Fine;
}

export default function FineListItem({ fine }: Props) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/fines/${fine.id}`);
  };

  return (
    <Pressable onPress={handlePress}>
      <View className="flex-1 flex-row self-center w-full justify-between bg-light shadow-lg shadow-white/20 rounded-xl py-4 px-5">
        <View className="flex-row gap-4">
          <View>
            <Image className="w-20 h-20 rounded-full" src={fine.image_url} />
          </View>

          <View className="mt-2">
            <Text className="text-lg text-white font-semibold">
              {fine.brand}, {fine.model}
            </Text>
            <Text className="text-sm text-gray ">{fine.date}</Text>
          </View>
        </View>
        <View className="gap-4 justify-center">
          <Text className="text-danger text-sm">RD$ 50000</Text>
        </View>
      </View>
    </Pressable>
  );
}
