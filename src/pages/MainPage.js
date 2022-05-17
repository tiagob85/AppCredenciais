import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import CardCredential from '../components/CardCredential';
import NewButton from '../components/NewButton';


const MainPage = () => {
    const navigation = useNavigation(); 

    return(
        <View style={{flex:1}}>             
            <ScrollView style={{flex:1}}> 
                <CardCredential />
                <CardCredential />
                <CardCredential />                
                <CardCredential />
                <CardCredential />
            </ScrollView>    
            <NewButton 
                customClick={() => navigation.navigate('Edit')}
            />                           
        </View>        
    );
};

const styles = StyleSheet.create({
    ViewCard:{
        backgroundColor: '#002e4d',
    },
});

export default MainPage;