import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Produto from "./src/screens/Produto";
import Contato from "./src/screens/Contato";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      {/* navegação entre as telas */}
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0a84ff",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >

        {/* tela Home */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Início" }}
        />

        {/* tela Produtos */}
        <Stack.Screen
          name="Produtos"
          component={Produtos}
          options={{ title: "Produtos" }}
        />

        {/* tela Contato */}
        <Stack.Screen
          name="Contato"
          component={Contato}
          options={{ title: "Contato" }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}