import React from "react";
import { View, Image } from "react-native";
import AppText from "../components/AppText";

import ListItem from "../components/ListItem/ListItem";
import { styles } from "../styles/ListingDetailsScreenCSS";
export default function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/kamyab.jpg")}
            title="Kamyab Rouhifar"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}
