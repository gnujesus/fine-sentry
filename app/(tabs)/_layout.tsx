import React from "react";
import { Tabs } from "expo-router";
import { images } from "../../constants/images";
import { View, Image, ImageBackground, Text } from "react-native";
import { icons } from "@/constants/icons";
import { colors } from "@/constants/colors";

function TabIcon({ focused, title, icon }: any) {
  return focused ? (
    <>
      <View className="bg bg-primary flex flex-row w-full flex-1 min-w-[112px] min-h-20 mt-4 justify-center items-center rounded-3xl overflow-hidden">
        <Image source={icon} tintColor="#213547" className="size-5" />
        <Text className="text-accent text-base font-semibold ml-2">
          {title}
        </Text>
      </View>
    </>
  ) : (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor={colors.text} />
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
          backgroundColor: "#0f0f0f",
          borderRadius: 10,
          marginHorizontal: 90,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0f0f",
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
