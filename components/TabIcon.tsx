import { Image } from "react-native";
import { Text, View } from "react-native";

interface Props {
  focused: boolean;
  icon: React.ReactNode;
}

export default function TabIcon({ focused, title, icon }: any) {
  return focused ? (
    <>
      <View className="bg-primary flex flex-row w-full flex-2 min-w-[60px] min-h-[60px] mt-8 justify-center items-center rounded-full overflow-hidden">
        {icon}
      </View>
    </>
  ) : (
    <View className="size-full justify-center items-center mt-8 rounded-full">
      {icon}
    </View>
  );
}
