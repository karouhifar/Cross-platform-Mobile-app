import React from "react";
import { View, FlatList } from "react-native";

import ListItem from "../components/ListItem/ListItem";
import ListItemSeparator from "../components/ListItemSeparator/ListItemSeparator";
import IconView from "../components/IconView/IconView";
import { styles } from "../styles/AccountScreenCSS";
import ScreenView from "../components/ScreenView/ScreenView";
import colors from "../config/colors";
const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen(props) {
  return (
    <ScreenView style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Kamyab Rouhifar"
          subTitle="krouhifar@gmail.com"
          image={require("../assets/kamyab.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <IconView
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<IconView name="logout" backgroundColor="#ffe66d" />}
      />
    </ScreenView>
  );
}
