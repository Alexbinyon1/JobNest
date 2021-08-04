/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {primaryColor, secondaryColor, white} from './styles';

import Sites from './components/Sites';
import Jobs from './components/Jobs';
import Quotes from './components/Quotes';
import Assets from './components/Assets';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const Tabs = () => (
  <Tab.Navigator
    initialRouteName="Sites"
    tabBarOptions={{
      style: {backgroundColor: primaryColor},
      labelStyle: {color: white},
      activeTintColor: secondaryColor,
      inactiveTintColor: white,
    }}>
    <Tab.Screen
      name="Sites"
      component={Sites}
      options={{
        tabBarLabel: 'Sites',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Jobs"
      component={Jobs}
      options={{
        tabBarLabel: 'Jobs',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="briefcase" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Quotes"
      component={Quotes}
      options={{
        tabBarLabel: 'Quotes',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Assets"
      component={Assets}
      options={{
        tabBarLabel: 'Assets',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="briefcase" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Tabs" component={Tabs} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
