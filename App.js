import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './src/screens/OnboardingScreen';
import QuestionnaireScreen from './src/screens/QuestionnaireScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import StyleModuleScreen from './src/screens/StyleModuleScreen';
import RoutinesScreen from './src/screens/RoutinesScreen';
import DailyMissionsScreen from './src/screens/DailyMissionsScreen';
import ChatAIScreen from './src/screens/ChatAIScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="StyleModule" component={StyleModuleScreen} />
        <Stack.Screen name="Routines" component={RoutinesScreen} />
        <Stack.Screen name="DailyMissions" component={DailyMissionsScreen} />
        <Stack.Screen name="ChatAI" component={ChatAIScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;