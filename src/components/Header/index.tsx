import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import menuItem from './headet.data'
import QRCODE from '../../assets/QR-Code.png'

import { sx } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Header() {

    const navigation = useNavigation()
    const [openMenu, setOpenMenu] = useState(true)
    const [icon, setIcons] = useState(false)

    function openMenuSet() {
        setOpenMenu(!openMenu)

    }

    function showInformations() {
        setIcons(!icon)
    }

    function handlerLogout() {
        navigation.navigate("SplashScreens")
    }

    return (
        <SafeAreaView>
            <View style={sx.container}>
                <Text style={sx.TitleUser}>Olá, Lucas</Text>
                <View style={sx.contentButtons}>
                    <TouchableOpacity
                        style={sx.ButtonEye}
                        onPress={showInformations}
                    >
                        {!icon ? (
                            <Ionicons
                                name="eye-outline"
                                size={24}
                                color="white"
                            />
                        ) : (
                            <Ionicons
                                name="eye-off-outline"
                                size={24}
                                color="white"
                            />
                        )}

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={sx.ButtonCog}
                        onPress={openMenuSet}
                    >
                        <Ionicons
                            name="cog-outline"
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {!openMenu && (
                <ScrollView style={sx.contentOpenMenu}>
                    <TouchableOpacity onPress={openMenuSet}>
                        <Ionicons
                            name="close-outline"
                            size={33}
                            color="white"
                        />
                    </TouchableOpacity>
                    <View style={sx.contentBankOptions}>
                        <Image source={QRCODE} style={sx.Code} />
                        <View style={sx.containerOpenMenuBank}>
                            <Text style={sx.BankName}>Agência</Text>
                            <Text style={sx.BankNumber}>1</Text>
                        </View>
                        <View style={sx.containerOpenMenuBank}>
                            <Text style={sx.BankName}>Conta</Text>
                            <Text style={sx.BankNumber}>59845445-9</Text>
                        </View>
                    </View>
                    <View style={sx.continerButtonList}>
                        {menuItem.map(item => (
                            <TouchableOpacity
                                style={sx.ButtonList}
                                key={item.id}
                            >
                                <Text
                                    style={sx.ButtonListText}>
                                    {item.text}
                                </Text>
                                <Ionicons
                                    name="chevron-forward-outline"
                                    size={18}
                                    color="white"
                                />
                            </TouchableOpacity>
                        ))}

                        <TouchableOpacity
                            style={sx.ButtonLogout}
                            onPress={handlerLogout}
                        >
                            <Text style={sx.ButtonLogoutText}>SAIR DO APP</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            )}

        </SafeAreaView>
    );
}

