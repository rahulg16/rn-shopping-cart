import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import Item from "./components/Item";

export default function App() {
  const defaultItemsArr = [
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
    {
      id: 3,
      value: 0,
    },
    {
      id: 4,
      value: 0,
    },
  ];

  let [itemsArr, setItemsArr] = useState(defaultItemsArr);
  let [itemsSelected, setItemsSelected] = useState<number>(0);

  useEffect(() => {
    setItemsSelected(
      itemsArr.reduce((prevValue, item): any => {
        if (item.value > 0) {
          return prevValue + 1;
        } else return prevValue;
      }, 0)
    );
  }, [itemsArr]);

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          position: "absolute",
          top: 80,
        }}
      >
        Shopping Cart
      </Text>
      <View style={styles.cart}>
        <View style={styles.head}>
          <Entypo name="shopping-cart" size={20} color="black" />
          <View style={styles.display}>
            <Text style={styles.items} testID="items-in-cart">
              {itemsSelected}
            </Text>
          </View>
          <Text>Items</Text>
        </View>
        <View style={styles.resetControls}>
          <TouchableOpacity
            style={[styles.resetBtn, styles.btn]}
            onPress={() => {
              setItemsArr(defaultItemsArr);
            }}
            testID="resetBtn"
          >
            <Feather name="refresh-cw" size={18} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.recycleBtn, styles.btn]}
            onPress={() => {
              setItemsArr([]);
            }}
            testID="recycle-btn"
          >
            <FontAwesome name="recycle" size={18} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.itemsContainer} testID="items-container">
          {itemsArr.map((item) => {
            return (
              <Item
                id={item.id}
                value={item.value}
                setItemsArr={setItemsArr}
                key={item.id}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  cart: {
    backgroundColor: "#A6D1E6",
    width: "75%",
    paddingVertical: 15,
    alignItems: "center",
    flex: 0.45,
  },
  head: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  display: {
    height: 30,
    width: 60,
    backgroundColor: "#256D85",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 18,
  },
  items: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  resetBtn: {
    backgroundColor: "#4E944F",
  },
  recycleBtn: {
    backgroundColor: "#3AB4F2",
  },
  btn: {
    height: 36,
    width: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  resetControls: {
    width: 80,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  itemsContainer: {
    flex: 1,
    width: "80%",
    marginTop: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});
