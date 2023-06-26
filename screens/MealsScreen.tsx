import { Card, View, Image } from "react-native-ui-lib";
import { Text } from "react-native";

const MealsScreen = () => {
  return (
    <View>
      <Card flex center>
        {}
        <Card.Image
          source={{
            uri: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&q=80",
          }}
        />
      </Card>
    </View>
  );
};

export default MealsScreen;
