import {
  View,
  Text,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

interface Props {
  fine: Fine;
  grid?: boolean;
}

export default function FineCard({ fine, grid = false }: Props) {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const handlePress = () => {
    router.push(`/fines/${fine.id}`);
  };

  // Calculate width for grid card (with margin/gap)
  const cardWidth = grid ? (width - 40) / 2 : width - 40;

  return (
    <Pressable onPress={handlePress}>
      <View
        style={{ width: cardWidth }}
        className={`bg-[#242424] rounded-[10px] overflow-hidden mb-5 ${
          grid ? "" : "pb-5"
        }`}
      >
        <Image className="w-full aspect-square" src={fine.image_url} />
        <View className={`px-3 py-2 ${grid ? "gap-1" : "gap-3"}`}>
          <Text
            className={`text-light font-bold ${
              grid ? "text-base" : "text-2xl"
            }`}
            numberOfLines={2}
          >
            {fine.brand} {fine.model}, {fine.year}, {fine.color}
          </Text>
          <Text
            className={`text-text font-bold ${grid ? "text-base" : "text-2xl"}`}
            numberOfLines={2}
          >
            {fine.date}
          </Text>
          {!grid && (
            <>
              <Text className="text-text">Emitted on: {fine.date}</Text>
              <Text className="text-text">
                Infraction Type: {fine.infraction_type}
              </Text>
            </>
          )}
        </View>
      </View>
    </Pressable>
  );
}
