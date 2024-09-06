import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.primary }} >
            <Tabs.Screen name="tips-tricks" options={{
                tabBarLabel: "Tips&Tricks",
                tabBarIcon: () => (
                    <MaterialIcons name="tips-and-updates" size={24} color="yellow" />
                )
            }} />
            <Tabs.Screen name="day-skipper" options={{
                tabBarLabel: "Day Skipper",
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="account-tie-hat" size={24} color="lightblue" />
                )
            }} />
            <Tabs.Screen name="competent-crew" options={{
                tabBarLabel: "Competent Crew",
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="tshirt-crew" size={24} color="gray" />
                )
            }} />
        </Tabs>
    )
}

export default TabsLayout;