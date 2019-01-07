/**
 * Created by Wagnxx on 2019/1/1.
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class HeadScreen extends React.Component {
    render() {
        return (
            <View style={{height:35,backgroundColor:'#242529',padding:10}}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:1}}>
                        <Text style={{color:'#ffffff'}}>微信</Text>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <Text><Icon name="md-add" color="#fff" size={18} /></Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});