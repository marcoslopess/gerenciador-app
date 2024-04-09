import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./src/screens/Home";
import RegisterScreen from "./src/screens/Register";
import RelatoriosScreen from "./src/screens/Relatorios";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Provider } from "react-native-paper";
import { ApiProvider, useApi } from "./src/context/FinancialRecord";

const Tab = createMaterialBottomTabNavigator();

function App() {
  const { loading } = useApi();

  return (
    <Provider>
      <ApiProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{
              marginBottom: 50,
              paddingLeft: 50,
              paddingRight: 50,
              position: "absolute",
              borderRadius: 50,
              backgroundColor: "transparent",
              height: 60,
              display: loading ? "none" : "flex",
            }}
            labeled={false}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused }) => <Icon name="home" size={24} color={focused ? "#000" : "#748c94"} />,
              }}
            />
            <Tab.Screen
              name="Registrar"
              component={RegisterScreen}
              options={{
                tabBarIcon: ({ focused }) => <Icon name="add-circle" size={24} color={focused ? "#000" : "#748c94"} />,
              }}
            />
            <Tab.Screen
              name="Relatorios"
              component={RelatoriosScreen}
              options={{
                tabBarIcon: ({ focused }) => <Icon name="list" size={24} color={focused ? "#000" : "#748c94"} />,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ApiProvider>
    </Provider>
  );
}

export default App;
