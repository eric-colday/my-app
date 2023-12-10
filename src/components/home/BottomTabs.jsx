import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native';

const BootomTabs = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Icon icon="home" text="Home" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Icon icon="search" text="Browse" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Icon icon="shopping-bag" text="Grocery" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("OrderCompleted")}>
        <Icon icon="receipt" text="Orders" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Icon icon="user" text="Account" />
      </TouchableOpacity>
    </View>
  );
};

export default BootomTabs;

const Icon = (props) => (
  <View>
    <FontAwesome5
      name={props.icon}
      size={25}
      style={{
        marginBottom: 3,
        alignSelf: "center",
      }}
    />
    <Text>{props.text}</Text>
  </View>
);
