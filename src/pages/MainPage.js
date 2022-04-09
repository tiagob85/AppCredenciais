import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView
} from 'react-native';

import CardCredential from '../components/CardCredential';

const MainPage = ({navigation}) => {
    
    return(
        <ScrollView style={styles.ViewCard}>
            <CardCredential />
            <CardCredential />
            <CardCredential />
        </ScrollView>        
    );
};

const styles = StyleSheet.create({
    ViewCard:{
        backgroundColor: '#002e4d',
    }
});

export default MainPage;