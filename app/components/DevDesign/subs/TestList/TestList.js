import { View, Text, FlatList } from "react-native";
import { useState } from "react";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { styles, fontStyleFunc } from "Styles";

import ListCard from "./subs/ListCard";
import ListSeparator from "./subs/ListSeparator";
import { LIST_OF_ITEMS } from "./constants";
import { localStyles } from "../../localStyles";

const TestList = () => {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <>
      <FlatList
        data={LIST_OF_ITEMS}
        keyExtractor={(item) => item.id}
        // numColumns={3}
        renderItem={({ item }) => (
          <ListCard
            title={item.title}
            content={item.content}
            image={item.image}
            onPress={() => console.log(item.id)}
            onLongPress={() => console.log("Hello")}
          />
        )}
        ItemSeparatorComponent={() => <ListSeparator />}
        refreshing={refreshing}
        onRefresh={() => console.log("Hello")}
      />
    </>
  );
};

export default TestList;
