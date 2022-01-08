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
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida facilisis urna et scelerisque. Nulla dignissim ac eros ut lobortis. Donec eleifend quis nisi in fringilla. Integer rhoncus, leo vulputate dictum elementum, odio velit condimentum massa, a eleifend orci tellus sed ligula. Duis convallis volutpat augue, id volutpat augue porttitor eu. Donec risus mi, semper non dictum finibus, efficitur nec nunc. Sed iaculis odio nec efficitur posuere. Aliquam porta lectus orci, vel cursus sem laoreet sit amet. Ut viverra nulla at scelerisque aliquam. Duis venenatis arcu nunc, sit amet luctus augue egestas sit amet. Sed eget est est. Proin quis lectus eget magna volutpat consequat at luctus ex. Quisque posuere iaculis vestibulum. Phasellus non interdum nibh. Ut nisi orci, cursus nec euismod at, pharetra quis massa",
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
