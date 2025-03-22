import { View, Text } from "react-native";
import React, { Children } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function BaseLayout({ children, className }: Props) {
  return (
    <View className={`flex-1 bg-background ${className}`}>{children}</View>
  );
}
