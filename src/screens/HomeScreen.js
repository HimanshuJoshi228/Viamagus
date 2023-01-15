import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../assets/colors';
import Home from './HomeTabs/Home';
import Leagues from './HomeTabs/Leagues';
import Research from './HomeTabs/Research';
import Leaderboard from './HomeTabs/Leaderboard';
import Profile from './HomeTabs/Profile';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = ({route}) => {
  const Tabs = [
    {
      name: 'Home',
      component: Home,
      label: 'Home',
      iconName: 'home',
      iconType: FontAwesome,
    },
    {
      name: 'Leagues',
      component: Leagues,
      label: 'Leagues',
      iconName: 'trophy',
      iconType: FontAwesome,
    },
    {
      name: 'Research',
      component: Research,
      label: 'Research',
      iconName: 'search',
      iconType: FontAwesome,
    },
    {
      name: 'Leaderboard',
      component: Leaderboard,
      label: 'Leaderboard',
      iconName: 'leaderboard',
      iconType: MaterialIcons,
    },
    {
      name: 'Profile',
      component: Profile,
      label: 'Profile',
      iconName: 'user',
      iconType: FontAwesome5,
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="EventsScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 65,
          backgroundColor: COLORS.white,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          marginBottom: 7,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
      }}>
      {Tabs.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              tabBarLabel: item.label,
              tabBarActiveTintColor: COLORS.bottomTabActive,
              tabBarIcon: ({focused, color, size}) => {
                color = focused ? COLORS.bottomTabActive : COLORS.placeholder;
                size = focused ? 25 : 20;
                return (
                  <item.iconType
                    name={item.iconName}
                    color={color}
                    size={size}
                  />
                );
              },
            }}
          />
        );
      })}

      {/* <Tab.Screen
        name="EventsScreen"
        component={EventsScreen}
        initialParams={route?.params?.response}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({focused, color, size}) => {
            color = COLORS.black;
            size = focused ? 35 : 25;
            return <FontAwesome name="calendar-o" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({focused, color, size}) => {
            color = COLORS.black;
            size = focused ? 35 : 25;
            return <Feather name="heart" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) => {
            color = COLORS.black;
            size = focused ? 35 : 25;
            return <Feather name="user" color={color} size={size} />;
          },
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default HomeScreen;
