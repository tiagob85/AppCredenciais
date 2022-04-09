import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Optionbutton = (props) => {
    return(
        <TouchableOpacity
            style={styles.button}
            onPress={props.customClick}>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        color: '#0000ff',
        backgroundColor: '#000080',
        padding: 20,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
    },
    text:{
        color: '#ffffff',
        fontSize: 20,
        fontFamily: 'Open Sans',
    },
});

export default Optionbutton;