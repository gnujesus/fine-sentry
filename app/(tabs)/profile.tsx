import { View, Text, ScrollView, Image } from "react-native";
import Button from "@/components/Button";
import React from "react";
import BaseLayout from "@/components/BaseLayout";
import amadis from "@/assets/images/amadis.png";

export default function Profile() {
  const titleStyle = "text-light font-bold text-xl";
  const textStyle = "text-light font-bold text-md";

  const data = [
    {
      id: 1,
      number: "RD$ 300k",
      description: "On fines",
    },

    {
      id: 2,
      number: "+342",
      description: "Hours worked",
    },
  ];

  return (
    <BaseLayout>
      <ScrollView className="flex-1 px-5">
        <View className="shadow-lg shadow-white/20 flex-1 gap-10 center w-full justify-center items-center bg-light rounded-3xl py-6 px-8 mt-44">
          <View className="gap-5">
            <View className="gap-4 items-center">
              <Image
                className="w-32 h-32 rounded-full border-light2 border-3"
                src="https://avatars.githubusercontent.com/u/107089453?v=4"
              />

              <View className="mt-2 items-center">
                <Text className="text-lg text-white font-semibold">
                  Jesús Martínez
                </Text>
                <Text className="text-sm text-gray">DGT-29382</Text>
              </View>
            </View>

            <View className="gap-10">
              <Text className="text-sm py-1 px-3 bg-primary/20 text-white rounded-full">
                Working since 2009
              </Text>
            </View>
          </View>

          <View>
            <Text className="text-white text-center">
              {
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            </Text>
          </View>

          {/* This button was made using pixels (hard coded). 
          TODO: make it responsive, cuz if I don't them I'm fucked */}
          <View className="w-1/2 flex-row justify-between gap-5">
            <Button
              textClassName="text-sm text-background"
              className="py-1 !bg-white shadow-white/40"
            >
              Manage Profile
            </Button>

            {/* <Button
              animationClassName="transition transform active:-translate-y-1 active:scale-95"
              className="flex-1"
              textClassName="text-sm"
            >
              Details
            </Button> */}
          </View>
        </View>
        <View className="flex-1 flex-row gap-2 justify-between">
          {data.map((item) => (
            <View
              key={item.id}
              className="flex-1 w-full bg-light rounded-3xl py-6 px-8 mt-2 shadow-lg shadow-white/20"
            >
              <Text className="font-semibold text-xl text-white">
                {item.number}
              </Text>
              <Text className="font-semibold text-xs text-gray">
                {item.description}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </BaseLayout>
  );
}
