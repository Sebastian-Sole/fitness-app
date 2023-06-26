import { Text, View } from "react-native";
import { Card } from "@rneui/themed";

const MealsScreen = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Card
        containerStyle={{
          padding: 0,
          width: "40%",
        }}
      >
        {/* <Card.Divider /> */}

        <Card.Image
          source={{
            uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
          }}
          style={{ width: "100%", margin: 0 }}
        />
      </Card>
    </View>
  );
};

export default MealsScreen;
