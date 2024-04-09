import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./src/components/screens/Home";
import RegisterScreen from "./src/components/screens/Register";
import RelatoriosScreen from "./src/components/screens/Relatorios";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ThemeContext, ThemeProvider } from "styled-components";
import { Provider } from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <Provider>
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
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
