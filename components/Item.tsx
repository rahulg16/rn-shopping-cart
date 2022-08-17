import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function Item({ id, value, setItemsArr }: any) {
  function handleAdd() {
    setItemsArr((prevArr: any) =>
      prevArr.map((item: any) => {
        if (item.id == id) {
          return {
            id: id,
            value: item.value + 1,
          };
        } else return item;
      })
    );
  }

  function handleRemove() {
    setItemsArr((prevArr: any) =>
      prevArr.map((item: any) => {
        if (item.id == id && item.value > 0) {
          return {
            id: id,
            value: item.value - 1,
          };
        } else return item;
      })
    );
  }

  function handleDelete() {
    setItemsArr((prevArr: any) =>
      prevArr.filter((item: any) => {
        return id != item.id;
      })
    );
  }

  return (
    <View style={styles.item} testID="cart-item">
      <View
        style={[
          styles.itemsNum,
          value > 0 ? styles.notEmptyCart : styles.emptyCartText,
        ]}
      >
        <Text style={styles.valueText} testID={`items-selected-display-${id}`}>
          {value == 0 ? "Zero" : value}
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.addBtn, styles.btn]}
        onPress={handleAdd}
        testID={`add-item-${id}`}
      >
        <AntDesign name="pluscircle" size={14} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.removeBtn, styles.btn]}
        onPress={handleRemove}
        testID={`remove-item-${id}`}
      >
        <AntDesign name="minuscircle" size={14} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.deleteBtn, styles.btn]}
        onPress={handleDelete}
        testID={`delete-item-${id}`}
      >
        <FontAwesome name="trash" size={14} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "98%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  itemsNum: {
    width: 65,
    height: 30,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  addBtn: {
    backgroundColor: "#576F72",
  },
  removeBtn: {
    backgroundColor: "#0078AA",
  },
  deleteBtn: {
    backgroundColor: "#EB1D36",
  },
  btn: {
    height: 36,
    width: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  valueText: { fontWeight: "bold", fontSize: 15 },
  emptyCartText: {
    backgroundColor: "#FEDB39",
  },
  notEmptyCart: {
    backgroundColor: "#0096FF",
  },
});
