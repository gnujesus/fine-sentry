import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import BaseLayout from "@/components/BaseLayout";
import amadis from "@/assets/images/amadis.png";

export default function Profile() {
  const titleStyle = "text-light font-bold text-xl";
  const textStyle = "text-light font-bold text-md";

  return (
    <BaseLayout>
      <ScrollView>
        <View>
          <Image source={amadis} className="w-full h-[550px]" />
          <View className="flex-col items-start justify-center mt-5 px-5 gap-5">
            <Text className={titleStyle}>Oficial Amaris Suárez Genao</Text>
            <Text className={textStyle}>
              Laburando desde: <Text className="text-text">2014</Text>
            </Text>
            <Text className={textStyle}>
              Área de trabajo
              <Text className="text-text">Av. Independencia, 224</Text>
            </Text>
            <Text className={textStyle}>
              Description:{"\n"}
              <Text className="text-text">
                Amadis Suárez es un oficial de Seguridad Vial que labura desde
                el año 2014. Su compromiso con la seguridad vial es
                incomparable, como nunca se ha visto en la DIGESETT. Es un
                hombre de confianza y valores.
              </Text>
            </Text>

            <Text className="text-light font-bold text-md">
              {"\n"}
              <Text className="text-text italic">
                "Un gran poder conlleva una gran responsabilidad"
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </BaseLayout>
  );
}
