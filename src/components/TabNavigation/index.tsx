import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { sx } from './styles';

import menuItems from './Data';

export function TabNavigation() {
    return (
        <View style={sx.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingLeft: 10,
                    paddingRight: 20
                }}
            >
                {menuItems.map(menuItem => (
                    <TouchableOpacity style={sx.TabItem} key={menuItem.id}>
                        <Ionicons
                            name={`${menuItem.icon}`}
                            size={menuItem.size}
                            color={menuItem.color}
                        />
                        <Text style={sx.TabText}>{menuItem.text}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View >
    );
}
