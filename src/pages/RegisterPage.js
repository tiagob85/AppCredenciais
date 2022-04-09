import React from 'react';
import{
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native';

import InputCredencialText from '../components/InputCredencialText';  
import Formbutton from '../components/Formbutton';

const RegisterPage = ({navigation}) =>{
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.ViewStyle}>
                <Text>RegisterPage</Text>
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
                <Formbutton 
                    title="Gravar"
                    customClick={() => navigation.navigate('Main')}
                    icon="check"
                    mode="save"
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
    TextInputStyle:{
        color: '#000000',
        fontSize: 20,
    },
});

export default RegisterPage;