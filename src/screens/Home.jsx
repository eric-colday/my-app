import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";

const YELP_API_KEY =
  "wBtW8sPBu2zmXKIJzS3kEw4Ada5gkZBF7itZRop3GS5zY8IXmFuocZOuao1Gnwwdf-coCU971da1abQxro5XzmVVSl_IjYe2zYLh3IyzFTM_w5DXbgyhasngdWp1ZXYx";

const Home = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [products, setProducts] = useState([]);
  const [city, setCity] = useState("");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
        accept: application / json,
      },
    };

    const res = await fetch(yelpUrl, apiOptions);
    const json = await res.json();
    return setRestaurantData(
      json.businesses.filter((business) =>
        business.transactions.includes(activeTab.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <StatusBar style="auto" />
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
