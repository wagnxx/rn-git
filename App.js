import React from 'react';
import { View, Text,Button ,StyleSheet,FlatList,Image,AppRegistry} from 'react-native';

import HomeScreen from "./page/setup"

export default class App extends React.Component{
    render(){
        return (
           
                <HomeScreen/>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        width:26,
        height:26
    }
});
AppRegistry.registerComponent('App', () => App);