import { View, Text, FlatList, ScrollView } from "react-native";
import FineCard from "./FineCard";
import React from "react";
import FineListItem from "./FineListItem";
import Separator from "./Separator";
import { ChevronRight } from "lucide-react-native";

interface Props {
  fineList: Fine[];
}

export default function FineList({ fineList }: Props) {
  return (
    <View className="flex-1">
      <View className="flex-1 justify-between flex-row">
        <Text className="text-white text-2xl font-bold">Fines</Text>
        <View className="flex-row items-center gap-4">
          <Text className="text-gray">Find all</Text>
          <View className="pt-1">
            <ChevronRight size={20} color="gray" />
          </View>
        </View>
      </View>
      <Separator />
      {fineList.map((fine, index) => (
        <View key={index}>
          <FineListItem fine={fine} />
          <Separator />
        </View>
      ))}
      <View className="flex-1 flex-row justify-center">
        <Text className="text-gray">Go back to top</Text>
      </View>
    </View>
  );
}
