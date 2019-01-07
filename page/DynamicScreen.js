/**
 * Created by Wagnxx on 2018/12/31.
 */
import React from 'react';
import {StyleSheet, Text, View,FlatList} from 'react-native';
import  HeadScreen from '../components/common/HeadScreen'
const dynamicScreen = () => (
    <View style={styles.container}>
        <HeadScreen/>
        <Text style={styles.news}>新闻列表</Text>
        <FlatList
            data={[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color:'#232323',
    },
    news:{
        fontSize:20,
        paddingLeft:10,
        borderBottomColor:'#dadada',
        borderBottomWidth:1,
        justifyContent:'center',
    }
});

export  default  dynamicScreen;