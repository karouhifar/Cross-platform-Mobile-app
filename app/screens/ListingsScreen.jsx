import React from "react";
import { View, Text, FlatList } from "react-native";
import Card from "../components/Card/Card";
import ScreenView from "../components/ScreenView/ScreenView";
import { styles } from "../styles/ListingsScreenCSS";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/chair.jpeg"),
  },
];
export default function ListingsScreen() {
  return (
    <ScreenView style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(list) => list.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </ScreenView>
  );
}
