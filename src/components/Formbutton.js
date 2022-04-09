import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Formbutton = (props) => {
    return(
        <TouchableOpacity
            style={props.mode == 'save'?styles.button:styles.buttonone}
            onPress={props.customClick}>
            <Icon style={styles.IconStyle} name={props.icon} size={30} color="#fff" />
            <Text style={styles.text}>
                {props.title}
            </Text>
            
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        color: '#fff',
        backgroundColor: '#009933',
        padding: 15,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonone:{
        alignItems: 'center',
        color: '#fff',
        backgroundColor: '#ff5c33',
        padding: 15,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text:{
        color: '#ffffff',
        fontSize: 23,
        fontFamily: 'Open Sans',
        marginLeft: 5,
    },
    IconStyle:{
        marginLeft: 2,
        marginRight: 2,
    }
});

export default Formbutton;