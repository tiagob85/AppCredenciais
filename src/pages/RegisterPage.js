import React from 'react';
import{
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import InputCredencialText from '../components/InputCredencialText';  
import Formbutton from '../components/Formbutton';

const RegisterPage = ({route, navigation}) =>{
    const {OpId, user, password, title} = route.params;

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.ViewStyle}>
                <Text>RegisterPage</Text>
                <View style={styles.IconStyle}>
                    <Icon  name="new-message" size={120} color="#000" />
                </View>
                <InputCredencialText
                    style={styles.TextInputStyle}
                    placeholder="Digite o título..."
                    placeholderTextColor="#000"
                    value={title}
                />
                <InputCredencialText
                    style={styles.TextInputStyle}
                    placeholder="Digite o usuário..."
                    placeholderTextColor="#000"
                    value={user}
                />        
                <InputCredencialText
                    style={styles.TextInputStyle}
                    placeholder="Digite a senha..."
                    placeholderTextColor="#000"
                    value={password}
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
    IconStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
});

export default RegisterPage;