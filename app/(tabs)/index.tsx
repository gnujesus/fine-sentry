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
        <View className="flex-1 justify-between mt-5 mb-5 bg-light rounded-3xl p-10">
          <View className="flex-row gap-5 justify-between">
            <Image source={amadis} className="w-[60px] h-[60px] rounded-full" />

            <View className="flex-row gap-2">
              <TouchableOpacity className="rounded-xl p-4">
                <Search color="white" size={30} strokeWidth={1.5} />
              </TouchableOpacity>

              <TouchableOpacity className="rounded-xl p-4 flex-row gap-7">
                <Focus color="white" size={30} strokeWidth={1.5} />
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-5 rounded-3xl pt-5">
            <LinearGradient
              colors={["#05A16E", "#187558"]}
              style={{ flex: 1, borderRadius: 15 }}
              start={{ x: 1, y: 2 }}
              end={{ x: 0, y: 1 }}
              className="p-7 gap-2"
            >
              <Text className="text-white font-bold text-3xl">
                Hello, Amadis
              </Text>
              <Text className="text-white text-lg font-semibold">
                Total Fines
              </Text>
              <Text className="text-white text-2xl font-bold">👋</Text>
            </LinearGradient>
          </View>

          <View className="absolute bg-light bottom-0 right-0 rounded-3xl px-32 py-5">
            <Text className="text-white text-2xl font-bold mb-14">
              RD$ 0.00
            </Text>
          </View>
        </View>
        {/* <View className="flex-1 mt-5">
          <SearchBar
            placeholder="Search for a fine..."
            onPress={() => router.push("/search")}
          />
        </View> */}

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
