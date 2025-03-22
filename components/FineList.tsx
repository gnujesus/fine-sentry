import { View, Text } from "react-native";
import FineCard from "./FineCard";
import React from "react";

interface Props {
  fineList: Fine[];
}

export default function FineList({ fineList }: Props) {
  return (
    <View className="space-y-5">
      {fineList.map((fine: Fine) => (
        <FineCard key={fine.id} fine={fine} />
      ))}
    </View>
  );
}
