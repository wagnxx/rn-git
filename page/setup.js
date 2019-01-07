import React, {Component} from 'react';
import {
    Navigator
} from 'react-native-deprecated-custom-components';
import HomeScreen from './HomeScreen';

export  default class extends React.Component{
    renderScene=(route,navigator)=>{
        const Target = route.component;
        return <Target
            {...route.params}
            navigator={navigator}
                />
    }
    render(){
        return <Navigator
            initialRoute={{component:HomeScreen}}
            renderScene={(route,navigator)=>this.renderScene(route,navigator)}
        />
    }
}