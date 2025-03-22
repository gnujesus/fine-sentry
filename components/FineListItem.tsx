import { View, Text, Image } from "react-native";
import React from "react";
import { ChevronRight } from "lucide-react-native";

interface Props {
  fine: Fine;
}

export default function FineListItem({ fine }: Props) {
  return (
    <View className="flex-1 flex-row self-center w-full justify-between">
      <View className="flex-row gap-7">
        <View>
          <Image className="w-20 h-20 rounded-full" src={fine.image_url} />
        </View>

        <View className="gap-3">
          <Text className="text-xl text-white font-bold">
            {fine.brand} {fine.model}
          </Text>
          <Text className="text-md text-primary">
            {fine.year}, <Text className="text-red-500">RD$ 500</Text>
          </Text>
        </View>
      </View>
      <View className="gap-4 justify-center">
        <ChevronRight size={20} color="white" />
      </View>
    </View>
  );
}
