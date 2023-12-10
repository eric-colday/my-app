import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, StatusBar, Image } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restaurantDetail/MenuItems";

const OrderCompleted = ({ navigation }) => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="auto" />
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image
          style={{ width: 100, height: 100, alignSelf: "center", marginTop:100, marginBottom: 100 }}
          source={require("../../assets/images/fast-food.png")}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 30,
            position: "relative",
            bottom: 70
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate("Home")}
          >
            Retour
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;
