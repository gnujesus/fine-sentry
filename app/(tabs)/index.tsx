import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link } from "expo-router";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import SearchBar from "../../components/SearchBar";
import { useRouter } from "expo-router";
import BaseLayout from "@/components/BaseLayout";

export default function Index() {
  const router = useRouter();

  return (
    <BaseLayout>
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        <View className="flex-1 mt-5">
          <SearchBar
            placeholder="Search for a fine..."
            onPress={() => {
              router.push("/search");
            }}
          />
        </View>

        {/* TODO: Make a component */}
        {/* Add Button */}
        <View className="flex-1 fixed">
          <TouchableOpacity
            className="absolute bottom-[8em] right-10"
            activeOpacity={0.7}
            onPress={() => {
              router.push("/fines/add");
            }}
          >
            <View className="bg-primary w-16 h-16 rounded-full justify-center items-center">
              <Text className="text-accent text-3xl flex-1 mt-2">+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </BaseLayout>
  );
}
