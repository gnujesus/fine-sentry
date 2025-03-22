import React from "react";
import { Tabs } from "expo-router";
import { images } from "../../constants/images";
import { View, Image, ImageBackground, Text } from "react-native";
import { icons } from "@/constants/icons";
import { colors } from "@/constants/colors";

function TabIcon({ focused, title, icon }: any) {
  return focused ? (
    <>
      <View className="bg bg-primary flex flex-row w-full flex-1 min-w-20 min-h-20 mt-10 justify-center items-center rounded-full overflow-hidden">
        <Image source={icon} tintColor="#fff" className="size-5" />
      </View>
    </>
  ) : (
    <View className="size-full justify-center items-center mt-10 rounded-full">
      <Image source={icon} tintColor="#fff" className="size-5" />
    </View>
  );
}

export default function _layout() {
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
          backgroundColor: "#111",
          borderRadius: 50,
          marginHorizontal: 140,
          marginBottom: 36,
          height: 75,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#111",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Home" icon={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Search" icon={icons.search} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Profile" icon={icons.person} />
          ),
        }}
      />
    </Tabs>
  );
}
