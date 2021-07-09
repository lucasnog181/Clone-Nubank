import React, { FormEvent, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import {
  ImageBackground,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { sx } from './styles';

import Background from '../../assets/NubankUser-.jpg'
import Logo from '../../assets/Nubank_Logo.png'

import { userModal } from '../../hooks/Modal';
import { useNavigation } from '@react-navigation/native';
import { cpfMask } from '../../components/MaskCPF/MaskCPF'


export function SplashScreens() {

  const { isOpenModal } = userModal();
  const [value, setValue] = useState('');
  const navigation = useNavigation()

  const [openModal, setOpenModal] = useState(isOpenModal)


  function setOpenModalState() {
    setOpenModal(!openModal)
  }

  function setCloseModalState() {
    setOpenModal(!openModal)
  }


  function handleFunction(event: FormEvent) {
    event.preventDefault();

    if (value.trim() === '') {
      return;
    }
  }

  function handleNavegationToHOme() {
    setValue("")
    setCloseModalState()
    navigation.navigate("Home")
  }

  return (

    <>
      <ImageBackground source={Background}
        style={sx.background}>
        <LinearGradient
          colors={['#ffffff00', '#30303092']}
          style={{
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />

        <SafeAreaView style={sx.content}>
          <View>
            <Image source={Logo}
              style={sx.Logo}
            />
          </View>

          <View style={sx.contentTitle}>
            <Text
              style={sx.Title}>
              Um mundo{'\n'}
              financeiro sem{'\n'}
              complexidades
            </Text>
            <TouchableOpacity style={sx.TouchableOpacity}>
              <Text style={sx.TouchableOpacityTitle}>
                COMEÇAR
              </Text>
            </TouchableOpacity>

            <View>
              <TouchableOpacity
                style={sx.TouchableOpacityNext}
                onPress={setOpenModalState}
              >
                <Text style={sx.TouchableOpacityNextTitle}>
                  Entrar na sua conta
                </Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>

      {openModal && (
        <View style={sx.contentModal}>
          <View style={sx.containerModal}>
            <TouchableOpacity onPress={setCloseModalState} >
              <Ionicons name="close-outline" size={40} color="black" />
            </TouchableOpacity>
            <View style={sx.ViewTextModal}>
              <Text style={sx.titleModal}>Bom te ver novamente!
                Para{'\n'} entrar, digite o seu CPF
              </Text>
              <TextInput
                placeholder="Digite o seu CPF"
                style={sx.InputModal}
                autoCompleteType="cc-number"
                keyboardType="numeric"
                maxFontSizeMultiplier={14}
                maxLength={14}
                value={value}
                onChangeText={value => setValue(cpfMask(value))}
              />
            </View>
          </View>

          <TouchableOpacity
            style={sx.ButtonModal}
            disabled={!value}
            onPress={handleNavegationToHOme}
          >
            <Text style={!value ? sx.desable : sx.active}>CONTINUAR</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
