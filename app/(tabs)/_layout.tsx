import React, { useEffect } from "react";
import { Tabs } from "expo-router";
import { images } from "../../constants/images";
import { View, Image, ImageBackground, Text, Dimensions } from "react-native";
import { icons } from "@/constants/icons";
import { colors } from "@/constants/colors";
import TabIcon from "@/components/TabIcon";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useRootNavigationState } from "expo-router";
import { House, Search, User } from "lucide-react-native";

const tabs = [
  {
    id: 1,
    icon: <House size={18} color="#fff" />,
    name: "index",
    title: "Home",
  },
  {
    id: 2,
    icon: <Search size={18} color="#fff" />,
    name: "search",
    title: "Search",
  },
  {
    id: 3,
    icon: <User size={18} color="#fff" />,
    name: "profile",
    title: "Profile",
  },
];

export default function _layout() {
  const navigationState = useRootNavigationState();

  const index = navigationState?.routes.findIndex(
    (route: any) => route.key === navigationState?.key
  );

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#343638",
          borderRadius: 50,
          marginHorizontal: 155,
          marginBottom: 36,
          height: 65,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#343638",
          boxShadow: "0px 3px 3px rgba(255, 255, 255, 0.2)",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.id}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
function useAnimatedSyle(arg0: () => never[]) {
  throw new Error("Function not implemented.");
}
