import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View  
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import InputCredencialText from '../components/InputCredencialText';
import Optionbutton from '../components/Optionbutton';

const LogonPage = ({ navigation }) =>{
    
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.ViewStyle}>
                <View style={styles.IconStyle}>
                    <Icon  name="user" size={190} color="#000" />
                </View>                
                <InputCredencialText
                    style={styles.TextInputStyle}
                    placeholder="Digite o usuário..."
                    placeholderTextColor="#000"
                />        
                <InputCredencialText
                    style={styles.TextInputStyle}
                    placeholder="Digite a senha..."
                    placeholderTextColor="#000"
                    secureTextEntry={true}
                />
                <Optionbutton 
                    title="Entrar"
                    customClick={() => navigation.navigate('Main')}
                />   
            </View>     
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    ViewStyle:{
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    IconStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    TextInputStyle:{
      color: '#000000',
      fontSize: 20,
    }
});

export default LogonPage;