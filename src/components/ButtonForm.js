import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonForm = (props) =>{
    return(
        <TouchableOpacity
            style={props.typebutton == 'erase' ? styles.StyleButtonErase: styles.StyleButtonEdit}
            onPress={props.customClick}
        >
            <Icon 
                style={styles.IconStyle} 
                name={props.icon} 
                size={32} 
                color="#fff" 
            />
            <Text style={styles.TextButton}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    StyleButtonErase:{
        marginRight: 10,
        marginLeft: 5,
        borderRadius: 10,
        paddingRight: 10,
        backgroundColor: '#ff6666',
        padding: 9,
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    StyleButtonEdit:{
        marginRight: 10,
        marginLeft: 5,
        borderRadius: 10,
        paddingRight: 10,
        backgroundColor: '#0099ff',
        padding: 9,
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    IconStyle:{
        marginTop: 2,
        marginLeft: 3,
        marginRight: 10,
        marginBottom: -30,
    },
    TextButton:{
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 35,
        marginRight: 4,
        marginTop: -1,
        marginBottom: 1,
    }
});

export default ButtonForm;