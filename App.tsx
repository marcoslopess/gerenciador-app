import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import HomeScreen from "./src/screens/Home";
import RegisterScreen from "./src/screens/Register";
import RelatoriosScreen from "./src/screens/Relatorios";
import { StyleSheet, View, Text } from "react-native";
import { Provider } from "react-native-paper";
import { ApiProvider } from "./src/context/FinancialRecord";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Menu</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function App() {
  return (
    <Provider>
      <ApiProvider>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen options={{ headerTitleAlign: "center" }} name="Home" component={HomeScreen} />
            <Drawer.Screen options={{ headerTitleAlign: "center" }} name="Register" component={RegisterScreen} />
            <Drawer.Screen options={{ headerTitleAlign: "center" }} name="Relatorios" component={RelatoriosScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </ApiProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  v2Container: {
    flexDirection: "row",
    padding: 8,
  },
  v3Container: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 12,
  },
  square: {
    borderRadius: 0,
  },
  drawerHeader: {
    backgroundColor: "#512DA8",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default App;
