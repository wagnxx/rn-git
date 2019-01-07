/**
 * Created by Wagnxx on 2019/1/1.
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import  HeadScreen from '../components/common/HeadScreen'
import NavigationBar  from '../components/NavigationBar'
import ProjectDetails from './ProjectDetails'

export default ProfileScreen = (props) => (
    <View style={styles.container}>
        <HeadScreen/>
        <NavigationBar
        title={'我的'}
    />

        <Text>Profile Screen</Text>
        <Text onPress={()=>props.navigator.push({
            component:ProjectDetails,
            params:{
                title:"from profilescreen page",
                url:"http://www.baidu.com"
            }
        })}>跳转到projectDdetails page</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
    },
});