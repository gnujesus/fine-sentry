import { View, Text } from "react-native";
import React, { Children } from "react";

interface Props {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: Props) {
  return <View className="flex-1 bg-dark">{children}</View>;
}
