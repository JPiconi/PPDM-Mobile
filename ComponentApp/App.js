import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./src/styles/styles";
import TouchComponents from "./src/components/Buttons/TouchComponents";

// import { First, ComponentTesting } from "./src/components/SecondComponent";
// import ComponentsExportados from "./src/components/SecondComponent";
export default function App() {
  const saveBtn = () => {
    alert("Você salvou algo ao apertar este Botão!!");
  };
  const cancelBtn = () => {
    alert("Você cancelou algo ao apertar este Botão!!");
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("./srcc/assets/images/raposa.jpg")}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* <Text style={styles.text}>Oh Wow bro</Text> */}
        <TouchComponents funcClickBtn={saveBtn} text="Salvar" />
        <TouchComponents funcClickBtn={cancelBtn} text="Cancelar" />
      </View>
    </ImageBackground>
  );
}

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota GET
app.get('/', (req, res) => {
  res.send('');
});

// Rota POST
app.post('/', (req, res) => {
  const data = req.body;
  res.send({ message: 'Data received', data: data });
});

// Rota PUT
app.put('/', (req, res) => {
  const updatedData = req.body;
  res.send({ message: 'Data updated', data: updatedData });
});

// Rota DELETE
app.delete('/', (req, res) => {
  res.send({ message: 'Data deleted' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:port`);
});
