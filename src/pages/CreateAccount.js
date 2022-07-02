import React, {useState} from 'react';
import{
    SafeAreaView,
    StyleSheet,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import InputCredencialText from '../components/InputCredencialText';
import Formbutton from '../components/Formbutton';

const CreateAccount = ({ navigation }) =>{
    const [User, setUsuer] = userState('');
    const [Password, setUserPassword] = userState('');

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.ViewStyle}>
                <View style={styles.IconStyle}>
                    <Icon  name="new-message" size={120} color="#000" />
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
                <Formbutton 
                    title="Gravar"
                    customClick={() => navigation.navigate('Logon')}
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
    IconStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    TextInputStyle:{
      color: '#000000',
      fontSize: 20,
    },    
});

export default CreateAccount;