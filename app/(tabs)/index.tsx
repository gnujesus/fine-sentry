import { icons } from "@/constants/icons";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import SearchBar from "../../components/SearchBar";
import { useRouter } from "expo-router";
import BaseLayout from "@/components/BaseLayout";
import {
  initializeDatabase,
  getAllFines,
  deleteAllFines,
} from "@/hooks/useDatabase";
import { useState, useEffect } from "react";
import FineList from "../../components/FineList";

export default function Index() {
  const router = useRouter();

  const [data, setData] = useState<Fine[]>();

  useEffect(() => {
    const run = async () => {
      await initializeDatabase();
      const all = await getAllFines();
      setData(all);
    };
    run();
  }, []);

  return (
    <BaseLayout>
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }} // Make space for the button
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        <View className="flex-1 mt-5">
          <SearchBar
            placeholder="Search for a fine..."
            onPress={() => router.push("/search")}
          />
        </View>

        <View className="mt-5">{data && <FineList fineList={data} />}</View>
      </ScrollView>

      <TouchableOpacity
        className="absolute bottom-[7em] right-10" // Absolute positioning
        activeOpacity={0.7}
        onPress={() => router.push("/fines/add")}
      >
        <View className="bg-primary w-16 h-16 rounded-full justify-center items-center shadow-lg">
          <Text className="text-accent text-3xl mb-2">+</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        className="absolute bottom-[7em] left-10" // Absolute positioning
        activeOpacity={0.7}
        onPress={() => {
          deleteAllFines();
          setData([]);
        }}
      >
        <View className="bg-red-500 w-16 h-16 rounded-full justify-center items-center shadow-lg">
          <Text className="text-light text-3xl mb-2">-</Text>
        </View>
      </TouchableOpacity>
    </BaseLayout>
  );
}
