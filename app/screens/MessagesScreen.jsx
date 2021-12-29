import React from "react";
import { View, FlatList, Text, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListItem from "../components/ListItem/ListItem";
import ListItemSeparator from "../components/ListItemSeparator/ListItemSeparator";
import ScreenView from "../components/ScreenView/ScreenView";
import colors from "../config/colors";
import { styles } from "../styles/MessagesScreenCSS";
const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/kamyab.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D3",
    image: require("../assets/kamyab.jpg"),
  },
];
function MessagesScreen() {
  const [messages, setMessages] = React.useState(initialMessages);
  const [refreshing, setRefreshing] = React.useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <ScreenView>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Clicked", item)}
            renderRightActions={[
              <TouchableWithoutFeedback onPress={() => handleDelete(item)}>
                <View style={styles.container}>
                  <MaterialCommunityIcons
                    name="trash-can"
                    size={35}
                    color={colors.white}
                  />
                </View>
              </TouchableWithoutFeedback>,
            ]}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D3",
              image: require("../assets/kamyab.jpg"),
            },
          ])
        }
      />
    </ScreenView>
  );
}
export default MessagesScreen;
