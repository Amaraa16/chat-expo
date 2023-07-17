import { StyleSheet, Text, View } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{ fontSize: 30 }}>Chat</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text>hello</Text>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.bot}>
        <TextInput style={styles.inp} mode="outlined"></TextInput>
        <Button
          mode="contained"
          style={styles.button}
          icon="send"
          onPress={() => alert("clicked")}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 26,
  },
  top: {
    gap: 10,
  },
  inp: {
    width: 300,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginTop: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
  },
  bot: {
    flexDirection: "row",
    gap: 5,
  },
  card: {
    width: 300,
  },
});
