import React, { useContext } from "react";

import { View, Text, Image } from "react-native";
import { styles } from "./styles";

import Button from "../../components/Button";

import { Context } from "../../Context";

export default function Home() {
  const { handleSetCurrentPage } = useContext(Context);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.header}>
          <Text style={styles.line01}>Calcule o custo dos</Text>
          <Text style={styles.line02}>combustiveis</Text>
        </View>
        <Image
          style={styles.image}
          source={require("../../assets/images/home-illustration.png")}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          Calcule aqui qual combustivel tem melhor custo beneficio
        </Text>
      </View>
      <View style={styles.bottom}>
        <Button
          type="secondary"
          title="Começar"
          onPress={() => handleSetCurrentPage("Data")}
        >
          <Image
            source={require("../../assets/images/arrow-illustration-home.png")}
            resizeMode="contain"
          />
        </Button>
      </View>
    </View>
  );
}
