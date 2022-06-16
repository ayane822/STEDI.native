import {useState, useRef} from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text} from "react-native";

function sendText(phoneNumber){
  console.log("phoneNumber: ", phoneNumber);
}

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

  return (
    <SafeAreaView style={styles.margin}>
      <TextInput
        style={styles.input}
        setPhoneNumber={setPhoneNumber}
        value={phoneNumber}
        placeholder="208-206-7783"
        placeholderTextColor="#10278C"
      />
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="1234"
        placeholderTextColor="#10278C"
        keyboardType="numeric"
        secureTextEntry={true}
      />
    
      <TouchableOpacity
        style={styles.button}
        onPress={()=>
          {
            sendText()
          }}
      >
        <Text>Log in </Text>
      </TouchableOpacity>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  margin:{
    marginTop:250
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});


export default Login;