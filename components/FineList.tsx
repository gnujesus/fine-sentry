import { View, Text, FlatList, ScrollView, Pressable } from "react-native";
import FineCard from "./FineCard";
import React from "react";
import FineListItem from "./FineListItem";
import Separator from "./Separator";
import { ChevronRight } from "lucide-react-native";
import { colors } from "@/constants/colors";

interface Props {
  fineList: Fine[];
}

export default function FineList({ fineList }: Props) {
  return (
    <View className="flex-1">
      <View className="flex-1 justify-between flex-row mb-10">
        <Text className="text-white text-xl font-semibold">Fines</Text>
        <View className="flex-row items-center gap-4">
          <Text className="text-primary text-sm">View all</Text>
          <ChevronRight size={20} color={colors.primary} />
        </View>
      </View>
      <View className="flex-1 gap-4">
        {fineList.map((fine, index) => (
          <View key={index}>
            <FineListItem fine={fine} />
          </View>
        ))}
      </View>
      {/* <View className="flex-1 flex-row justify-center">
        <Text className="text-gray">Go back to top</Text>
      </View> */}
    </View>
  );
}
