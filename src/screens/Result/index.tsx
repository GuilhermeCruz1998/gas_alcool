import React, { useContext, useEffect, useState } from "react";

import { View, Text, Image } from "react-native";

import Button from "../../components/Button";

import { Context } from "../../Context";
import { styles } from "./styles";
import { getPrice } from "../../utils/getprice";

export default function Result() {
  const { formData, handleSetCurrentPage } = useContext(Context);
  const [resultValue, setResultValue] = useState(false);

  useEffect(() => {
    if (formData) {
      const imc = getPrice(Number(formData.weight), Number(formData.height));
      
      setResultValue(imc);
    }
  }, [formData]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.image}
          source={require("../../assets/images/result-illustration.png")}
          resizeMode="contain"
        />

        <View style={styles.header}>
          <Text style={styles.line01}>O combustivel melhor é</Text>
          <Text style={styles.line02}>{resultValue ? "Alcool" :"Gasolina"}</Text>
        </View>

        
      </View>
      <View style={styles.bottom}>
        <Button
          type="tertiary"
          title="Voltar"
          onPress={() => handleSetCurrentPage("Home")}
        >
          <Image source={require("../../assets/images/arrow-illustration-data.png")} resizeMode="contain" />
        </Button>
      </View>
    </View>
  );
}
