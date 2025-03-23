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
import amadis from "@/assets/images/amadis.png";
import { Focus, Search } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

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
        <View className="flex-1 justify-between mt-5 mb-5 bg-dark rounded-3xl p-10 flex gap-16">
          <View className="rounded-3xl">
            <Text className="text-white text-lg font-semibold">
              Total Fines
            </Text>
            <Text className="text-white font-bold text-3xl">RD$ 720,000</Text>
          </View>

          <View className="rounded-3xl flex-row justify-between">
            <Text className="text-white text-lg font-semibold">
              Amadis Suarez
            </Text>
            <Text className="text-white text-lg font-semibold">
              809-123-4567
            </Text>
          </View>
        </View>
        {/* <View className="flex-1 mt-5">
          <SearchBar
            placeholder="Search for a fine..."
            onPress={() => router.push("/search")}
          />
        </View> */}

        <View>
          <TouchableOpacity>
            <View className="bg-primary">
              <Text className="text-white text-3xl mb-2">Create</Text>
            </View>
          </TouchableOpacity>
          <View className="">
            <Text className="text-accent text-3xl mb-2">Create</Text>
          </View>
        </View>

        <View className="mt-0 bg-light px-7 py-10 rounded-3xl">
          {data && <FineList fineList={data} />}
        </View>
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

      {/* <TouchableOpacity
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
      </TouchableOpacity> */}
    </BaseLayout>
  );
}
