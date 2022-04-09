import 'react-native-gesture-handler';

import * as React from 'react';
import {Text, View, Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*Importação das páginas*/
import LogonScreen from './pages/LogonPage';
import MainScreen from './pages/MainPage';
import RegisterScreen from './pages/RegisterPage';

const Stack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Logon">
                <Stack.Screen 
                    name="Logon"
                    component={LogonScreen}
                    options={{
                        title: "Credentials Control",
                        headerStyle:{
                            backgroundColor: '#005ce6',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle:{
                            fontWeight: 'bold',
                        }
                    }}
                />
                <Stack.Screen 
                    name="Main"
                    component={MainScreen}
                    options={{
                        title: "Principal",
                        headerStyle:{
                            backgroundColor: '#005ce6',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle:{
                            fontWeight: 'bold',
                        }
                    }}
                />
                <Stack.Screen 
                    name="Edit"
                    component={RegisterScreen}
                    options={{
                        title: "Edit",
                        headerStyle:{
                            backgroundColor: '#005ce6',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle:{
                            fontWeight: 'bold',
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;