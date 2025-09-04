import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/pages/Login/index";
import ProcurarMoto from "./src/pages/ProcurarMoto/index";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import CadastrarMoto from "./src/pages/CadastrarMoto/index";
import Patio from "./src/pages/Patio/index";
import Participantes from "./src/pages/Participantes/index";
import Setor from "./src/pages/Setor/index";
import InfoMoto from "./src/pages/InfoMoto/index";
import { ThemeProvider } from "./src/context/ThemeContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#444444",
        tabBarStyle: {
          height: 60,
          paddingBottom: 1,
          paddingHorizontal: 2,
        },

        headerShown: false,
      }}
    >
      <Tab.Screen
        name="ProcurarMoto"
        component={ProcurarMoto}
        options={{
          tabBarIcon: () => <Ionicons name="search" size={26} color="#000" />,
          tabBarLabel: "Procurar Moto",
          tabBarActiveBackgroundColor: "#10B981",
          tabBarInactiveBackgroundColor: "#F97316",
        }}
      />
      <Tab.Screen
        name="Patio"
        component={Patio}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="garage" size={33} color="#000" />
          ),
          tabBarLabel: "Pátio",
          tabBarActiveBackgroundColor: "#10B981",
          tabBarInactiveBackgroundColor: "#F97316",
        }}
      />
      <Tab.Screen
        name="CadastrarMoto"
        component={CadastrarMoto}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="plus" size={33} color="#000" />
          ),
          tabBarLabel: "Adicionar moto",
          tabBarActiveBackgroundColor: "#10B981",
          tabBarInactiveBackgroundColor: "#F97316",
        }}
      />
      <Tab.Screen
        name="Participantes"
        component={Participantes}
        options={{
          tabBarIcon: () => (
            <Ionicons name="people-sharp" size={28} color="#000" />
          ),
          tabBarLabel: "Integrantes",
          tabBarActiveBackgroundColor: "#10B981",
          tabBarInactiveBackgroundColor: "#F97316",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Setor"
            component={Setor}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InfoMoto"
            component={InfoMoto}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
